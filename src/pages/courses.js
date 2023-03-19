import React from "react";
import Card from "./Components/Card";
import "../../src/App.css";

const Courses = () => {
  return (
    <div className="Courses">
      <Card
        title="Card Title"
        imageUrl="https://unsplash.com/photos/rDEOVtE7vOs"
        body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
      />
    </div>
  );
};

export default Courses;
