import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import customerReducer from "../features/customer/CustomerSlice";
import reservationReducer from "../features/reservation/ReservationSlice";

export const store = configureStore({
  reducer: {
    customer: customerReducer,
    reservation: reservationReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
