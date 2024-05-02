import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import NavigationBar from "../components/NavigationBar";

function Listings() {

    return(
        <div className="homeMainCont">
            <div className="row hero">
                <div className="col-12 nav">
                    <NavigationBar/>
                </div>
                <div className="col-12 img">
                    <h1>Listings</h1>
                </div>
                <div className="col-12 search">
                
                </div>
            </div>

            <div></div>
        </div>
    );
}

export default Listings; //<-- there's something wrong (should be green)