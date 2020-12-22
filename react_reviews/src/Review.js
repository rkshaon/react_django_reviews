import React, { useState, useEffect } from 'react';
// import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [people, setPeople] = useState([{}]);
  const [index, setIndex] = useState(0);

  console.log(people[index]);

  const {name, job, image, text} = people[index];

  useEffect( () => {
    getReviews();
    console.log('we are fetching data');
  }, []);

  const getReviews = async () => {
    const response = await fetch(`http://127.0.0.1:8000/reviews-api/review-list/`);
    const data = await response.json();
    console.log(data);
    setPeople(data);
    console.log('Get Reviews Method');
  }

  const checkNumber = (number) => {
    if(number > people.length - 1){
      return 0;
    }
    if(number < 0){
      return people.length - 1;
    }
    return number;
  }

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    // console.log(randomNumber);
    if(randomNumber === index) {
      randomNumber += 1;
    }
    setIndex(checkNumber(randomNumber));
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
