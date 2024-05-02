import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavigationBar from "../components/NavigationBar";
import "../styles/AddProp.css";
import FooterComp from "../components/FooterComp";

function Home() {

    return(
        <>
        <Container className="homeMainCont">
            <Row className="row hero">
                <div className="col-12 nav">
                    <NavigationBar/>
                </div>
            </Row>
            <div className="pageHeader">
                <h1>Sell or Rent Your Home</h1>
            </div>
            <div className="pageSubHeader">
                <p>With just a few of your details you can send through a request to add your own property to our elite catalogue.</p>
            </div>
            <Row className="row wholeForm">
                <Col className="col addProp_info">
                    <div className="card info-card">
                        <img src="..." class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                    </div>
                </Col>
                <Col className="col addProp_Form">
                <form>                 
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingText" placeholder="Full Name"/>
                        <label for="floatingText">Full Name</label>
                    </div>

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
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                </Col>
            </Row>
        </Container>
        <FooterComp />
        </>
    );
}

export default Home; //<-- there's something wrong (should be green)