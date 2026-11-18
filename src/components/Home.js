//Import
import FormCustomerDetail from "./home/FormCustomerDetails.js";
import FormRepairDetail from "./home/FormRepairDetails.js";
import FormCourtesyDetail from "./home/FormCourtesyDetails.js";
import FormCostDetail from "./home/FormCostDetails.js";
import Buttons from "./home/Buttons.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from './supabaseClient.js'; //import Supabase things


//Function
function Home() {
    //Parent component: Home
    const updateBond = (value) => {
        setSharedBond(value);
        
        let bond = 0;
        sharedCustType === "business" ? bond = 0 : bond = value;
        let service = 0;
        let gst = 0;
        sharedWarranty ? service = bond + 0 : service = bond + 85;
        gst = service * 0.15;
        setSharedService(service);
        setSharedGst(gst);
        setSharedTotal(service + gst);
    }; //Child1 (FormCourtesyPhone) pass to Child2 (FormCost)
    

    const updateWarranty = (value) => {
        setSharedWarranty(value);
        
        let bond = 0;
        sharedCustType === "business" ? bond = 0 : bond = sharedBond;
        let service = 0;
        let gst = 0;
        value ? service = bond + 0 : service = bond + 85;
        gst = service * 0.15;
        setSharedService(service);
        setSharedGst(gst);
        setSharedTotal(service + gst);
    }; //Child1 (FormRepairDetails) pass to Child2 (FormCost)
    
    
    const updateCustType = (value) => {
        setSharedCustType(value);
        
        let bond = 0;
        value === "business" ? bond = 0 : bond = sharedBond;
        let service = 0;
        let gst = 0;
        sharedWarranty ? service = bond + 0 : service = bond + 85;
        gst = service * 0.15;
        setSharedService(service);
        setSharedGst(gst);
        setSharedTotal(service + gst);
    }

    const [sharedBond, setSharedBond] = useState(0); //Child2 receive from Child1
    const [sharedWarranty, setSharedWarranty] = useState(0);
    const [sharedCustType, setSharedCustType] = useState(0)

    const [sharedService, setSharedService] = useState(0)
    const [sharedGst, setSharedGst] = useState(0)
    const [sharedTotal, setSharedTotal] = useState(0)

    //Pass customer details from customer details form to Hom
    const [customerDetails, setCustomerDetails] = useState({title: "", firstname: "", lastname: "", street: "", suburb: "", city: "", postcode: "", phonenumber: "", email: ""});
    const [repairDetails, setRepairDetails] = useState({purchasedate: "", repairdate: "", warranty: false, imeinumber: "", make: "", model: "", fault: "", faultdesc: ""});
    const [courtesyDetails, setCourtesyDetails] = useState({phone: "", charger: ""});

    //Styles
    const customerDetailStyle = {
        minHeight: '30vh',
        backgroundColor: '#FCF3CF'
    }
    const repairDetailStyle = {
        minHeight: '30vh',
        backgroundColor: '#D5F5E3'
    }
    const courtesyDetailStyle = {
        minHeight: '30vh',
        backgroundColor: '#2874A6'
    }
    const costDetailStyle = {
        minHeight: '20vh',
        backgroundColor: '#EDBB99'
    }
    const buttonsStyle = {
        minHeight: '10vh',
        backgroundColor: '#EDBB99'
    }

    //Data
    const navigate = useNavigate();

    //Method
    const onSubmit = async(event) => {
        //Prevent sending data immediately because validate and confirm data
        event.preventDefault();
        //validate inputs here - this comes later on
        try {
            const bookingData = {customertype:sharedCustType, title:customerDetails.title, first_name:customerDetails.firstname, 
                last_name:customerDetails.lastname, street:customerDetails.street, suburb:customerDetails.suburb, city:customerDetails.city, 
                postcode:customerDetails.postcode, phone_number:customerDetails.phonenumber, email:customerDetails.email, 
                purchase_date:repairDetails.purchasedate, repair_date:repairDetails.repairdate, warranty:repairDetails.warranty, 
                imei_number:repairDetails.imeinumber, repair_make:repairDetails.make, repair_model:repairDetails.model, 
                repair_fault:repairDetails.fault, repair_fault_description:repairDetails.faultdesc, 
                courtesy_phone:courtesyDetails.phone, courtesy_charger:courtesyDetails.charger, 
                bond:sharedBond, service:sharedService
            };
            console.log('bookingData:', bookingData);
            //Insert booking to Supabase
            try {
                //Insert data into Supabase
                const {data, error} = await supabase.from('bookings').insert([bookingData]);
                //Handle error
                if (error) throw error;
                //log success and refresh
                console.log('Booking added:', data);
                event.target.reset();
            } catch (error) {
                console.error("Error adding data:", error);
            }
            //Open booking component
            navigate("/booking");
        } catch(e) {
            //Catch errors
            alert("Error");
        }
    }

    //UI
    return(
        <>
            <form className="row" style={{minHeight: '60vh'}} onSubmit={onSubmit}>
                <div className="col-12 col-lg-4 p-4 m-0" style={customerDetailStyle}>
                    <FormCustomerDetail passDataToParent={updateCustType} 
                        sendCustomerDetails={(value) => setCustomerDetails(value)} />
                </div>
                <div className="col-12 col-lg-4 p-4 m-0" style={repairDetailStyle}>
                    <FormRepairDetail passDataToParent={updateWarranty} 
                        sendRepairDetails={(value) => setRepairDetails(value)} />
                </div>
                <div className="col-12 col-lg-4 p-0 m-0">
                    <div className="p-4" style={courtesyDetailStyle}>
                        <FormCourtesyDetail passDataToParent={updateBond} 
                            sendCourtesyDetails={(value) => setCourtesyDetails(value)} /> {/*Child1*/}
                    </div>
                    <div className="p-4" style={costDetailStyle}>
                        <FormCostDetail sharedPropBond={sharedBond} sharedPropWarranty={sharedWarranty} 
                            sharedPropService={sharedService} sharedPropGst={sharedGst} sharedPropTotal={sharedTotal} 
                            sharedPropCustType={sharedCustType} /> {/*Child1*/}
                    </div>
                </div>
                <div className="p-4 m-0" style={buttonsStyle}>
                    <Buttons />
                </div>
            </form>
        </>
    )
}

//Export
export default Home;