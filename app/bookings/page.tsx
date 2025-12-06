"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import CarrierDetails from '@/components/carrier_details';

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
  

export default function bookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [showCarrierDetails, setShowCarrierDetails] = useState(false); // State to manage modal visibility
  const search = useSearchParams();
  const userId = search.get('id');
  const cleanedNumber = userId;

  if (userId !== null) {
    const cleanedNumber = userId.replace(/"/g, '');

    useEffect(() => {
      // Define the API URL
      const apiUrl = `https://kfyfzfw6si.execute-api.us-east-2.amazonaws.com/default/carrier_bookings?TableName=bookings&carrierId=${cleanedNumber}`;

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
  }

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Illustration behind hero content */}
        <div className="absolute left-0 bottom-0 -ml-20 hidden lg:block pointer-events-none" aria-hidden="true" data-aos="fade-up" data-aos-delay="400">
          <svg className="max-w-full" width="564" height="552" viewBox="0 0 564 552" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* ... (rest of your SVG code) */}
          </svg>
        </div>

        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
          {/* Section header for Bookings */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div>
              <Link href={`/dashboard?id=${cleanedNumber}`}>
                <a>Back to Dashboard</a>
              </Link>
              <center>
                <table className="table" style={{ backgroundColor: '#232629', marginTop: '20px' }}>
                  <thead>
                    <tr>
              <th style={{ paddingRight: '20px' }}>Booking Date</th>
              <th style={{ paddingRight: '20px' }}>Pickup city</th>
              <th style={{ paddingRight: '20px' }}>Pickup zip</th>
              <th style={{ paddingRight: '20px' }}>Vehicle details</th>
              <th style={{ paddingRight: '20px' }}>Customer details</th>
              <th style={{ paddingRight: '20px' }}>Destination city</th>
              <th style={{ paddingRight: '20px' }}>Destination zip</th>
              <th style={{ paddingRight: '20px' }}>Shipment Charges</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((booking) => (
                      <tr key={booking.bookingId}>
                        <td style={{ paddingRight: '20px' }}>{booking.createdDate}</td>
                <td style={{ paddingRight: '20px' }}>{booking['pickup-city']}</td>
                <td style={{ paddingRight: '20px' }}>{booking['pickup-zip']}</td>
                <td style={{ paddingRight: '20px' }}>{booking.make}<br/>{booking.model}<br/>{booking.year}</td>
                <td style={{ paddingRight: '20px' }}>{booking.phone}<br/>{booking.email}</td>
                <td style={{ paddingRight: '20px' }}>{booking['destination-city']}</td>
                <td style={{ paddingRight: '20px' }}>{booking['destination-zip']}</td>
                <td style={{ paddingRight: '20px' }}>{booking.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button className="btn btn-info" id="new" type="button" style={{ backgroundColor: '#2195f2', borderRadius: '22px', margin: '10px', marginTop: '10px' }} onClick={() => setShowCarrierDetails(true)}>
                  Explore New Bookings
                </button>

                <div data-aos="fade-up" data-aos-delay="400">
                  {showCarrierDetails && alert("You Will Get Access to New Bookings Soon")}
                </div>
              </center>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
