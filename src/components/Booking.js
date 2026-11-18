//Import
import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient.js'; //import Supabase things

//Functional Component
function Booking() {
    
    //States
    const[bookings, setBookings] = useState([]);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState('');
    const[filters, setFilters] = useState({searchTerm: '', searchBy: '', sortBy: ''});

    //use useEffect to fetch bookings on component mount
    useEffect(() => {
        fetchBookings();
    }, []);


    //Fetch Supabase bookings
    const fetchBookings = async () => {
        try{
            //Set loading state
            setLoading(true);
            //Fetch data
            const {data, error} = await supabase.from('bookings').select('*');
            console.log('Fetched bookings:', data);
            //handle error
            if (error) throw error;
            //update bookings
            setBookings(data);
        } catch (error) {
            setError(error.message);
            console.error('Error fetching bookings:', error);
        } finally {
            setLoading(false);
        }
    };
    //Handle change in filtering
    const handleChange = (event) => {
        const{name, value} = event.target;
        setFilters({...filters, ...{[name]:value}});
        console.log(filters);
    }
    
    //UI
    return(
        <>
            <hr />
            <h3>Bookings</h3>
            <div className="accordion row align-items-start" id="booka">
                <div className="accordion-header col-12 col-md-6">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#bookfilters" aria-expanded="false" aria-controls="bookfilters">
                        Filters</button>
                </div>
                <div className="accordion-header col-12 col-md-6">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#bookcharts" aria-expanded="false" aria-controls="bookcharts">
                        Charts</button>
                </div>
                <div className="accordion-collapse collapse" id="bookfilters" data-bs-parent="#booka">
                    <div className="row accordion-body">
                        <div className="row col-12 col-md-4">
                            <label className="col-12 col-md-2">Search</label>
                            <input className="col-12 col-md-10" type="text" name="searchTerm" onChange={handleChange}></input>
                        </div>
                        <div className="row col-12 col-md-4">
                            <label className="col-12 col-md-2">by</label>
                            <select className="col-12 col-md-10" name="searchBy" onChange={handleChange}>
                                <option value="">None</option>
                                <option value="Name">Name</option>
                            </select>
                        </div>
                        <div className="row col-12 col-md-4">
                            <label className="col-12 col-md-2">Sort by</label>
                            <select className="col-12 col-md-10" name="sortBy" onChange={handleChange}>
                                <option value="">None</option>
                                <option value="purchase_date">Purchase Date</option>
                                <option value="repair_date">Repair Date</option>
                                <option value="bond">Bond Value</option>
                            </select>
                        </div>
                        {filters.searchBy === '' ? filters.sortBy === '' ? (<p>No filter</p>) : 
                            (<p>Sort by {filters.sortBy}</p>) : 
                            (<p>Search {filters.searchTerm} by {filters.searchBy}</p>
                            )}
                    </div>
                </div>
                <div className="accordion-collapse collapse" id="bookcharts" data-bs-parent="#booka">
                    <div className="accordion-body">
                        <p>Charts</p>
                    </div>
                </div>
            </div>
            {loading ? (<p>Loading bookings...</p>) : error ? (<p style={{color:"red"}}>Error: {error}</p>) : (
                bookings.map((booking) => (
                    <div className="row" key={booking.id} style={{border:"1px solid grey", padding:"10px", marginBottom:"10px", borderRadius:"5px"}}>
                        <div className="col-6">
                            <p>{booking.title + ": " + booking.first_name + " " + booking.last_name}</p>
                            <p>{booking.suburb ? booking.street + ", " + booking.suburb + ", " + booking.city + " " + booking.postcode : booking.street + ", " + booking.city + " " + booking.postcode}</p>
                            <p>{"Phone: " + booking.phone_number + ", Email: "+booking.email}</p>
                        </div>
                        <div className="col-6">
                            <p>{"Purchase date: "+ booking.purchase_date + ", Repair date: "+ booking.repair_date + ", Warranty: " + booking.warranty}</p>
                            <p>{"Phone details: "+ booking.repair_make + " " + booking.repair_model + ", IMEI " + booking.imei_number}</p>
                            <p>{"Repair details: " + booking.repair_fault + ", " + booking.repair_fault_description + ", Service fee: " + booking.service}</p>
                            <p>{"Courtesy details: " + booking.courtesy_phone + " " + booking.courtesy_charger + " Bond: "+ booking.bond}</p>
                        </div>
                    </div>
                ))
            )}
        </>
    )
}

//export
export default Booking;