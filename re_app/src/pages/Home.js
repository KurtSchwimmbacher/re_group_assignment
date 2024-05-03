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
import house1 from "../assets/banner.jpg";


import NavigationBar from "../components/NavigationBar";
import SearchProperty from "../components/SearchProperty";
import HouseCard from "../components/houseCard";
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



function Home() {
    
    const [housesArr, setHousesArr] = useState(houses);
    const [topThreeHouses,setTopThreeHouses] = useState([housesArr.slice(0,3)[0]]);
    const [searchFilters, setSearchFilters] = useState({
        searchQuery: '',
        minPrice: '',
        maxPrice: '',
        // Add other filter criteria
    });
    
    useEffect(() => {
        // Filter houses based on searchQuery and other filters
        const filteredHouses = housesArr.filter(house => {
            // Apply filter logic based on searchFilters
            return (
                house.name.toLowerCase().includes(searchFilters.searchQuery.toLowerCase()) &&
                (searchFilters.minPrice === '' || house.price >= parseInt(searchFilters.minPrice)) &&
                (searchFilters.maxPrice === '' || house.price <= parseInt(searchFilters.maxPrice))
            );
        });
        setTopThreeHouses(housesArr.slice(0, 3));
    }, [searchFilters, housesArr]);


    const handleSearchChange = (filters) => {
        setSearchFilters(filters);
    };

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
                    <SearchProperty properties={housesArr} onSearchChange={handleSearchChange} />
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
                {topThreeHouses.map((house) => (
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
                        <p>Add your own listing" feature on a real estate website empowers users to directly contribute properties they wish to sell or rent. This functionality grants individuals autonomy in showcasing their real estate assets, ensuring a diverse and extensive database of properties. By simply filling out essential details such as location, property type, size, and amenities, users can seamlessly upload their listings, reaching a broader audience of potential buyers or renters.</p>
                    </Col>
                    <Col className="image-holder" sm={4}>
                        <img source={house1} alt="House Image" className="add-prop-img"/>
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

export default Home; 