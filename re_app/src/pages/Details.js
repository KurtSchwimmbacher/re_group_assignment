import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import { useParams } from 'react-router-dom';
// import css
import '../App.css'

import { useState } from 'react';

import NavigationBar from "../components/NavigationBar";
import FooterComp from "../components/FooterComp";

function Details() {

    const { id } = useParams(); // Get the id from the URL params
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


    // Find the house object with the matching id
    const house = houses.find(house => house.id === parseInt(id));


    const [imgSrc, setImgSrc] = useState(null);

    // Dynamically import image based on name
    import(`../assets/house-images/${house.img}.jpg`)
        .then(image => setImgSrc(image.default))
        .catch(err => console.error('Failed to load image', err));


    // If a house with the given id is found, display its details
    if (house) {
        return(
            <>
            <Container className="homeMainCont">
                <Row className="row hero">
                    <Col className="col-12 nav">
                        <NavigationBar/>
                    </Col>

                    <Col>
                    <h2>Details for {house.name}</h2>
                    <p>Location: {house.location}</p>
                    <p>Price: {house.price}</p>
                    <p>Bedrooms: {house.bedrooms}</p>
                    <p>Bathrooms: {house.bathrooms}</p>
                    <p>Size: {house.size}</p>
                    <p>Amenities: {house.amenities}</p>
                    <img src={imgSrc} alt={house.img} />
                    </Col>

                    <div className="logo"></div>
                    <Col className="col-12 img">
                        <div className="heading">

                            <h1>The Walthamstow Collection</h1>

                                <p>Please Note: We are a London based specialist in monthly apartment rentals. In <br/> 
                                    each property collection we operate multiple apartments at the same standards. All <br/> apartments are located within 5 minutes walking distance of each-other and are <br/> 
                                    allocated based on availability. An ideal location for anyone looking to make the <br/> most out of living in some of the most vibrant areas of London, whilst maintaining <br/> 
                                    fantastic access to the city centre and, a fabulous living space. Two bedrooms <br/> apartment with 1 bathroom, a kitchen with top appliances, and a large living room.<br/> 
                                    Six people can comfortably sleep on the property: ...</p>
                        </div>

                        
                    </Col>
                    <Col className="col-12 search">
                    
                    </Col>
                </Row>

            </Container>
            <FooterComp />
            </>
        );
    }
}

export default Details; 