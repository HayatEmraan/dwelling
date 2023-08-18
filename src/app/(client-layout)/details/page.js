

const RoomDetails =async () => {

  const res = await fetch(
    "https://github.com/HayatEmraan/dwelling/blob/ruhulamin1/public/fake.json"
  );
  const data =await res.json();
  console.log(data)
  
  

  return (
    <div className="max-w-6xl lg:mx-auto">
      {/* Header Section */}
      <header className="my-5">
        <h2 className="font-bold text-xl">{data.name}</h2>
        <div className="lg:flex justify-between">
          <div className="lg:flex lg:space-x-5">
            <p className="font-bold">4.83 . 190 {data.location}</p>
            <p>
              Superhost-{" "}
              <span className="font-bold">Kolkata,West bengal,India </span>
            </p>
          </div>
          <div className="flex space-x-5">
            <p>Share</p>
            <p>Save</p>
          </div>
        </div>
      </header>
      {/* Grid  Images */}
      <div className="my-10">
        <div className="lg:grid gap-5 lg:grid-cols-2">
          <div className="grid-cols-6">
            <img
              className="rounded"
              src="https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg?im_w=1200"
              alt=""
            />
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="">
              <img
                className="rounded object-contain w-full h-full"
                src="https://a0.muscache.com/im/pictures/62aecbe5-6f23-41d6-8380-793e4216f3a4.jpg?im_w=1200"
                alt=""
              />
            </div>
            <div className="">
              <img
                className="rounded object-contain w-full h-full"
                src="https://a0.muscache.com/im/pictures/62aecbe5-6f23-41d6-8380-793e4216f3a4.jpg?im_w=1200"
                alt=""
              />
            </div>
            <div className="">
              <img
                className="rounded object-contain w-full h-full"
                src="https://a0.muscache.com/im/pictures/62aecbe5-6f23-41d6-8380-793e4216f3a4.jpg?im_w=1200"
                alt=""
              />
            </div>
            <div className="">
              <img
                className="rounded object-contain w-full h-full"
                src="https://a0.muscache.com/im/pictures/62aecbe5-6f23-41d6-8380-793e4216f3a4.jpg?im_w=1200"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* Details Sections */}
      <div className="grid gap-5 lg:grid-cols-2">
        <div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              molestias repellat odit esse ipsa ut, perspiciatis laudantium
              natus? Sequi corrupti illum cum in sed porro ducimus, numquam
              distinctio aliquid ratione aliquam ad, aspernatur perferendis
              suscipit molestiae nisi vero quas iure recusandae placeat ullam
              ex? Molestiae, optio? Praesentium a sapiente accusantium.
            </p>
          </div>
          <div>
            <h2 className="font-bold text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consectetur, ullam.
            </h2>
          </div>
          <div>
            <h2 className="font-bold">Most Popular Facilities: </h2>
            <li>Free Wifi</li>
            <li>Fitness Center</li>
            <li>Spa</li>
            <li>Room Service</li>
            <li>Free Parking</li>
            <li>Family rooms</li>
            <li>Bar</li>
          </div>
        </div>
        {/* prie and Date */}
        <div className="border rounded shadow-lg p-5">
          <h5>
            <span className="font-bold mr-2">$Price</span>night
          </h5>
          <div>
            <div className="border rounded-xl">
              <div className="grid grid-cols-2 p-2 text-center">
                <div className="border ">
                  <h3>CHECK-IN</h3>
                  <p>10/10/10</p>
                </div>
                <div className="border">
                  <h3>CHECK-OUT</h3>
                  <p>10/10/10</p>
                </div>
              </div>
              <div className=" p-2">
                <h2>Guest</h2>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button className="btn bg-pink-500 text-white w-full my-5">
              Reserve
            </button>
            <p>You won't be changed yet</p>
          </div>
          <div className="my-5 space-y-3">
            <div className="flex justify-between">
              <h3>Price * Night</h3>
              <h3>$305</h3>
            </div>
            <div className="flex justify-between">
              <h3>Cleaning Fee</h3>
              <h3>$9</h3>
            </div>
            <div className="flex justify-between">
              <h3>Dewling Service fee</h3>
              <h3>$44</h3>
            </div>
          </div>
          <div className="divider"></div>
          <div className="flex justify-between">
            <h3>Total before taxes</h3>
            <h3>$358</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
