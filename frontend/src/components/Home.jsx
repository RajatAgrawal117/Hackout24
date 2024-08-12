import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <div className="logo">AGRONO</div>
      </header>
      
      <section className="main-section">
        <div className="main-text">
          <h1 className="title">Harvesting Tomorrow's Harvests Today</h1>
          <p className="subtitle">
            Where agriculture meets innovation. Our platform is dedicated to empowering farmers with cutting-edge technology and comprehensive solutions that streamline operations, enhance productivity, and ensure sustainability.
          </p>
          <a href="/" className="add-thoughts">Add your thoughts &rarr;</a>
        </div>
        <div className="main-image">
          <img src="https://plus.unsplash.com/premium_photo-1686269460470-a44c06f16e0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFybWVyfGVufDB8fDB8fHww" alt="Farmer with produce" className='farmer-image'/>
        </div>
      </section>
      
      <section className="services-section">
        <div className="service">
          <h2 className="service-title">Farming Futures: Innovate, Connect, Thrive</h2>
          <p className="service-description">
            At Farming Futures, we're dedicated to pioneering the future of agriculture through innovation, connectivity, and sustainable practices.
          </p>
          <a href="/" className="read-more">Read more &rarr;</a>
        </div>
        <div className="service">
          <h2 className="service-title">Crop Monitoring and Management</h2>
          <p className="service-description">
            Crop Monitoring and Management lies at the core of our farming platform, where advanced tools enable precise crop monitoring and efficient seasonal management.
          </p>
          <a href="/" className="read-more">Read more &rarr;</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
