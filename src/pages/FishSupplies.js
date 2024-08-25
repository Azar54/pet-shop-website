// src/pages/FishSupplies.js
import React from 'react';
import './FishSupplies.css';

const FishSupplies = () => {
  return (
    <div className="fish-supplies">
      <section className="intro-section">
        <div className="container">
          <h1>Fish Supplies</h1>
          <p>Explore our range of products to create a thriving aquarium environment. From premium fish food to decorative elements, we have everything you need for your aquatic pets.</p>
        </div>
      </section>

      <section className="aquariums-section">
        <div className="container">
          <h2>Aquariums</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src="https://img.freepik.com/free-vector/cave-inside-aquarium_1308-10992.jpg?t=st=1718042463~exp=1718046063~hmac=cdbf59e724c6d64467551b4249ee13514609ff41f8b0f724c498f5ab7089dfce&w=740" className="card-img-top" alt="Aquarium 1" />
                <div className="card-body">
                  <h5 className="card-title">Glass Tanks</h5>
                  <p className="card-text">High-quality glass tanks in various sizes.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://img.freepik.com/free-vector/room-interior-composition-with-realistic-aquarium-chest-drawers-wall-lamp-illustration_1284-62894.jpg?t=st=1718042541~exp=1718046141~hmac=211783823f02e42a3174397391614b15551240305271ff57bd96ea54bb306d45&w=740" className="card-img-top" alt="Aquarium 2" />
                <div className="card-body">
                  <h5 className="card-title">Acrylic Tanks</h5>
                  <p className="card-text">Durable acrylic tanks for a crystal-clear view.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://www.shutterstock.com/shutterstock/photos/683041222/display_1500/stock-photo-nano-coral-reef-aquarium-683041222.jpg" className="card-img-top" alt="Aquarium 3" />
                <div className="card-body">
                  <h5 className="card-title">Nano Tanks</h5>
                  <p className="card-text">Compact nano tanks for small spaces.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="food-section">
        <div className="container">
          <h2>Fish Food</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src="https://img.freepik.com/free-photo/bowl-baked-beans-blue-table_114579-89910.jpg?t=st=1718042769~exp=1718046369~hmac=4a8ed4b358f845c07b544c69a3e9f992558cfc3428aa48780bbfeb15991e8f7e&w=740" className="card-img-top" alt="Fish Food 1" />
                <div className="card-body">
                  <h5 className="card-title">Flakes</h5>
                  <p className="card-text">Nutritious flakes for everyday feeding.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://www.shutterstock.com/shutterstock/photos/1606018960/display_1500/stock-photo-green-pellets-fish-food-texture-background-close-up-top-view-1606018960.jpg" className="card-img-top" alt="Fish Food 2" />
                <div className="card-body">
                  <h5 className="card-title">Pellets</h5>
                  <p className="card-text">Sinking pellets for bottom-feeders.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://img.freepik.com/free-photo/russian-cookies-blue-platter-marble_114579-46400.jpg?t=st=1718042913~exp=1718046513~hmac=de11f7d1a8f6e14eecdd09f14a871e4887be0d7005926dac8e35ae13b23275db&w=740" className="card-img-top" alt="Fish Food 3" />
                <div className="card-body">
                  <h5 className="card-title">Freeze-Dried</h5>
                  <p className="card-text">Freeze-dried treats for variety and nutrition.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="decorations-section">
        <div className="container">
          <h2>Decorations</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src="https://img.freepik.com/free-vector/realistic-set-with-empty-aquarium-goldfish-plant-bottle-decoration-equipment-isolated-white-background-vector-illustration_1284-70664.jpg?t=st=1718043027~exp=1718046627~hmac=164a3fed2a0b1250ec226b013393ac2749021ebe2d11741055c78caef894b964&w=740" className="card-img-top" alt="Decoration 1" />
                <div className="card-body">
                  <h5 className="card-title">Ornaments</h5>
                  <p className="card-text">Colorful ornaments to enhance your aquarium's beauty.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://img.freepik.com/free-vector/cute-glass-terrariums-with-succulents-white-backround_1308-98584.jpg?t=st=1718043082~exp=1718046682~hmac=453a0205ffdcebb9e78b7d67669e942209c177874a99f16547770c7bc5f14ce3&w=740" className="card-img-top" alt="Decoration 2" />
                <div className="card-body">
                  <h5 className="card-title">Plants</h5>
                  <p className="card-text">Artificial plants for natural-looking underwater landscapes.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://img.freepik.com/free-photo/rocks-with-sea-moss_1160-752.jpg?t=st=1718043145~exp=1718046745~hmac=352952e3ec62da1e3143ddb3e8fbf4f8fc568c4f3420d7f6d6be385e66eed110&w=740" className="card-img-top" alt="Decoration 3" />
                <div className="card-body">
                  <h5 className="card-title">Rocks & Driftwood</h5>
                  <p className="card-text">Authentic rocks and driftwood for a realistic aquatic habitat.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add more sections for equipment, maintenance, etc. */}
    </div>
  );
};

export default FishSupplies;
