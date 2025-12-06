import React, { useState, useEffect } from 'react';

// Define the Booking type
interface Booking {
  bookingId: number;
  createdDate: string;
  'pickup-city': string;
  'pickup-zip': string;
  make: string;
  year:number;
  model:string;
  email: string;
  phone: string;
  amount: string;
  'destination-city': string;
  'destination-zip': string;
}

export default function Booking() {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    // Define the API URL
    const apiUrl = 'https://kfyfzfw6si.execute-api.us-east-2.amazonaws.com/default/carrier_bookings?TableName=bookings&carrierId=3111';

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
              <th>Booking Date</th>
              <th>Pickup city</th>
              <th>Pickup zip</th>
              <th>Vehicle details</th>
              <th>Customer details</th>
              <th>Destination city</th>
              <th>Destination zip</th>
              <th>Shipment Charges</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.bookingId}>
                <td>{booking.createdDate}</td>
                <td>{booking['pickup-city']}</td>
                <td>{booking['pickup-zip']}</td>
                <td>{booking.make}<br/>{booking.model}<br/>{booking.year}</td>
                <td>{booking.phone}<br/>{booking.email}</td>
                <td>{booking['destination-city']}</td>
                <td>{booking['destination-zip']}</td>
                <td>{booking.amount}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
