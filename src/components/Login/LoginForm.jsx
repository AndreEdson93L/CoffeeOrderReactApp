import React from "react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { loginUser } from "../../api/user";
import { storageSave } from "../../utils/storage";
import { useHistory } from "react-router-dom";

const usernameConfig = {
  required: true,
  minLength: 3,
};

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Local State
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  // Side Effects
  useEffect(() => {
    
  }, []) // Empty Deps - Only run once

  // Event Handlers

  // Render Functions

  const onSubmit = async ({ username }) => {
    setLoading(true);
    const [error, user] = await loginUser(username);
    if (error !== null) {
      setApiError(error);
    }
    if (user !== null) {
      storageSave("coffee-user", user);
    }
    setLoading(false);
  };

  const errorMessage = (() => {
    if (!errors.username) {
      return null;
    }

    if (errors.username.type === "required") {
      return <span>Username is required</span>;
    }

    if (errors.username.type === "minLength") {
      return <span>MinLength is required of 3 characters is required</span>;
    }
  })();

  return (
    <>
      <h2>Login Form Page</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            placeholder="johndoe"
            {...register("username", usernameConfig)}
          />
          {errorMessage}
        </fieldset>

        <button type="submit" disabled={loading}>
          Continue
        </button>
        {loading && <p>Loggin in...</p>}
        {apiError && <p>{apiError}</p>}
      </form>
    </>
  );
}

export default LoginForm;
