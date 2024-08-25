// src/pages/ServiceVeterinary.js
import React from 'react';
import './ServiceVeterinary.css';

function ServiceVeterinary() {
  return (
    <div className="service-page">
      <h1>Veterinary Services</h1>

      <div className="service">
        <img src="https://img.freepik.com/free-photo/medicine-pet-care-people-concept-dog-veterinarian-doctor-vet-clinic_155003-9480.jpg?t=st=1718083674~exp=1718087274~hmac=aafb5b7f371db06100ec8bd846f76138706de5a02cba72080eb07783b9891349&w=740" alt="Health Check-ups" />
        <div className="service-content">
          <h2>Health Check-ups</h2>
          <p>Ensure your pet's well-being with regular health check-ups. Our veterinarians conduct thorough examinations to monitor your pet's overall health, detect any potential issues early, and provide necessary treatments. Routine check-ups help in maintaining your pet's health and longevity.</p>
        </div>
      </div>

      <div className="service">
        <img src="https://img.freepik.com/free-photo/veterinarian-taking-care-pet-dog_23-2149198633.jpg?t=st=1718083746~exp=1718087346~hmac=82ceb6998c2e2e2df642a9c78828c782795462c09e495435f6eb0193063715c6&w=740" alt="Vaccinations" />
        <div className="service-content">
          <h2>Vaccinations</h2>
          <p>Protect your pet from various infectious diseases with our comprehensive vaccination programs. We follow the latest veterinary guidelines to ensure your pet receives the necessary vaccines at the right intervals, providing immunity against common illnesses.</p>
        </div>
      </div>

      <div className="service">
        <img src="https://img.freepik.com/free-photo/medicine-pet-care-people-concept-dog-veterinarian-doctor-vet-clinic_155003-9490.jpg?t=st=1718083808~exp=1718087408~hmac=d2a15b63af1686f19af9871541c5b15962d60c0705f676fed342f901558d24ad&w=740" alt="Dental Care" />
        <div className="service-content">
          <h2>Dental Care</h2>
          <p>Maintain your pet's dental health with our professional dental care services. We offer teeth cleaning, polishing, and dental exams to prevent and treat oral issues such as tartar buildup, gum disease, and tooth decay. Healthy teeth and gums contribute to your pet's overall well-being.</p>
        </div>
      </div>

      <div className="service">
        <img src="https://img.freepik.com/free-photo/close-up-veterinarian-taking-care-pet_23-2149143883.jpg?t=st=1718083862~exp=1718087462~hmac=7dc88b0ea61217f59bb21a660825bfdaf643ef32998360151af83ca20734e26e&w=740" alt="Surgical Services" />
        <div className="service-content">
          <h2>Surgical Services</h2>
          <p>Our state-of-the-art surgical facilities are equipped to handle a wide range of surgeries, from routine spaying and neutering to more complex procedures. Our skilled veterinarians and support staff ensure your pet receives the best possible care before, during, and after surgery.</p>
        </div>
      </div>

      <div className="service">
        <img src="https://img.freepik.com/free-photo/close-up-veterinarian-taking-care-pet_23-2149143893.jpg?t=st=1718083941~exp=1718087541~hmac=ddc704a8ad6d8523bdf9c76dbb1f27259e163096df3087e7607b538e9924e39b&w=740" alt="Emergency Care" />
        <div className="service-content">
          <h2>Emergency Care</h2>
          <p>Accidents and sudden illnesses can happen at any time. Our emergency care services are available to provide prompt and effective treatment when your pet needs it the most. We are equipped to handle urgent medical situations and ensure your pet receives immediate attention.</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceVeterinary;
