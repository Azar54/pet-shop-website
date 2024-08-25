// src/pages/Home.js
import React from 'react';
import './Home.css';
import ImageSlider from '../ImageSlider';  // Import the ImageSlider component

const Home = () => {
  return (
    <div className="home">
      {/* ImageSlider component here */}
      <section className="slider-section">
        <ImageSlider />
      </section>
      <section className="welcome-section">
        <div className="container text-center">
          <h1>Welcome to PERFECT PETS</h1>
          <p>Your one-stop destination for all your pet needs.</p>
        </div>
      </section>

      <section className="featured-products-section">
        <div className="container">
          <h2>Featured Products</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src="https://img.freepik.com/free-photo/adorable-white-little-puppy_23-2148985891.jpg?t=st=1718207709~exp=1718211309~hmac=562c2ae2315fe7a4034d0789bc0e992361dcd4fc077f64266432019c8a37ef21&w=740" className="card-img-top" alt="Deluxe Dog Bed" />
                <div className="card-body">
                  <h5 className="card-title">Deluxe Dog Bed</h5>
                  <p className="card-text">A comfortable and stylish bed for your dog, made with high-quality materials.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://img.freepik.com/free-photo/flat-lay-peanuts-bowl-spoon_23-2148431090.jpg?t=st=1718207787~exp=1718211387~hmac=f5e6906a5c73e8d5b247be58e83d9fb56bc6b941939eaab41758517d2934e9df&w=740" className="card-img-top" alt="Gourmet Cat Food" />
                <div className="card-body">
                  <h5 className="card-title">Gourmet Cat Food</h5>
                  <p className="card-text">Nutritionally balanced gourmet food to keep your cat healthy and happy.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://img.freepik.com/free-photo/full-shot-women-dog-inside_23-2148977466.jpg?t=st=1718207873~exp=1718211473~hmac=98c5b46087baffa472510bcaf7d810fde5b9e46934d06b0b8cecf9ad305302f0&w=740" className="card-img-top" alt="Interactive Pet Toy" />
                <div className="card-body">
                  <h5 className="card-title">Interactive Pet Toy</h5>
                  <p className="card-text">An engaging toy to keep your pets entertained and active.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src="https://img.freepik.com/free-photo/pet-accessories-still-life-concept-with-grooming-objects-food_23-2148949582.jpg?t=st=1718207944~exp=1718211544~hmac=704ea13ed7bce02a078d435f8ef5d3073d8ee76a3c1e041ca2e7e203d49fca73&w=740" className="card-img-top" alt="Pet Grooming Kit" />
                <div className="card-body">
                  <h5 className="card-title">Pet Grooming Kit</h5>
                  <p className="card-text">Complete grooming kit with all the tools you need to keep your pet looking its best.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://img.freepik.com/free-photo/woman-dog-going-walk-autumn-park_1153-4537.jpg?t=st=1718208011~exp=1718211611~hmac=05d7a5811d837a97a606f7849b63abdf8d444a2d03cd24c9086e5e9eb2e07170&w=740" className="card-img-top" alt="Comfort Harness" />
                <div className="card-body">
                  <h5 className="card-title">Comfort Harness</h5>
                  <p className="card-text">A soft and secure harness for walking your pet comfortably.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://img.freepik.com/free-photo/side-view-woman-working-laptop_23-2149940588.jpg?t=st=1718208073~exp=1718211673~hmac=094a9834f46c4f2696c374d1969d7cd5ce0f2a9a90b3ab1a4da81408b19d998b&w=740" className="card-img-top" alt="Pet Carrier" />
                <div className="card-body">
                  <h5 className="card-title">Pet Carrier</h5>
                  <p className="card-text">Lightweight and durable carrier for transporting your pet safely.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src="https://www.shutterstock.com/shutterstock/photos/2385917049/display_1500/stock-photo-red-corgi-dog-looks-at-a-hand-with-dry-food-in-the-shape-of-a-bone-2385917049.jpg" className="card-img-top" alt="Healthy Dog Treats" />
                <div className="card-body">
                  <h5 className="card-title">Healthy Dog Treats</h5>
                  <p className="card-text">Delicious and nutritious treats for rewarding your dog.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://img.freepik.com/free-photo/smart-feeder-pets-still-life_23-2151310852.jpg?t=st=1718208212~exp=1718211812~hmac=2856680c335660e76afa8fe045b0d036c900685d1fd88d30b83539732b0fa1ba&w=740" className="card-img-top" alt="Automatic Pet Feeder" />
                <div className="card-body">
                  <h5 className="card-title">Automatic Pet Feeder</h5>
                  <p className="card-text">Convenient automatic feeder to ensure your pet is always fed on time.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://www.shutterstock.com/shutterstock/photos/2218639167/display_1500/stock-photo-ginger-cat-drinks-fresh-water-from-an-electric-drinking-fountain-2218639167.jpg" className="card-img-top" alt="Pet Water Fountain" />
                <div className="card-body">
                  <h5 className="card-title">Pet Water Fountain</h5>
                  <p className="card-text">A fresh water source for your pets to keep them hydrated.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      <section className="services-overview-section">
        <div className="container">
          <h2>Our Services</h2>
          <div className="row">
            <div className="col-md-3">
              <h5>Grooming</h5>
              <p>Professional grooming services for your pets.</p>
            </div>
            <div className="col-md-3">
              <h5>Training</h5>
              <p>Expert training sessions to keep your pets well-behaved.</p>
            </div>
            <div className="col-md-3">
              <h5>Veterinary</h5>
              <p>Comprehensive veterinary care for your pets.</p>
            </div>
            <div className="col-md-3">
              <h5>Boarding</h5>
              <p>Safe and comfortable boarding facilities.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <h2>What Our Customers Say</h2>
          <div className="row">
            <div className="col-md-4">
              <blockquote className="blockquote">
                <p className="mb-0">Best pet shop ever! They have everything I need for my dog.</p>
                <footer className="blockquote-footer">John Doe</footer>
              </blockquote>
            </div>
            <div className="col-md-4">
              <blockquote className="blockquote">
                <p className="mb-0">Great services and friendly staff. Highly recommend!</p>
                <footer className="blockquote-footer">Jane Smith</footer>
              </blockquote>
            </div>
            <div className="col-md-4">
              <blockquote className="blockquote">
                <p className="mb-0">My cat loves their toys and treats. Excellent quality.</p>
                <footer className="blockquote-footer">Emily Johnson</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
