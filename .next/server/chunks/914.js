exports.id = 914;
exports.ids = [914];
exports.modules = {

/***/ 63092:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 53177))

/***/ }),

/***/ 30595:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 16505, 23))

/***/ }),

/***/ 52164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ modalForm)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/react-datepicker/dist/index.js
var dist = __webpack_require__(10145);
// EXTERNAL MODULE: ./node_modules/react-datepicker/dist/react-datepicker.css
var react_datepicker = __webpack_require__(82094);
// EXTERNAL MODULE: ./node_modules/styled-jsx/style.js
var style = __webpack_require__(86369);
var style_default = /*#__PURE__*/__webpack_require__.n(style);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(57114);
;// CONCATENATED MODULE: ./components/bookingsAlert.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



const BookingAlert = ()=>{
    const [alerts, setAlerts] = (0,react_.useState)([]);
    const [visibleAlertIndex, setVisibleAlertIndex] = (0,react_.useState)(-1);
    const search = (0,navigation.useSearchParams)();
    const userid = search.get("id");
    (0,react_.useEffect)(()=>{
        const interval = setInterval(()=>{
            // Generate random booking data for demonstration
            const names = [
                "Alex",
                "Lucy",
                "John",
                "Emma",
                "Mia",
                "Liam",
                "Olivia",
                "James",
                "Sophia",
                "Benjamin",
                "Amelia",
                "William",
                "Charlotte",
                "Henry",
                "Harper",
                "Michael",
                "Evelyn",
                "Daniel",
                "Abigail",
                "David",
                "Emily",
                "Samuel",
                "Elizabeth",
                "Matthew",
                "Grace",
                "Christopher",
                "Sofia",
                "Andrew",
                "Scarlett",
                "Joseph",
                "Avery",
                "Jackson",
                "Lily",
                "Victoria",
                "Nicholas",
                "Chloe",
                "Ethan",
                "Ella",
                "Sophia",
                "Madison",
                "Aria",
                "Hannah",
                "Jack",
                "Ava",
                "Victoria",
                "Luke",
                "Grace",
                "William",
                "Madeline",
                "Nathan",
                "Sophie",
                "Henry",
                "Zoe",
                "Nicholas",
                "Eleanor",
                "Daniel",
                "Aubrey",
                "Benjamin",
                "Avery",
                "Emily",
                "Lucas",
                "Lily",
                "Gabriel",
                "Grace",
                "Olivia",
                "Nolan",
                "Chloe",
                "Samuel",
                "Sophia",
                "Elizabeth",
                "Liam",
                "Scarlett",
                "Ella",
                "Joseph",
                "Aria",
                "Oliver",
                "Hazel",
                "Andrew",
                "Audrey",
                "Anthony",
                "Eva",
                "Grace",
                "Mila",
                "James",
                "Piper",
                "Daniel",
                "Savannah",
                "Christopher",
                "Penelope",
                "Ethan",
                "Stella",
                "Alexandra",
                "Emma",
                "Isabelle",
                "David",
                "Luna",
                "Michael",
                "Brooklyn",
                "Joseph",
                "Zoey",
                "Matthew",
                "Claire",
                "Sophia",
                "Layla",
                "Sofia",
                "Eliana",
                "Grace",
                "Naomi",
                "Ella",
                "Scarlett",
                "Evelyn",
                "Eleanor",
                "Samuel",
                "Ariana",
                "Elizabeth",
                "Violet",
                "William",
                "Hannah",
                "Abigail",
                "Lucia",
                "Mia",
                "Vivian",
                "Daniel",
                "Lila",
                "Amelia",
                "Madelyn",
                "Ella",
                "Victoria",
                "Maeve",
                "John",
                "Elena",
                "Ella",
                "Penelope",
                "Henry",
                "Aurora",
                "Benjamin",
                "Ruby",
                "Olivia",
                "Nora",
                "Emily",
                "Holly",
                "Gabriel",
                "Lyla",
                "Lily",
                "Zara",
                "Christopher",
                "Evelyn",
                "Matthew",
                "Hazel",
                "Charlotte",
                "Grace",
                "Audrey",
                "Elizabeth",
                "Aria",
                "Hannah",
                "Michael",
                "Camila",
                "Samantha",
                "Sophia",
                "Mila",
                "Grace",
                "Madeline",
                "James",
                "Maya",
                "Liam",
                "Natalie",
                "Ava",
                "Eva",
                "Sophia",
                "Lucy",
                "Abigail",
                "Scarlett",
                "Amelia",
                "Emma",
                "Ella",
                "Emily",
                "Mia",
                "Isabella",
                "Olivia",
                "Sofia",
                "Avery",
                "Madison",
                "Charlotte",
                "Harper",
                "Lily",
                "Grace",
                "Mila",
                "Chloe",
                "Victoria",
                "Scarlett",
                "Elizabeth",
                "Aria",
                "Samantha",
                "Zoe",
                "Sophie",
                "Layla",
                "Evelyn",
                "Aubrey",
                "Nora",
                "Hannah",
                "Natalie",
                "Eva",
                "Amelia",
                "Aria",
                "Maeve",
                "Aurora",
                "Holly",
                "Lyla",
                "Ruby",
                "Zara",
                "Elena",
                "Lucia"
            ];
            const locations = [
                "New York",
                "Los Angeles",
                "Chicago",
                "Houston",
                "Phoenix",
                "Philadelphia",
                "San Antonio",
                "San Diego",
                "Dallas",
                "San Jose",
                "Austin",
                "Jacksonville",
                "San Francisco",
                "Indianapolis",
                "Columbus",
                "Fort Worth",
                "Charlotte",
                "Seattle",
                "Denver",
                "El Paso",
                "Detroit",
                "Washington, D.C.",
                "Boston",
                "Memphis",
                "Nashville",
                "Portland",
                "Oklahoma City",
                "Las Vegas",
                "Baltimore",
                "Louisville",
                "Milwaukee",
                "Albuquerque",
                "Tucson",
                "Fresno",
                "Sacramento",
                "Kansas City",
                "Long Beach",
                "Mesa",
                "Atlanta",
                "Colorado Springs",
                "Raleigh",
                "Miami",
                "Virginia Beach",
                "Omaha",
                "Oakland",
                "Minneapolis",
                "Tulsa",
                "Arlington",
                "Wichita",
                "New Orleans",
                "Bakersfield",
                "Cleveland",
                "Tampa",
                "Aurora",
                "Honolulu",
                "Anaheim",
                "Santa Ana",
                "Corpus Christi",
                "Riverside",
                "St. Louis",
                "Lexington",
                "Stockton",
                "Pittsburgh",
                "Saint Paul",
                "Anchorage",
                "Cincinnati",
                "Henderson",
                "Greensboro",
                "Plano",
                "Newark",
                "Toledo",
                "Lincoln",
                "Orlando",
                "Chula Vista",
                "Jersey City",
                "Chandler",
                "Fort Wayne",
                "Buffalo",
                "Durham",
                "St. Petersburg",
                "Irvine",
                "Laredo",
                "Lubbock",
                "Madison",
                "Gilbert",
                "Norfolk",
                "Reno",
                "Winston-Salem",
                "Glendale",
                "Hialeah",
                "Garland",
                "Scottsdale",
                "Irving",
                "Chesapeake",
                "North Las Vegas",
                "Fremont",
                "Baton Rouge",
                "Richmond",
                "Boise",
                "San Bernardino",
                "Spokane",
                "Des Moines",
                "Modesto",
                "Birmingham",
                "Tacoma",
                "Fontana",
                "Rochester",
                "Oxnard",
                "Moreno Valley",
                "Fayetteville",
                "Aurora",
                "Glendale",
                "Yonkers",
                "Huntington Beach",
                "Montgomery",
                "Amarillo",
                "Little Rock",
                "Akron",
                "Augusta",
                "Grand Rapids",
                "Mobile",
                "Salt Lake City",
                "Huntsville",
                "Tallahassee",
                "Grand Prairie",
                "Overland Park",
                "Knoxville",
                "Worcester",
                "Brownsville",
                "Newport News",
                "Santa Clarita",
                "Port St. Lucie",
                "Providence",
                "Fort Lauderdale",
                "Chattanooga",
                "Tempe",
                "Oceanside",
                "Garden Grove",
                "Rancho Cucamonga",
                "Cape Coral",
                "Santa Rosa",
                "Vancouver",
                "Sioux Falls",
                "Peoria",
                "Ontario",
                "Jackson",
                "Elk Grove",
                "Springfield",
                "Pembroke Pines",
                "Salem",
                "Corona",
                "Eugene",
                "McKinney",
                "Fort Collins",
                "Lancaster",
                "Cary",
                "Palmdale",
                "Hayward",
                "Salinas",
                "Frisco",
                "Springfield",
                "Pasadena",
                "Macon",
                "Alexandria",
                "Pomona",
                "Lakewood",
                "Sunnyvale",
                "Escondido",
                "Kansas City",
                "Hollywood",
                "Clarksville",
                "Joliet",
                "Rockford",
                "Torrance",
                "Naperville",
                "Paterson",
                "Savannah",
                "Bridgeport",
                "Mesquite",
                "Killeen",
                "Syracuse",
                "McAllen",
                "Pasadena",
                "Bellevue",
                "Fullerton",
                "Orange",
                "Dayton",
                "Miramar",
                "Thornton",
                "West Valley City",
                "Olathe",
                "Hampton",
                "Warren",
                "Midland",
                "Waco",
                "Charleston",
                "Denton",
                "Carrollton",
                "Surprise",
                "Roseville",
                "Sterling Heights",
                "Murfreesboro",
                "Gainesville",
                "Cedar Rapids",
                "Visalia",
                "Coral Springs",
                "New Haven",
                "Stamford",
                "Thousand Oaks",
                "Concord",
                "Elizabeth",
                "Lafayette",
                "Kent",
                "Santa Clara",
                "Simi Valley",
                "Lakeland",
                "Tuscaloosa",
                "Athens",
                "Columbia",
                "Waterbury",
                "Norwalk",
                "Rancho Cucamonga",
                "Inglewood",
                "Fairfield",
                "Costa Mesa",
                "Carlsbad",
                "Miami Gardens",
                "Westminster",
                "Clearwater",
                "Peoria",
                "Rochester",
                "Pueblo",
                "Elgin",
                "Tyler",
                "League City",
                "Davie",
                "Las Cruces",
                "South Bend",
                "Vista",
                "Greeley",
                "Daly City",
                "Boulder",
                "Allen",
                "West Covina",
                "Sparks",
                "Hawthorne",
                "Longview",
                "Bend",
                "McKinney",
                "Plantation",
                "Torrance",
                "Hampton",
                "Round Rock",
                "Rock Hill",
                "Miami Beach",
                "Lynchburg",
                "Davis",
                "Vacaville",
                "Meridian",
                "Cambridge",
                "Rialto",
                "New Bedford",
                "San Angelo",
                "Kenosha",
                "Redding",
                "Nashua",
                "Orem",
                "Sugar Land",
                "Edinburg",
                "Cicero",
                "Las Cruces",
                "South Bend",
                "Vista",
                "Greeley",
                "Daly City",
                "Boulder",
                "Allen",
                "West Covina",
                "Sparks",
                "Hawthorne",
                "Longview",
                "Bend",
                "McKinney",
                "Plantation",
                "Torrance",
                "Hampton",
                "Round Rock",
                "Rock Hill",
                "Miami Beach",
                "Lynchburg",
                "Davis",
                "Vacaville",
                "Meridian",
                "Cambridge",
                "Rialto",
                "New Bedford",
                "San Angelo",
                "Kenosha",
                "Redding",
                "Nashua",
                "Orem",
                "Sugar Land",
                "Edinburg",
                "Cicero",
                "Roanoke",
                "Kennewick",
                "Charleston",
                "Troy",
                "Farmington Hills",
                "Canton",
                "Warner Robins",
                "Perris",
                "Hesperia",
                "Lodi",
                "Auburn",
                "Broomfield",
                "Maple Grove",
                "Frisco",
                "Lake Forest",
                "Blaine",
                "Madison",
                "Youngstown",
                "Lynwood",
                "Cheyenne",
                "Bloomington",
                "Hendersonville",
                "Tamarac",
                "Des Plaines",
                "Galveston",
                "Madera",
                "Poway",
                "Edina",
                "Bryan",
                "Cicero",
                "Roanoke",
                "Kennewick",
                "Charleston",
                "Troy",
                "Farmington Hills",
                "Canton",
                "Warner Rob"
            ];
            const randomName = names[Math.floor(Math.random() * names.length)];
            const randomLocation = locations[Math.floor(Math.random() * locations.length)];
            const randomTime = getRandomTime();
            // Create a new booking alert
            const newAlert = `${randomName} from ${randomLocation} booked an order`;
            const timeAgo = `${randomTime} ago`;
            // Add the new alert to the list of alerts
            setAlerts((prevAlerts)=>[
                    ...prevAlerts,
                    {
                        text: newAlert,
                        time: timeAgo
                    }
                ]);
        }, 8000); // Display an alert every 8 seconds
        return ()=>{
            clearInterval(interval);
        };
    }, []);
    // Function to generate random time strings for demonstration
    const getRandomTime = ()=>{
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
    (0,react_.useEffect)(()=>{
        const timer = setTimeout(()=>{
            if (visibleAlertIndex < alerts.length - 1) {
                // Show the next alert if available
                setVisibleAlertIndex((prevIndex)=>prevIndex + 1);
            } else {
                // Hide the current alert if no more alerts
                setVisibleAlertIndex(-1);
            }
        }, 5000); // Display each alert for 5 seconds
        return ()=>{
            clearTimeout(timer);
        };
    }, [
        visibleAlertIndex,
        alerts
    ]);
    if (search.get("id") === null) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            style: {
                animation: "fadeOut 8s linear forwards"
            },
            className: "jsx-60ba2378085b2b70" + " " + "booking-alert-container",
            children: [
                alerts.map((alert, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "jsx-60ba2378085b2b70" + " " + `booking-alert ${index === visibleAlertIndex ? "visible" : "hidden"}`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "jsx-60ba2378085b2b70",
                                children: alert.text
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                className: "jsx-60ba2378085b2b70",
                                children: alert.time
                            })
                        ]
                    }, index)),
                jsx_runtime_.jsx((style_default()), {
                    id: "60ba2378085b2b70",
                    children: ".booking-alert-container.jsx-60ba2378085b2b70{position:fixed;bottom:100px;left:20px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:10px;background-color:#f0f5fa;color:#2196f3;width:140px;font-size:14px;font-weight:400;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;padding:5px;@-webkit-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@-moz-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@-o-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}}.booking-alert.jsx-60ba2378085b2b70{opacity:0;-webkit-transform:translatey(20px);-moz-transform:translatey(20px);-ms-transform:translatey(20px);-o-transform:translatey(20px);transform:translatey(20px);-webkit-transition:opacity.5s ease-in-out,-webkit-transform.5s ease-in-out;-moz-transition:opacity.5s ease-in-out,-moz-transform.5s ease-in-out;-o-transition:opacity.5s ease-in-out,-o-transform.5s ease-in-out;transition:opacity.5s ease-in-out,-webkit-transform.5s ease-in-out;transition:opacity.5s ease-in-out,-moz-transform.5s ease-in-out;transition:opacity.5s ease-in-out,-o-transform.5s ease-in-out;transition:opacity.5s ease-in-out,transform.5s ease-in-out}.booking-alert.visible.jsx-60ba2378085b2b70{opacity:1;-webkit-transform:translatey(0);-moz-transform:translatey(0);-ms-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0)}.booking-alert.hidden.jsx-60ba2378085b2b70{opacity:0;-webkit-transform:translatey(20px);-moz-transform:translatey(20px);-ms-transform:translatey(20px);-o-transform:translatey(20px);transform:translatey(20px)}"
                })
            ]
        });
    } else {
        return /*#__PURE__*/ jsx_runtime_.jsx("h1", {});
    }
};
/* harmony default export */ const bookingsAlert = (BookingAlert);

