//Import
import { useState, useEffect } from "react";

//Function
function FormCourtesyDetail( {passDataToParent, sendCourtesyDetails} ) { //passDataToParent is a callback function to change state in the Home component
    //Assume there is a list of courtesy items as shown below
    let courtesyList = [
        {id:0, type:"none", name:"none", bond:0},
        {id:1, type:"phone", name:"iphone", bond:275},
        {id:2, type:"phone", name:"samsung glaaxy", bond:100},
        {id:3, type:"phone", name:"nokia", bond:100},
        {id:4, type:"charger", name:"iphone charger", bond:30},
        {id:5, type:"charger", name:"samsung glaaxy charger", bond:30},
        {id:6, type:"charger", name:"nokia charger", bond:30},
    ]

    //declare "state"
    const [phoneBorrow, setPhoneBorrow] = useState(0);
    const [chargerBorrow, setChargerBorrow] = useState(0);
    const [courtesyDetails, setCourtesyDetails] = useState({phone: "", charger: ""});

    //handle "onChange"
    let addPhone = (selectedOption) => {
        selectedOption === 'none' ? setPhoneBorrow(0) : setPhoneBorrow(Number(selectedOption));
        //Update Total Bond
        let updateId = 0;
        selectedOption === 'none' ? (updateId = 0) : (updateId = Number(selectedOption))
            let updateBond = courtesyList.filter(item => {return item.id === updateId})[0].bond 
            + courtesyList.filter(item => {return item.id === chargerBorrow})[0].bond;
        //Send data to parent usign passDataToParent
        passDataToParent(updateBond);//Child1

        //update CourtesyDetails
        setCourtesyDetails({...courtesyDetails, ...{phone:courtesyList[updateId].name}});
    };
    let addCharger = (selectedOption) => {
        selectedOption === 'none' ? setChargerBorrow(0) : setChargerBorrow(Number(selectedOption));
        //Update Total Bond
        let updateId = 0;
        selectedOption === 'none' ? (updateId = 0) : (updateId = Number(selectedOption))
            let updateBond = courtesyList.filter(item => {return item.id === updateId})[0].bond 
            + courtesyList.filter(item => {return item.id === phoneBorrow})[0].bond;
        //Send data to parent usign passDataToParent
        passDataToParent(updateBond);//Child1

        //update CourtesyDetails
        setCourtesyDetails({...courtesyDetails, ...{charger:courtesyList[updateId].name}});
    };
    //useEffect hook send data thingy
    useEffect(() => {
        sendCourtesyDetails(courtesyDetails);
    }, [courtesyDetails, sendCourtesyDetails])

    //UI
    return(
        <>
            <h2>Courtesy Phone</h2>
            {/*Phone Type*/}
            <h4 className='ms-4 mt-2'>Choose a phone</h4>
            <div className="row">
                <label className="col-12 col-lg-4">Item type:</label>
                <select className="col-12 col-lg-7" onChange={(selected) => addPhone(selected.target.value)}>
                    <option value="none">None</option>
                    {courtesyList.filter(courtesyList => courtesyList.type === "phone").map(courtesyList => {return(<option value={courtesyList.id}>{courtesyList.name}</option>)})}
                </select>
            </div>
            {/*Charger Type*/}
            <h4 className='ms-4 mt-2'>Choose a charger</h4>
            <div className="row">
                <label className="col-12 col-lg-4">Item type:</label>
                <select className="col-12 col-lg-7" onChange={(selected) => addCharger(selected.target.value)}>
                    <option value="none">None</option>
                    {courtesyList.filter(courtesyList => courtesyList.type === "charger").map(courtesyList => {return(<option value={courtesyList.id}>{courtesyList.name}</option>)})}
                </select>
            </div>
            {/*Added courtesy items*/}
            <h4 className='ms-4 mt-2'>Borrow items</h4>
            <table className="table table-bordered mt-2 ms-3 me-3 bg-white">
                <thead>
                    <tr>
                        <td>Item</td>
                        <td>Cost</td>
                    </tr>
                </thead>
                <tbody>
                    {/*Display all items in the state in the table*/}
                    {phoneBorrow === 0 ? (null) : (
                        <tr>
                            <td>{courtesyList.filter(item => {return item.id === phoneBorrow})[0].name}</td>
                            <td>{courtesyList.filter(item => {return item.id === phoneBorrow})[0].bond}</td>
                        </tr>
                    )}
                    {chargerBorrow === 0 ? (null) : (
                        <tr>
                            <td>{courtesyList.filter(item => {return item.id === chargerBorrow})[0].name}</td>
                            <td>{courtesyList.filter(item => {return item.id === chargerBorrow})[0].bond}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}

//Export
export default FormCourtesyDetail;