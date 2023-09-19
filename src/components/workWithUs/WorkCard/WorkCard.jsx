import React from "react";
import "./WorkCard.css";

const WorkCard = () => {
  return (
    <div className="my-20">
      <h1 className="uppercase text-gray-400 text-xl lg:text-2xl text-center font-semibold">
        {" "}
        Dwelling Partner <br />{" "}
        <span className="text-red-500 font-bold text-3xl lg:text-6xl">
          Benefits{" "}
        </span>{" "}
      </h1>
      <div className="my-10 flex flex-wrap gap-5 justify-center items-center mx-10 lg:mx-0">
        <div className="card-container">
          <div className="card">
            <div className="img-content">
              <img
                src="https://images.pexels.com/photos/10972243/pexels-photo-10972243.jpeg"
                alt=""
              />
            </div>
            <div className="content">
              <p className="heading">
                Professional Photography and Listing Optimization
              </p>
              <p>
                Dwelling offers professional photography services and guidance
                on optimizing your listing to make your property stand out,
                attracting more potential guests and increasing booking rates.
              </p>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="img-content">
              <img
                src="https://images.pexels.com/photos/4134548/pexels-photo-4134548.jpeg"
                alt=""
              />
            </div>
            <div className="content">
              <p className="heading">Streamlined Management</p>
              <p>
                Dwelling provides easy-to-use tools for managing your property,
                including calendar management, reservation requests, and
                messaging, making it simpler to keep track of bookings and guest
                communication.
              </p>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="img-content">
              <img
                src="https://images.pexels.com/photos/3250384/pexels-photo-3250384.jpeg"
                alt=""
              />
            </div>
            <div className="content">
              <p className="heading">Enhanced Exposure</p>
              <p>
                Your property will be showcased to a diverse and global
                audience, increasing its visibility and the likelihood of
                attracting more guests.
              </p>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="img-content">
              <img
                src="https://img.freepik.com/free-photo/3d-internet-secuirty-badge_1048-18106.jpg"
                alt=""
              />
            </div>
            <div className="content">
              <p className="heading">Trust and Security</p>
              <p>
                Dwelling prioritizes safety and security. Guests and hosts are
                verified, and secure payment processing is in place, giving you
                peace of mind when hosting strangers in your property.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