// EXTERNAL MODULE: ./node_modules/@sendgrid/mail/index.js
var mail = __webpack_require__(89026);
var mail_default = /*#__PURE__*/__webpack_require__.n(mail);
;// CONCATENATED MODULE: ./components/modalForm.tsx






const ModalForm = ()=>{
    const gridApi = "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";
    mail_default().setApiKey(gridApi);
    const [isOpen, setIsOpen] = (0,react_.useState)(false);
    const [formData, setFormData] = (0,react_.useState)({});
    const [currentQuestionIndex, setCurrentQuestionIndex] = (0,react_.useState)(0);
    const [estimatedPrice, setEstimatedPrice] = (0,react_.useState)(null);
    const [isLoading, setIsLoading] = (0,react_.useState)(false);
    const [originZipCode, setOriginZipCode] = (0,react_.useState)("");
    const [destinationZipCode, setDestinationZipCode] = (0,react_.useState)("");
    const [userEmail, setUserEmail] = (0,react_.useState)("");
    const [userPhone, setUserPhone] = (0,react_.useState)(undefined);
    const [make, setMake] = (0,react_.useState)("");
    const [model, setModel] = (0,react_.useState)("");
    const [openair, setOpen] = (0,react_.useState)("");
    const [functional, setFunctional] = (0,react_.useState)("");
    const [year, setYear] = (0,react_.useState)(undefined);
    // Define a data structure for car makes and models
    const carMakesAndModels = {
        Acura: [
            "ILX",
            "MDX",
            "NSX",
            "RDX",
            "RLX",
            "TLX"
        ],
        AlfaRomeo: [
            "4C",
            "Giulia",
            "Stelvio"
        ],
        AstonMartin: [
            "Aston Martin DB11",
            "Aston Martin DB7",
            "Aston Martin DB9",
            "Aston Martin DBS",
            "Aston Martin Lagonda",
            "Aston Martin Rapide",
            "Aston Martin V12 Vantage",
            "Aston Martin V8 Vantage",
            "Aston Martin Vantage",
            "Aston Martin Virage"
        ],
        Audi: [
            "A3",
            "A4",
            "A5",
            "A6",
            "A7",
            "A8",
            "S3",
            "S4",
            "S5",
            "S6",
            "S7",
            "S8",
            "RS3",
            "RS4",
            "RS5",
            "RS6",
            "RS7",
            "RS Q3",
            "TT",
            "TTS",
            "TT RS",
            "Q3",
            "Q4",
            "Q5",
            "SQ5",
            "Q7",
            "SQ7",
            "Q8",
            "SQ8",
            "e-tron",
            "R8"
        ],
        Bentley: [
            "Continental GT",
            "Flying Spur",
            "Bentayga",
            "Mulsanne",
            "Continental Supersports",
            "Bentley Azure",
            "Bentley Brooklands",
            "Bentley Arnage",
            "Bentley Turbo R",
            "Bentley Eight",
            "Bentley Continental R",
            "Bentley Continental T"
        ],
        BMW: [
            "1 Series",
            "2 Series",
            "3 Series",
            "4 Series",
            "5 Series",
            "6 Series",
            "7 Series",
            "8 Series",
            "X1",
            "X2",
            "X3",
            "X4",
            "X5",
            "X6",
            "X7",
            "Z3",
            "Z4",
            "M2",
            "M3",
            "M4",
            "M5",
            "M6",
            "i3",
            "i4",
            "i8",
            "X3 M",
            "X4 M",
            "X5 M",
            "X6 M"
        ],
        Buick: [
            "Enclave",
            "Encore",
            "Encore GX",
            "Envision",
            "LaCrosse",
            "Regal",
            "Regal Sportback",
            "Regal TourX"
        ],
        Cadillac: [
            "CT4",
            "CT4-V",
            "CT5",
            "CT5-V",
            "CT6",
            "CT6-V",
            "Escalade",
            "Escalade ESV",
            "XT4",
            "XT5",
            "XT6",
            "XTS"
        ],
        Chevrolet: [
            "Blazer",
            "Bolt EV",
            "Camaro",
            "Colorado",
            "Corvette",
            "Equinox",
            "Express 2500",
            "Impala",
            "Malibu",
            "Silverado 1500",
            "Silverado 2500HD",
            "Silverado 3500HD",
            "Spark",
            "Suburban",
            "Tahoe",
            "Trailblazer",
            "Traverse",
            "Trax"
        ],
        Chrysler: [
            "Chrysler 200",
            "Chrysler 300",
            "Chrysler Aspen",
            "Chrysler Cirrus",
            "Chrysler Concorde",
            "Chrysler Cordoba",
            "Chrysler Crossfire",
            "Chrysler E Class",
            "Chrysler Fifth Avenue",
            "Chrysler Imperial",
            "Chrysler Laser",
            "Chrysler LeBaron",
            "Chrysler LHS",
            "Chrysler New Yorker",
            "Chrysler Newport",
            "Chrysler Pacifica",
            "Chrysler Prowler",
            "Chrysler PT Cruiser",
            "Chrysler Royal",
            "Chrysler Saratoga",
            "Chrysler Sebring",
            "Chrysler TC by Maserati",
            "Chrysler Town & Country",
            "Chrysler Voyager"
        ],
        Dodge: [
            "Dodge Avenger",
            "Dodge Caliber",
            "Dodge Caravan",
            "Dodge Challenger",
            "Dodge Charger",
            "Dodge Colt",
            "Dodge D Series",
            "Dodge Dakota",
            "Dodge Dart",
            "Dodge Daytona",
            "Dodge Diplomat",
            "Dodge Durango",
            "Dodge Dynasty",
            "Dodge Intrepid",
            "Dodge Journey",
            "Dodge Magnum",
            "Dodge Mirada",
            "Dodge Monaco",
            "Dodge Neon",
            "Dodge Nitro",
            "Dodge Omni",
            "Dodge Polara",
            "Dodge Power Wagon",
            "Dodge Raider",
            "Dodge Ram",
            "Dodge Ramcharger",
            "Dodge Shadow",
            "Dodge Spirit",
            "Dodge Sprinter",
            "Dodge SRT Viper",
            "Dodge St. Regis",
            "Dodge Stealth",
            "Dodge Stratus",
            "Dodge Super Bee",
            "Dodge Viper",
            "Dodge Wayfarer"
        ],
        Daihatsu: [
            "Daihatsu Charade",
            "Daihatsu Copen",
            "Daihatsu Cuore",
            "Daihatsu Move",
            "Daihatsu Rocky",
            "Daihatsu Sirion",
            "Daihatsu Terios",
            "Daihatsu Hijet",
            "Daihatsu Materia",
            "Daihatsu Trevis",
            "Daihatsu YRV",
            "Daihatsu Applause",
            "Daihatsu Ayla",
            "Daihatsu Boon",
            "Daihatsu Cast",
            "Daihatsu Delta",
            "Daihatsu Esse",
            "Daihatsu Fellow Max",
            "Daihatsu Gran Max",
            "Daihatsu Leeza",
            "Daihatsu Mira",
            "Daihatsu Tanto",
            "Daihatsu Wake"
        ],
        Ferrari: [
            "125 S",
            "159 S",
            "166 Inter",
            "166 S",
            "166 MM",
            "166 Inter Sport",
            "166 Sport",
            "195 S",
            "195 Inter",
            "212 Export",
            "212 Inter",
            "212 MM",
            "340 America",
            "342 America",
            "375 MM",
            "375 America",
            "250 Europa",
            "250 S",
            "250 MM",
            "250 Monza",
            "250 Testa Rossa",
            "250 GT Berlinetta",
            "250 GT Lusso",
            "250 GT SWB",
            "250 GTO",
            "250 TR",
            "275 GTB",
            "275 GTS",
            "330 GT",
            "330 GTC",
            "330 GTS",
            "365 GT 2+2",
            "365 GTC",
            "365 GTS",
            "365 California",
            "Dino 206 GT",
            "Dino 246 GT",
            "Dino 246 GTS",
            "Dino 308 GT4",
            "308 GTB",
            "308 GTS",
            "208 GT4",
            "400",
            "400i",
            "412",
            "365 GT4 2+2",
            "400 GT",
            "365 GT4 BB",
            "512 BB",
            "512 BBi",
            "512 TR",
            "512 M",
            "550 Maranello",
            "456 GT",
            "456M GT",
            "612 Scaglietti",
            "575M Maranello",
            "599 GTB Fiorano",
            "599 GTO",
            "FF",
            "F12 Berlinetta",
            "488 GTB",
            "488 Pista",
            "812 Superfast",
            "California",
            "California T",
            "Portofino",
            "Roma",
            "SF90 Stradale",
            "LaFerrari",
            "Monza SP1",
            "Monza SP2"
        ],
        FIAT: [
            "FIAT 124 Spider",
            "FIAT 500",
            "FIAT 500L",
            "FIAT 500X",
            "FIAT 500e",
            "FIAT 500c",
            "FIAT 500 Abarth",
            "FIAT 500c Abarth",
            "FIAT 500e Abarth",
            "FIAT 500X Abarth"
        ],
        Fisker: [
            "Karma Revero",
            "Fisker Atlantic"
        ],
        Ford: [
            "Aspire",
            "Bronco",
            "C-Max",
            "Contour",
            "Crown Victoria",
            "E-150",
            "E-250",
            "E-350",
            "EcoSport",
            "Edge",
            "Escape",
            "Escort",
            "Excursion",
            "Expedition",
            "Explorer",
            "F-150",
            "F-250",
            "F-350",
            "Festiva",
            "Fiesta",
            "Five Hundred",
            "Flex",
            "Focus",
            "Freestar",
            "Freestyle",
            "Fusion",
            "GT",
            "Mustang",
            "Probe",
            "Ranger",
            "Taurus",
            "Tempo",
            "Thunderbird",
            "Transit Connect",
            "Windstar"
        ],
        Genesis: [
            "G70",
            "G80",
            "G90",
            "GV70",
            "GV80",
            "GV90",
            "Essentia",
            "Mint"
        ],
        GMC: [
            "Acadia",
            "Canyon",
            "Savana",
            "Sierra 1500",
            "Sierra 2500HD",
            "Sierra 3500HD",
            "Terrain",
            "Yukon",
            "Yukon XL"
        ],
        Honda: [
            "Accord",
            "Civic",
            "Clarity",
            "CR-V",
            "CR-Z",
            "Fit",
            "HR-V",
            "Insight",
            "Odyssey",
            "Passport",
            "Pilot",
            "Ridgeline"
        ],
        Hyundai: [
            "Accent",
            "Azera",
            "Elantra",
            "Elantra GT",
            "Entourage",
            "Equus",
            "Genesis",
            "Genesis Coupe",
            "Ioniq",
            "Kona",
            "Nexo",
            "Palisade",
            "Santa Fe",
            "Santa Fe Sport",
            "Santa Fe XL",
            "Sonata",
            "Tiburon",
            "Tucson",
            "Veloster",
            "Venue",
            "Veracruz",
            "XG300",
            "XG350"
        ],
        INFINITTI: [
            "EX35",
            "EX37",
            "FX35",
            "FX37",
            "FX45",
            "FX50",
            "G20",
            "G25",
            "G35",
            "G37",
            "I30",
            "I35",
            "J30",
            "JX35",
            "M30",
            "M35",
            "M35h",
            "M37",
            "M45",
            "M56",
            "Q40",
            "Q45",
            "Q50",
            "Q60",
            "Q70",
            "QX30",
            "QX4",
            "QX50",
            "QX56",
            "QX60",
            "QX70",
            "QX80"
        ],
        Jaguar: [
            "E-PACE",
            "F-PACE",
            "F-TYPE",
            "I-PACE",
            "S-TYPE",
            "X-TYPE",
            "XE",
            "XF",
            "XJ",
            "XJ8",
            "XJR",
            "XJS",
            "XK",
            "XK8",
            "XKR"
        ],
        Jeep: [
            "Cherokee",
            "Comanche",
            "Commander",
            "Compass",
            "Gladiator",
            "Grand Cherokee",
            "Grand Wagoneer",
            "Liberty",
            "Patriot",
            "Renegade",
            "Wagoneer",
            "Wrangler"
        ],
        Karma: [
            "Revero",
            "GS-6"
        ],
        Kia: [
            "Soul",
            "Forte",
            "Optima",
            "Cadenza",
            "Stinger",
            "K900",
            "Rio",
            "Niro",
            "Sportage",
            "Seltos",
            "Telluride",
            "Sorento",
            "Carnival",
            "Sephia",
            "Amanti",
            "Borrego",
            "Forte Koup",
            "Rondo",
            "K9",
            "Quoris",
            "Mohave",
            "Picanto",
            "Venga",
            "Provo",
            "GT4 Stinger",
            "Soul EV",
            "Niro EV",
            "Seltos EV",
            "EV6",
            "EV9"
        ],
        Lamborghini: [
            "Huracan",
            "Aventador",
            "Urus",
            "Gallardo",
            "Murcielago",
            "Diablo",
            "Countach",
            "Miura",
            "Jalpa",
            "Espada",
            "Islero",
            "Silhouette",
            "Jarama",
            "LM002",
            "Reventon",
            "Sesto Elemento",
            "Veneno",
            "Centenario",
            "Si\xe1n",
            "Egoista",
            "Terzo Millennio"
        ],
        LandRover: [
            "Defender",
            "Discovery",
            "Discovery Sport",
            "Range Rover",
            "Range Rover Sport",
            "Range Rover Velar",
            "Range Rover Evoque",
            "Freelander",
            "Series I",
            "Series II",
            "Series III",
            "Range Rover Classic",
            "Range Rover P38A",
            "Range Rover L322",
            "Range Rover L405",
            "Range Rover Sport First Generation",
            "Range Rover Sport Second Generation"
        ],
        Lexus: [
            "CT",
            "ES",
            "GS",
            "GX",
            "HS",
            "IS",
            "LC",
            "LFA",
            "LS",
            "LX",
            "NX",
            "RC",
            "RX",
            "SC",
            "UX"
        ],
        Lincoln: [
            "Aviator",
            "Blackwood",
            "Capri",
            "Continental",
            "Corsair",
            "LS",
            "Mark LT",
            "MKC",
            "MKS",
            "MKT",
            "MKX",
            "MKZ",
            "Navigator",
            "Nautilus",
            "Premiere",
            "Town Car",
            "Versailles",
            "Zephyr"
        ],
        Lucid: [
            "Air",
            "Air Dream Edition",
            "Air Grand Touring"
        ],
        Maserati: [
            "Ghibli",
            "Quattroporte",
            "Levante",
            "GranTurismo",
            "GranCabrio"
        ],
        Mazda: [
            "Mazda2",
            "Mazda3",
            "Mazda6",
            "MX-5 Miata",
            "CX-3",
            "CX-30",
            "CX-5",
            "CX-9"
        ],
        McLaren: [
            "540C",
            "570S",
            "570GT",
            "600LT",
            "620R",
            "650S",
            "675LT",
            "720S",
            "765LT",
            "P1",
            "Senna",
            "Speedtail"
        ],
        MercedezBenz: [
            "A-Class",
            "B-Class",
            "C-Class",
            "CLA-Class",
            "CLS-Class",
            "E-Class",
            "GLA-Class",
            "GLB-Class",
            "GLC-Class",
            "GLE-Class",
            "GLS-Class",
            "S-Class",
            "SLC-Class",
            "SL-Class",
            "AMG GT",
            "G-Class",
            "EQC",
            "Metris",
            "Sprinter"
        ],
        MINI: [
            "Cooper Hardtop 2 Door",
            "Cooper Hardtop 4 Door",
            "Cooper Convertible",
            "Clubman",
            "Countryman",
            "John Cooper Works (JCW) Hardtop 2 Door",
            "John Cooper Works (JCW) Hardtop 4 Door",
            "John Cooper Works (JCW) Convertible",
            "John Cooper Works (JCW) Clubman",
            "John Cooper Works (JCW) Countryman",
            "Electric Hardtop",
            "MINI SE Countryman ALL4 (Plug-In Hybrid)"
        ],
        Mitsubishi: [
            "Mitsubishi Model A",
            "Mitsubishi 360",
            "Mitsubishi 500",
            "Mitsubishi Colt",
            "Mitsubishi 3000GT",
            "Mitsubishi Montero",
            "Mitsubishi Lancer",
            "Mitsubishi Eclipse",
            "Mitsubishi Galant",
            "Mitsubishi Mirage",
            "Mitsubishi Outlander",
            "Mitsubishi Pajero",
            "Mitsubishi Raider",
            "Mitsubishi Diamante",
            "Mitsubishi Endeavor",
            "Mitsubishi Starion",
            "Mitsubishi Precis",
            "Mitsubishi Expo",
            "Mitsubishi Mighty Max",
            "Mitsubishi Van",
            "Mitsubishi Tredia",
            "Mitsubishi Cordia",
            "Mitsubishi Sigma",
            "Mitsubishi Montero Sport",
            "Mitsubishi 3000GT VR-4",
            "Mitsubishi Eclipse Cross"
        ],
        Nissan: [
            "Nissan Model 70",
            "Datsun Roadster",
            "Datsun Fairlady",
            "Datsun Bluebird",
            "Nissan Skyline",
            "Nissan Patrol",
            "Nissan Silvia",
            "Nissan 240Z",
            "Nissan Maxima",
            "Nissan Sentra",
            "Nissan Altima",
            "Nissan 300ZX",
            "Nissan Pathfinder",
            "Nissan Quest",
            "Nissan Frontier",
            "Nissan Xterra",
            "Nissan Murano",
            "Nissan Armada",
            "Nissan Titan",
            "Nissan GT-R",
            "Nissan Leaf",
            "Nissan Juke",
            "Nissan Cube",
            "Nissan Rogue",
            "Nissan Versa",
            "Nissan NV",
            "Nissan NV200",
            "Nissan 370Z",
            "Nissan Kicks",
            "Nissan NV Cargo",
            "Nissan NV Passenger"
        ],
        Polestar: [
            "Polestar 1",
            "Polestar 2"
        ],
        Porsche: [
            "Porsche 356",
            "Porsche 911",
            "Porsche 912",
            "Porsche 914",
            "Porsche 924",
            "Porsche 928",
            "Porsche 944",
            "Porsche 959",
            "Porsche 968",
            "Porsche Boxster",
            "Porsche Cayenne",
            "Porsche Carrera GT",
            "Porsche Cayman",
            "Porsche Macan",
            "Porsche Panamera",
            "Porsche Taycan"
        ],
        Ram: [
            "Ram 1500",
            "Ram 2500",
            "Ram 3500",
            "Ram 4500",
            "Ram 5500",
            "Ram ProMaster",
            "Ram ProMaster City"
        ],
        Rivian: [
            "Rivian R1T",
            "Rivian R1S"
        ],
        "Rolls-Royce": [
            "Rolls-Royce 10 hp",
            "Rolls-Royce 15 hp",
            "Rolls-Royce 20 hp",
            "Rolls-Royce 30 hp",
            "Rolls-Royce 40/50 hp (Silver Ghost)",
            "Rolls-Royce Phantom I",
            "Rolls-Royce Phantom II",
            "Rolls-Royce Phantom III",
            "Rolls-Royce Wraith",
            "Rolls-Royce Silver Wraith",
            "Rolls-Royce Silver Dawn",
            "Rolls-Royce Silver Cloud",
            "Rolls-Royce Silver Shadow",
            "Rolls-Royce Camargue",
            "Rolls-Royce Corniche",
            "Rolls-Royce Silver Spirit",
            "Rolls-Royce Silver Spur",
            "Rolls-Royce Park Ward",
            "Rolls-Royce Phantom IV",
            "Rolls-Royce Phantom V",
            "Rolls-Royce Phantom VI",
            "Rolls-Royce Silver Seraph",
            "Rolls-Royce Silver Spirit II",
            "Rolls-Royce Silver Spur II",
            "Rolls-Royce Phantom VII",
            "Rolls-Royce Ghost",
            "Rolls-Royce Wraith",
            "Rolls-Royce Dawn",
            "Rolls-Royce Cullinan"
        ],
        Subaru: [
            "Subaru 360",
            "Subaru R-2",
            "Subaru Sambar",
            "Subaru 1000",
            "Subaru FF-1",
            "Subaru Leone",
            "Subaru BRAT",
            "Subaru XT",
            "Subaru Justy",
            "Subaru Legacy",
            "Subaru Impreza",
            "Subaru SVX",
            "Subaru Outback",
            "Subaru Forester",
            "Subaru Tribeca",
            "Subaru Baja",
            "Subaru WRX",
            "Subaru Crosstrek (XV)",
            "Subaru Ascent"
        ],
        Tesla: [
            "Tesla Roadster (1st Generation)",
            "Tesla Model S",
            "Tesla Model X",
            "Tesla Model 3",
            "Tesla Model Y"
        ],
        Toyota: [
            "Toyota AA",
            "Toyota AB",
            "Toyota AC",
            "Toyota AE",
            "Toyota BA",
            "Toyota Publica",
            "Toyota Land Cruiser",
            "Toyota Crown",
            "Toyota Corolla",
            "Toyota Celica",
            "Toyota Cressida",
            "Toyota Supra",
            "Toyota MR2",
            "Toyota Camry",
            "Toyota Prius",
            "Toyota RAV4",
            "Toyota 4Runner",
            "Toyota Tacoma",
            "Toyota Tundra",
            "Toyota Echo",
            "Toyota Yaris",
            "Toyota Matrix",
            "Toyota Venza",
            "Toyota FJ Cruiser",
            "Toyota Highlander",
            "Toyota Sequoia",
            "Toyota Sienna",
            "Toyota Avalon",
            "Toyota Solara",
            "Toyota T100",
            "Toyota Tercel",
            "Toyota Paseo",
            "Toyota Previa",
            "Toyota Starlet",
            "Toyota MR2 Spyder",
            "Toyota Scion xA",
            "Toyota Scion xB",
            "Toyota Scion tC",
            "Toyota Scion xD",
            "Toyota Scion iQ",
            "Toyota Scion FR-S",
            "Toyota Scion IM",
            "Toyota 86"
        ],
        VinFast: [
            "VinFast LUX A2.0",
            "VinFast LUX SA2.0",
            "VinFast LUX V8.2",
            "VinFast LUX SA2.0 (SUV)",
            "VinFast LUX SA2.0 (Sedan)",
            "VinFast President"
        ],
        Volkswagen: [
            "Volkswagen Type 1",
            "Volkswagen Karmann Ghia",
            "Volkswagen Type 2",
            "Volkswagen Type 3",
            "Volkswagen Type 4",
            "Volkswagen Golf",
            "Volkswagen Polo",
            "Volkswagen Passat",
            "Volkswagen Jetta",
            "Volkswagen Scirocco",
            "Volkswagen Rabbit",
            "Volkswagen Fox",
            "Volkswagen Santana",
            "Volkswagen Corrado",
            "Volkswagen Phaeton",
            "Volkswagen Touareg",
            "Volkswagen Tiguan",
            "Volkswagen Atlas",
            "Volkswagen Arteon",
            "Volkswagen ID.3",
            "Volkswagen ID.4",
            "Volkswagen ID. Buzz",
            "Volkswagen Up!",
            "Volkswagen e-Golf",
            "Volkswagen e-Up!",
            "Volkswagen XL1",
            "Volkswagen Amarok",
            "Volkswagen T-Roc",
            "Volkswagen Taos",
            "Volkswagen Nivus"
        ],
        Volvo: [
            "Volvo \xd6V4",
            "Volvo PV4",
            "Volvo PV650 Series",
            "Volvo PV36 Carioca",
            "Volvo PV800 Series",
            "Volvo PV51",
            "Volvo PV60",
            "Volvo PV444",
            "Volvo PV544",
            "Volvo Amazon",
            "Volvo P1800",
            "Volvo 140 Series",
            "Volvo 240 Series",
            "Volvo 260 Series",
            "Volvo 340",
            "Volvo 360",
            "Volvo 440",
            "Volvo 460",
            "Volvo 480",
            "Volvo 740",
            "Volvo 760",
            "Volvo 780",
            "Volvo 850",
            "Volvo 940",
            "Volvo 960",
            "Volvo S40",
            "Volvo S60",
            "Volvo S70",
            "Volvo S80",
            "Volvo S90",
            "Volvo V40",
            "Volvo V50",
            "Volvo V60",
            "Volvo V70",
            "Volvo V90",
            "Volvo XC40",
            "Volvo XC60",
            "Volvo XC70",
            "Volvo XC90",
            "Volvo C30",
            "Volvo C70",
            "Volvo S40/V40 (2nd Generation)",
            "Volvo S60 (2nd Generation)",
            "Volvo S80 (2nd Generation)",
            "Volvo XC60 (2nd Generation)",
            "Volvo XC70 (2nd Generation)",
            "Volvo V60 (2nd Generation)",
            "Volvo V70 (2nd Generation)",
            "Volvo V90 (2nd Generation)",
            "Volvo S60 (3rd Generation)",
            "Volvo V60 (3rd Generation)",
            "Volvo XC40 Recharge",
            "Volvo XC90 (2nd Generation)",
            "Volvo XC40 (2nd Generation)",
            "Volvo S90 (2nd Generation)",
            "Volvo C40 Recharge"
        ],
        Wagoneer: [
            "Jeep Wagoneer (SJ) - 1963-1991",
            "Jeep Grand Wagoneer (SJ) - 1984-1991",
            "Jeep Grand Wagoneer Concept (Concept vehicle announced in 2020)"
        ]
    };
    // Create state variables for the selected make and model
    const [selectedMake, setSelectedMake] = (0,react_.useState)("");
    const [selectedModel, setSelectedModel] = (0,react_.useState)("");
    const questions = [
        // ... (other questions)
        {
            label: "Your Full Name",
            name: "fullname",
            type: "text",
            required: true
        },
        {
            label: "Your Phone Number",
            name: "phone",
            type: "number",
            required: true
        },
        {
            label: "Which of the Following transport Options do you prefer? Open or Enclosed? (check one)",
            name: "openair",
            type: "radio",
            required: false
        },
        {
            label: "Your Email Address",
            name: "email",
            type: "email",
            required: true
        },
        {
            label: "is this vehicle operable? Yes or no (check one)",
            name: "functional",
            type: "radio",
            required: false
        },
        {
            label: "Year of Your Vehicle",
            name: "year",
            type: "select",
            required: true,
            options: [
                "1899",
                "1900",
                "1901",
                "1902",
                "1903",
                "1904",
                "1905",
                "1906",
                "1907",
                "1908",
                "1909",
                "1910",
                "1911",
                "1912",
                "1913",
                "1914",
                "1915",
                "1916",
                "1917",
                "1918",
                "1919",
                "1920",
                "1921",
                "1922",
                "1923",
                "1924",
                "1925",
                "1926",
                "1927",
                "1928",
                "1929",
                "1930",
                "1931",
                "1932",
                "1933",
                "1934",
                "1935",
                "1936",
                "1937",
                "1938",
                "1939",
                "1940",
                "1941",
                "1942",
                "1943",
                "1944",
                "1945",
                "1946",
                "1947",
                "1948",
                "1949",
                "1950",
                "1951",
                "1952",
                "1953",
                "1954",
                "1955",
                "1956",
                "1957",
                "1958",
                "1959",
                "1960",
                "1961",
                "1962",
                "1963",
                "1964",
                "1965",
                "1966",
                "1967",
                "1968",
                "1969",
                "1970",
                "1971",
                "1972",
                "1973",
                "1974",
                "1975",
                "1976",
                "1977",
                "1978",
                "1979",
                "1980",
                "1981",
                "1982",
                "1983",
                "1984",
                "1985",
                "1986",
                "1987",
                "1988",
                "1989",
                "1990",
                "1991",
                "1992",
                "1993",
                "1994",
                "1995",
                "1996",
                "1997",
                "1998",
                "1999",
                "2000",
                "2001",
                "2002",
                "2003",
                "2004",
                "2005",
                "2006",
                "2007",
                "2008",
                "2009",
                "2010",
                "2011",
                "2012",
                "2013",
                "2014",
                "2015",
                "2016",
                "2017",
                "2018",
                "2019",
                "2020",
                "2021",
                "2022",
                "2023"
            ]
        },
        {
            label: "Make of Your Vehicle",
            name: "make",
            type: "select",
            required: true,
            options: Object.keys(carMakesAndModels)
        },
        {
            label: "Model of Your Vehicle",
            name: "model",
            type: "select",
            required: true,
            options: selectedMake ? carMakesAndModels[selectedMake] : []
        },
        {
            label: "Origin Name/Zipcode",
            name: "pickup",
            type: "text",
            required: true
        },
        {
            label: "Date you prefer for Pickup",
            name: "pickupdate",
            type: "date",
            required: true
        },
        {
            label: "Destination Name/Zipcode",
            name: "destination",
            type: "text",
            required: true
        }
    ];
    (0,react_.useEffect)(()=>{
    // Add any additional logic you need when the component mounts
    }, []);
    const handleInputChange = (e)=>{
        const { name, value, type } = e.target;
        const inputValue = type === "checkbox" ? e.target.checked : value;
        // Update the state based on the input field name
        switch(name){
            case "pickup":
                setOriginZipCode(inputValue);
                break;
            case "destination":
                setDestinationZipCode(inputValue);
                break;
            case "year":
                setYear(parseInt(inputValue, 10) || undefined);
                break;
            case "email":
                setUserEmail(inputValue);
                break;
            case "make":
                setMake(inputValue);
                // Set the selected make and reset the selected model
                setSelectedMake(inputValue);
                setSelectedModel("");
                break;
            case "model":
                setModel(inputValue);
                // Update the selected model
                setSelectedModel(inputValue);
                break;
            case "phone":
                setUserPhone(parseInt(inputValue, 10) || undefined);
                break;
            case "openair":
                setOpen(inputValue);
                break;
            case "functional":
                setFunctional(inputValue);
                break;
            default:
                break;
        }
        // Update the form data
        setFormData((prevData)=>({
                ...prevData,
                [name]: inputValue
            }));
    };
    // Add an event listener to update available models when the selected make changes
    (0,react_.useEffect)(()=>{
        if (selectedMake) {
            setModel("");
        }
    }, [
        selectedMake
    ]);
    const handleSubmit = async (event)=>{
        event.preventDefault();
        setFormData((prevData)=>({
                ...prevData,
                [questions[currentQuestionIndex].name]: undefined
            }));
        setCurrentQuestionIndex((prevIndex)=>prevIndex + 1);
        if (currentQuestionIndex === questions.length - 1) {
            setIsLoading(true);
            setTimeout(async ()=>{
                try {
                    // Calculate the estimated price using the user-input data
                    await calculateEstimatedPrice(originZipCode, destinationZipCode, userEmail, userPhone, make, model, year, openair, functional);
                    setIsLoading(false);
                } catch (error) {
                    console.error("Error calculating estimated price:", error);
                    setEstimatedPrice(null);
                }
            }, 3000);
        }
    };
    const calculateEstimatedPrice = async (originZip, destinationZip, userEmail, userPhone, make, model, year, openair, functional)=>{
        try {
            console.log(originZip, destinationZip);
            const response = await fetch("https://x6ol2zivtfn6moc57tzris3txi0qcspu.lambda-url.us-east-2.on.aws/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "https://barbarav2.vercel.app"
                },
                body: JSON.stringify({
                    origin: originZip,
                    destination: destinationZip,
                    year: year,
                    model: model,
                    make: make,
                    email: userEmail,
                    phone: userPhone,
                    openair: openair,
                    functional: functional
                })
            });
            const quote_id = `${Math.floor(Math.random() * 10000)}`;
            const years = "121";
            if (!response.ok) {
                throw new Error("Failed to fetch estimated price");
            }
            const data = await response.json();
            console.log(data);
            const estimatedCost = parseFloat(data.Cost);
            addToDB(originZip, destinationZip, userEmail, userPhone, make, model, year, openair, quote_id, data.Cost);
            setEstimatedPrice(estimatedCost);
        } catch (error) {
            console.error("Error calculating estimated price:", error);
            setEstimatedPrice(null);
        }
    };
    const handleBookNow = async ()=>{
        alert("Details will be emailed to you shortly at " + userEmail);
        // Send email using SendGrid
        //  const msg = {
        //   to: userEmail, // Change to the user's email
        //   from: 'info@orocast.com', // Change to your verified sender
        //   subject: 'Estimated Price Calculation',
        //   text: `Your estimated price is: ${estimatedPrice}`,
        //   html: `<strong>Your estimated price is:</strong> ${estimatedPrice}`,
        // };
        // await sgMail.send(msg);
        window.location.reload();
    };
    const handleModalClose = ()=>{
        setIsOpen(false);
        setCurrentQuestionIndex(0);
        setEstimatedPrice(null);
    };
    const renderQuestion = (question)=>{
        switch(question.type){
            case "text":
                return /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    type: "text",
                    name: question.name,
                    style: {
                        color: "black",
                        fontWeight: "700"
                    },
                    value: formData[question.name],
                    onChange: handleInputChange,
                    required: question.required,
                    className: "form-control"
                });
            case "radio":
                if (question.name === "functional") {
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "radio",
                                        name: question.name,
                                        value: "true",
                                        style: {
                                            color: "black",
                                            fontWeight: "700"
                                        },
                                        checked: formData[question.name] === "true",
                                        onChange: handleInputChange,
                                        required: question.required,
                                        className: "form-control"
                                    }),
                                    "Yes\xa0\xa0\xa0\xa0"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "radio",
                                        name: question.name,
                                        value: "false",
                                        style: {
                                            color: "black",
                                            fontWeight: "700"
                                        },
                                        checked: formData[question.name] === "false",
                                        onChange: handleInputChange,
                                        required: question.required,
                                        className: "form-control"
                                    }),
                                    "No"
                                ]
                            })
                        ]
                    });
                } else {
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "radio",
                                        name: question.name,
                                        value: "true",
                                        style: {
                                            color: "black",
                                            fontWeight: "700"
                                        },
                                        checked: formData[question.name] === "true",
                                        onChange: handleInputChange,
                                        required: question.required,
                                        className: "form-control"
                                    }),
                                    "Open\xa0\xa0\xa0\xa0"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "radio",
                                        name: question.name,
                                        value: "false",
                                        style: {
                                            color: "black",
                                            fontWeight: "700"
                                        },
                                        checked: formData[question.name] === "false",
                                        onChange: handleInputChange,
                                        required: question.required,
                                        className: "form-control"
                                    }),
                                    "Closed"
                                ]
                            })
                        ]
                    });
                }
            case "email":
                return /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    type: "email",
                    name: question.name,
                    style: {
                        color: "black",
                        fontWeight: "700"
                    },
                    value: formData[question.name],
                    onChange: handleInputChange,
                    required: question.required,
                    className: "form-control"
                });
            case "number":
                return /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    type: "number",
                    name: question.name,
                    style: {
                        color: "black",
                        fontWeight: "700"
                    },
                    value: formData[question.name],
                    onChange: handleInputChange,
                    required: question.required,
                    className: "form-control"
                });
            case "date":
                return /*#__PURE__*/ jsx_runtime_.jsx(dist/* default */.ZP, {
                    selected: formData[question.name],
                    onChange: (date)=>handleInputChange({
                            target: {
                                name: question.name,
                                value: date
                            }
                        }),
                    required: question.required,
                    className: "form-control"
                });
            case "select":
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                    name: question.name,
                    style: {
                        color: "black",
                        fontWeight: "700"
                    },
                    value: formData[question.name],
                    onChange: handleInputChange,
                    required: question.required,
                    className: "form-control",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: "",
                            children: "Select an option"
                        }),
                        question.options && question.options.map((option)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: option,
                                children: option
                            }, option))
                    ]
                });
            default:
                return null;
        }
    };
    const closeModal = ()=>{
        setIsOpen(false);
    };
    // Define the renderModelSelect function to render the model select input
    const renderModelSelect = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
            name: "model",
            style: {
                color: "black",
                fontWeight: "700",
                opacity: 0
            },
            value: formData["model"],
            onChange: handleInputChange,
            required: true,
            className: "form-control",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                    value: ""
                }),
                selectedMake && carMakesAndModels[selectedMake].map((model)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: model,
                        children: model
                    }, model))
            ]
        });
    };
    const addToDB = async (originZip, destinationZip, userEmail, userPhone, make, model, year, openair, quote_id, cost)=>{
        try {
            const response = await fetch("https://4af3gk9g62.execute-api.us-east-2.amazonaws.com/default/create_carrier", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Origin": "https://barbarav2.vercel.app"
                },
                body: JSON.stringify({
                    TableName: "free_quotes",
                    Item: {
                        origin: originZip,
                        destination: destinationZip,
                        year: year,
                        model: model,
                        make: make,
                        email: userEmail,
                        phone: userPhone,
                        openair: openair,
                        quote_id: quote_id,
                        quote_price: cost
                    }
                })
            });
            if (response.ok) {
                console.log("Added to Db");
                try {
                    const response = await fetch("https://4af3gk9g62.execute-api.us-east-2.amazonaws.com/default/create_carrier", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Origin": "https://barbarav2.vercel.app"
                        },
                        body: JSON.stringify({
                            TableName: "bookings",
                            Item: {
                                origin: originZip,
                                destination: destinationZip,
                                year: year,
                                model: model,
                                make: make,
                                email: userEmail,
                                phone: userPhone,
                                openair: openair,
                                booking_id: quote_id,
                                carrier_id: 0,
                                amount: cost,
                                createdDate: Date.now
                            }
                        })
                    });
                    if (response.ok) {
                        console.log("Added to bookings");
                    } else {
                        console.log("Sign up failed.");
                    }
                } catch (error) {
                    console.error("Error:", error);
                    alert("An error occurred. Please try again later.");
                }
            } else {
                console.log("Sign up failed.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again later.");
        }
    };
    const addToBooking = async (originZip, destinationZip, userEmail, userPhone, make, model, year, openair, quote_id, cost)=>{
        try {
            const response = await fetch("https://4af3gk9g62.execute-api.us-east-2.amazonaws.com/default/create_carrier", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Origin": "https://barbarav2.vercel.app"
                },
                body: JSON.stringify({
                    TableName: "bookings",
                    Item: {
                        origin: originZip,
                        destination: destinationZip,
                        year: year,
                        model: model,
                        make: make,
                        email: userEmail,
                        phone: userPhone,
                        openair: openair,
                        booking_id: quote_id,
                        carrier_id: 0,
                        amount: cost,
                        createdDate: Date.now
                    }
                })
            });
            if (response.ok) {
                console.log("Added to bookings");
            } else {
                console.log("Sign up failed.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again later.");
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(bookingsAlert, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "btn text-white bg-blue-700 hover:bg-blue-800 w-full sm:w-auto sm:ml-4",
                onClick: ()=>setIsOpen(true),
                children: "FREE QUOTE"
            }),
            isOpen && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "modal-overlay",
                style: {
                    backgroundColor: "black",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "modal-content",
                    style: {
                        backgroundColor: "white",
                        color: "black",
                        padding: "2rem",
                        fontWeight: "700",
                        borderRadius: "10px",
                        maxWidth: "500px",
                        textAlign: "center"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            style: {
                                float: "right",
                                marginTop: "-30px",
                                marginRight: "-22px"
                            },
                            className: "close-button",
                            onClick: closeModal,
                            children: "\xd7"
                        }),
                        currentQuestionIndex < questions.length && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    style: {
                                        padding: "5px"
                                    },
                                    children: questions[currentQuestionIndex].label
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                    onSubmit: handleSubmit,
                                    children: [
                                        renderQuestion(questions[currentQuestionIndex]),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "form-button",
                                            type: "submit",
                                            style: {
                                                backgroundColor: "#0079d7",
                                                color: "white",
                                                padding: "0.5rem 1rem",
                                                marginLeft: "3px",
                                                border: "none",
                                                borderRadius: "5px",
                                                fontSize: "14px",
                                                cursor: "pointer"
                                            },
                                            children: "Next"
                                        })
                                    ]
                                })
                            ]
                        }),
                        currentQuestionIndex === questions.length && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: "Estimated Price:"
                                }),
                                isLoading ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Loading..."
                                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        "$",
                                        estimatedPrice !== null ? estimatedPrice.toFixed(2) : "N/A"
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "form-button",
                                    onClick: handleBookNow,
                                    style: {
                                        backgroundColor: "#6B46C1",
                                        color: "white",
                                        padding: "0.5rem 1rem",
                                        border: "none",
                                        borderRadius: "4px",
                                        fontSize: "14px",
                                        cursor: "pointer",
                                        marginLeft: "60px"
                                    },
                                    children: "Book Now"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "form-button",
                                    onClick: handleModalClose,
                                    style: {
                                        backgroundColor: "transparent",
                                        color: "white",
                                        padding: "0.5rem 1rem",
                                        border: "1px solid white",
                                        borderRadius: "4px",
                                        fontSize: "14px",
                                        marginTop: "1rem",
                                        cursor: "pointer"
                                    },
                                    children: "Close"
                                })
                            ]
                        }),
                        currentQuestionIndex < questions.length && questions[currentQuestionIndex].name === "model" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {}),
                                renderModelSelect()
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const modalForm = (ModalForm);


