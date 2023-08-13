import React, { useState } from 'react';
const Categories = ({ categories, filterItems }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  return (
    <>
      <div className="btn-container">
        {categories.map((category, index) => {
          return (
            <button
              type="button"
              className={`filter-btn ${
                activeCategory === category ? 'active' : ''
              }`}
              key={index}
              onClick={() => {
                filterItems(category);
                setActiveCategory(category);
              }}
            >
              {category}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
