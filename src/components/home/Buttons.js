//Import
import { Link } from "react-router-dom";

//Function
function Buttons() {
    const buttonStyle = {
        width: '5em'
    }

    //UI
    return(
        <>
            <div className="d-flex justify-content-center">
                {/*Buttons*/}
                <input type="submit" className="btn me-3 text-dark bg-white" style={buttonStyle} value="SUBMIT" />
                <input type="reset" className="btn me-3 text-dark bg-white" style={buttonStyle} value="RESET" />
                <Link to="/faq">
                    <input type="button" className="btn me-3 text-dark bg-white" style={buttonStyle} value="FAQ" />
                </Link>
                <Link to="/booking">
                    <input type="button" className="btn me-3 text-dark bg-white" style={buttonStyle} value="Booking Test Button" />
                </Link>
            </div>
        </>
    )
}

//Export
export default Buttons;