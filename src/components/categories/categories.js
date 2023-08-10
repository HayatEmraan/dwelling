import React from "react";
const CategoriesComponent = async () => {
  const res = await fetch(
    "https://raw.githubusercontent.com/HayatEmraan/dwelling/main/public/header/categories.json"
  );
  const categories = await res.json();
  return (
    <div className="sticky top-4 z-30 shadow-md bg-white">
      <div className="max-w-[1560px] mx-auto space-y-">
        <div className="flex justify-between mt-4 overflow-x-auto px-5 md:px-4 lg:px-3 xl:px-2 no-scrollbar">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center gap-2 p-3 hover:text-neutral-800 transition cursor-pointer`}
            >
              <img
                className="w-8"
                src="https://i.ibb.co/hLmtc8m/icons8-cabin-64.pnghttps://i.ibb.co/XzHRM3H/icons8-cabin-32.png"
                alt=""
              />
              <div className="text-sm font-medium">{category.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesComponent;
