"use client"

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import jsPDF from 'jspdf';
import CarrierDetails from '@/components/carrier_details';
import Link from 'next/link';
import autoTable from 'jspdf-autotable';
import Booking from '@/components/bookings_dashboard';
import Payments from '@/components/payments_dashboard';
import Loader from '@/components/loader';
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

// Import Chart.js
import Chart from 'chart.js/auto';

interface YourDataStructure {
  length: number;
  Items: any[]; // Adjust the type of Items based on your data structure
}
// Define the Booking type

export default function Admin() {
  const search = useSearchParams();
  const userid = search.get('aid');
  const [carriers, setBookings] = useState<Booking[]>([]);
  const [bookings, setBookingss] = useState<Bookings[]>([]);
  const [showCarrierDetails, setShowCarrierDetails] = useState(false); 
  const cleanedNumber = userid;
  const [data, setData] = useState<YourDataStructure | null>(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
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
interface Bookings{
  bookingId: number;
  CreatedDate: string;
  'pickup-city': string;
  'pickup-zip': string;
  make: string;
  year:number;
  model:string;
  email: string;
  status: string;
  phone: string;
  amount: string;
  'destination-city': string;
  'destination-zip': string;
}


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

  if (userid !== null) {
    const cleanedNumber = userid.replace(/"/g, '');

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
  if (userid !== null) {
    const cleanedNumber = userid.replace(/"/g, '');

    useEffect(() => {
      // Define the API URL
      const apiUrl = `https://kfyfzfw6si.execute-api.us-east-2.amazonaws.com/default/carrier_bookings?TableName=bookings&carrierId=${cleanedNumber}`;

      // Fetch data from the API
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          // Assuming data is an array of bookings
          setBookingss(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);
  }
 

  useEffect(() => {
    if (userid !== null) {
      const cleanedNumber = userid.replace(/"/g, '');
    }
  }, []);

  useEffect(() => {
    // Create a canvas for the bar chart
    const ctx = document.getElementById('barChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'Revenue',
            data: [65, 59, 80, 81, 56],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, []);

  return (
    
    <section>
      <div className="max-w-12xl mx-auto px-9 sm:px-10 relative">
        {/* Illustration behind hero content */}
        <div className="absolute left-0 bottom-0 -ml-20 hidden lg:block pointer-events-none" aria-hidden="true" data-aos="fade-up" data-aos-delay="400">
          <svg className="max-w-full" width="564"  height="552" viewBox="0 0 564 552" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* ... (rest of your SVG code) */}
          </svg>
        </div>

        {/* Hero content */}
       
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
          <h2 style={{fontSize: '25px', padding: '5px'}}>Carrier Registration Forms</h2>
          <hr/>
        <table className='table'>
      
         <thead>   
         
          <tr>
                    <th style={{ paddingRight: '30px', paddingLeft: '20px' }}>Company</th>
                    <th style={{ paddingRight: '30px' }}>DOT #</th>
                    <th style={{ paddingRight: '30px' }}>MC #</th>
                    <th style={{ paddingRight: '30px' }}>Status</th>
                    <th style={{ paddingRight: '30px' }}>CreatedDate</th>
                    <th style={{ paddingRight: '20px' }}>Document</th>
                    <th style={{ paddingRight: '20px' }}>Action</th>
                    
                  </tr>
          
          </thead>
          <tbody>
          {carriers.map((carriers) => (
            <tr key={carriers.vehicle_id}>
              <td style={{ paddingRight: '30px', paddingLeft: '20px' }}>{carriers.company}</td>
              <td style={{ paddingRight: '30px' }}>{carriers.DOT}</td>
              <td style={{ paddingRight: '30px' }}>{carriers.MC}</td>
              <td style={{ paddingRight: '30px' }}>{carriers.Status}</td>
              <td style={{ paddingRight: '30px' }}>{carriers.CreatedDate}</td>
              <td style={{ paddingRight: '20px' }}>
                <button
                  style={{ backgroundColor: '#2195f2', width: '20', height: 'auto', borderRadius: '10px', padding: '10px' }}
                  type='button'
                  onClick={() => downloadPDF(carriers)} // Pass the selected booking to the downloadPDF function
                  value={carriers.vehicle_id}
                >
                  PDF
                </button>
              </td>
              <td><select id='statusCarrier' className='select'><option selected>Choose Status</option><option value={'approved'}>Approve</option><option value={'not approved'}>Reject</option></select></td>
            </tr>
          ))}
        </tbody>
        </table>
        <hr />
                  <h2 style={{fontSize: '25px', padding: '5px'}}>Bookings</h2>

                  <table className="table">
                  <thead>
                    <tr>
              <th style={{ paddingRight: '20px' }}>Booking Date</th>
              <th style={{ paddingRight: '20px' }}>Pickup city</th>
              <th style={{ paddingRight: '20px' }}>Pickup zip</th>
              <th style={{ paddingRight: '20px' }}>Vehicle details</th>
              <th style={{ paddingRight: '20px' }}>Customer details</th>
              <th style={{ paddingRight: '20px' }}>Destination city</th>
              <th style={{ paddingRight: '20px' }}>Destination zip</th>
              <th style={{ paddingRight: '20px' }}>Status</th>
              <th style={{ paddingRight: '20px' }}>Shipment Charges</th>
              <th style={{ paddingRight: '20px' }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((booking) => (
                      <tr key={booking.bookingId}>
                        <td style={{ paddingRight: '20px' }}>{booking.CreatedDate}</td>
                <td style={{ paddingRight: '20px' }}>{booking['pickup-city']}</td>
                <td style={{ paddingRight: '20px' }}>{booking['pickup-zip']}</td>
                <td style={{ paddingRight: '20px' }}>{booking.make}<br/>{booking.model}<br/>{booking.year}</td>
                <td style={{ paddingRight: '20px' }}>{booking.phone}<br/>{booking.email}</td>
                <td style={{ paddingRight: '20px' }}>{booking['destination-city']}</td>
                <td style={{ paddingRight: '20px' }}>{booking['destination-zip']}</td>
                <td style={{ paddingRight: '20px' }}>{booking.status}</td>
                <td style={{ paddingRight: '20px' }}>{booking.amount}</td>
                <td style={{ paddingRight: '20px' }}>
                <button
                  style={{ backgroundColor: '#2195f2', width: '20', height: 'auto', borderRadius: '10px', padding: '10px' }}
                  type='button'
                  onClick={() => alert('Details will be available soon')} // Pass the selected booking to the downloadPDF function
                  value={booking.bookingId}
                >
                  View more
                </button>
                </td>
                      </tr>
                    ))}
                  </tbody>
                </table>



          
        </div>
      </div>
   
      
    </section>
  );
}


