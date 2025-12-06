import React, { useState, useEffect } from 'react';

// Define the Booking type
interface Payment {
    payment_id: string;
    booking_id: string;
  'payment-method': string;
  'pickup-zip': string;
  amount: string;
  status: string;
  
}

export default function Payments() {
  const [bookings, setBookings] = useState<Payment[]>([]);

  useEffect(() => {
    // Define the API URL
    const apiUrl = 'https://kfyfzfw6si.execute-api.us-east-2.amazonaws.com/default/carrier_bookings?TableName=payments&carrierId=3111';

    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Assuming data is an array of bookings
        setBookings(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <section>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 relative">
        <table className='table' >
          <thead>
            <tr>
              <th>Payment ID</th>
              <th>Payment Method</th>
              <th>Amount</th>
              <th>Booking ID</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.payment_id}>
                <td>{booking.payment_id}</td>
                <td>{booking['payment-method']}</td>
                <td>{booking.amount}</td>
                <td>{booking.booking_id}</td>
                <td>{booking.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
