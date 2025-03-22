// components/sports.component.js
import React from 'react';
import sportsComplexImage from '../images/sports_complex.png';
import cricketGroundImage from '../images/cricket_ground.jpg';
import basketballCourtsImage from '../images/basketball_courts.png';
import tennisCourtsImage from '../images/tennis_courts.jpeg';
import badmintonCourtsImage from '../images/badminton_courts.jpg';
import footballCourtsImage from '../images/football_courts.jpg';
import './sports.css';

function SportsDescription() {
  return (
    <div className="sports-description-card">
      <p>
        Malaviya National Institute of Technology (MNIT) in Jaipur provides excellent sports facilities and opportunities for students to engage in various sports and recreational activities.
      </p>
      <p>
        The campus houses a state-of-the-art Sports Complex, a Cricket Ground, Basketball Courts, and Tennis Courts, among other facilities, catering to the diverse interests and talents of students.
      </p>
    </div>
  );
}

function SportsDetails({ sportsVenue }) {
  return (
    <div className="sports-card">
      <h2>{sportsVenue.name}</h2>
      {sportsVenue.image && <img src={sportsVenue.image} alt={sportsVenue.name} />}
      <p>Description: {sportsVenue.description}</p>
    </div>
  );
}

function Sports() {
  const sportsData = [
    {
      "id": 1,
      "name": "Sports Complex",
      "description": "The Sports Complex at MNIT Jaipur is a world-class facility equipped with various indoor and outdoor sports amenities. It provides students with opportunities to participate in sports like badminton, table tennis, squash, and more.",
      "image": sportsComplexImage
    },
    {
      "id": 2,
      "name": "Cricket Ground",
      "description": "The Cricket Ground is a well-maintained venue where students can play and practice cricket matches. It hosts inter-hostel and inter-college cricket tournaments, fostering a competitive spirit among participants.",
      "image": cricketGroundImage
    },
    {
      "id": 3,
      "name": "Basketball Courts",
      "description": "The campus features multiple basketball courts where students can enjoy playing basketball. The courts serve as a popular recreational spot for students who are passionate about the sport.",
      "image": basketballCourtsImage
    },
    {
      "id": 4,
      "name": "Tennis Courts",
      "description": "The Tennis Courts offer students the chance to play tennis and improve their skills. It is a favorite spot for tennis enthusiasts and hosts friendly matches and tournaments.",
      "image": tennisCourtsImage
    },
    {
      "id": 5,
      "name": "Badminton Courts",
      "description": "The Badminton Courts are equipped with modern facilities, providing students with a space to play badminton and compete in matches. It is a hub for badminton enthusiasts.",
      "image": badmintonCourtsImage
    },
    {
      "id": 6,
      "name": "Newly Built Football Courts",
      "description": "The Newly Built Football Courts offer students the opportunity to play football and engage in the sport's friendly matches and tournaments. It provides a recreational space for football enthusiasts.",
      "image": footballCourtsImage
    },
  ];

  return (
    <div>
      <SportsDescription />
      <h1 className="title">Sports Facilities at MNIT Jaipur</h1>
      <div className="sports-container">
        {sportsData.map(sportsVenue => (
          <SportsDetails key={sportsVenue.id} sportsVenue={sportsVenue} />
        ))}
      </div>
    </div>
  );
}

export default Sports;
