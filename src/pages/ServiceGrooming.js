// src/pages/ServiceGrooming.js
import React from 'react';
import './ServiceGrooming.css';

function ServiceGrooming() {
  return (
    <div className="service-page">
      <h1>Pet Grooming Services</h1>

      <div className="service">
        <img src="https://media.istockphoto.com/id/1188690349/photo/funny-portrait-of-a-welsh-corgi-pembroke-dog-showering-with-shampoo-dog-taking-a-bubble-bath.jpg?s=1024x1024&w=is&k=20&c=ULW6BAv6JQFuJRttIU4c1SxvOUD85fZpZikQNtzvG-0=" alt="Bathing and Shampooing" />
        <div className="service-content">
          <h2>Bathing and Shampooing</h2>
          <p>Keep your furry friend clean and fresh with our professional bathing and shampooing services. We use specially formulated pet shampoos that are gentle on your pet's skin and coat. Regular baths help remove dirt, odors, and excess oils, leaving your pet's coat shiny and healthy.</p>
        </div>
      </div>

      <div className="service">
        <img src="https://img.freepik.com/free-photo/woman-shears-dog-dog-sitting-couch-breed-yorkshire-terrier_1157-46558.jpg?t=st=1718082720~exp=1718086320~hmac=b00cc257bdea0abb68349c14e8e3f2bab5d8e246e5d463cecc9bedea99b2ece1&w=740" alt="Hair Trimming and Styling" />
        <div className="service-content">
          <h2>Hair Trimming and Styling</h2>
          <p>Treat your pet to a stylish haircut or grooming session with our experienced groomers. We offer breed-specific grooming as well as customized styles to suit your preferences. Regular trims help prevent matting, reduce shedding, and keep your pet looking and feeling their best.</p>
        </div>
      </div>

      <div className="service">
        <img src="https://media.istockphoto.com/id/1363731096/photo/veterinarian-cutting-cat-claws.jpg?s=1024x1024&w=is&k=20&c=A_3mb53hk1kCuaHmnLEfnpl0GEdH6ER9tdwicpurjk8=" alt="Nail Clipping and Paw Care" />
        <div className="service-content">
          <h2>Nail Clipping and Paw Care</h2>
          <p>Keep your pet's nails trimmed and their paws healthy with our nail clipping and paw care services. Overgrown nails can cause discomfort and affect your pet's mobility, so regular trimming is essential. We also offer paw pad moisturizing treatments to keep your pet's paws soft and supple.</p>
        </div>
      </div>

      <div className="service">
        <img src="https://img.freepik.com/free-photo/close-up-doctor-checking-dog-s-ear_23-2148302270.jpg?t=st=1718082846~exp=1718086446~hmac=291a730ea8e9b4f21a0a3e79688f96c1885c00b957e94d2b6503de34111d5108&w=740" alt="Ear Cleaning and Dental Hygiene" />
        <div className="service-content">
          <h2>Ear Cleaning and Dental Hygiene</h2>
          <p>Ensure your pet's ears are clean and free from wax buildup with our gentle ear cleaning services. Regular ear cleaning helps prevent infections and keeps your pet's ears healthy. We also offer teeth brushing and dental care products to keep their teeth and gums clean and strong.</p>
        </div>
      </div>

      <div className="service">
        <img src="https://img.freepik.com/free-photo/person-cutting-dog-s-fur-via-clipper_176532-10705.jpg?t=st=1718082921~exp=1718086521~hmac=7b97ea8da02e3b4546c0e7b6f1c5fe6ec599ebd86d0b0c81048379a67051d97c&w=740" alt="Fur De-Shedding and Skin Care" />
        <div className="service-content">
          <h2>Fur De-Shedding and Skin Care</h2>
          <p>Say goodbye to excess shedding with our fur de-shedding services. We use specialized tools and techniques to remove loose fur and reduce shedding, leaving your pet's coat smooth and healthy. We also provide skin care treatments to address any skin issues your pet may have.</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceGrooming;
