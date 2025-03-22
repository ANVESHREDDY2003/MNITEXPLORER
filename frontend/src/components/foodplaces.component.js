import React from 'react';
import './foodplaces.css';
import h4CanteenImage from '../images/h4_canteen.jpeg';
import annapurnaCanteenImage from '../images/annapurna_canteen.jpg';
import gargiCanteenImage from '../images/gargi.png';
import pmcCanteenImage from '../images/pmc.png';

// Description Component
function FoodPlaceDescription() {
  return (
    <div className="foodplace-description-card">
      <p>
        Malaviya National Institute of Technology (MNIT) in Jaipur has several food places on campus where students and staff can enjoy a variety of delicious meals and snacks.
      </p>
      <p>
        The food places include H4 Canteen, Annapurna Canteen, and the Canteen in Gargi Hostel. Additionally, the Plaza of Modern Conveniences (PMC) offers packaged foods and fruits for the convenience of the campus community.
      </p>
    </div>
  );
}

function FoodPlaceDetails({ foodPlace }) {
  return (
    <div className="foodplace-details-card">
      <h2>{foodPlace.name}</h2>
      {foodPlace.image && <img src={foodPlace.image} alt={foodPlace.name} />}
      <p>Description: {foodPlace.description}</p>
    </div>
  );
}

function FoodPlaces() {
  const foodPlacesData = [
    {
      "id": 1,
      "name": "H4 Canteen",
      "description": "H4 Canteen offers a wide range of food options, including Indian and fast-food items. It is a popular hangout spot for students and provides a relaxed and lively ambiance to enjoy meals with friends.",
      "image": h4CanteenImage
    },
    {
      "id": 2,
      "name": "Annapurna Canteen",
      "description": "Annapurna Canteen serves delicious and hygienic Indian meals, making it a favorite spot for students who crave authentic Indian cuisine.",
      "image": annapurnaCanteenImage
    },
    {
      "id": 3,
      "name": "Canteen in Gargi Hostel",
      "description": "The Canteen in Gargi Hostel offers a variety of food options, including snacks, meals, and beverages, catering to the residents' diverse tastes and preferences.",
      "image": gargiCanteenImage
    },
    {
      "id": 4,
      "name": "(PMC)",
      "description": "The PMC Canteen provides packaged foods and fruits, offering a quick and convenient option for students and staff to grab snacks and refreshments on the go.",
      "image": pmcCanteenImage
    },
  ];

  return (
    <div>
      <FoodPlaceDescription />
      <h1 className="foodplace-description-card">Food Places in MNIT Jaipur</h1>
      <div className="foodplaces-container">
        {foodPlacesData.map(foodPlace => (
          <FoodPlaceDetails key={foodPlace.id} foodPlace={foodPlace} />
        ))}
      </div>
    </div>
  );
}

export default FoodPlaces;
