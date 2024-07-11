import React from "react";
import data from "./data";
import Header from "./components/header/Header";
import Card from "./components/card/Card";
import "./global.css";

function App() {
  return (
    <>
      <Header />
      <div className="card-list">
        {data.map((item) => {
          return (
            <Card
              title={item.title}
              location={item.location}
              googleMap={item.googleMapsUrl}
              startDate={item.startDate}
              endDate={item.endDate}
              desciption={item.description}
              imageUrl={item.imageUrl}
              key={item.title}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
