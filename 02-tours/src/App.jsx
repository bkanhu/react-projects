import React, { useEffect, useState } from 'react';
import Tours from './components/Tours';

function App() {
  // State to track loading status
  const [loading, setLoading] = useState(true);
  // State to hold tour data
  const [tours, setTours] = useState([]);

  // remove a tour by its ID

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  // Fetching Tour Data
  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        'https://course-api.com/react-tours-project'
      );
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  // Fetch data when component mount
  useEffect(() => {
    fetchTours();
  }, []);

  // Display loading state
  if (loading) {
    return (
      <main>
        <p>loadin</p>
      </main>
    );
  }
  return (
    <>
      <main>
        <section>
          <div className="title">
            <h2>Our Tours</h2>
            <div class="title-underline"></div>
          </div>
          <div className="tours">
            <Tours tours={tours} removeTour={removeTour} />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
