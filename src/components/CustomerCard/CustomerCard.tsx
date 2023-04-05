import React, { FC } from "react";
import CustomerFormInput from "../CustomerFormInput/CustomerFormInput";
import "./CustomerCard.css";

type ICustomerCardProps = {
  id: string;
  name: string;
  dishes: string[];
};

const CustomerCard: FC<ICustomerCardProps> = ({ id, name, dishes }) => {
  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {dishes.map((dish, index) => (
            <p key={index}>{dish}</p>
          ))}
        </div>
        <CustomerFormInput id={id} />
      </div>
    </div>
  );
};

export default CustomerCard;
