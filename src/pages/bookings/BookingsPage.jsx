// src/components/BookingsPage.jsx
import React from "react";
import BookingsForm from "./components/BookingForm";
import UpcomingBookings from "./components/UpcomingBookings";
import BookingHistory from "./components/BookingHistory";
import "./BookingsPage.css";
import { useBookings } from "./BookingsContext";

const mockCleaners = ["Anna", "Erik", "Maria"];
const customerName = "John Doe";

const BookingsPage = () => {
  const { bookings, history, addBooking, removeBooking, deleteHistoryItems } =
    useBookings();

  return (
    <div className="bookings-page">
      <BookingsForm
        cleaners={mockCleaners}
        onSubmit={(values) => {
          addBooking({
            id: Date.now().toString(),
            date: values.date,
            cleaningType: values.cleaningType,
            customerName: customerName,
            cleaner: values.cleaner,
            status: BookingStatus.Pending,
          });
        }}
      />

      <UpcomingBookings
        bookings={bookings}
        onDelete={(id) => {
          removeBooking(id);
        }}
      />

      <BookingHistory
        bookings={history}
        onDeleteSelected={deleteHistoryItems}
      />
    </div>
  );
};

export default BookingsPage;
