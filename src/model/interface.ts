export type ICustomer = {
  id: string;
  name: string;
  dishes: string[];
};

export type ICustomerDishes = {
  id: string;
  dish: string;
};

export interface ReservationState {
  reservations: string[];
}