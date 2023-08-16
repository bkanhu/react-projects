import React, { useState } from 'react';
import jobsInfo from './data';

const App = () => {
  const [jobs, setJobs] = useState(jobsInfo);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <main>
      <section className="job section">
        <div className="jobs-center">
          <div className="btn-container">
            {jobs.map((item, index) => {
              return (
                <button
                  key={item.id}
                  className={`job-btn ${index === activeIndex && 'active-btn'}`}
                  onClick={() => handleButtonClick(index)}
                >
                  {item.company}
                </button>
              );
            })}
          </div>
          <div className="job-text-container">
            {jobs.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  {activeIndex === index && (
                    <article key={item.id} className={`job-info `}>
                      <h3>{item.title}</h3>
                      <h4>{item.company}</h4>
                      <p className="job-date">{item.dates}</p>
                      {item.duties.map((duty, index) => {
                        return (
                          <div key={index} className="job-desc">
                            <i className="fas fa-angle-double-right job-icon"></i>
                            <p>{duty}</p>
                          </div>
                        );
                      })}
                    </article>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;
