//Import
import { Chart } from "chart.js/auto";

//Functional Component
function AdvancedJS() {
    //UI
    return(
        <>
            <div style={{minHeight: "60vh"}}>
                <h1>Advanced JS page</h1>
                <div class="accordion row align-items-start" id="demos">
                    <div class="row col-12 col-md-2">
                        <div class="row">
                            <div class="accordion-header col-6 col-md-12">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#demo1" aria-expanded="true" aria-controls="demo1">
                                    Demo 1</button>
                            </div>
                            <div class="accordion-header col-6 col-md-12">
                                <button class="accordion-button collapsed"type="button" data-bs-toggle="collapse" data-bs-target="#demo2" aria-expanded="false" aria-controls="demo2">
                                    Demo 2</button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="accordion-header col-6 col-md-12">
                                <button class="accordion-button collapsed"type="button" data-bs-toggle="collapse" data-bs-target="#demo3" aria-expanded="false" aria-controls="demo3">
                                    Demo 3</button>
                            </div>
                            <div class="accordion-header col-6 col-md-12">
                                <button class="accordion-button collapsed"type="button" data-bs-toggle="collapse" data-bs-target="#demo4" aria-expanded="false" aria-controls="demo4">
                                    Demo 4</button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="accordion-header col-6 col-md-12">
                                <button class="accordion-button collapsed"type="button" data-bs-toggle="collapse" data-bs-target="#demo5" aria-expanded="false" aria-controls="demo5">
                                    Demo 5</button>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item col-12 col-md-10">
                        <div class="accordion-collapse collapse show" id="demo1" data-bs-parent="#demos">
                            <div class="accordion-body">
                                <h1>Demo 1</h1>
                                <p>Autofill Address using the MapBox API. Test it by using the address lines in the Customer Details page.</p>
                                <h1>Demo 2</h1>
                                <p>Search Filters in the dropdown on the Bookings page</p>
                                <h1>Demo 3</h1>
                                <p>Charts in the dropdown on the Bookings page</p>
                            </div>
                        </div>
                        <div class="accordion-collapse collapse" id="demo2" data-bs-parent="#demos">
                            <div class="accordion-body">
                                <h1>Demo 2</h1>
                                <p>Chart demonstration </p>
                            </div>
                        </div>
                        <div class="accordion-collapse collapse" id="demo3" data-bs-parent="#demos">
                            <div class="accordion-body">
                                <h1>Demo 3</h1>
                            </div>
                        </div>
                        <div class="accordion-collapse collapse" id="demo4" data-bs-parent="#demos">
                            <div class="accordion-body">
                                <h1>Demo 4</h1>
                            </div>
                        </div>
                        <div class="accordion-collapse collapse" id="demo5" data-bs-parent="#demos">
                            <div class="accordion-body">
                                <h1>Demo 5</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

//export
export default AdvancedJS;