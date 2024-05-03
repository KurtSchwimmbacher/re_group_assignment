import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import banner from '../assets/banner.jpg';

import NavigationBar from "../components/NavigationBar";
import "../styles/AddProp.css";
import FooterComp from "../components/FooterComp";
import PlanComp from "../components/ListingPlan";

function AddProp() {

    const [selectedOptions, setSelectedOptions] = useState([]);

    const options = ["Pet Friendly", "Garden", "Solar Power", "Solar Geyser", "Chicago", "Furnished", "Unfurnished", "Pool", "Study", "Water Tank", "Fibre Internet", "Inverter / Generator", "Flatlet / Cottage"];

    const handleChange = (event) => {
        // Convert the NodeList to an array and extract the values of the selected options
        const values = Array.from(event.target.selectedOptions, (option) => option.value);
        setSelectedOptions(values);
  };

    return(
        <>
        <Container className="homeMainCont">
            <Row className="row hero">
                <div className="col-12 nav">
                    <NavigationBar/>
                </div>
            </Row>
            <div className="pageHeader">
                <h1>Sell or Rent Your Property</h1>
            </div>
            <div className="pageSubHeader">
                <p>With just a few of your details you can send through a request to add your own property to our elite catalogue.</p>
            </div>
            <Row className="row wholeForm">
                <Col className="col addProp_info">
                    <div className="card info-card">
                        <img src={banner} className="card-img-top sold-img" alt="..."/>
                            <div className="card-body">
                                <p className="card-text card-text-addProp">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                    </div>
                </Col>
                <Col className="col addProp_Form">
                <form className="formBox">                 
                    {/*Owner details*/}
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="tel" className="form-control" id="tel" placeholder="0334778959" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
                        <label for="tel">Phone Number</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingText" placeholder="Full Name"/>
                        <label for="floatingText">Full Name</label>
                    </div>
                    {/*Property Type*/}
                    <select class="form-select form-select-lg mb-3 selectPropertyType" aria-label="Large select example">
                        <option selected>House</option>
                        <option value="1">House</option>
                        <option value="2">Apartment/ Flat</option>
                        <option value="3">Townhouse</option>
                        <option value="4">Farm</option>
                        <option value="5">Vacant Land/ Plot</option>
                        <option value="6">Industrial Property</option>
                        <option value="7">Commercial Property</option>
                    </select>

                    {/* Property Amenities and features*/}
                    <label htmlFor="features">Select Property Features:</label>
                    <select className="form-select form-select-sm propertyFeatures" multiple={true} value={selectedOptions} onChange={handleChange} id="features">
                        {options.map(option => (
                        <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                    {/* add images */}
                    <div className="mb-3">
                        <label for="formFile" className="form-label">Add Property Images below</label>
                        <input className="form-control" type="file" id="formFile"/>
                    </div>
                    {/* prop deets */}
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Property Description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    {/* submit btn */}
                    <button type="submit" className="btn submitPropBtn">Submit Property</button>
                </form>
                </Col>
            </Row>
        </Container>

        <Container className="plans-cont">
            <Row>
                <Col>
                    <PlanComp/>
                </Col>
            </Row>
        </Container>
        <FooterComp />
        </>
    );
}

export default AddProp; //<-- there's something wrong (should be green)