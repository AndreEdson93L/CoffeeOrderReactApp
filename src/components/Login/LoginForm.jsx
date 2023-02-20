import { useForm } from "react-hook-form";
import React from "react";

const usernameConfig = {
  required: true,
  minLength: 2,
};

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("data: " + data);
  };

  console.log("errors: " + errors);

  const errorMessage = (() => {
    if (!errors.username) {
      return null;
    }

    if (errors.username.type === "required") {
      return <span>Username is required</span>;
    }

    if (errors.username.type === "minLength") {
      return <span>MinLength is required of two characters is required</span>;
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
            placeholder="username"
            {...register("username", usernameConfig)}
          />
          {errorMessage}
        </fieldset>

        <button type="submit">Continue</button>
      </form>
    </>
  );
}

export default LoginForm;

/*
{ (errors.username && errors.username.type === 'required') && <span>Username is required</span>}
{ (errors.username && errors.username.type === 'minLength') && <span>MinLength is required (3 chars)</span>}*/
