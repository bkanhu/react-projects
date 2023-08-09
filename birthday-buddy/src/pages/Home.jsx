import React from 'react';
import BirthdayCard from '../components/BirthdayCard';
import data from '../data';
// const birthday = [
//   {
//     id: 1,
//     name: 'kadel 1',
//     dob: '25-09-1999',
//     url: 'https://www.course-api.com/images/people/person-1.jpeg',
//   },
//   {
//     id: 2,
//     name: 'Hester Hogan',
//     dob: '25-09-1999',
//     url: 'https://www.course-api.com/images/people/person-2.jpeg',
//   },
//   {
//     id: 3,
//     name: 'Larry Little',
//     dob: '25-09-1999',
//     url: 'https://www.course-api.com/images/people/person-3.jpeg',
//   },
//   {
//     id: 3,
//     name: 'Sean Walsh',
//     dob: '25-09-1999',
//     url: 'https://www.course-api.com/images/people/person-4.jpeg',
//   },
//   {
//     id: 5,
//     name: 'Lola Gardner',
//     dob: '25-09-1999',
//     url: 'https://www.course-api.com/images/people/person-5.jpeg',
//   },
// ];
const Home = () => {
  return (
    <div className="container">
      <h1>5 Birthdays Today</h1>
      {data.map((person) => (
        <BirthdayCard props={person} />
      ))}
    </div>
  );
};

export default Home;
