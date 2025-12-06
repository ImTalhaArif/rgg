"use client"
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

interface Alert {
  text: string;
  time: string;
}

const BookingAlert = () => {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [visibleAlertIndex, setVisibleAlertIndex] = useState<number>(-1);
  const search = useSearchParams();
  const userid = search.get('id');

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate random booking data for demonstration
      const names = ['Alex', 'Lucy', 'John', 'Emma', 'Mia', 'Liam', 'Olivia', 'James', 'Sophia', 'Benjamin', 'Amelia', 'William', 'Charlotte', 'Henry', 'Harper', 'Michael', 'Evelyn', 'Daniel', 'Abigail', 'David', 'Emily', 'Samuel', 'Elizabeth', 'Matthew', 'Grace', 'Christopher', 'Sofia', 'Andrew', 'Scarlett', 'Joseph', 'Avery', 'Jackson', 'Lily', 'Victoria', 'Nicholas', 'Chloe', 'Ethan', 'Ella', 'Sophia', 'Madison', 'Aria', 'Hannah', 'Jack', 'Ava', 'Victoria', 'Luke', 'Grace', 'William', 'Madeline', 'Nathan', 'Sophie', 'Henry', 'Zoe', 'Nicholas', 'Eleanor', 'Daniel', 'Aubrey', 'Benjamin', 'Avery', 'Emily', 'Lucas', 'Lily', 'Gabriel', 'Grace', 'Olivia', 'Nolan', 'Chloe', 'Samuel', 'Sophia', 'Elizabeth', 'Liam', 'Scarlett', 'Ella', 'Joseph', 'Aria', 'Oliver', 'Hazel', 'Andrew', 'Audrey', 'Anthony', 'Eva', 'Grace', 'Mila', 'James', 'Piper', 'Daniel', 'Savannah', 'Christopher', 'Penelope', 'Ethan', 'Stella', 'Alexandra', 'Emma', 'Isabelle', 'David', 'Luna', 'Michael', 'Brooklyn', 'Joseph', 'Zoey', 'Matthew', 'Claire', 'Sophia', 'Layla', 'Sofia', 'Eliana', 'Grace', 'Naomi', 'Ella', 'Scarlett', 'Evelyn', 'Eleanor', 'Samuel', 'Ariana', 'Elizabeth', 'Violet', 'William', 'Hannah', 'Abigail', 'Lucia', 'Mia', 'Vivian', 'Daniel', 'Lila', 'Amelia', 'Madelyn', 'Ella', 'Victoria', 'Maeve', 'John', 'Elena', 'Ella', 'Penelope', 'Henry', 'Aurora', 'Benjamin', 'Ruby', 'Olivia', 'Nora', 'Emily', 'Holly', 'Gabriel', 'Lyla', 'Lily', 'Zara', 'Christopher', 'Evelyn', 'Matthew', 'Hazel', 'Charlotte', 'Grace', 'Audrey', 'Elizabeth', 'Aria', 'Hannah', 'Michael', 'Camila', 'Samantha', 'Sophia', 'Mila', 'Grace', 'Madeline', 'James', 'Maya', 'Liam', 'Natalie', 'Ava', 'Eva', 'Sophia', 'Lucy', 'Abigail', 'Scarlett', 'Amelia', 'Emma', 'Ella', 'Emily', 'Mia', 'Isabella', 'Olivia', 'Sofia', 'Avery', 'Madison', 'Charlotte', 'Harper', 'Lily', 'Grace', 'Mila', 'Chloe', 'Victoria', 'Scarlett', 'Elizabeth', 'Aria', 'Samantha', 'Zoe', 'Sophie', 'Layla', 'Evelyn', 'Aubrey', 'Nora', 'Hannah', 'Natalie', 'Eva', 'Amelia', 'Aria', 'Maeve', 'Aurora', 'Holly', 'Lyla', 'Ruby', 'Zara', 'Elena', 'Lucia'];
      const locations = ['New York' ,'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'San Francisco', 'Indianapolis', 'Columbus', 'Fort Worth', 'Charlotte', 'Seattle', 'Denver', 'El Paso', 'Detroit', 'Washington, D.C.', 'Boston', 'Memphis', 'Nashville', 'Portland', 'Oklahoma City', 'Las Vegas', 'Baltimore', 'Louisville', 'Milwaukee', 'Albuquerque', 'Tucson', 'Fresno', 'Sacramento', 'Kansas City', 'Long Beach', 'Mesa', 'Atlanta', 'Colorado Springs', 'Raleigh', 'Miami', 'Virginia Beach', 'Omaha', 'Oakland', 'Minneapolis', 'Tulsa', 'Arlington', 'Wichita', 'New Orleans', 'Bakersfield', 'Cleveland', 'Tampa', 'Aurora', 'Honolulu', 'Anaheim', 'Santa Ana', 'Corpus Christi', 'Riverside', 'St. Louis', 'Lexington', 'Stockton', 'Pittsburgh', 'Saint Paul', 'Anchorage', 'Cincinnati', 'Henderson', 'Greensboro', 'Plano', 'Newark', 'Toledo', 'Lincoln', 'Orlando', 'Chula Vista', 'Jersey City', 'Chandler', 'Fort Wayne', 'Buffalo', 'Durham', 'St. Petersburg', 'Irvine', 'Laredo', 'Lubbock', 'Madison', 'Gilbert', 'Norfolk', 'Reno', 'Winston-Salem', 'Glendale', 'Hialeah', 'Garland', 'Scottsdale', 'Irving', 'Chesapeake', 'North Las Vegas', 'Fremont', 'Baton Rouge', 'Richmond', 'Boise', 'San Bernardino', 'Spokane', 'Des Moines', 'Modesto', 'Birmingham', 'Tacoma', 'Fontana', 'Rochester', 'Oxnard', 'Moreno Valley', 'Fayetteville', 'Aurora', 'Glendale', 'Yonkers', 'Huntington Beach', 'Montgomery', 'Amarillo', 'Little Rock', 'Akron', 'Augusta', 'Grand Rapids', 'Mobile', 'Salt Lake City', 'Huntsville', 'Tallahassee', 'Grand Prairie', 'Overland Park', 'Knoxville', 'Worcester', 'Brownsville', 'Newport News', 'Santa Clarita', 'Port St. Lucie', 'Providence', 'Fort Lauderdale', 'Chattanooga', 'Tempe', 'Oceanside', 'Garden Grove', 'Rancho Cucamonga', 'Cape Coral', 'Santa Rosa', 'Vancouver', 'Sioux Falls', 'Peoria', 'Ontario', 'Jackson', 'Elk Grove', 'Springfield', 'Pembroke Pines', 'Salem', 'Corona', 'Eugene', 'McKinney', 'Fort Collins', 'Lancaster', 'Cary', 'Palmdale', 'Hayward', 'Salinas', 'Frisco', 'Springfield', 'Pasadena', 'Macon', 'Alexandria', 'Pomona', 'Lakewood', 'Sunnyvale', 'Escondido', 'Kansas City', 'Hollywood', 'Clarksville', 'Joliet', 'Rockford', 'Torrance', 'Naperville', 'Paterson', 'Savannah', 'Bridgeport', 'Mesquite', 'Killeen', 'Syracuse', 'McAllen', 'Pasadena', 'Bellevue', 'Fullerton', 'Orange', 'Dayton', 'Miramar', 'Thornton', 'West Valley City', 'Olathe', 'Hampton', 'Warren', 'Midland', 'Waco', 'Charleston', 'Denton', 'Carrollton', 'Surprise', 'Roseville', 'Sterling Heights', 'Murfreesboro', 'Gainesville', 'Cedar Rapids', 'Visalia', 'Coral Springs', 'New Haven', 'Stamford', 'Thousand Oaks', 'Concord', 'Elizabeth', 'Lafayette', 'Kent', 'Santa Clara', 'Simi Valley', 'Lakeland', 'Tuscaloosa', 'Athens', 'Columbia', 'Waterbury', 'Norwalk', 'Rancho Cucamonga', 'Inglewood', 'Fairfield', 'Costa Mesa', 'Carlsbad', 'Miami Gardens', 'Westminster', 'Clearwater', 'Peoria', 'Rochester', 'Pueblo', 'Elgin', 'Tyler', 'League City', 'Davie', 'Las Cruces', 'South Bend', 'Vista', 'Greeley', 'Daly City', 'Boulder', 'Allen', 'West Covina', 'Sparks', 'Hawthorne', 'Longview', 'Bend', 'McKinney', 'Plantation', 'Torrance', 'Hampton', 'Round Rock', 'Rock Hill', 'Miami Beach', 'Lynchburg', 'Davis', 'Vacaville', 'Meridian', 'Cambridge', 'Rialto', 'New Bedford', 'San Angelo', 'Kenosha', 'Redding', 'Nashua', 'Orem', 'Sugar Land', 'Edinburg', 'Cicero', 'Las Cruces', 'South Bend', 'Vista', 'Greeley', 'Daly City', 'Boulder', 'Allen', 'West Covina', 'Sparks', 'Hawthorne', 'Longview', 'Bend', 'McKinney', 'Plantation', 'Torrance', 'Hampton', 'Round Rock', 'Rock Hill', 'Miami Beach', 'Lynchburg', 'Davis', 'Vacaville', 'Meridian', 'Cambridge', 'Rialto', 'New Bedford', 'San Angelo', 'Kenosha', 'Redding', 'Nashua', 'Orem', 'Sugar Land', 'Edinburg', 'Cicero', 'Roanoke', 'Kennewick', 'Charleston', 'Troy', 'Farmington Hills', 'Canton', 'Warner Robins', 'Perris', 'Hesperia', 'Lodi', 'Auburn', 'Broomfield', 'Maple Grove', 'Frisco', 'Lake Forest', 'Blaine', 'Madison', 'Youngstown', 'Lynwood', 'Cheyenne', 'Bloomington', 'Hendersonville', 'Tamarac', 'Des Plaines', 'Galveston', 'Madera', 'Poway', 'Edina', 'Bryan', 'Cicero', 'Roanoke', 'Kennewick', 'Charleston', 'Troy', 'Farmington Hills', 'Canton', 'Warner Rob'];
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomLocation = locations[Math.floor(Math.random() * locations.length)];
      const randomTime = getRandomTime();

      // Create a new booking alert
      const newAlert = `${randomName} from ${randomLocation} booked an order`;
      const timeAgo = `${randomTime} ago`;

      // Add the new alert to the list of alerts
      setAlerts(prevAlerts => [...prevAlerts, { text: newAlert, time: timeAgo }]);
    }, 8000); // Display an alert every 8 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Function to generate random time strings for demonstration
  const getRandomTime = () => {
    const hours = Math.floor(Math.random() * 24);
    const minutes = Math.floor(Math.random() * 60);

    if (hours === 0) {
      return `${minutes} minutes`;
    } else if (hours === 1) {
      return `${hours} hour ${minutes} minutes`;
    } else {
      return `${hours} hours ${minutes} minutes`;
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (visibleAlertIndex < alerts.length - 1) {
        // Show the next alert if available
        setVisibleAlertIndex(prevIndex => prevIndex + 1);
      } else {
        // Hide the current alert if no more alerts
        setVisibleAlertIndex(-1);
      }
    }, 5000); // Display each alert for 5 seconds

    return () => {
      clearTimeout(timer);
    };
  }, [visibleAlertIndex, alerts]);
if(search.get('id') === null)
{
  return (
    <div className="booking-alert-container" style={{animation: 'fadeOut 8s linear forwards'}}>
      {alerts.map((alert, index) => (
        <div
          key={index}
          className={`booking-alert ${
            index === visibleAlertIndex ? 'visible' : 'hidden'
          }`}
        >
          <p>{alert.text}</p>
          <small>{alert.time}</small>
        </div>
      ))}
      <style jsx>{`
        .booking-alert-container {
            position: fixed;
            @keyframes fadeOut {
              0% {
                opacity: 1;
              }
              100% {
                opacity: 0;
              }
            }            
            bottom: 100px;
            left: 20px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            background-color: #f0f5fa;
            color: #2196f3;
            width: 140px;
            font-size: 14px;
            font-weight: 400;
            border-radius: 5px;
            padding: 5px;

        }

        .booking-alert {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
        }

        .booking-alert.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .booking-alert.hidden {
          opacity: 0;
          transform: translateY(20px);
        }
      `}</style>
    </div>
  );
      }
      else{
        return(
          <h1></h1>
        );
      }
};
export default BookingAlert;
