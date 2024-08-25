// src/pages/CatSupplies.js
import React from 'react';
import './CatSupplies.css';

const CatSupplies = () => {
  return (
    <div className="cat-supplies">
      <section className="intro-section">
        <div className="container">
          <h1>Cat Supplies</h1>
          <p>Discover a wide range of products to keep your cat happy, healthy, and entertained. From premium food to engaging toys, we have everything your feline friend needs.</p>
        </div>
      </section>

      <section className="food-section">
        <div className="container">
          <h2>Food</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src="https://img.freepik.com/free-photo/still-life-pet-food-arrangement_23-2148982354.jpg?t=st=1718038050~exp=1718041650~hmac=244655af8fd8a7bf369d8023094eccb88291402f070114d45dacee4051026ecd&w=740" className="card-img-top" alt="Cat Food 1" />
                <div className="card-body">
                  <h5 className="card-title">Premium Dry Food</h5>
                  <p className="card-text">High-quality dry food with essential nutrients for all life stages.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://img.freepik.com/free-photo/still-life-pet-food-composition_23-2148982345.jpg?t=st=1718037982~exp=1718041582~hmac=0014e2e2c2a5c7d9b28fce3bc9d0762f5dd916e2aca6fcbf8772b7f7e3caa705&w=740" className="card-img-top" alt="Cat Food 2" />
                <div className="card-body">
                  <h5 className="card-title">Grain-Free Wet Food</h5>
                  <p className="card-text">Delicious grain-free wet food to support healthy digestion.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://www.shutterstock.com/shutterstock/photos/2419602245/display_1500/stock-vector-a-tin-can-of-cat-food-a-closed-preserves-of-fish-food-for-pets-a-pet-care-item-a-flat-vector-2419602245.jpg" className="card-img-top" alt="Cat Food 3" />
                <div className="card-body">
                  <h5 className="card-title">Organic Treats</h5>
                  <p className="card-text">Organic treats made with natural ingredients for your cat's enjoyment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="toys-section">
        <div className="container">
          <h2>Toys</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src="https://img.freepik.com/free-photo/cute-scottish-straight-gray-cat-hunting-playing_574295-452.jpg?t=st=1718038171~exp=1718041771~hmac=e7d53ac0cacf645bb9c5683e8f2c5bc792cfc82d2e2acf8475b5cf7b98e8e525&w=740" className="card-img-top" alt="Cat Toy 1" />
                <div className="card-body">
                  <h5 className="card-title">Interactive Toys</h5>
                  <p className="card-text">Engaging interactive toys to stimulate your cat's mind and keep them active.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://www.shutterstock.com/shutterstock/photos/1795896631/display_1500/stock-photo-cat-with-toy-dinosaur-in-mouth-and-between-the-front-paws-while-lying-sideways-playful-kitty-1795896631.jpg" className="card-img-top" alt="Cat Toy 2" />
                <div className="card-body">
                  <h5 className="card-title">Chew Toys</h5>
                  <p className="card-text">Durable chew toys to keep your cat entertained and promote dental health.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://img.freepik.com/free-photo/adorable-kitty-being-playful_23-2149167102.jpg?t=st=1718038413~exp=1718042013~hmac=80687eaf4a56b48dc147e930a6d617ba93245694acf17614599accc5d9013f00&w=740" className="card-img-top" alt="Cat Toy 3" />
                <div className="card-body">
                  <h5 className="card-title">Catnip Toys</h5>
                  <p className="card-text">Fun and stimulating catnip toys to encourage playful behavior.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grooming-section">
        <div className="container">
          <h2>Grooming Products</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src="https://www.shutterstock.com/shutterstock/photos/2312628721/display_1500/stock-vector-dog-shampoo-label-design-cat-shampoo-label-design-pet-care-products-label-design-packaging-2312628721.jpg" className="card-img-top" alt="Grooming Product 1" />
                <div className="card-body">
                  <h5 className="card-title">Shampoos</h5>
                  <p className="card-text">Gentle and effective shampoos for all coat types.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://img.freepik.com/free-photo/owner-brushing-cute-cat-side-view_23-2150139681.jpg?t=st=1718038612~exp=1718042212~hmac=fb78d63bb81cf170851aeee98b0b18d895f887857c1910a7729f4c50763b6907&w=740" className="card-img-top" alt="Grooming Product 2" />
                <div className="card-body">
                  <h5 className="card-title">Brushes & Combs</h5>
                  <p className="card-text">High-quality brushes and combs to keep your cat's coat healthy and shiny.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://img.freepik.com/free-photo/white-fluffy-cat-veterinarian-with-cats-animals-couch_1157-46552.jpg?t=st=1718038687~exp=1718042287~hmac=eedc699eed6e6cdbcfb158ca2fd9d9aec819ef633cc859427f6faf81fb4c9f7b&w=740" className="card-img-top" alt="Grooming Product 3" />
                <div className="card-body">
                  <h5 className="card-title">Nail Clippers</h5>
                  <p className="card-text">Safe and easy-to-use nail clippers for at-home grooming.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="accessories-section">
        <div className="container">
          <h2>Accessories</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src="https://img.freepik.com/free-photo/top-view-pet-accessories_23-2150930394.jpg?t=st=1718038886~exp=1718042486~hmac=8fdfe84d873e2da551ab55bc07f6a8520a606247bf67d4736d581b371f3c5fe5&w=740" className="card-img-top" alt="Accessory 1" />
                <div className="card-body">
                  <h5 className="card-title">Collars & Leashes</h5>
                  <p className="card-text">Stylish and durable collars and leashes for daily walks and adventures.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://img.freepik.com/free-photo/adorable-cat-relaxing-indoors_23-2150692742.jpg?t=st=1718038966~exp=1718042566~hmac=c63c883102728a6d7afd6ccb19e5df2097fe8b96db64e1effda879561aa76b91&w=740" className="card-img-top" alt="Accessory 2" />
                <div className="card-body">
                  <h5 className="card-title">Beds</h5>
                  <p className="card-text">Comfortable and cozy beds for a good night's sleep.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://img.freepik.com/free-photo/smart-feeder-pets-still-life_23-2151310846.jpg?t=st=1718039040~exp=1718042640~hmac=23a3b819d748951550061ddc133135d9b4a9efae584f78bcd6733609113e5863&w=740" className="card-img-top" alt="Accessory 3" />
                <div className="card-body">
                  <h5 className="card-title">Bowls & Feeders</h5>
                  <p className="card-text">Functional and stylish bowls and feeders for mealtime.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="healthcare-section">
        <div className="container">
          <h2>Healthcare</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src="https://img.freepik.com/free-photo/cute-cats-eating-together-outdoors_23-2148683022.jpg?t=st=1718039163~exp=1718042763~hmac=dba9f3a4ef0ff328745e31f7281ac1ad7ee60cd742cb253a62d76457915a271b&w=740" className="card-img-top" alt="Healthcare Product 1" />
                <div className="card-body">
                  <h5 className="card-title">Vitamins & Supplements</h5>
                  <p className="card-text">Essential vitamins and supplements to support your cat's health.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://img.freepik.com/free-photo/beautiful-cat-home_23-2149304107.jpg?t=st=1718039283~exp=1718042883~hmac=6de45aad3d24c60e0079f2aef94008ef1f59faf148c61e018681b1b78eeccfd9&w=740" className="card-img-top" alt="Healthcare Product 2" />
                <div className="card-body">
                  <h5 className="card-title">Flea & Tick Control</h5>
                  <p className="card-text">Effective flea and tick control products to keep your cat pest-free.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://www.shutterstock.com/shutterstock/photos/1297600720/display_1500/stock-photo-first-aid-kit-and-cute-cat-on-white-background-animal-care-1297600720.jpg" className="card-img-top" alt="Healthcare Product 3" />
                <div className="card-body">
                  <h5 className="card-title">First Aid Kits</h5>
                  <p className="card-text">Comprehensive first aid kits for emergencies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CatSupplies;
