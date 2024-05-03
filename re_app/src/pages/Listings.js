import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

import img from "../assets/house-images/house-img-1.jpg";

import logo from "../assets/logo/logo.svg";
import "../styles/listings.css";

import HouseCard from "../components/houseCard";

import { useState, useEffect } from "react";

import NavigationBar from "../components/NavigationBar";
import FooterComp from "../components/FooterComp";


// houses array of obj
const houses =[
    {id:1, name:"Serenity Haven", location:"101 Tranquil Trail, Willow Creek",price:450000,bedrooms:4,bathrooms:4, size: "232 sq m", amenities:"Scenic views, spacious deck, gourmet kitchen, home office",img:"house-img-1"},
    {id:2, name:"Oakwood Retreat", location:"223 Forest Avenue, Evergreen Hills",price:550000,bedrooms:5,bathrooms:4, size: "297 sq m", amenities:"Wooded surroundings, backyard oasis with pool, modern appliances, media room",img:"house-img-2"},
    {id:3, name:"Coastal Breeze Villa", location:"335 Seaside Drive, Coral Bay",price:700000,bedrooms:3,bathrooms:2, size: "260 sq m", amenities:"Oceanfront property, wraparound porch, spa-inspired master suite, beach access",img:"house-img-3"},
    {id:4, name:"Mountain View Manor", location:"447 Summit Ridge Road, Aspen Ridge",price:900000,bedrooms:6,bathrooms:5, size: "418 sq m", amenities:"Panoramic mountain views, ski-in/ski-out access, stone fireplace, hot tub",img:"house-img-4"},
    {id:5, name:" Riverside Retreat", location:"567 Riverbank Lane, Willow Springs",price:650000,bedrooms:4,bathrooms:3, size: "279 sq m", amenities:"Riverfront property, outdoor entertaining area, chef's kitchen, wine cellar",img:"house-img-5"},
    {id:6, name:"Meadowview Cottage", location:"689 Meadowbrook Drive, Green Valley",price:400000,bedrooms:3,bathrooms:2, size: "186 sq m", amenities:"Tranquil setting, wraparound porch, vaulted ceilings, garden space",img:"house-img-6"},
    {id:7, name:"Lakeside Oasis", location:"778 Lakefront Way, Azure Shores",price:800000,bedrooms:5,bathrooms:4, size: "353 sq m", amenities:" Private lake access, boat dock, outdoor kitchen, game room",img:"house-img-7"},
    {id:8, name:"Urban Oasis Loft", location:"1010 Cityscape Boulevard, Metropolitan Heights",price:600000,bedrooms:2,bathrooms:2, size: "167 sq m", amenities:"Sweeping sunset views, expansive deck, home theater, fitness room",img:"house-img-8"},
    {id:9, name:"Serenity Haven", location:"101 Tranquil Trail, Willow Creek",price:450000,bedrooms:4,bathrooms:4, size: "2,500 sq m", amenities:"City skyline views, open-concept living, rooftop terrace, fitness center access",img:"house-img-9"}
];


function Listings() {

    const [housesArr, setHousesArr] = useState(houses);

    useEffect( ()=>{
        // filter
    })

    return(
        <>
        <Container className="homeMainCont">
            <Row className="row hero">
                <Col className="col-12 nav">
                    <NavigationBar/>
                </Col>
            </Row>


            <div className="App">
                <div className="image-box">
                    <img src={img} alt="back" />
                    <div className="box">
                        <Button className="return-home-btn">
                            Home
                        </Button>
                        <div className="butt">
                            <h6>
                                An ideal location for anyone looking to make the most out of
                                living in some of the most vibrant areas of London, whilst
                                maintaining fantastic access to the city centre and, a fabulous
                                living space.
                            </h6>
                        </div>
                    </div>

                    <div className="box2">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <Button className="find-more-btn">
                            Find More
                        </Button>
                        <h2 className="subtitle">Find The Perfect Home</h2>
                        <p>The Ideal Home for you.</p>
                        <p>
                            Please Note: We are a London based specialist in monthly apartment
                            rentals. In each property collection we operate multiple apartments
                            at the same standards. All apartments are located within 5 minutes
                            walking distance of each-other and are allocated based on
                            availability.
                        </p>

                        <ul className="list">
                          <li>
                            <h2>115k +</h2>
                            <p>Family</p>
                          </li>
                          <li>
                            <h2>9.5k +</h2>
                            <p>Couple</p>
                          </li>
                          <li>
                            <h2>7k +</h2>
                            <p>Single</p>
                          </li>
                        </ul>

                        <div>
                          <img src={img} alt="bottom" className="house-img" />
                        </div>

                      </div>
                    </div>
                    <div className="header">
                      <h1>Choose Your Dream Home</h1>
                    </div>



    <Container>
        <Row>
            {housesArr.map((house) => (
                    <Col className="col-4 card-col" key={house.id}>
                        <HouseCard id={house.id} img={house.img} name={house.name} location={house.location} price={house.price} bedrooms={house.bedrooms} bathrooms={house.bathrooms} size={house.size} amenities={house.amenities} />
                    </Col>
                ))}
        </Row>
    </Container>



      <div className="title">
        <h1>About Us</h1>
      </div>


      <div className="col-6">
        <img src={img} alt="img" />

        <div className="col-62">
          <p>
            An ideal location for anyone looking to make the most out of living
            in some of the most vibrant areas of London, whilst maintaining
            fantastic access to the city centre and, a fabulous living space.
          </p>
          <button>More!</button>
        </div>
      </div>

    </div>
    </Container>
     
        <FooterComp />
     </>
    );
}

export default Listings; //<-- there's something wrong (should be green)