import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useState } from 'react';

import '../styles/ListingPlan.css';

function PlanComp() {
    const [showDetails, setShowDetails] = useState(true);
    const [buttonText, setButtonText] = useState("List Your Property");

    const toggleDetails = () => {
        setShowDetails(!showDetails);  // Toggle the visibility of the details
        setButtonText(showDetails ? "Change Plan" : "List Your Property");  // Change the button text based on the current state
    };

    return(
        <div className="row">
            <div className="col-6">
                <div className="card" >
                    <div className="card-body plan-card">
                        <h5 className="card-title">Standard Plan</h5>
                        <h6>
                            $10 500
                        </h6>
                        <hr/>
                        {showDetails && (
                        <div className="details">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <ul>
                            <li>Reach A Larger Audience</li>
                            <li>List for 6 months</li>
                            <li>Auto Emailed Alerts</li>
                            <li>Track Listing Analytics</li>
                            <li>Dedicated Virtual Support</li>
                            </ul>
                        </div>
                        )}
                        <hr/>
                        <button href="#" className="btn card-button" onClick={toggleDetails}>{buttonText}</button>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="card" >
                    <div className="card-body plan-card">
                        <h5 className="card-title">Premium Plan</h5>
                        <h6>
                            $15 500
                        </h6>
                        <hr/>
                        {showDetails && (
                        <div className="details">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <ul>
                            <li>Reach A Larger Audience</li>
                            <li>List for 6 months</li>
                            <li>Auto Emailed Alerts</li>
                            <li>Track Listing Analytics</li>
                            <li>Dedicated Virtual Support</li>
                            <li>Agent Scouting</li>
                            <li>Property Media</li>
                            <li>Selling Assistance</li>
                            <li>Featured Listing for 3 weeks</li>
                            </ul>
                        </div>
                        )}
                        <hr/>
                        <button href="#" className="btn card-button" onClick={toggleDetails}>{buttonText}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlanComp; 