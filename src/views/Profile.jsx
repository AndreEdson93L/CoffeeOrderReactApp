import React from "react";
import ProfileActions from "../components/Profile/ProfileActions";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileOrderHistory from "../components/Profile/ProfileOrderHistory";
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";

const Profile = () => {
  const { user } = useUser();

  return (
    <>
      <h1>Profile</h1>
      <ProfileHeader username={user.username} />
      <ProfileActions />
      <ProfileOrderHistory orders={user.orders} />
    </>
  );
};

export default withAuth(Profile);
