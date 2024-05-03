import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import "../styles/SearchProperty.css"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { ArrowRight } from 'react-bootstrap-icons';

import HouseCard from './houseCard';


function SearchProperty({ properties }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterCriteria, setFilterCriteria] = useState('name');
    const [minPrice, setMinPrice] = useState(0);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleFilterCriteriaChange = (event) => {
        setFilterCriteria(event.target.value);
    };

    const handleMinPriceChange = (event) => {
        setMinPrice(parseInt(event.target.value));
    };

    const filteredProperties = properties.filter(property => {
        if (filterCriteria === 'name') {
            return property.name.toLowerCase().includes(searchQuery.toLowerCase()) && property.price >= minPrice;
        } else if (filterCriteria === 'price') {
            return property.price >= minPrice;
        }
        return true;
    });

    return (
        <div className="container-fluid">
            <div className="row outerBox">
                <div className="col-12 searchBar-prop">
                    <form className="d-flex search-form">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search for Properties in..."
                            aria-label="Search"
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <select
                            className="form-select me-2"
                            value={filterCriteria}
                            onChange={handleFilterCriteriaChange}
                        >
                            <option value="name">Name</option>
                            <option value="price">Minimum Price</option>
                        </select>
                        {filterCriteria === 'price' && (
                            <input
                                className="form-control me-2"
                                type="number"
                                placeholder="Minimum Price"
                                aria-label="Minimum Price"
                                value={minPrice}
                                onChange={handleMinPriceChange}
                            />
                        )}
                        <button
                            className="btn"
                            type="submit"
                        >
                            <i className="bi bi-search"></i>
                        </button>
                    </form>
                </div>
            </div>

            {/* Display filtered results */}
            <div className='row results'>
              <h4>Displaying Listings</h4>
                {filteredProperties.map(property => (
                    <div className='col-3'>
                        <Link className='property-links' to={`/house/${property.id}`}>
                            {property.name}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchProperty;
