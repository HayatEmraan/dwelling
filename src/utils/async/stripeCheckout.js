import { loadStripe } from "@stripe/stripe-js";
const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

const stripeCheckout = async (room) => {
    console.log('call api')
    const { name, price, images, description, taxes, _id
    } = room || {}

    console.log('room', room)
    const item = {
        name: name,
        room_id: _id,
        description: description.slice(0, 50),
        image: images[0],
        quantity: 1,
        price: price + taxes
    }

    try {

        const stripePromise = loadStripe(publishableKey);

        const createCheckOutSession = async () => {
            console.log('call session')
            const stripe = await stripePromise;
            const res = await fetch(
              "https://dwelling-bright-server.vercel.app/api/v2/payment",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ item }),
              }
            );
            // create session 
            const checkoutSession = await res.json()
            // redirect to payment
            const result = await stripe.redirectToCheckout({
                sessionId: checkoutSession.id
            });


        }
        createCheckOutSession()


    }
    // get error 
    catch (err) {
        console.log('stripe payment error', err)
    }




}

export default stripeCheckout