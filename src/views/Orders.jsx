import React, { useState } from "react";
import withAuth from "../hoc/withAuth";
import OrdersCoffeeButton from "../components/Orders/OrdersCoffeeButton";

const COFFEES = [
  {
    id: 1,
    name: "Coffee1",
    image: "img/coffee1.png",
    alt: "coffee",
  },
  {
    id: 2,
    name: "Coffee2",
    image: "img/coffee2.png",
    alt: "coffee",
  },
  {
    id: 3,
    name: "Coffee3",
    image: "img/coffee3.png",
    alt: "coffee",
  },
  {
    id: 4,
    name: "Coffee4",
    image: "img/coffee4.png",
    alt: "coffee",
  },
];

const Orders = () => {

  const [coffee, setCoffee] = useState(null)

  const handleCoffeeClicked = (coffeeId) => {
    const selectedCoffee = COFFEES.find(coffee => coffee.id === coffeeId )
    setCoffee(selectedCoffee)
  };

  const availableCoffees = COFFEES.map((coffee) => {
    return (
      <OrdersCoffeeButton
        key={coffee.id}
        coffee={coffee}
        onSelect={handleCoffeeClicked}
      />
    );
  });

  return (
    <>
      <h1>Orders</h1>
      <section id="coffee-options">{availableCoffees}</section>
      <p>Summary: </p>
      {coffee && <p>Selected Coffee: {coffee.name}</p>}
    </>
  );
};

export default withAuth(Orders);
