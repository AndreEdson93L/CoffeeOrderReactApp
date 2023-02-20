import React from "react";
import ProfileActions from "../components/Profile/ProfileActions";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileOrderHistory from "../components/Profile/ProfileOrderHistory";
import { STORAGE_KEY_USER } from "../const/storageKey";
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";
import { storageSave } from "../utils/storage";

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
