import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BackToTopButton from './BackToTopButton';
import Footer from "./Footer";
import Card from './Card';
import Styles from './cssFiles/styleProps.module.css';

const Searchbar = ({ handleClick }) => {
  // State for the search input
  const [searchText, setSearchText] = useState('');

  // State for different lists
  const [listf, setListf] = useState([]);
  const [listr, setListr] = useState([]);
  const [listn, setListn] = useState([]);

  useEffect(() => {
    // Fetch data for featured listings
    axios.get('http://localhost:4000/featured')
      .then((response) => {
        console.log(response.data);
        setListf(response.data.products);
      })
      .catch((error) => {
        console.error('Error fetching featured data:', error);
      });

    // Fetch data for recent searches
    axios.get('http://localhost:4000/recent')
      .then((response) => {
        console.log(response.data);
        setListr(response.data.products);
      })
      .catch((error) => {
        console.error('Error fetching recent searches data:', error);
      });

    // Fetch data for new listings
    axios.get('http://localhost:4000/new')
      .then((response) => {
        console.log(response.data);
        setListn(response.data.products);
      })
      .catch((error) => {
        console.error('Error fetching new listings data:', error);
      });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // Handle input change in the search bar
  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  // Handle search button click
  const handleSearch = () => {
    console.log('Searching for:', searchText);
  };

  return (
    <div>
      {/* Search bar section */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ position: 'relative' }}>
          {/* ... (rest of your search bar JSX) */}
        </div>
      </div>

      {/* Recent Searches section */}
      <div>
        <p
          style={{
            fontSize: '42px',
            marginLeft: '40%',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            color: 'black',
            fontWeight: 'bold'
          }}
        >Recent Searches</p>
        <section>
          {listr.map((item) => (
            <Card item={item} key={item.id} handleClick={handleClick} />
          ))}
        </section>
      </div>

      {/* Featured Listings section */}
      <div>
        <p
          style={{
            fontSize: '42px',
            marginLeft: '40%',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            color: 'black',
            fontWeight: 'bold'
          }}
        >Featured Listings</p>
        <section>
          {listf.map((item) => (
            <Card item={item} key={item.id} handleClick={handleClick} />
          ))}
        </section>
      </div>

      {/* New Listings section */}
      <div>
        <p
          style={{
            fontSize: '42px',
            marginLeft: '40%',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            color: 'black',
            fontWeight: 'bold'
          }}
        >New Listings</p>
        <section>
          {listn.map((item) => (
            <Card item={item} key={item.id} handleClick={handleClick} />
          ))}
        </section>
        {/* Render BackToTopButton component */}
        <div className={Styles.footer}>
          <BackToTopButton />
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
