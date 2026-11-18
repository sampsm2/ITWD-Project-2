//Import
import { Link } from "react-router-dom";

//Functions
function Header() {
    const headerStyle = {
        minHeight: '15vh',
        backgroundColor: '#2C3E50'
    }
    //UI
    return(
        <>
            <header className="row" style={headerStyle}>
                <div className="col-12 col-lg-8 d-flex align-items-center text-center text-white display-5">Phone Fix Booking System</div>
                <div className="col-12 col-lg-4">
                    <div className="row">
                        <Link to="/" className="col-12 col-md-6 bg-info p-0 m-0 border border-dark text-center text-white" style={{textDecoration:"none"}}>HOME</Link>
                        <Link to="/advancedJS" className="col-12 col-md-6 bg-info p-0 m-0 border border-dark text-center text-white" style={{textDecoration:"none"}}>EXTENSION</Link>
                    </div>
                </div>
            </header>
        </>
    )
}

//Export
export default Header;