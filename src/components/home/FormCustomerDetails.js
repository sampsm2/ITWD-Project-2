//import
import { AddressAutofill } from "@mapbox/search-js-react";
import { useState, useEffect } from "react";

//Function
function FormCustomerDetail( {passDataToParent, sendCustomerDetails} ) {
    const updateCustType = (value) => {passDataToParent(value)};
    //Customer detail send to parent
    const [customerDetails, setCustomerDetails] = useState({title: "Mr", firstname: "", lastname: "", street: "", suburb: "", city: "", postcode: "", phonenumber: "", email: ""});
    const handleChange = (event) => {
        const {name, value} = event.target; //Get updated pair-value "name" and "value"
        setCustomerDetails({...customerDetails, ...{[name]:value}});
    }
    //useEffect hook SYNCHRONISE a component with another component or external system
    useEffect(() => {
        sendCustomerDetails(customerDetails);
    }, [customerDetails, sendCustomerDetails])
    //UI
    return(
        <>
            <h2>Customer Details</h2>
            {/*Customer Type*/}
            <div className="row">
                <fieldset className="border border-primary col-12 col-lg-11 ms-2 me-4">
                    <legend className="col-11 float-none w-auto">Customer type: *</legend>
                    <div>
                        <label className="col-12 col-lg-4">Individual</label>
                        <input type="radio" name="customer-type" value="individual"
                            onChange={(event) => updateCustType(event.target.value)} />
                    </div>
                    <div>
                        <label className="col-12 col-lg-4">Business</label>
                        <input type="radio" name="customer-type" value="business" 
                            onChange={(event) => updateCustType(event.target.value)} />
                    </div>
                </fieldset>
            </div>
            {/*Details*/}
            <div className="row mt-2">
                <label className="col-12 col-lg-4">Title:  </label>
                <select className="col-12 col-lg-7" name="title" onChange={handleChange}>
                    <option value="Mr" defaultValue>Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Ms">Ms</option>
                    <option value="Miss">Miss</option>
                    <option value="Dr">Dr</option>
                </select>
            </div>
            <div className="row mt-1">
                <label className="col-12 col-lg-4">First Name: *</label>
                <input className="col-12 col-lg-7" type="text"
                    pattern="[A-Za-z\s\-]+$" title="Only letters"
                    onInput={(e) => e.target.value = e.target.value.replace(/[^A-Za-z\s--]/g, '')}
                    name="firstname" onChange={handleChange} required/>
            </div>
            <div className="row mt-1">
                <label className="col-12 col-lg-4">Last Name: *</label>
                <input className="col-12 col-lg-7" type="text"
                    pattern="[A-Za-z\s\-]+$" title="Only letters"
                    onInput={(e) => e.target.value = e.target.value.replace(/[^A-Za-z\s--]/g, '')}
                    name="lastname" onChange={handleChange}  required/>
            </div>
            <AddressAutofill accessToken="pk.eyJ1Ijoic2FtcHNtMiIsImEiOiJjbXdta3ZqMTAwMGNvMzBvdGR2Zzd4Z2loIn0.lNhFGFLPtK1kljltW_0SrQ">
            <div className="row mt-1">
                <label className="col-12 col-lg-4">Street: *</label>
                <input className="col-12 col-lg-7" type="text"
                    pattern="[0-9A-Za-z\s\-]+$" title="Alphanumeric characters" autocomplete="address-line1"
                    onInput={(e) => e.target.value = e.target.value.replace(/[^0-9A-Za-z\s--]/g, '')}
                    name="street" onChange={handleChange} required/>
            </div>
            <div className="row mt-1">
                <label className="col-12 col-lg-4">Suburb:</label>
                <input className="col-12 col-lg-7" type="text"
                    pattern="[A-Za-z\s\-]+$" title="Only letters"  autocomplete="address-line2"
                    onInput={(e) => e.target.value = e.target.value.replace(/[^A-Za-z\s--]/g, '')}
                    name="suburb" onChange={handleChange}/>
            </div>
            <div className="row mt-1">
                <label className="col-12 col-lg-4">City: *</label>
                <input className="col-12 col-lg-7" type="text"
                    pattern="[A-Za-z\s\-]+$" title="Only letters"  autocomplete="address-level2"
                    onInput={(e) => e.target.value = e.target.value.replace(/[^A-Za-z\s--]/g, '')}
                    name="city" onChange={handleChange}required/>
            </div>
            <div className="row mt-1">
                <label className="col-12 col-lg-4">Postcode: *</label>
                <input className="col-12 col-lg-7" type="text"
                    maxLength="4" pattern="[0-9]+$" title="Only numbers"  autocomplete="postal-code"
                    onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                    name="postcode" onChange={handleChange} required/>
            </div>
            </AddressAutofill>
            <div className="row mt-1">
                <label className="col-12 col-lg-4">Phone number: *</label>
                <input className="col-12 col-lg-7" type="text"
                    pattern="[0-9\s]+$" title="Only numbers"
                    onInput={(e) => e.target.value = e.target.value.replace(/[^0-9\s]/g, '')}
                    name="phonenumber" onChange={handleChange} required/>
            </div>
            <div className="row mt-1">
                <label className="col-12 col-lg-4">Email: *</label>
                <input className="col-12 col-lg-7" type="text" 
                name="email" onChange={handleChange} required/>
            </div>
        </>
    )
}

//Export
export default FormCustomerDetail;