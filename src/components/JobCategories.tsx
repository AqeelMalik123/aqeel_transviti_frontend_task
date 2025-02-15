import React from "react";

const JobCategories = () => {
  const categories = ["Frontend", "Backend", "Graphic Designer"];

  return (
    <div className="flex space-x-2 mb-6 items-center">
      <p>Similar:</p>
      {categories.map((category) => (
        <button
          key={category}
          className="bg-gray-200 px-4 py-2 rounded-lg border text-gray-600 hover:bg-blue-500 hover:text-white transition duration-200"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default JobCategories;
