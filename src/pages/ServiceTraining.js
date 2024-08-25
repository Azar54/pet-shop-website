// src/pages/ServiceTraining.js
import React from 'react';
import './ServiceTraining.css';

function ServiceTraining() {
  return (
    <div className="service-page">
      <h1>Pet Training Services</h1>

      <div className="service">
        <img src="https://img.freepik.com/free-photo/young-couple-with-cute-dog_23-2147986387.jpg?t=st=1718083117~exp=1718086717~hmac=632352709bfdd8df6f559fce05a4de3fba3b1d14c51774402ad3dc9c954973fc&w=740" alt="Obedience Training" />
        <div className="service-content">
          <h2>Obedience Training</h2>
          <p>Our obedience training programs are designed to teach your pet basic commands and proper behavior. Our experienced trainers use positive reinforcement techniques to ensure your pet learns in a safe and encouraging environment.</p>
        </div>
      </div>

      <div className="service">
        <img src="https://img.freepik.com/free-photo/lovely-dog-posing-garden_23-2147997385.jpg?t=st=1718083201~exp=1718086801~hmac=4c18c596cb72664fea948e7218ab7de1ede6dff6888997ccab2fa99a572ec57e&w=740" alt="Puppy Training" />
        <div className="service-content">
          <h2>Puppy Training</h2>
          <p>Start your puppy off on the right paw with our comprehensive puppy training courses. We cover essential topics like house training, socialization, and basic commands to help your puppy develop good habits from an early age.</p>
        </div>
      </div>

      <div className="service">
        <img src="https://img.freepik.com/free-photo/dog-trainer-teaching-dog-run-though-obstacles_23-2149448225.jpg?t=st=1718083329~exp=1718086929~hmac=7f8d31dedb22d56f56050925b4744376e8345d215fe1bc50415403e02cf77f41&w=740" alt="Agility Training" />
        <div className="service-content">
          <h2>Agility Training</h2>
          <p>For active pets and their owners, our agility training classes offer a fun and challenging way to bond. Your pet will learn to navigate obstacle courses, improving their physical fitness, coordination, and confidence.</p>
        </div>
      </div>

      <div className="service">
        <img src="https://img.freepik.com/free-photo/full-shot-happy-women-dog_23-2148977508.jpg?t=st=1718083414~exp=1718087014~hmac=9c99870ce64af35d1dc5d2e2762c1612907dac4d5e5c75898b200c0f8dd72473&w=740" alt="Behavioral Training" />
        <div className="service-content">
          <h2>Behavioral Training</h2>
          <p>If your pet exhibits undesirable behaviors such as excessive barking, chewing, or aggression, our behavioral training sessions can help. Our trainers will work with you and your pet to address and correct these behaviors.</p>
        </div>
      </div>

      <div className="service">
        <img src="https://img.freepik.com/free-photo/beautiful-border-collie-dog-training-with-owner_23-2149304052.jpg?t=st=1718083473~exp=1718087073~hmac=472eaff9c6c9eee73b961c02818217ddec692ed3432755aea458ed98cb0dc002&w=740" alt="Trick Training" />
        <div className="service-content">
          <h2>Trick Training</h2>
          <p>Add some fun to your pet's routine with our trick training classes. Teach your pet to perform entertaining tricks like shaking hands, rolling over, and playing dead. It's a great way to stimulate their mind and keep them engaged.</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceTraining;
