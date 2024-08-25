// src/pages/SmallPets.js
import React from 'react';
import './SmallPets.css';


const SmallPets = () => {
  return (
    <div className="small-pets">
      <section className="intro-section">
        <div className="container">
          <h1>Small Pets</h1>
          <p>Discover the wonderful world of small pets. From fluffy rabbits to social guinea pigs and curious hamsters, learn more about these adorable creatures and how to care for them.</p>
        </div>
      </section>

      <section className="pet-section">
        <div className="container">
          <div className="pet">
            <img src="https://img.freepik.com/free-photo/fluffy-young-rabbit-sitting-green-meadow-generative-ai_188544-9049.jpg?t=st=1718081918~exp=1718085518~hmac=cd4b06440e08db88737fb00b5c18f833ee7e8b572be7789900e7f7caced02ed9&w=826" alt="Rabbit" />
            <div className="pet-info">
              <h2>Rabbits</h2>
              <p>Rabbits are social, intelligent, and curious creatures. They make great indoor pets and can form strong bonds with their owners.</p>
            </div>
          </div>
          <div className="pet">
            <img src="https://img.freepik.com/free-photo/beautiful-guinea-pig-pet-portrait_23-2149152066.jpg?t=st=1718082053~exp=1718085653~hmac=c160ca1a07bf5aca39bd1d43941ff415696335ebecb34b7155111bb66914bea2&w=740" alt="Guinea Pig" />
            <div className="pet-info">
              <h2>Guinea Pigs</h2>
              <p>Guinea pigs are gentle and social animals known for their cheerful squeaks. They enjoy companionship and interactive play.</p>
            </div>
          </div>
          <div className="pet">
            <img src="https://img.freepik.com/free-photo/closeup-shot-guinea-pig-isolated-white-background_181624-29830.jpg?t=st=1718082125~exp=1718085725~hmac=f4902396b2e538231d4faa3a3eda3ed4bb68393dd69cebe595a9a54f7439b233&w=740" alt="Hamster" />
            <div className="pet-info">
              <h2>Hamsters</h2>
              <p>Hamsters are nocturnal creatures with playful personalities. They need plenty of bedding and toys for enrichment.</p>
            </div>
          </div>
          <div className="pet">
            <img src="https://img.freepik.com/free-vector/sticker-design-with-cute-mouse-isolated_1308-59360.jpg?t=st=1718082252~exp=1718085852~hmac=cecec578be75561237b478f2deef2dad4eee369bd3b9a79b61830d6c25575a8b&w=740" alt="Mouse" />
            <div className="pet-info">
              <h2>Mice</h2>
              <p>Mice are small, social animals that enjoy exploring their environment. They are easy to care for and can be kept in same-sex pairs.</p>
            </div>
          </div>
          <div className="pet">
            <img src="https://img.freepik.com/free-photo/closeup-selective-focus-shot-brown-rat-concrete-ground_181624-20074.jpg?t=st=1718082219~exp=1718085819~hmac=ad7c1880dcb5665b74fc77d1672625e05aee8aae7e139b40f50f5620770c00a2&w=740" alt="Rat" />
            <div className="pet-info">
              <h2>Rats</h2>
              <p>Rats are intelligent and affectionate pets that thrive on human interaction. They require a large cage with plenty of enrichment.</p>
            </div>
          </div>
          <div className="pet">
            <img src="https://img.freepik.com/free-photo/cute-gerbil-fat-tail-crawls-red-flower_488145-1448.jpg?t=st=1718082335~exp=1718085935~hmac=72437e138804630e2348eb1e8115c1a3f2b6ae4c4bdedae2f153a72bd5ecf955&w=740" alt="Gerbil" />
            <div className="pet-info">
              <h2>Gerbils</h2>
              <p>Gerbils are active and social animals that enjoy burrowing and tunneling. They are best kept in pairs or small groups.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmallPets;
