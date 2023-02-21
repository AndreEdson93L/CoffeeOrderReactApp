import React from "react";
import ProfileOrderHistoryItem from "./ProfileOrderHistoryItem";

function ProfileOrderHistory({ orders }) {
  const orderList = orders.map((order, index) => (
    <ProfileOrderHistoryItem key={index} order={order} />
  ));

  return (
    <section>
      <h4>Your order history</h4>
      <ul>{orderList}</ul>
    </section>
  );
}

export default ProfileOrderHistory;
