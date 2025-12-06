"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import CarrierDetails from '@/components/carrier_details';
import Header from '@/components/ui/header';

// Define the Booking type
interface Payment {
    payment_id: string;
    booking_id: string;
  'payment-method': string;
  'pickup-zip': string;
  amount: string;
  status: string;
  
}
  

export default function payouts() {
  const [bookings, setBookings] = useState<Payment[]>([]);
  const [showCarrierDetails, setShowCarrierDetails] = useState(false); // State to manage modal visibility
  const search = useSearchParams();
  const userId = search.get('id');
  const cleanedNumber = userId;

  if (userId !== null) {
    const cleanedNumber = userId.replace(/"/g, '');

    useEffect(() => {
      // Define the API URL
      const apiUrl = `https://kfyfzfw6si.execute-api.us-east-2.amazonaws.com/default/carrier_bookings?TableName=carrier_details&carrierId=${cleanedNumber}`;

      // Fetch data from the API
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          // Assuming data is an array of bookings
          setBookings(data);
          console.log(data);
         
          if(data.Status !== "Approved")
          {
            alert("Please wait till your Vehicle Registration is Approved..");
            window.location.href = `/dashboard?id=${cleanedNumber}`;

          }
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
             
              <th style={{ paddingRight: '30px' }}>Payment ID</th>
              <th style={{ paddingRight: '30px' }}>Payment Method</th>
              <th style={{ paddingRight: '30px' }}>Amount</th>
              <th style={{ paddingRight: '30px' }}>Booking ID</th>
              <th style={{ paddingRight: '30px' }}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((payment) => (
                     <tr key={payment.payment_id}>
                     <td style={{ paddingRight: '30px' }}>{payment.payment_id}</td>
                     <td style={{ paddingRight: '30px' }}>{payment['payment-method']}</td>
                     <td style={{ paddingRight: '30px' }}>{payment.amount}</td>
                     <td style={{ paddingRight: '30px' }}>{payment.booking_id}</td>
                     <td style={{ paddingRight: '30px' }}>{payment.status}</td>
                   </tr>
                    ))}
                  </tbody>
                </table>
                <button className="btn btn-info" id="new" type="button" style={{ backgroundColor: '#2195f2', borderRadius: '22px', margin: '10px', marginTop: '10px' }} onClick={() => setShowCarrierDetails(true)}>
                  Apply One day Payout!
                </button>

                <div data-aos="fade-up" data-aos-delay="400">
                  {showCarrierDetails && alert("You Will Get Access to One Day Payouts Soon")}
                </div>
              </center>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
