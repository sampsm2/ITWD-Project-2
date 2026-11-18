//Import
import { useState, useEffect } from "react";

//Function
function FormRepairDetail( {passDataToParent, sendRepairDetails} ) {
    const [repairDetails, setRepairDetails] = useState({purchasedate: "", repairdate: "", warranty: false, imeinumber: "", make: "", model: "", fault: "", faultdesc: ""});
    
    //passing data to parent
    const updateWarranty = (value) => {
        passDataToParent(value);
        setRepairDetails({...repairDetails, ...{warranty:value}});
    };

    //Checking today's date and using it for the date inputs
    let todaysDate = new Date().toJSON().slice(0,10);
    //also works> new Date(Date.now()).toISOString.split("T")[0]

    //getting two years ago for warranty
    let twoYearsAgoDate = new Date()
    twoYearsAgoDate.setFullYear(twoYearsAgoDate.getFullYear() - 2);

    //Checking warranty date and disabling or enabling textbox
    const warrantyDateCheck = (e) => {
        new Date(e.target.value).getTime() >= twoYearsAgoDate.getTime() ? 
            document.getElementById("warrantyCheckbox").disabled = false : 
            document.getElementById("warrantyCheckbox").disabled = true;
        setRepairDetails({...repairDetails, ...{purchasedate:e.target.value}});
    };
    
    const handleChange = (event) => {
        const {name, value} = event.target; //Get updated pair-value "name" and "value"
        setRepairDetails({...repairDetails, ...{[name]:value}});
    }
    //useEffect hook send data thingy
    useEffect(() => {
        sendRepairDetails(repairDetails);
    }, [repairDetails, sendRepairDetails])
    
    //UI
    return(
        <>
            <h2>Repair Details</h2>
            {/*Details*/}
            <div className="row mt-1">
                <label className="col-12 col-lg-4">Purchase Date: *</label>
                <input className="col-12 col-lg-7" type="date" max={todaysDate} 
                    onChange={warrantyDateCheck} 
                    name="purchasedate" required/> {/*Purchase must be ON OR BEFORE today*/}
            </div>
            <div className="row mt-1">
                <label className="col-12 col-lg-4">Repair Date: *</label>
                <input className="col-12 col-lg-7" type="date" min={todaysDate}
                name="repairdate" onChange={handleChange} required/> {/*Repair must be ON OR AFTER today*/}
            </div>
            {/*Warranty bit*/}
            <div className="row">
                <fieldset className="border border-primary col-12 col-lg-11 ms-2 me-4">
                    <legend className="col-11 float-none w-auto">Under Warranty: *</legend>
                    <div>
                        <label className="col-12 col-lg-4">Warranty</label>
                        <input type="checkbox" id="warrantyCheckbox" value="warranty" name="warranty" disabled={true} 
                            onChange={(event) => updateWarranty(event.target.checked)} />
                            {/*passDataToParent(event.target.checked) (true/false)*/}
                    </div>
                </fieldset>
            </div>
            <div className="row mt-1">
                <label className="col-12 col-lg-4">IMEI Number: *</label>
                <input className="col-12 col-lg-7" type="text"
                    maxLength="15" pattern="[0-9]+$" title="Only numbers"
                    onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                    name="imeinumber" onChange={handleChange} required/> {/*this would probably need to be checked for a minimum length when submitted since it doesn't really work during input*/}
            </div>
            <div className="row mt-1">
                <label className="col-12 col-lg-4">Make: *</label>
                <select className="col-12 col-lg-7" name="make" onChange={handleChange} required>
                    <option value="none">None</option>
                    <option value="Apple">Apple</option>
                    <option value="LG">LG</option>
                    <option value="Motorola">Motorola</option>
                    <option value="Nokia">Nokia</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Sony">Sony</option>
                </select> {/*check things like this for whether they still have value="none" at submit, so it gets caught*/}
            </div>
            <div className="row mt-1">
                <label className="col-12 col-lg-4">Model: *</label>
                <input className="col-12 col-lg-7" type="text" name="model" onChange={handleChange} required/>
            </div>
            <div className="row mt-1">
                <label className="col-12 col-lg-4">Fault category: *</label>
                <select className="col-12 col-lg-7" name="fault" onChange={handleChange} required>
                    <option value="none">None</option>
                    <option value="Battery">Battery</option>
                    <option value="Charging">Charging</option>
                    <option value="Screen">Screen</option>
                    <option value="SD Storage">SD storage</option>
                    <option value="Software">Software</option>
                    <option value="Other">Other</option>
                </select> {/*check things like this for whether they still have value="none" at submit, so it gets caught*/}
            </div>
            <div className="row mt-1">
                <label className="col-12 col-lg-4">Description: *</label>
                <input className="col-12 col-lg-7" type="textarea" style={{minHeight: '120px'}} 
                name="faultdesc" onChange={handleChange} required/>
            </div>
        </>
    )
}

//Export
export default FormRepairDetail;