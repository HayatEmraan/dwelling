

const RoomDetails =async () => {

  const res = await fetch(
    "https://raw.githubusercontent.com/HayatEmraan/dwelling/raju/public/fake.json"
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
            <p className="font-bold">

              Ratings-{data.rating}{}
            </p>
            <p>
              Superhost-
              <span className="font-bold">{data.location}</span>
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
              src="https://images.unsplash.com/photo-1691231862377-7e55d4e6a2c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="">
              <img
                className="rounded object-contain w-full h-full"
                src="https://images.unsplash.com/photo-1670517007659-0f32403f236c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                alt=""
              />
            </div>
            <div className="">
              <img
                className="rounded object-contain w-full h-full"
                src="https://images.unsplash.com/photo-1690746138480-1245dc220809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
            </div>
            <div className="">
              <img
                className="rounded object-contain w-full h-full"
                src="https://images.unsplash.com/photo-1691231862377-7e55d4e6a2c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
            </div>
            <div className="">
              <img
                className="rounded object-contain w-full h-full"
                src="https://images.unsplash.com/photo-1670517007659-0f32403f236c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
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
            <p>{data.description}</p>
          </div>
          <div>
            <h2 className="font-bold text-xl">Category-{data.category}</h2>
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
            <span className="font-bold mr-2">${data.price}</span>night
          </h5>
          <div>
            <div className="border rounded-xl">
              <div className="grid grid-cols-2 p-2 text-center">
                <div className="border ">
                  <h3>CHECK-IN</h3>
                  <p>{data.dateRange}</p>
                </div>
                <div className="border">
                  <h3>CHECK-OUT</h3>
                  <p>{ data.dateRange}</p>
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
