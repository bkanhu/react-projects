import React, { useState, useEffect } from 'react';
import data from './data';

const App = () => {
  const [people, setPeople] = useState(data);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (activeIndex < 0) {
      setActiveIndex(lastIndex);
    }
    if (activeIndex > people.length - 1) {
      setActiveIndex(0);
    }
  }, [activeIndex, people]);

  return (
    <main>
      <section className="section">
        <div className="section-center">
          {' '}
          ad
          {people.map((person, personIndex) => {
            let position = 'nextSlide';
            if (personIndex === activeIndex) {
              position = 'activeSlide';
            }
            if (
              personIndex === activeIndex - 1 ||
              (activeIndex === 0 && personIndex === people.length - 1)
            ) {
              position = 'lastSlide';
            }
            return (
              <>
                <article className={position} key={person.id}>
                  <img
                    src={person.image}
                    alt={person.name}
                    className="person-img"
                  />
                  <h4>{person.name}</h4>
                  <p className="title">{person.title}</p>
                  <p className="text">{person.quote}</p>
                </article>
              </>
            );
          })}
          <button
            className="prev"
            onClick={() => setActiveIndex(activeIndex - 1)}
          >
            {'<'}
          </button>
          <button
            className="next"
            onClick={() => setActiveIndex(activeIndex + 1)}
          >
            {'>'}
          </button>
        </div>
      </section>
    </main>
  );
};

export default App;
