import React from "react";
import data from "./data";
import Header from "./components/header/Header";
import Card from "./components/card/Card";
function App() {
  // inline style imitom shevqmeni rom cardebs shoris dashoreba gameketebina.
  const inlineStyle = {
    cardList: {
      height: "576px",
      maxWidth: "470px",
      width: "100%",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
  };
  return (
    <>
      <Header />
      <div style={inlineStyle.cardList}>
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
