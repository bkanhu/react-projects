import React, { useEffect, useState } from 'react';
import items from './data';

import Categories from './components/Categories';
import Menu from './components/Menu';

// get unique value from categories and store in an array
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    // checks if the selected category is 'all'. If it is, show all the items without any filtering
    if (category === 'all') {
      setMenuItems(items);
      return;
    }

    // filters the items array to create a new array, and set new array value to menuItems.
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
    // setActiveCategory(category);
  };
  return (
    <>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>our menu</h2>
            <div className="underline"></div>
          </div>
          <Categories categories={categories} filterItems={filterItems} />
          <Menu items={menuItems} />
        </section>
      </main>
    </>
  );
};

export default App;
