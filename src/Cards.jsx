import React, { Fragment } from "react";
import data from "./data.json";
import Card from "./Card";
import "./Cards.css";

const Cards = () => {
  return (
    <section id="mainContainer">
      <section className="textContainer">
        <div>
          <p>All Demo Here</p>
        </div>

        <h1>Doob All Demo.</h1>

        <p>
          We create a business and consulting react template with 60+ elements
          features. 19+ demo pages, faster loading and well documentated code.
        </p>
      </section>

      <section className="container">
        {data.map((item, index) => {
          return (
            <Fragment key={index + 1}>
              <Card {...item} />
            </Fragment>
          );
        })}
      </section>
    </section>
  );
};

export default Cards;
