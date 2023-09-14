'use client'
import { getuserbycookie } from "@/utils/async/conditions/getuserbycookie";
import Link from "next/link";
// import { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { AuthContext } from "../../components/AuthProvider/AuthProvider";
// import Swal from "sweetalert2";

import { useEffect, useState } from "react";
import { BiHome } from "react-icons/bi";



const ReviewForm = () => {
    // const { id } = useParams();
    const [review, setReview] = useState([]);
    
    // const [user, setUser] = useState();
    // const {user} = useContext(AuthContext);


    //   (async ()  =>  {
    //     const response = await getuserbycookie();
    //     const user = response;
    //     setUser(user);
    //   })()


    useEffect(() => {
        fetch(`https://dwelling-bright-server.vercel.app/api/v1/getdetails/64f37c309e9b86374fdf05dc`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])


    // const handleReview = (event) => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const ResortName=form.ResortName.value;
    //     const reviewer_name = form.reviewer_name.value;
    //     const comment =form.comment.value;
    //     const id = form.id.value;
    //     const rating = form.rating.value;
    //     const photo = form.photo.value;
    //     const newReview = { name, ResortName, id, comment, photo, rating}


    //     fetch('', {
    //                         method: 'POST',
    //                         headers: {
    //                             'content-type': 'application/json'
    //                         },
    //                         body: JSON.stringify(newReview)
    //                     })

    //                         .then(res => res.json())
    //                         .then(data => {
    //                             if (data.insertedId) {
    //                                 Swal.fire({
    //                                     title: 'Success!',
    //                                     text: 'Review Successfully',
    //                                     icon: 'success',
    //                                     confirmButtonText: 'Thank you'
    //                                 })
    //                                 form.reset('');
    //                             }
    //                         })


    // }

    return (
        <div className="max-w-[150rem] my-28 lg:my-0 h-screen flex justify-center items-center ">
            {/* onSubmit={handleReview} */}

            <form className="bg-gray-200 text-gray-600 rounded-md p-10">
                <div className="">

                    {/* <input  className="text-xl font-bold text-[#187E89] bg-[#ecf6f8] " hidden readOnly value={review?._id} name="id"  type="text" /> */}
                </div>
                <div className="">

                    {/* <input  className="text-xl font-bold text-[#187E89] bg-[#ecf6f8] " hidden readOnly value={user?.photoURL} name="photo"  type="text" /> */}
                </div>
                <div className="">

                    <input disabled className="text-center w-full bg-transparent text-xl mb-2 font-bold text-[#187E89] " readOnly value={review?.data?.name} name="ResortName" type="text" />
                </div>
                <div className=" ">

                    <input disabled className="text-xl w-full bg-transparent mb-4 uppercase text-center" readOnly value="Korimullah" name="reviewer_name" id="name" type="text" />
                </div>
                <div className="w-full relative px-3 ">
                    <h1>Your Rating</h1>
                    <select name="rating" className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                        <option>5</option>
                        <option>4</option>
                        <option>3</option>
                        <option>2</option>
                        <option>1</option>
                    </select>

                </div>
                <div className="flex flex-col mt-4 px-3">
                    <label htmlFor="subject">Your Review</label>
                    <input className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required="" placeholder="Write Review" name="comment" id="subject" type="text" />
                </div>

                <div className="flex items-center justify-center gap-4 p-4">
                    <button type="submit" className="mt-8 btn btn-md border-none text-white font-thin hover:bg-red-700 bg-red-500">Submit Review</button>
                    <Link href="/" className="flex flex-col mt-8 text-blue-600 font-thin  hover:text-black">Not Interested  <span className="text-xs flex items-center gap-1 text-black"> <BiHome/> Go to Home</span> </Link >
                </div>
            </form>
        </div>
    );
};

export default ReviewForm;