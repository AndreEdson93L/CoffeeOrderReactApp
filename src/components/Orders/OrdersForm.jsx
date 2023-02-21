import React from "react";
import { useForm } from "react-hook-form";

function OrdersForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    
  };

  return (
    <form onSubmit={handleSubmit()}>
      <fieldset>
        <label htmlFor="order-notes">Order notes:</label>
        <input type="text" {...register("orderNotes")} placeholder="No sugar, extra milk"/>
      </fieldset>

      <button type="submit">Order</button>
    </form>
  );
}

export default OrdersForm;
