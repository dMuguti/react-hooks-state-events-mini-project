import React, { useState } from "react";

function CategoryFilter({ categories, onSelectCategory }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category, index) => (
        <button
          key={index}
          className={category === selectedCategory ? "selected" : ""}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
