import React, { useState, useEffect } from "react";
import Modal from 'react-modal';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'; // Import the autoTable plugin for table creation
import { useSearchParams } from 'next/navigation';



interface TruckData {
 company: string;
 DOT: string;
 MC: string;
 carrier_id: string;
}

export default function CarrierDetails() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const search = useSearchParams();
  const userid = search.get('id');
  let cleanedNumber = userid;
  if(userid !== null)
  {
    cleanedNumber = userid.replace(/"/g, '');
  }
  const [trucks, setTrucks] = useState<TruckData[]>([]); // Use the type for an array of TruckData
  const [truckData, setTruckData] = useState<TruckData>({
    company: "",
    DOT: "",
    MC:"",
    carrier_id: ""
  });
  const [carrierId, setId] = useState("");

  useEffect(() => {
    openModal();
  }, []);

  const openModal = () => {
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  

  const handleSubmit = async (e: React.FormEvent) => {
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
      doc.text("Vehicle Registration Report", headingX, headingY, { align: 'center' });

     // Define user details table
     const userDetails = [
      ['Carrier ID:', cleanedNumber],
      ['Company:', truckData.company],
      ['DOT #:', truckData.DOT],
      ['MC #:', truckData.MC],
      ['Status:', 'Pending Approval'],

    ];

    // Set table position and dimensions
    const tableX = 15;
    const tableY = 75;

   
    

     // Define the date
     const currentDate = new Date();
     const formattedDate = currentDate.toLocaleDateString();
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
      doc.save('carrier_registration.pdf');

    };


      
    e.preventDefault();
    alert("Data Being Processed...");
    

    const payload = {
      TableName: 'carrier_details',
      Item: {
        carrier_id: `${cleanedNumber}`,
        trucks: trucks,
      },
    };
  

    try {
        console.log(payload);
        const currentDate = new Date();
      const response = await fetch('https://4af3gk9g62.execute-api.us-east-2.amazonaws.com/default/create_carrier', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:  JSON.stringify({
          TableName: `carrier_details`,
          Item: {
            carrier_id: `${cleanedNumber}`,
            vehicle_id: `${Math.floor(Math.random()*10000)}`,
            company: `${truckData.company}`,
            DOT: `${truckData.DOT}`,
            MC: `${truckData.MC}`,
            Status: `Pending Approval`,
            CreatedDate: `${currentDate.toLocaleDateString()}`,
          }
        },
        ),
      });

      if (response.status === 200) {
        console.log("Data submitted successfully.");
      } else {
        console.error("Failed to submit data.");
      }

      closeModal();
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const handleAddTruck = () => {
    setTrucks([...trucks, truckData]);
    setTruckData({
      company: "",
      DOT: "",
      MC: "",
      carrier_id: ""
    });
  }

  return (
    <div style={{color: '#000', backgroundColor:'black', height: 'auto', width: '200px;'}}>
      <Modal
       
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Carrier Details Modal"
        
        
      >
        <h2 style={{color: 'black', margin:'10px'}}>Kindly Add The required Details to proceed with your Registration</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label style={{color: 'black'}}>Company:</label><br/>
            <input
            style={{borderRadius: '22px', margin: '10px', color: 'black'}}
              type="text" 
              value={truckData.company}
              onChange={(e) => setTruckData({ ...truckData, company: e.target.value })}
            />
          </div>
          <div>
            <label style={{color: 'black'}}>DOT #:</label><br/>
            <input style={{borderRadius: '22px', margin: '10px', color: 'black'}}
              type="text"
              value={truckData.DOT}
              onChange={(e) => setTruckData({ ...truckData, DOT: e.target.value })}
            />
          </div>
          <div>
            <label style={{color: 'black'}}>MC #:</label><br/>
            <input
            style={{borderRadius: '22px', margin: '10px', color: 'black'}}
              type="text"
              value={truckData.MC}
              onChange={(e) => setTruckData({ ...truckData, MC: e.target.value })}
            />
          </div>
         
           <button className="btn btn-info" type="submit" style={{backgroundColor: '#09c204', borderRadius: '22px', margin: '10px'}}>Submit</button>
           <button onClick={closeModal} className="btn btn-danger" style={{backgroundColor: '#d30e1d', borderRadius: '22px', margin: '10px'}}>Close</button>

        </form>
      </Modal>
    </div>
  );
}

