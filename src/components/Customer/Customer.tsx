import React from "react";
import CustomerCard from "../CustomerCard/CustomerCard";
import { useAppSelector } from "../../app/hooks";
import { getAllCustomers } from "../../features/customer/CustomerSlice";
import "./Customer.css";

const Customer = () => {
  const customers = useAppSelector(getAllCustomers);
  return (
    <div className="customer-food-container">
      {customers.map((customer) => {
        return (
          <>
            <CustomerCard
              key={customer.id}
              id={customer.id}
              name={customer.name}
              dishes={customer.dishes}
            />
          </>
        );
      })}
    </div>
  );
};

export default Customer;
