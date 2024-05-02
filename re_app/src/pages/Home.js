import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import NavigationBar from "../components/NavigationBar";
import SearchProperty from "../components/SearchProperty";

function Home() {

    return(
        <div className="homeMainCont">
            <div className="row hero">
                <div className="col-12 nav">
                    <NavigationBar/>
                </div>
                <div className="col-12 img">
                    <h1>Hello</h1>
                </div>
                <div className="col-12 search">
                <SearchProperty/>
                </div>
            </div>

            <div></div>
        </div>
    );
}

export default Home; //<-- there's something wrong (should be green)