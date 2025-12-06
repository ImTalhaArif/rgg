"use strict";
exports.id = 265;
exports.ids = [265];
exports.modules = {

/***/ 1265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ CarrierDetails)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98680);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24754);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42752);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_5__);




 // Import the autoTable plugin for table creation

function CarrierDetails() {
    const [modalIsOpen, setModalIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const search = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useSearchParams)();
    const userid = search.get("id");
    let cleanedNumber = userid;
    if (userid !== null) {
        cleanedNumber = userid.replace(/"/g, "");
    }
    const [trucks, setTrucks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // Use the type for an array of TruckData
    const [truckData, setTruckData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        company: "",
        DOT: "",
        MC: "",
        carrier_id: ""
    });
    const [carrierId, setId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        openModal();
    }, []);
    const openModal = ()=>{
        setModalIsOpen(true);
    };
    const closeModal = ()=>{
        setModalIsOpen(false);
    };
    const handleSubmit = async (e)=>{
        const doc = new jspdf__WEBPACK_IMPORTED_MODULE_3__["default"]();
        // Load your logo image
        const logo = new Image();
        logo.src = "/images/whitelogo.png";
        logo.onload = function() {
            const logoWidth = 50;
            const logoHeight = 10;
            const logoX = 15;
            const logoY = 15;
            // Add logo to the PDF
            doc.addImage(logo, "PNG", logoX, logoY, logoWidth, logoHeight);
            // Add a heading below the logo
            const headingX = 100;
            const headingY = 50;
            doc.setFontSize(24);
            doc.text("Vehicle Registration Report", headingX, headingY, {
                align: "center"
            });
            // Define user details table
            const userDetails = [
                [
                    "Carrier ID:",
                    cleanedNumber
                ],
                [
                    "Company:",
                    truckData.company
                ],
                [
                    "DOT #:",
                    truckData.DOT
                ],
                [
                    "MC #:",
                    truckData.MC
                ],
                [
                    "Status:",
                    "Pending Approval"
                ]
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
            jspdf_autotable__WEBPACK_IMPORTED_MODULE_4___default()(doc, {
                body: userDetails,
                margin: {
                    left: tableX
                },
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
            doc.text(trademarkText, trademarkX, trademarkY, {
                align: "center"
            });
            // Save or download the PDF
            doc.save("carrier_registration.pdf");
        };
        e.preventDefault();
        alert("Data Being Processed...");
        const payload = {
            TableName: "carrier_details",
            Item: {
                carrier_id: `${cleanedNumber}`,
                trucks: trucks
            }
        };
        try {
            console.log(payload);
            const currentDate = new Date();
            const response = await fetch("https://4af3gk9g62.execute-api.us-east-2.amazonaws.com/default/create_carrier", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    TableName: `carrier_details`,
                    Item: {
                        carrier_id: `${cleanedNumber}`,
                        vehicle_id: `${Math.floor(Math.random() * 10000)}`,
                        company: `${truckData.company}`,
                        DOT: `${truckData.DOT}`,
                        MC: `${truckData.MC}`,
                        Status: `Pending Approval`,
                        CreatedDate: `${currentDate.toLocaleDateString()}`
                    }
                })
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
    };
    const handleAddTruck = ()=>{
        setTrucks([
            ...trucks,
            truckData
        ]);
        setTruckData({
            company: "",
            DOT: "",
            MC: "",
            carrier_id: ""
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
            color: "#000",
            backgroundColor: "black",
            height: "auto",
            width: "200px;"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_modal__WEBPACK_IMPORTED_MODULE_2___default()), {
            isOpen: modalIsOpen,
            onRequestClose: closeModal,
            contentLabel: "Carrier Details Modal",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    style: {
                        color: "black",
                        margin: "10px"
                    },
                    children: "Kindly Add The required Details to proceed with your Registration"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    style: {
                                        color: "black"
                                    },
                                    children: "Company:"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    style: {
                                        borderRadius: "22px",
                                        margin: "10px",
                                        color: "black"
                                    },
                                    type: "text",
                                    value: truckData.company,
                                    onChange: (e)=>setTruckData({
                                            ...truckData,
                                            company: e.target.value
                                        })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    style: {
                                        color: "black"
                                    },
                                    children: "DOT #:"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    style: {
                                        borderRadius: "22px",
                                        margin: "10px",
                                        color: "black"
                                    },
                                    type: "text",
                                    value: truckData.DOT,
                                    onChange: (e)=>setTruckData({
                                            ...truckData,
                                            DOT: e.target.value
                                        })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    style: {
                                        color: "black"
                                    },
                                    children: "MC #:"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    style: {
                                        borderRadius: "22px",
                                        margin: "10px",
                                        color: "black"
                                    },
                                    type: "text",
                                    value: truckData.MC,
                                    onChange: (e)=>setTruckData({
                                            ...truckData,
                                            MC: e.target.value
                                        })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "btn btn-info",
                            type: "submit",
                            style: {
                                backgroundColor: "#09c204",
                                borderRadius: "22px",
                                margin: "10px"
                            },
                            children: "Submit"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: closeModal,
                            className: "btn btn-danger",
                            style: {
                                backgroundColor: "#d30e1d",
                                borderRadius: "22px",
                                margin: "10px"
                            },
                            children: "Close"
                        })
                    ]
                })
            ]
        })
    });
}


/***/ })

};
;