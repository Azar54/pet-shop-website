// src/pages/BirdSupplies.js
import React from 'react';
import './BirdSupplies.css';

const BirdSupplies = () => {
  return (
    <div className="bird-supplies">
      <section className="intro-section">
        <div className="container">
          <h1>Bird Supplies</h1>
          <p>Explore our range of products to keep your feathered friends healthy and happy. From nutritious food to engaging toys, we have everything you need for your birds.</p>
        </div>
      </section>

      <section className="food-section">
        <div className="container">
          <h2>Food</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src="https://img.freepik.com/free-photo/close-up-hands-holding-animal-food_23-2148990381.jpg?t=st=1718040751~exp=1718044351~hmac=16452fff97d678ed46e9efb5137b90fda8bb5c1d67ef61360f26e853d08b91d9&w=740" className="card-img-top" alt="Bird Food 1" />
                <div className="card-body">
                  <h5 className="card-title">Seed Mixes</h5>
                  <p className="card-text">Balanced seed mixes for all types of birds.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://img.freepik.com/free-photo/pile-uncooked-buckwheat-gray-cloth_114579-79235.jpg?t=st=1718040860~exp=1718044460~hmac=3522e7b384ff71fb04a99c89a086fc25d48bf5362f6a9bd702bce18dd16d3e2e&w=740" className="card-img-top" alt="Bird Food 2" />
                <div className="card-body">
                  <h5 className="card-title">Pellets</h5>
                  <p className="card-text">Nutrient-rich pellets for optimal health.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://www.shutterstock.com/shutterstock/photos/1724173459/display_1500/stock-photo-food-for-rodents-from-oats-grass-pellets-animal-feed-corn-wheat-isolated-on-a-white-background-1724173459.jpg" className="card-img-top" alt="Bird Food 3" />
                <div className="card-body">
                  <h5 className="card-title">Treats</h5>
                  <p className="card-text">Delicious treats to reward your birds.</p>
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
                <img src="https://www.shutterstock.com/shutterstock/photos/1354948919/display_1500/stock-photo-close-up-of-blue-quaker-parrot-pet-bird-chewing-on-a-metal-bell-not-recommended-for-such-birds-1354948919.jpg" className="card-img-top" alt="Bird Toy 1" />
                <div className="card-body">
                  <h5 className="card-title">Chew Toys</h5>
                  <p className="card-text">Durable chew toys to keep your birds entertained.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://img.freepik.com/free-photo/close-up-various-bait-hanging-fishing-line_23-2147894150.jpg?t=st=1718041224~exp=1718044824~hmac=093d6672aaeb588b2893ead5221e11aef28ea10471a5d706e555b02ce6f5ec51&w=740" className="card-img-top" alt="Bird Toy 2" />
                <div className="card-body">
                  <h5 className="card-title">Swings</h5>
                  <p className="card-text">Fun swings for your birds to enjoy.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://img.freepik.com/free-photo/colorful-bird-house-outdoors_23-2150304172.jpg?t=st=1718041304~exp=1718044904~hmac=f4127a6f9284aecec51075be36d5549b231e75734f34635f4e1487375e1aa75d&w=740" className="card-img-top" alt="Bird Toy 3" />
                <div className="card-body">
                  <h5 className="card-title">Activity Centers</h5>
                  <p className="card-text">Engaging activity centers to stimulate your birds.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cages-section">
        <div className="container">
          <h2>Cages</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src="https://img.freepik.com/free-photo/front-view-hand-held-bird-cage-with-flowers_23-2148385835.jpg?t=st=1718041427~exp=1718045027~hmac=214401c18e07347a4fc9c43c42b4b79309048e3f03825c65f359a34938516ec3&w=360" className="card-img-top" alt="Bird Cage 1" />
                <div className="card-body">
                  <h5 className="card-title">Small Bird Cages</h5>
                  <p className="card-text">Comfortable cages for small birds.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://www.shutterstock.com/shutterstock/photos/2221410477/display_1500/stock-photo--large-outdoor-bird-cage-in-the-garden-2221410477.jpg" className="card-img-top" alt="Bird Cage 2" />
                <div className="card-body">
                  <h5 className="card-title">Large Bird Cages</h5>
                  <p className="card-text">Spacious cages for larger birds.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://www.shutterstock.com/shutterstock/photos/2453269495/display_1500/stock-photo-leces-probolinggo-east-java-april-very-beautiful-and-nice-caged-bird-2453269495.jpg" className="card-img-top" alt="Bird Cage 3" />
                <div className="card-body">
                  <h5 className="card-title">Travel Cages</h5>
                  <p className="card-text">Portable travel cages for on-the-go comfort.</p>
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
                <img src="https://img.freepik.com/free-photo/closeup-shot-eurasian-blue-tit_181624-50440.jpg?t=st=1718041795~exp=1718045395~hmac=dd6afccef31faa63cf340f4501b40d4ae960174c80dad85d6a5cfac699fe0e39&w=740" className="card-img-top" alt="Accessory 1" />
                <div className="card-body">
                  <h5 className="card-title">Perches</h5>
                  <p className="card-text">Comfortable perches for your birds to rest on.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://www.shutterstock.com/shutterstock/photos/1432098653/display_1500/stock-photo-thirsty-hummingbird-around-a-water-feeder-1432098653.jpg" className="card-img-top" alt="Accessory 2" />
                <div className="card-body">
                  <h5 className="card-title">Feeders & Waterers</h5>
                  <p className="card-text">Efficient feeders and waterers for daily needs.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://img.freepik.com/free-photo/vividly-colored-hummingbird-nature_23-2151495278.jpg?t=st=1718041951~exp=1718045551~hmac=3d232f07ec0e6442b8161716fd47db7234dcc754ff53789bcab3e7695faba2e4&w=826" className="card-img-top" alt="Accessory 3" />
                <div class="card-body">
                  <h5 class="card-title">Bird Baths</h5>
                  <p class="card-text">Refreshing bird baths for hygiene and fun.</p>
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
                <img src="https://img.freepik.com/free-photo/close-up-adorable-parrot-eating_23-2151182869.jpg?t=st=1718042050~exp=1718045650~hmac=2b360a0ab6726702573acf8a732de2642a1be560d6b3ec4d2b1cfa9921b8d03d&w=740" className="card-img-top" alt="Healthcare Product 1" />
                <div className="card-body">
                  <h5 className="card-title">Vitamins & Supplements</h5>
                  <p className="card-text">Essential vitamins and supplements for optimal health.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://img.freepik.com/free-vector/garden-pests-abstract-concept-vector-illustration-garden-maintenance-plant-insects-spray-insecticide-natural-pesticides-harvest-damage-viral-disease-natural-pest-control-abstract-metaphor_335657-1662.jpg?t=st=1718042161~exp=1718045761~hmac=753b208684ee643984e7818cfb82d51c4694952104ccd715868559b4af37ad6f&w=740" className="card-img-top" alt="Healthcare Product 2" />
                <div className="card-body">
                  <h5 className="card-title">Pest Control</h5>
                  <p className="card-text">Effective pest control solutions for a healthy environment.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://www.shutterstock.com/shutterstock/photos/1058306867/display_1500/stock-photo--d-render-of-a-funny-cartoon-penguin-character-dressed-for-winter-holding-a-first-aid-kit-1058306867.jpg" className="card-img-top" alt="Healthcare Product 3" />
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

export default BirdSupplies;
