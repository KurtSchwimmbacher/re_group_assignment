import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import NavigationBar from "../components/NavigationBar";

function Details() {

    return(
        <div className="homeMainCont">
            <div className="row hero">
                <div className="col-12 nav">
                    <NavigationBar/>
                </div>
                <div className="col-12 img">
                    <h1>Details</h1>
                    <p></p>
                </div>
                <div className="col-12 search">
                
                </div>
            </div>

            <div></div>
        </div>
    );
}

export default Details; //<-- there's something wrong (should be green)