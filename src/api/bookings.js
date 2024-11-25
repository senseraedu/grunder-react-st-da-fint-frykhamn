// src/api/bookings.js
import axios from 'axios';

const API_URL = "http://localhost:8081";

export const fetchBookings = async () => {
  try {
    const response = await axios.get(`${API_URL}/bookings`);
    return response.data;
  } catch (error) {
    console.error("Error fetching bookings:", error);
    throw error;
  }
};

export const createBooking = async (booking) => {
  try {
    const response = await axios.post(`${API_URL}/bookings`, booking);
    return response.data;
  } catch (error) {
    console.error("Error creating booking:", error);
    throw error;
  }
};

export const updateBooking = async (booking) => {
  try {
    const response = await axios.put(`${API_URL}/bookings/${booking.id}`, booking);
    return response.data;
  } catch (error) {
    console.error("Error updating booking:", error);
    throw error;
  }
};

export const deleteBooking = async (id) => {
  try {
    await axios.delete(`${API_URL}/bookings/${id}`);
  } catch (error) {
    console.error("Error deleting booking:", error);
    throw error;
  }
};