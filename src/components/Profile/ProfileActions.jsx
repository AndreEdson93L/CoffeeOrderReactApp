import React from "react";
import { Link } from "react-router-dom";
import { STORAGE_KEY_USER } from "../../const/storageKey";
import { useUser } from "../../context/UserContext";
import { storageDelete } from "../../utils/storage";

function ProfileActions() {
  const { setUser } = useUser();

  const handleLogoutClick = () => {
    if (window.confirm("Are you sure?")) {
      // Send an event to the parent
      storageDelete(STORAGE_KEY_USER);
      setUser(null);
    }
  };

  return (
    <ul>
      <li>
        <Link to="/orders">Orders</Link>
      </li>
      <li>
        <button>Clear History</button>
      </li>
      <li>
        <button onClick={handleLogoutClick}>Logout</button>
      </li>
    </ul>
  );
}

export default ProfileActions;
