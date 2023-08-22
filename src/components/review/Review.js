

const Review = () => {
    const reviews = [
        {
            "_id": 101,
            "name": "Raju Ahmed",
            "profile_image": "https://i.ibb.co/g7pkkcz/sketch-art.png",
            "date": "08/11/2023",
            "comment": "Superb view, hassle-free, helpful, friendly host. Easily accessible to centre of Rishikesh, an eye-opener. This flat in Rishikesh offers an experience that even the finest local hotels struggle to match. Not only is it immaculately",
            "rating": 4.95,
            "total_reviews": 10
        },
        {
            "_id": 102,
            "name": "Emran Hasan",
            "profile_image": "https://i.ibb.co/g7pkkcz/sketch-art.png",
            "date": "08/11/2023",
            "comment": "Superb view, hassle-free, helpful, friendly host. Easily accessible to centre of Rishikesh, an eye-opener. This flat in Rishikesh offers an experience that even the finest local hotels struggle to match. Not only is it immaculately",
            "rating": 4.95,
            "total_reviews": 10
        },
        {
            "_id": 103,
            "name": "Nimai Roy",
            "profile_image": "https://i.ibb.co/g7pkkcz/sketch-art.png",
            "date": "08/11/2023",
            "comment": "Superb view, hassle-free, helpful, friendly host. Easily accessible to centre of Rishikesh, an eye-opener. This flat in Rishikesh offers an experience that even the finest local hotels struggle to match. Not only is it immaculately",
            "rating": 4.95,
            "total_reviews": 10
        },
        {
            "_id": 104,
            "name": "Joyonti Choudhori",
            "profile_image": "https://i.ibb.co/g7pkkcz/sketch-art.png",
            "date": "08/11/2023",
            "comment": "Superb view, hassle-free, helpful, friendly host. Easily accessible to centre of Rishikesh, an eye-opener. This flat in Rishikesh offers an experience that even the finest local hotels struggle to match. Not only is it immaculately",
            "rating": 4.95,
            "total_reviews": 10
        },
        {
            "_id": 105,
            "name": "Habibur Rahman",
            "profile_image": "https://i.ibb.co/g7pkkcz/sketch-art.png",
            "date": "08/11/2023",
            "comment": "Superb view, hassle-free, helpful, friendly host. Easily accessible to centre of Rishikesh, an eye-opener. This flat in Rishikesh offers an experience that even the finest local hotels struggle to match. Not only is it immaculately",
            "rating": 4.95,
            "total_reviews": 10
        }
    ]
    return (
        <div>
            {
                reviews.map(review => <div key={review._id}>
                    <div>
                        <img src={review?.profile_image} alt="" />
                        <h3>{review?.name}</h3>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Review;