import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import { useParams } from 'react-router-dom';
// import css
import '../App.css'

import NavigationBar from "../components/NavigationBar";
import FooterComp from "../components/FooterComp";

function Details() {

    const { id } = useParams(); // Get the id from the URL params

    return(
        <>
        <Container className="homeMainCont">
            <Row className="row hero">
                <Col className="col-12 nav">
                    <NavigationBar/>
                </Col>

                <Col>
                <h2>Details for House ID: {id}</h2>
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

export default Details; 