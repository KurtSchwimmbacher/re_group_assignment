import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ArrowRight } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button'

import { useState, useEffect } from "react";

// import css
import '../styles/Home.css';

//media import below 
import house1 from "../assets/house-images/house-img-1.jpg";
import house2 from "../assets/house-images/house-img-2.jpg";
import house3 from "../assets/house-images/house-img-3.jpg";


import NavigationBar from "../components/NavigationBar";
import SearchProperty from "../components/SearchProperty";
import HouseCard from "../components/houseCard";
import FooterComp from "../components/FooterComp";

// houses array of obj
    const houses =[
        {id:1, name:"Serenity Haven", location:"101 Tranquil Trail, Willow Creek",price:"$450,000",bedrooms:4,bathrooms:4, size: "232 sq m", amenities:"Scenic views, spacious deck, gourmet kitchen, home office",img:"house-img-1"},
        {id:2, name:"Oakwood Retreat", location:"223 Forest Avenue, Evergreen Hills",price:"$550,000",bedrooms:5,bathrooms:4, size: "297 sq m", amenities:"Wooded surroundings, backyard oasis with pool, modern appliances, media room",img:"house-img-2"},
        {id:3, name:"Coastal Breeze Villa", location:"335 Seaside Drive, Coral Bay",price:"$700,000",bedrooms:3,bathrooms:2, size: "260 sq m", amenities:"Oceanfront property, wraparound porch, spa-inspired master suite, beach access",img:"house-img-3"},
        {id:4, name:"Mountain View Manor", location:"447 Summit Ridge Road, Aspen Ridge",price:"$900,000",bedrooms:6,bathrooms:5, size: "418 sq m", amenities:"Panoramic mountain views, ski-in/ski-out access, stone fireplace, hot tub",img:"house-img-4"},
        {id:5, name:" Riverside Retreat", location:"567 Riverbank Lane, Willow Springs",price:"$650,000",bedrooms:4,bathrooms:3, size: "279 sq m", amenities:"Riverfront property, outdoor entertaining area, chef's kitchen, wine cellar",img:"house-img-5"},
        {id:6, name:"Meadowview Cottage", location:"689 Meadowbrook Drive, Green Valley",price:"$400,000",bedrooms:3,bathrooms:2, size: "186 sq m", amenities:"Tranquil setting, wraparound porch, vaulted ceilings, garden space",img:"house-img-6"},
        {id:7, name:"Lakeside Oasis", location:"778 Lakefront Way, Azure Shores",price:" $800,000",bedrooms:5,bathrooms:4, size: "353 sq m", amenities:" Private lake access, boat dock, outdoor kitchen, game room",img:"house-img-7"},
        {id:8, name:"Urban Oasis Loft", location:"1010 Cityscape Boulevard, Metropolitan Heights",price:"$600,000",bedrooms:2,bathrooms:2, size: "167 sq m", amenities:"Sweeping sunset views, expansive deck, home theater, fitness room",img:"house-img-8"},
        {id:9, name:"Serenity Haven", location:"101 Tranquil Trail, Willow Creek",price:"$450,000",bedrooms:4,bathrooms:4, size: "2,500 sq m", amenities:"City skyline views, open-concept living, rooftop terrace, fitness center access",img:"house-img-9"}
    ];



function Home() {
    
    const [housesArr, setHousesArr] = useState(houses);
    const [topThreeHouses,setTopThreeHouses] = useState([housesArr.slice(0,3)]);
    const [loaded, setLoaded] =useState(false);
    useEffect( ()=> {
        
        // get top three houses after sorting =>move to function
        //setTopThreeHouses(housesArr.slice(0,3));
        console.log(topThreeHouses[0])
    },[]);

    return(
        <>
        <Container className="homeMainCont">
            <Row className="row hero">
                <Col className="col-12 nav">
                    <NavigationBar/>
                </Col>
                <Col className="col-12 img-overlay hero-img"> 
                    
                </Col>
                <Col className="col-12 search">
                <SearchProperty/>
                </Col>
            </Row>

            {/* house card sections */}
            <Row className="card-titles">
                <Col className="col-10 recent-listings">
                    <h4>Recent Listings</h4>
                </Col>
                <Col className="col-2 view-more-listings">
                    <p className="more-listings-text">View More</p>
                    <ArrowRight />
                </Col>
            </Row>

            <Row className="row house-cards">
                {topThreeHouses[0].map((house) => (
                    <Col className="col-4 card-col" key={house.id}>
                        <HouseCard id={house.id} img={house.img} name={house.name} location={house.location} price={house.price} bedrooms={house.bedrooms} bathrooms={house.bathrooms} size={house.size} amenities={house.amenities} />
                    </Col>
                ))}
            </Row>


            <Row>
                {/* add your own listing cont bellow */}
                <Col className="col-12 addListing">
                    <Row>
                    <Col className="addListingCopy" sm={8}>
                        <h1>Add your own Listing to Re</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </Col>
                    <Col className="image-holder" sm={4}>
                        <img source={house1}/>
                        <Button className="addListing_BTN">
                            Add Listing
                        </Button>
                    </Col>
                    </Row>
                </Col>
            </Row>
            
        </Container>

        <FooterComp />
        </>
    );
}

export default Home; //<-- there's something wrong (should be green)