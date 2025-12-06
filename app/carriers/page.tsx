"use client"
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import jsPDF from 'jspdf';
import CarrierDetails from '@/components/carrier_details';
import Link from 'next/link';
import autoTable from 'jspdf-autotable';

// Define the Booking type
interface Booking {
  vehicle_id: number;
  carrier_id: string;
  company: string;
  MC: string;
  DOT: string;
  Status: string;
  CreatedDate: string;
}

export default function Carriers() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [showCarrierDetails, setShowCarrierDetails] = useState(false); // State to manage modal visibility
  const search = useSearchParams();
  const userId = search.get('id');
  const cleanedNumber = userId;

  const downloadPDF = (booking: Booking) => {
    const doc = new jsPDF();

    // Load your logo image
    const logo = new Image();
    logo.src = '/images/whitelogo.png';
    logo.onload = function() {
      const logoWidth = 50;
      const logoHeight = 10;
      const logoX = 15;
      const logoY = 15;
    

     // Add logo to the PDF
     doc.addImage(logo, 'PNG', logoX, logoY, logoWidth, logoHeight);
     
      // Add a heading below the logo
      const headingX = 100;
      const headingY = 50;
      doc.setFontSize(24);
      doc.text("SUbhauler Company Verification Form", headingX, headingY, { align: 'center' });

     // Define user details table
     const userDetails = [
      ['Carrier ID:', cleanedNumber],
      ['Company:', booking.company],
      ['DOT #:', booking.DOT],
      ['MC #:', booking.MC],
      ['Status:', booking.Status],

    ];

    // Set table position and dimensions
    const tableX = 15;
    const tableY = 75;

   
    

     // Define the date
     const formattedDate = booking.CreatedDate;
     const dateX = 175;
     const dateY = 22;


      // Add a table to the PDF using the autoTable plugin
      autoTable(doc, {
        body: userDetails,
        margin: { left: tableX },
        startY: tableY
      });

      // Add current date
      
     const dateFontSize = 10;
     doc.setFontSize(dateFontSize);
      doc.text(formattedDate, dateX, dateY);

      
      // Add a horizontal line for the footer
      const lineY = 270; // Adjust this value as needed
      doc.setLineWidth(1);
      doc.line(15, lineY, 195, lineY);

      // Add the trademark text
      const trademarkText = "- Carshipy LLC -";
      const trademarkX = 105; // Adjust this value for centering
      const trademarkY = lineY + 10; // Adjust this value for positioning below the line
      doc.setFontSize(10);
      doc.text(trademarkText, trademarkX, trademarkY, { align: 'center' });

      // Save or download the PDF
      doc.save(`vehicle_registration_${booking.vehicle_id}.pdf`);
    }}

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
              <table className="table" style={{  marginTop: '20px' }}>
                <thead>
                  <tr>
                    <th style={{ paddingRight: '30px', paddingLeft: '20px' }}>Company</th>
                    <th style={{ paddingRight: '30px' }}>DOT #</th>
                    <th style={{ paddingRight: '30px' }}>MC #</th>
                    <th style={{ paddingRight: '30px' }}>Status</th>
                    <th style={{ paddingRight: '30px' }}>CreatedDate</th>
                    <th style={{ paddingRight: '20px' }}>Action</th>
                    
                  </tr>
                </thead>
                <tbody>
          {bookings.map((booking) => (
            <tr key={booking.vehicle_id}>
              <td style={{ paddingRight: '30px', paddingLeft: '20px' }}>{booking.company}</td>
              <td style={{ paddingRight: '30px' }}>{booking.DOT}</td>
              <td style={{ paddingRight: '30px' }}>{booking.MC}</td>
              <td style={{ paddingRight: '30px' }}>{booking.Status}</td>
              <td style={{ paddingRight: '30px' }}>{booking.CreatedDate}</td>
              <td style={{ paddingRight: '20px' }}>
                <button
                  style={{ backgroundColor: '#2195f2', width: '20', height: 'auto', borderRadius: '10px', padding: '10px' }}
                  type='button'
                  onClick={() => downloadPDF(booking)} // Pass the selected booking to the downloadPDF function
                  value={booking.vehicle_id}
                >
                  PDF
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        </table>
           


                <div data-aos="fade-up" data-aos-delay="400">
                  {showCarrierDetails && <CarrierDetails />}
                </div>
              </center>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