/***/ }),

/***/ 53177:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(53516);
// EXTERNAL MODULE: ./components/modalForm.tsx + 1 modules
var modalForm = __webpack_require__(52164);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(57114);
;// CONCATENATED MODULE: ./components/ui/mobile-menu.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





function MobileMenu() {
    const [mobileNavOpen, setMobileNavOpen] = (0,react_.useState)(false);
    const proxy = (0,module_proxy/* createProxy */.D)("C:/Users/arif_/Downloads/open-react-template-master/components/ui/mobile-menu.tsx");
    const trigger = (0,react_.useRef)(null);
    const mobileNav = (0,react_.useRef)(null);
    // Get userid from query parameters
    const search = (0,navigation.useSearchParams)();
    const userid = search.get("id");
    // close the mobile menu on click outside
    (0,react_.useEffect)(()=>{
        const clickHandler = ({ target })=>{
            if (!mobileNav.current || !trigger.current) return;
            if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
            setMobileNavOpen(false);
        };
        document.addEventListener("click", clickHandler);
        return ()=>document.removeEventListener("click", clickHandler);
    });
    // close the mobile menu if the esc key is pressed
    (0,react_.useEffect)(()=>{
        const keyHandler = ({ keyCode })=>{
            if (!mobileNavOpen || keyCode !== 27) return;
            setMobileNavOpen(false);
        };
        document.addEventListener("keydown", keyHandler);
        return ()=>document.removeEventListener("keydown", keyHandler);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "md:hidden",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                ref: trigger,
                className: `hamburger ${mobileNavOpen && "active"}`,
                "aria-controls": "mobile-nav",
                "aria-expanded": mobileNavOpen,
                onClick: ()=>setMobileNavOpen(!mobileNavOpen),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "sr-only",
                        children: "Menu"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                        className: "w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out",
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                y: "4",
                                width: "24",
                                height: "2",
                                rx: "1"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                y: "11",
                                width: "24",
                                height: "2",
                                rx: "1"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                y: "18",
                                width: "24",
                                height: "2",
                                rx: "1"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                id: "mobile-nav",
                ref: mobileNav,
                className: "absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out",
                style: mobileNavOpen ? {
                    maxHeight: mobileNav.current?.scrollHeight,
                    opacity: 1
                } : {
                    maxHeight: 0,
                    opacity: 0.8
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: "bg-gray-800 px-4 py-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(modalForm/* default */.Z, {})
                        }),
                        !userid ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/signin",
                                    className: "font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out",
                                    children: "Sign in"
                                })
                            })
                        }) : null,
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/about",
                                className: "font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out",
                                children: "About"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/contact",
                                className: "font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out",
                                children: "Contact"
                            })
                        }),
                        userid ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: `/payouts?id=${userid}`,
                                    className: "font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out",
                                    children: "Your Payouts"
                                })
                            })
                        }) : null,
                        " ",
                        userid ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: `/bookings?id=${userid}`,
                                        className: "font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out",
                                        children: "Your Bookings"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: `/carriers?id=${userid}`,
                                        className: "font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out",
                                        children: "Your Carriers"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: `/`,
                                        className: "font-medium text-red-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out",
                                        children: "Log Out"
                                    })
                                })
                            ]
                        }) : null,
                        !userid ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/signup",
                                    className: "btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3",
                                    children: "Sign up"
                                })
                            })
                        }) : null,
                        userid ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: `/profile?id=${userid}`,
                                    className: "btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3",
                                    children: "My Profile"
                                })
                            })
                        }) : null
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/ui/header.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




