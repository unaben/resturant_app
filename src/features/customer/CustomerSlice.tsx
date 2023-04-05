import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ICustomer, ICustomerDishes } from "../../model/interface";

export interface CustomerState {
  customers: ICustomer[];
}

const initialState: CustomerState = {
  customers: [],
};

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<ICustomer>) => {
      console.log("addCustomer: ", action.payload);
      state.customers.push(action.payload);
    },
    addCustomerDishes: (state, action: PayloadAction<ICustomerDishes>) => {
      console.log("addCustomerDishes: ", action.payload);
      state.customers.forEach((customer) => {
        if (customer.id === action.payload.id) {
          customer.dishes.push(action.payload.dish);
        }
      });
    },
  },
});

export const { addCustomer, addCustomerDishes } = customerSlice.actions;
export const getAllCustomers = (state: RootState) => state.customer.customers;
export default customerSlice.reducer;
