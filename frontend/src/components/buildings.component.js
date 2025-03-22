import React from 'react';
import './buildings.css';
import vltcImage from '../images/vltc.jpeg';
import prabhaBhawanImage from '../images/prabha_bhawan.jpg';
import pmcImage from '../images/pmc.png';
import libraryImage from '../images/library.jpeg';
import oatImage from '../images/oat.jpeg';
import dispensaryImage from '../images/dispensary.jpg';

// Description Component
function BuildingDescription() {
  return (
    <div className="building-description-card">
      <p>
        Malaviya National Institute of Technology (MNIT) in Jaipur has several key buildings that serve various purposes for the students and staff. These buildings play a crucial role in providing essential facilities and services to the campus community.
      </p>
    </div>
  );
}

function BuildingDetails({ building }) {
  return (
    <div className="building-details-card">
      <h2>{building.name}</h2>
      {building.image && <img src={building.image} alt={building.name} />}
      <p>Description: {building.description}</p>
      {building.additionalInfo && <p>{building.additionalInfo}</p>}
    </div>
  );
}

function Buildings() {
  const buildingsData = [
    {
      "id": 1,
      "name": "Vivekanada Lecture Theater Complex (VLTC)",
      "description": "The Vikramaditya Learning and Teaching Center (VLTC) is a state-of-the-art academic building equipped with modern classrooms, lecture halls, and laboratories. It is designed to provide a conducive environment for teaching and learning.",
      "image": vltcImage
    },
    {
      "id": 2,
      "name": "Prabha Bhawan",
      "description": "Prabha Bhawan is one of the hostels at MNIT Jaipur, providing accommodation to undergraduate students. The hostel fosters a vibrant community atmosphere and offers essential amenities for students' comfort and well-being.",
      "image": prabhaBhawanImage,
      "additionalInfo": "Prabha Bhawan also houses ICICI Bank and State Bank of India (SBI) ATM for financial transactions."
    },
    {
      "id": 3,
      "name": "Plaza of Modern Conveniences (PMC)",
      "description": "The Plaza of Modern Conveniences (PMC) is a central hub on the campus where students can access various facilities and services. It houses a meeting place for students, a stationary shop, a small grocery stall, a prints shop, and a fruit and vegetable stall.",
      "image": pmcImage
    },
    {
      "id": 4,
      "name": "Central Library",
      "description": "The Central Library at MNIT Jaipur is a vast repository of knowledge, providing students and faculty with access to a wide range of academic resources. It houses a vast collection of books, journals, and digital resources to support research and learning.",
      "image": libraryImage
    },
    {
      "id": 5,
      "name": "Open Air Theatre (OAT)",
      "description": "The Open Air Theatre (OAT) is an open-air performance venue where various cultural and academic events, including concerts, plays, and seminars, are organized. It provides a unique setting for artistic and creative expressions.",
      "image": oatImage
    },
    {
      "id": 6,
      "name": "Dispensary",
      "description": "The Dispensary at MNIT Jaipur provides basic medical facilities to students and staff. It is equipped with first-aid services and handles minor health concerns of the campus residents.",
      "image": dispensaryImage
    },
  ];

  return (
    <div>
      <BuildingDescription />
      <div className="buildings-container">
        {buildingsData.map(building => (
          <BuildingDetails key={building.id} building={building} />
        ))}
      </div>
    </div>
  );
}

export default Buildings;
