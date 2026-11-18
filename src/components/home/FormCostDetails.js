//import
//import { useState } from "react";

//Function
function FormCostDetail(props) {
    //states
    /*const[serviceCost, setServiceCost] = useState(0);
    const[gstCost, setGstCost] = useState(0);
    const[totalCost, setTotalCost] = useState(0);*/
    //functions
    /*const calculateCosts = (e) => {
        let val = parseFloat(e.target.value)
        setServiceCost((val + 85.00).toFixed(2));
        setGstCost((val + 85 * 0.15).toFixed(2));
        setTotalCost((val + 85 * 1.15).toFixed(2))
        //service = 85 + e.target.value;
        //gst = service / 15;
        //total = service + gst;
    }*/
    //UI
    return(
        <>
            <h2>Cost</h2>
            <div className="row mt-1">
                <label className="col-12 col-lg-4">Bond ($)</label>
                <input className="col-12 col-lg-7" type="number" value={props.sharedPropCustType === "business" ? 0 : props.sharedPropBond} readOnly/>
            </div>
            <div className="row mt-1">
                <label className="col-12 col-lg-4">Service Fee ($)</label>
                <input className="col-12 col-lg-7" type="number" value={props.sharedPropWarranty ? 0 : 85} readOnly/>
            </div>
            <div className="row mt-1">
                <label className="col-12 col-lg-4">Total ($)</label>
                <input className="col-12 col-lg-7" type="number" value={props.sharedPropService} readOnly/>
            </div>
            <div className="row mt-1">
                <label className="col-12 col-lg-4">GST ($)</label>
                <input className="col-12 col-lg-7" type="number" value={props.sharedPropGst} readOnly/>
            </div>
            <div className="row mt-1">
                <label className="col-12 col-lg-4">Total + GST ($)</label>
                <input className="col-12 col-lg-7" type="number" value={props.sharedPropTotal} readOnly/>
            </div>
        </>
    )
}

//Export
export default FormCostDetail;