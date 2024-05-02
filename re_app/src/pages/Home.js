import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//media import below 
import house1 from "../assets/house-images/house-img-4.jpg";


import NavigationBar from "../components/NavigationBar";
import SearchProperty from "../components/SearchProperty";
import HouseCard from "../components/houseCard";

function Home() {

    return(
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

            <Row className="row house-cards">
                <Col className="col-4">
                    <HouseCard source={house1} />
                </Col>
                <Col className="col-4">
                    <HouseCard />
                </Col>
                <Col className="col-4">
                    <HouseCard />
                </Col>
            </Row>

            <div></div>
        </Container>
    );
}

export default Home; //<-- there's something wrong (should be green)