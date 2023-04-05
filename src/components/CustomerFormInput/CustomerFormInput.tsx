import React, { FC, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { addCustomerDishes } from "../../features/customer/CustomerSlice";
import "./CustomerFormInput.css";

type ICustomerFormInputProps = {
  id: string;
};

const CustomerFormInput: FC<ICustomerFormInputProps> = ({ id }) => {
  const [customerDishes, setCustomerDishes] = useState("");
  const dispatch = useAppDispatch();
  const handleCustomerFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addCustomerDishes({ id, dish: customerDishes }));
    setCustomerDishes("");
  };
  return (
    <div>
      <form
        className="customer-food-input-container"
        onSubmit={handleCustomerFormSubmit}
      >
        <input
          type="text"
          id="customerName"
          name="customerName"
          placeholder="Enter dishes..."
          value={customerDishes}
          onChange={(e) => setCustomerDishes(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default CustomerFormInput;
