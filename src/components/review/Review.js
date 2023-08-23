"use client"
import moment from "moment/moment";
// import ReviewModal from "../details/ReviewModal/ReviewModal";
import { useState } from "react";
import ReviewModal from "../details/ReviewModal/ReviewModal";



const Review = () => {
    // let [isOpen, setIsOpen] = useState(false)
    let isMore = true

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
        <div className=" md:grid grid-cols-2  gap-x-20 gap-y-10 my-10 border-t pt-10">
            {
                reviews.map(review => <div key={review._id}
                    className="mb-10 border p-3 rounded-lg"
                >
                    <div className=" flex gap-x-3">
                        <img className="w-14 h-14 border  rounded-full" src={review?.profile_image} alt="" />
                        <div className="flex flex-col">
                            <h2 className="">{review?.name}</h2>
                            <p className="text-sm">{moment(review?.date).format("MMM YYYY")}</p>
                        </div>
                    </div>
                    <div className="mt-5 text-md">
                        <p onClick={() => setIsOpen(true)}>{review?.comment?.slice(0, 200)}</p>
                        {
                            review?.comment.length > 200 && <p className="underline mt-2 cursor-pointer">Show More</p>
                        }

                    </div>
                </div>)
            }
            <ReviewModal />
        </div>
    );
};

export default Review;