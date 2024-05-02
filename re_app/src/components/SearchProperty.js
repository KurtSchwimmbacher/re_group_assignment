import "../styles/SearchProperty.css"; 

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function SearchProperty() {
    return(
        <div className="container-fluid">
            <div className="row outerBox">
                <div className="col-12 searchBar-prop">
                <form
            className="d-flex search-form"
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search for Properties in..."
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success"
              type="submit"
            >
              <i class="bi bi-search"></i>
            </button>
          </form>
                </div>
            </div>
        </div>
    )
}

export default SearchProperty; 