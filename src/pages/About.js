// src/pages/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <section className="company-history-section">
        <div className="container">
          <h1>About Us</h1>
         <p>
         Welcome to Perfect Pets, your one-stop destination for all your pet needs! Located in the heart of Animal Town, we offer a wide range of high-quality pet products and services. Our knowledgeable and friendly staff are dedicated to helping you find the best solutions for your furry, feathered, or scaly friends. At Pet Shop, we believe in providing exceptional care and support for all pets, ensuring they live happy and healthy lives. From nutritious food and fun toys to grooming and veterinary services, we have everything you need under one roof. Visit us today and experience the Pet Shop difference. Your pets deserve the best, and we’re here to provide it!
         </p>
        </div>
      </section>

      <section className="mission-statement-section">
        <div className="container">
          <h2>Our Mission</h2>
          <p>
            
At Pet Shop, our mission is to enhance the lives of pets and their owners. We are committed to providing top-notch products and services that meet the unique needs of each pet. Whether it's nutritious food, engaging toys, or professional grooming and veterinary care, we ensure their health, happiness, and well-being. Our knowledgeable staff is dedicated to offering personalized support and advice. We strive to create a welcoming environment where pets and their owners feel valued and cared for. Visit us to experience our passion for pets and commitment to excellence.
          </p>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2>Meet Our Team</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card team-member-card">
                <img src="https://scontent.fmaa2-3.fna.fbcdn.net/v/t39.30808-6/306087572_148212437840410_640872781437493318_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=mJ-Q9RpVSs8Q7kNvgHINWhV&_nc_ht=scontent.fmaa2-3.fna&oh=00_AYBbBRnRVVvnOkJesWsb4EPid_HdjlMtbvdv7-pA3I9I6Q&oe=666DB94F" className="card-img-top" alt="Team Member 1" />
                <div className="card-body">
                  <h5 className="card-title">Naai Sekar</h5>
                  <p className="card-text">Founder & CEO</p>
                  <p className="card-text">sekar has over 20 years of experience in the pet industry and is dedicated to providing the best for pets and their owners.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card team-member-card">
                <img src="https://scontent.fmaa2-1.fna.fbcdn.net/v/t31.18172-8/21015720_123928318253718_6310368758741215415_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Tdh21Ot1n2wQ7kNvgEWPvks&_nc_ht=scontent.fmaa2-1.fna&oh=00_AYCsy7qehCfdVKqJpa36M_9nLKYchIRsemvIxcv_z_57zA&oe=668F4149" className="card-img-top" alt="Team Member 2" />
                <div className="card-body">
                  <h5 className="card-title">Snake Babu</h5>
                  <p className="card-text">Chief Veterinarian</p>
                  <p className="card-text">Babu is our chief veterinarian with a passion for animal health and wellness, providing top-notch care for all pets.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card team-member-card">
                <img src="https://pbs.twimg.com/media/EVOLpQXUMAEAh-s?format=jpg&name=medium" className="card-img-top" alt="Team Member 3" />
                <div className="card-body">
                  <h5 className="card-title">Otteri Nari</h5>
                  <p className="card-text">Grooming Specialist</p>
                  <p className="card-text">Otteri Nari is an expert groomer with a gentle touch, making sure every pet looks and feels their best after a grooming session.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <h2>Customer Testimonials</h2>
          <div className="row">
            <div className="col-md-4">
              <blockquote className="blockquote">
                <p className="mb-0">Pet Shop is amazing! Their products are top quality, and the staff is incredibly helpful.</p>
                <footer className="blockquote-footer">Alice Brown</footer>
              </blockquote>
            </div>
            <div className="col-md-4">
              <blockquote className="blockquote">
                <p className="mb-0">I always bring my dog here for grooming. They do an excellent job every time.</p>
                <footer className="blockquote-footer">Michael Green</footer>
              </blockquote>
            </div>
            <div className="col-md-4">
              <blockquote className="blockquote">
                <p className="mb-0">The veterinary services at Pet Shop are fantastic. My cat is always well taken care of.</p>
                <footer className="blockquote-footer">Sarah White</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