function Header() {
    const [isModalOpen, setIsModalOpen] = (0,react_.useState)(false);
    const search = (0,navigation.useSearchParams)();
    const userid = search.get("id");
    const adminid = search.get("aid");
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "absolute w-full z-30",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "max-w-6xl mx-auto px-4 sm:px-6",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center justify-between h-20",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "shrink-0 mr-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            className: "block",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/images/whitelogo.png",
                                className: "logo",
                                style: {
                                    width: "150px",
                                    height: "auto"
                                }
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                        className: "hidden md:flex md:grow",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "flex grow justify-end items-center space-x-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        className: "font-medium text-purple-600 hover:text-gray-200 px-3 py-3",
                                        children: "Home"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "#about",
                                        className: "font-medium text-purple-600 hover:text-gray-200 px-3 py-3",
                                        children: "About"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "#services",
                                        className: "font-medium text-purple-600 hover:text-gray-200 px-3 py-3",
                                        children: "Services"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "#pricing",
                                        className: "font-medium text-purple-600 hover:text-gray-200 px-3 py-3",
                                        children: "Pricing"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/contact",
                                        className: "font-medium text-purple-600 hover:text-gray-200 px-3 py-3",
                                        children: "Contact"
                                    })
                                }),
                                adminid && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/admin/dashboard",
                                                className: "font-medium text-purple-600 hover:text-gray-200 px-3 py-3",
                                                children: "Dashboard"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/admin/users",
                                                className: "font-medium text-purple-600 hover:text-gray-200 px-3 py-3",
                                                children: "Users"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/admin/settings",
                                                className: "font-medium text-purple-600 hover:text-gray-200 px-3 py-3",
                                                children: "Settings"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                className: "font-medium text-red-600 hover:text-gray-200 px-3 py-3",
                                                children: "Sign Out"
                                            })
                                        })
                                    ]
                                }),
                                userid && !adminid && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: `/dashboard?id=${userid}`,
                                                className: "font-medium text-purple-600 hover:text-gray-200 px-3 py-3",
                                                children: "Dashboard"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: `/profile?id=${userid}`,
                                                className: "font-medium text-purple-600 hover:text-gray-200 px-3 py-3",
                                                children: "My Profile"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                className: "font-medium text-red-600 hover:text-gray-200 px-3 py-3",
                                                children: "Log Out"
                                            })
                                        })
                                    ]
                                }),
                                !userid && !adminid && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/signin",
                                                className: "font-medium text-purple-600 hover:text-gray-200 px-3 py-3",
                                                children: "Sign In"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/signup",
                                                className: "btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-2",
                                                children: "Sign Up"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/request-help",
                                        className: "btn-sm text-white bg-red-600 hover:bg-red-700 ml-3",
                                        children: "Roadside Help"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(MobileMenu, {})
                ]
            })
        })
    });
}


