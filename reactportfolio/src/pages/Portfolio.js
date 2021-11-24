import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Img2 from '../components/images/FoodBuzz1.jpg';
import Img3 from '../components/images/Schedular1.jpg';
import Img4 from '../components/images/grey.jpeg';

export default function Portfolio() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img2}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Appointment Schedule</h3>
            <a href="https://project2-group8.herokuapp.com/login">Check It Out!</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img3}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Food Buzz</h3>
            <a href="https://dertodd.github.io/Project_one_The_Survivors/">Check It Out!</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img4}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Budget Tracker</h3>
            <a href="https://homework19-workout.herokuapp.com/">Open Application Here!</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img4}
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h3>Team Profile Generator</h3>
            <a href="https://samkilpatrick903.github.io/Homework_10_TeamProfile/">Check It Out!</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img4}
            alt="Fifth slide"
          />
          <Carousel.Caption>
            <h3>Word Day Planner</h3>
            <a href="https://samkilpatrick903.github.io/SK_Homework_5/">Check It Out!</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img4}
            alt="Sixth slide"
          />
          <Carousel.Caption>
            <h3>Weather Dashboard</h3>
            <a href="hhttps://github.com/samkilpatrick903/Homework_6">Check It Out!</a>
          </Carousel.Caption>
        </Carousel.Item>
     </Carousel>{" "} 
    </div>
  );
}
