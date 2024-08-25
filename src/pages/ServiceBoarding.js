// src/pages/ServiceBoarding.js
import React from 'react';
import './ServiceBoarding.css';

function ServiceBoarding() {
  return (
    <div className="service-page">
      <h1>Pet Boarding Services</h1>

      <div className="service">
        <img src="https://img.freepik.com/free-photo/curious-dog-looking-up_107420-95962.jpg?t=st=1718084040~exp=1718087640~hmac=b7db218bbe1894f84a08f5e2a691a5cdce5be91b0abc9460c575045a7cb19710&w=740" alt="Comfortable Boarding Rooms" />
        <div className="service-content">
          <h2>Comfortable Boarding Rooms</h2>
          <p>Our pet boarding facility offers comfortable and spacious rooms for your furry friends. Each room is designed to provide a safe and cozy environment, ensuring your pet feels at home while you're away. We provide individual attention and care to each guest.</p>
        </div>
      </div>

      <div className="service">
        <img src="https://img.freepik.com/free-photo/full-shot-women-dog-inside_23-2148977466.jpg?t=st=1718084114~exp=1718087714~hmac=e0d80e002759f566181408ea9ef0ad48c61808aa87bdd7595e0787ae7f4c0a0f&w=740" alt="Group Play Sessions" />
        <div className="service-content">
          <h2>Group Play Sessions</h2>
          <p>We organize supervised group play sessions to keep your pet active and socialized. Our trained staff ensures that playgroups are matched according to size, temperament, and play style, allowing your pet to have fun and make new friends in a safe setting.</p>
        </div>
      </div>

      <div className="service">
        <img src="https://img.freepik.com/free-photo/side-view-smiley-woman-dancing-with-dog_23-2149930241.jpg?t=st=1718084187~exp=1718087787~hmac=f694ce2f612c87b42ee3bcca2263f44f5573b2dd0a4c19788156e4018fa0a8b6&w=740" alt="Personalized Care" />
        <div className="service-content">
          <h2>Personalized Care</h2>
          <p>Every pet is unique, and so are their needs. We offer personalized care plans to cater to your pet's specific requirements. Whether it's special dietary needs, medication administration, or extra cuddle time, our team is dedicated to providing individualized attention.</p>
        </div>
      </div>

      <div className="service">
        <img src="https://img.freepik.com/free-photo/friends-young-woman-working-out-home-doing-yoga-exercises-with-dog-beautiful-woman-stretching-practicing-wellness-wellbeing-healthcare-mental-health-lifestyle-concept_155003-24652.jpg?t=st=1718084269~exp=1718087869~hmac=4b6b8780be821b2c384cd9886b5a99a0094c8572bfe7bd15284ce475391f8630&w=740" alt="Regular Exercise" />
        <div className="service-content">
          <h2>Regular Exercise</h2>
          <p>Keeping your pet active is important for their health and well-being. Our boarding services include regular exercise routines, including walks, playtime, and interactive activities, to keep your pet physically and mentally stimulated during their stay.</p>
        </div>
      </div>

      <div className="service">
        <img src="https://img.freepik.com/free-photo/medium-shot-smiley-woman-dog_23-2149335075.jpg?t=st=1718084391~exp=1718087991~hmac=b0c0bcb6825c94a453f245f2b3cec4e0c32e626c0226d5ddd3dcf96955f0fdd4&w=740" alt="24/7 Monitoring" />
        <div className="service-content">
          <h2>24/7 Monitoring</h2>
          <p>Your pet's safety is our top priority. Our facility is equipped with 24/7 monitoring systems, and our staff is on-site around the clock to ensure your pet is safe, comfortable, and well-cared for at all times. You can have peace of mind knowing your pet is in good hands.</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceBoarding;
