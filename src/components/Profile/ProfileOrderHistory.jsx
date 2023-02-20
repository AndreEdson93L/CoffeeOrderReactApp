import React from "react";
import ProfileOrderHistoryItem from "./ProfileOrderHistoryItem";

const orderList = orders.map(order, (index) => (
  <ProfileOrderHistoryItem key={index} order={order} />
));

function ProfileOrderHistory() {
  return (
    <section>
      <h4>Your order history</h4>
      <ul>{orderList}</ul>
    </section>
  );
}

export default ProfileOrderHistory;
