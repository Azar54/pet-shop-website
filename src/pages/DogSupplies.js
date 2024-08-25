// src/pages/DogSupplies.js
import React from 'react';
import './DogSupplies.css';

const DogSupplies = () => {
  return (
    <div className="dog-supplies">
      <section className="intro-section">
        <div className="container">
          <h1>Dog Supplies</h1>
          <p>Find everything you need to keep your dog healthy, happy, and well-groomed. From nutritious food to fun toys, we have it all.</p>
        </div>
      </section>

      <section className="food-section">
        <div className="container">
          <h2>Food</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src="https://media.istockphoto.com/id/1498237967/photo/dry-kibble-pet-food-dog-or-cat-food-on-old-table.jpg?s=1024x1024&w=is&k=20&c=hIx7VrpRdozhjB7TolYNC3nzzvwH7TbCxtF-RaO6200=" className="card-img-top" alt="Dog Food 1" />
                <div className="card-body">
                  <h5 className="card-title">Premium Dry Food</h5>
                  <p className="card-text">High-quality dry food with balanced nutrients for all life stages.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://images.unsplash.com/photo-1589924691995-400dc9ecc119?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Dog Food 2" />
                <div className="card-body">
                  <h5 className="card-title">Grain-Free Wet Food</h5>
                  <p className="card-text">Delicious grain-free wet food to support healthy digestion.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Dog Food 3" />
                <div className="card-body">
                  <h5 className="card-title">Organic Treats</h5>
                  <p className="card-text">Organic treats made with natural ingredients for your dog's enjoyment.</p>
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
                <img src="https://img.freepik.com/free-photo/close-up-pet-accessories_23-2150960004.jpg?w=740&t=st=1718011560~exp=1718012160~hmac=ead4217a0a665f3f44d9e3ad0c0317a811dce8026dc946e7e1fdc5d732abe372" className="card-img-top" alt="Dog Toy 1" />
                <div className="card-body">
                  <h5 className="card-title">Chew Toys</h5>
                  <p className="card-text">Durable chew toys to keep your dog entertained and promote dental health.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://img.freepik.com/free-photo/adorable-white-dog-isolated-yellow_23-2148985983.jpg?w=826&t=st=1718011684~exp=1718012284~hmac=4ddf7e3cb2ea8351c0ab3d203ce7300d457f21ce43b24e878ae74d4097a21afd" className="card-img-top" alt="Dog Toy 2" />
                <div className="card-body">
                  <h5 className="card-title">Fetch Toys</h5>
                  <p className="card-text">Perfect toys for interactive fetch games to keep your dog active.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://img.freepik.com/free-photo/close-up-bingo-game-elements_23-2149181796.jpg?t=st=1718011791~exp=1718015391~hmac=72fae2a0cfa64c686696291e563c70c73ede01f3fe03f2f75bdb10c1f0da60b9&w=740" className="card-img-top" alt="Dog Toy 3" />
                <div className="card-body">
                  <h5 className="card-title">Puzzle Toys</h5>
                  <p className="card-text">Engaging puzzle toys to stimulate your dog's mind and prevent boredom.</p>
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
                <img src="https://img.freepik.com/free-photo/washing-pet-dog-home_23-2149627227.jpg?t=st=1718011958~exp=1718015558~hmac=c2f6c923bd0677cdf9d3533a7e1ff81bebb04380e127696c6fac780d7f34cf75&w=740" className="card-img-top" alt="Grooming Product 1" />
                <div className="card-body">
                  <h5 className="card-title">Shampoos</h5>
                  <p className="card-text">Gentle and effective shampoos for all coat types.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://img.freepik.com/free-vector/i-love-my-pet-elements_23-2147536770.jpg?t=st=1718012082~exp=1718015682~hmac=bb6e17e07372c14b1ad6e26703dd641ccf7979fea5104cef5a84991f8e65f29b&w=740" className="card-img-top" alt="Grooming Product 2" />
                <div className="card-body">
                  <h5 className="card-title">Brushes & Combs</h5>
                  <p className="card-text">High-quality brushes and combs to keep your dog's coat healthy and shiny.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://www.shutterstock.com/shutterstock/photos/2342816629/display_1500/stock-photo-a-veterinarian-trimming-a-dog-s-long-nails-with-a-special-tool-2342816629.jpg" className="card-img-top" alt="Grooming Product 3" />
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
                <img src="https://img.freepik.com/free-photo/view-cute-dog-enjoying-time-nature-park_23-2150407365.jpg?t=st=1718012324~exp=1718015924~hmac=7ec6461a2978cb66749411c8c2d34d0876842945060b2ddb97f42341c8227ea5&w=740" className="card-img-top" alt="Accessory 1" />
                <div className="card-body">
                  <h5 className="card-title">Leashes & Collars</h5>
                  <p className="card-text">Stylish and durable leashes and collars for daily walks.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://img.freepik.com/free-photo/adorable-white-little-puppy_23-2148985894.jpg?t=st=1718012388~exp=1718015988~hmac=d5de4d6c71a48e4e2f709059a9f2227cc34275585367aa34b2feb1d502b958b9&w=740" className="card-img-top" alt="Accessory 2" />
                <div className="card-body">
                  <h5 className="card-title">Beds</h5>
                  <p className="card-text">Comfortable and cozy beds for a good night's sleep.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://img.freepik.com/free-photo/bowl-with-tasty-cereal-table_23-2148318424.jpg?t=st=1718012519~exp=1718016119~hmac=07789da2075c3d335a59892b775acc156f480b71739079927961fa21f9065eef&w=740" className="card-img-top" alt="Accessory 3" />
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
                <img src="https://img.freepik.com/free-photo/brain-booster-pills-still-life_23-2150769459.jpg?t=st=1718012647~exp=1718016247~hmac=0d1134dcaae8be68dc65eb588cd512193d38957cbca4b15ba5e7915ecbfcdb2f&w=740" className="card-img-top" alt="Healthcare Product 1" />
                <div className="card-body">
                  <h5 className="card-title">Vitamins & Supplements</h5>
                  <p className="card-text">Essential vitamins and supplements to support your dog's health.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://img.freepik.com/free-photo/adorable-little-dog-playing-with-his-owner_23-2148576969.jpg?t=st=1718012731~exp=1718016331~hmac=e3693246b1e581b28deb25f341ff497a7294b38f6c9ad281427ec6af86e3fb54&w=740" className="card-img-top" alt="Healthcare Product 2" />
                <div className="card-body">
                  <h5 className="card-title">Flea & Tick Control</h5>
                  <p className="card-text">Effective flea and tick control products to keep your dog pest-free.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://img.freepik.com/free-vector/first-aid-background_23-2147929005.jpg?t=st=1718012827~exp=1718016427~hmac=b19f7cbf3d322f9d624724666561319c06096d8bc0669f80121a639f2af3a766&w=740" className="card-img-top" alt="Healthcare Product 3" />
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

export default DogSupplies;