/***/ }),

/***/ 3393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app\\layout.tsx","import":"Inter","arguments":[{"subsets":["latin"],"variable":"--font-inter","display":"swap"}],"variableName":"inter"}
var target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_display_swap_variableName_inter_ = __webpack_require__(64135);
var target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_display_swap_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_display_swap_variableName_inter_);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app\\layout.tsx","import":"Architects_Daughter","arguments":[{"subsets":["latin"],"variable":"--font-architects-daughter","weight":"400","display":"swap"}],"variableName":"architects_daughter"}
var target_path_app_layout_tsx_import_Architects_Daughter_arguments_subsets_latin_variable_font_architects_daughter_weight_400_display_swap_variableName_architects_daughter_ = __webpack_require__(2178);
var target_path_app_layout_tsx_import_Architects_Daughter_arguments_subsets_latin_variable_font_architects_daughter_weight_400_display_swap_variableName_architects_daughter_default = /*#__PURE__*/__webpack_require__.n(target_path_app_layout_tsx_import_Architects_Daughter_arguments_subsets_latin_variable_font_architects_daughter_weight_400_display_swap_variableName_architects_daughter_);
// EXTERNAL MODULE: ./app/css/style.css
var style = __webpack_require__(12729);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./components/ui/header.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\jawad\Documents\talha\redefined\components\ui\header.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const header = (__default__);
;// CONCATENATED MODULE: ./app/layout.tsx





const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: `${(target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_display_swap_variableName_inter_default()).variable} ${(target_path_app_layout_tsx_import_Architects_Daughter_arguments_subsets_latin_variable_font_architects_daughter_weight_400_display_swap_variableName_architects_daughter_default()).variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`,
            style: {
                backgroundColor: "white",
                color: "black"
            },
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col min-h-screen overflow-hidden",
                style: {
                    backgroundColor: "white",
                    color: "black"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(header, {}),
                    children
                ]
            })
        })
    });
}


/***/ }),

/***/ 12729:
/***/ (() => {



/***/ })

};
;