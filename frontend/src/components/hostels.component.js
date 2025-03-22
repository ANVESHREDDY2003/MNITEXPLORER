import React from 'react';
import h1Image from '../images/h1.jpg';
import h3Image from '../images/h3.png';
import h5Image from '../images/h5.jpg';
import h7Image from '../images/h7.jpeg';
import h9Image from '../images/h9.jpg';
import vinodhiniImage from '../images/vinodhini.jpg';
import gargiImage from '../images/gargi.png';
import './hostels.css';

// Description Component
function HostelDescription() {
    return (
      <div className="hostel-description">
        <div className="hostel-description-card">
          <h1 className="hostel-description">Hostels in MNIT Jaipur</h1>
          <p>
            Malaviya National Institute of Technology (MNIT) in Jaipur provides on-campus boarding and lodging facilities
            to regular students. The current accommodation capacity is 3333 for boys and 1058 for girls. The Institute has a
            total of 11 boys’ hostels and 3 girls’ hostels. The girls’ hostels are Gargi, Maitri, and Acharya Bhawan
            (residential apartments), while the boys’ hostels are H1-H10 and Vinodini Hostel.
          </p>
          <p>
            The messes in the hostels are managed and regulated by the "MNIT Mess Council". The mess menu is decided by the
            student committee. Hostel registrations are done by applying on MNIT ERP, and the cost of accommodation with mess
            is ₹32000.
          </p>
        </div>
      </div>
    );
  }

function HostelDetails({ hostel }) {
    return (
      <div className="hostel-card">
        <h2>{hostel.name}</h2>
        {hostel.image ? (
          <img src={hostel.image} alt={hostel.name} />
        ) : (
          <div className="no-image-text">No Image Available</div>
        )}
        <p>Capacity: {hostel.capacity}</p>
      </div>
    );
  }

function Hostels() {
  const hostelsData = [
    {
      "id": 1,
      "name": "H1-Parijat",
      "capacity": 180,
      "image": h1Image,
      //"description": "Parijat Hostel is one of the oldest and most sought-after hostels at MNIT Jaipur. It provides comfortable accommodation to undergraduate students and fosters a vibrant and engaging community atmosphere. The hostel is equipped with essential facilities, including Wi-Fi, common rooms, and sports facilities."
    },
    {
      "id": 2,
      "name": "H2-Chaitanya",
      "capacity": 180
    },
    {
      "id": 3,
      "name": "H3-Satpura",
      "capacity": 180,
      "image": h3Image,
      //"description": "Satpura Hostel is known for its serene and picturesque surroundings. Nestled amidst greenery, it offers a peaceful and conducive environment for students. The hostel has spacious rooms and provides amenities like 24x7 internet access, recreational spaces, and a gymnasium."
    },
    {
      "id": 4,
      "name": "H4-Lohit",
      "capacity": 144
    },
    {
      "id": 5,
      "name": "H5-Brihaspati",
      "capacity": 182,
      "image": h5Image,
      //"description": "Brihaspati Hostel is renowned for its modern amenities and vibrant social life. The hostel is well-equipped with state-of-the-art facilities, including air-conditioned rooms, reading rooms, and indoor games facilities. It fosters a strong sense of community among its residents."
    },
    {
      "id": 6,
      "name": "H6-Kabir",
      "capacity": 180
    },
    {
      "id": 7,
      "name": "H7-Drona",
      "capacity": 225,
      "image": h7Image,
      //"description": "Drona Hostel is one of the largest and most spacious hostels at MNIT Jaipur. It offers comfortable and well-furnished rooms to its residents. The hostel has a lively and diverse community, and it organizes various cultural and sports events throughout the year."
    },
    {
      "id": 8,
      "name": "H8-Varun",
      "capacity": 212
    },
    {
      "id": 9,
      "name": "H9-Aurobindo",
      "capacity": 950,
      "image": h9Image,
      //"description": "Aurobindo Hostel is the largest hostel at MNIT Jaipur, providing accommodation to a significant number of students. The hostel boasts various amenities, including a well-stocked library, computer labs, and laundry facilities. It is a hub of academic and extracurricular activities."
    },
    {
      "id": 10,
      "name": "H10-PG Hostel",
      "capacity": 16
    },
    {
      "id": 11,
      "name": "Vinodini",
      "capacity": 884,
      "image": vinodhiniImage,
      //"description": "Vinodini Hostel is a well-maintained and vibrant hostel exclusively for female students. It offers a safe and secure environment for its residents. The hostel promotes a strong sense of sisterhood and encourages students to excel in both academics and extracurricular pursuits."
    },
    {
      "id": 12,
      "name": "Gargi",
      "capacity": 402,
      "image": gargiImage,
     // "description": "Gargi Hostel provides comfortable accommodation for female students. It encourages intellectual growth and extracurricular participation. The hostel's facilities are designed to support students' academic and personal needs."
    },
  ];

  return (
    <div>
      <HostelDescription />
      <div className="hostels-container">
        {hostelsData.map(hostel => (
          <HostelDetails key={hostel.id} hostel={hostel} />
        ))}
      </div>
    </div>
  );
}

export default Hostels;




