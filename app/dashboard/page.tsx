"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';
import Booking from "@/components/bookings_dashboard";
import Payments from "@/components/payments_dashboard";
import Loader from "@/components/loader";
import CarrierDetails from "@/components/carrier_details";

interface YourDataStructure {
  length: number;
  Items: any[]; // Adjust the type of Items based on your data structure
}

export default function Dashboard() {
  const search = useSearchParams();
  const userid = search.get('id');
  const [data, setData] = useState<YourDataStructure | null>(null);

  useEffect(() => {
    if (userid !== null) {
      const cleanedNumber = userid.replace(/"/g, '');

      fetch(`https://kfyfzfw6si.execute-api.us-east-2.amazonaws.com/default/carrier_bookings?TableName=carrier_details&carrierId=${cleanedNumber}`)
        .then(response => response.json())
        .then((fetchedData: YourDataStructure) => {
          if (fetchedData.length === 0) {
            // Set the data to null to show the CarrierDetails component
            setData(null);
          } else {
            alert("Your Request is being processed. Please check back later.");
            setData(fetchedData);
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  }, []);

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
            <h1 className="h1 mb-4" data-aos="fade-up">Your bookings</h1>
            <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">Below listed are Auto transportation bookings assigned to you.</p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                {data === null ? (
                  <CarrierDetails />
                ) : (
                  <Booking />
                )}
              </div>
            </div>
          </div>

          {/* Section header for Payments */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4" data-aos="fade-up">Your Payments</h1>
            <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">Below listed are Payments related to your Completed Shipments.</p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                {data !== null && (
                  <Payments />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
