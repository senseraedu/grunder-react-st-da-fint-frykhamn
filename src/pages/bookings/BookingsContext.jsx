// src/context/BookingsContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchBookings, createBooking, deleteBooking } from "../../api/bookings";


const BookingsContext = createContext(undefined);

export const useBookings = () => {
  const context = useContext(BookingsContext);
  if (!context) {
    throw new Error('useBookings must be used within a BookingsProvider');
  }
  return context;
};

export const BookingsProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const loadBookings = async () => {
      const fetchedBookings = await fetchBookings();
      setBookings(fetchedBookings);
    };

    loadBookings();
  }, []);


  // sort bookings by status completed and add to history
  useEffect(() => {
    const completedBookings = bookings.filter((booking) => booking.status === 'completed');
    setHistory((prev) => [...prev, ...completedBookings]);
  }, [bookings]);

  const addBooking = async (newBooking) => {
    const createdBooking = await createBooking(newBooking);
    setBookings((prev) => [...prev, createdBooking]);
  };


  const removeBooking = async (id) => {
    await deleteBooking(id);
    setBookings((prev) => prev.filter((booking) => booking.id !== id));
  };


  const deleteHistoryItems = (ids) => {
    setHistory((prev) => prev.filter((booking) => !ids.includes(booking.id)));
  };

  return (
    <BookingsContext.Provider
      value={{
        bookings,
        history,
        addBooking,
        removeBooking,
        deleteHistoryItems,
      }}
    >
      {children}
    </BookingsContext.Provider>
  );
};