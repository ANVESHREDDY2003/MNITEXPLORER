// clubs.component.js
import React from 'react';
import "./clubs.css"

const clubsData = [
  {
    id: 1,
    name: "Classical Music and Dance Club",
    description: "Have got an interest in Indian classical traditions in the field of music then MNIT has the perfect rhythms for it too. Join us in the Renaissance of Indian classical music. Be it the beats of tabla, or the tones of harmonium or the movements of various Classical Dance forms. Explore yourself and find a new meaning of traditions at MNIT JAIPUR. The club seeks to conduct events to promote Indian Classical Dance and Music, Singing & Instrumentals. Spic Macay events will be organised by this club."
  },
  {
    id: 2,
    name: "Creative Arts Club",
    description: "“The object of art is not to reproduce reality, but to create a reality of the same intensity.”- Alberto Giacometti Art is not a new form of expressing emotions for mankind as it is related to our race from the very beginning of the human race and cultures. The objective of this club is to instigate and instil passion for the arts & culture among the students & faculty. A club dedicated entirely to the field of arts in both traditional and digital forms. It plans to organize events to promote various forms of fine arts, like freehand, sketching, putting up exhibitions of student artists, organizing workshops and competitions."
  },
  {
    id: 3,
    name: "Dance Club",
    description: "Dance is about the feeling to enjoy a good time with yourself and to jazz on the beats. The Dance Club of MNIT JAIPUR has got a proud history of catching the eyes of spectators at competitions of National level. From Jazz to contemporary, you can explore different variations of dances at dance club. Organize events to promote various forms of Dance among students excluding Indian classical."
  },
  {
    id: 4,
    name: "Debating Club",
    description: "“Knowing what to say is sense, when to say it is intelligence, how to say it is wisdom, why and how to say it is enlightenment.” To ensure truth & transparency about any theme, it is necessary to confer about it with logical arguments. The club is dedicated to empowering students with confidence and to gain broad, multi-faceted knowledge across several disciplines. The club plans to conduct discussions, extempore, debates to develop oracy skills & critical thinking of students."
  },
  {
    id: 5,
    name: "Drama Club",
    description: "Drama is the way to express how you feel to others, it will give you the freedom to find the real you. The Dramatics Club encourages students love for language & enhance their literary skills and to display their intellectual & independent thinking skills and imbibe a sense of confidence. Dramatics Society is another enlivening club at MNIT Jaipur that witnesses overwhelming participation. The club conducts various forms of drama events in english and in hindi. It offers a plethora of opportunities for students interested in acting, directing, stage managing, writing, and designing or building sets, lights, sound, and costumes."
  },
  {
    id: 6,
    name: "English Language Activities Club",
    description: "The world perspective at the hand of young minds. The club presents you an opportunity to showcase your creativity through book reviews, Model United Nations conferences, storytelling, creative writing and all the aspects of english literature. You can rediscover your literary skills and enhance your personality with the help of your fellowmates. Come, Express yourself with other like-minded souls."
  },
  {
    id: 7,
    name: "English Press Club",
    description: "Manage the Institute’s official newsletter at English Press Club. With the Students running Newsletter, Newspaper, blog that covers College Events, College news, fests, recorded radio notes etc. So much events at your disposal to be an integral part of. Conduct various events like report writing competition editorial writing etc. Learn essential skills which will help you through your journey of life. Come join us at English Press Club and visit the world like Never before."
  },
  {
    id: 8,
    name: "Film Making Club",
    description: "Film making provides a different dimension of visualization of the surroundings and an art to compile them in a single frame. Films are ways to demolish any stereotypes and to encourage a sense of unity across age ranges, social classes & ethnicities. With a broad vision, MNIT is going to instigate Film Making Club. The main objective of the club is to teach about the principles & stages of film making, cover fests and primary events, animations, sponsor videos & most importantly the after movies, which help us to relive the moments."
  },
  {
    id: 9,
    name: "Hindi Language Activities Club",
    description: "Planning events that focus on the origins and development of the Hindi language up to the current day falls under the purview of the Hindi Language Activities Club, which is in charge of organizing Hindi literature festivals, book reviews, and other related activities."
  },
  {
    id: 10,
    name: "Hindi Press Club",
    description: "Hindi newsletter, newspaper, and blog run by students that covers college events, college news, and fests, in addition to recorded radio notes and other issues. Conduct a variety of diverse events, including contests for writing reports and editorials, among other things."
  },
  {
    id: 11,
    name: "Music Club",
    description: "The Music Club encourages and provides a platform for the students to participate in a wide range of musical activities, such as singing and playing instruments; however, Indian classical music is not included in this category."
  },
  {
    id: 12,
    name: "Photography Club",
    description: "Photographs are not just a picture it's an emotion which can weave a whole story about an event. It develops the critical thinking of students and provides them a vision to explore the world differently which normal people can't imagine about. The club encourages students to take part in a variety of events and activities that are related to photography, such as competitions and exhibitions, and use their photography skills to record the many and different activities that take place at the college."
  },
  {
    id: 13,
    name: "Poetry Club",
    description: "Give students a platform to develop and hone their poetic skills through engagement with a wide range of events. These activities can range from writing prompts to group discussions."
  },
  {
    id: 14,
    name: "Think India",
    description: "Think India in cooperation with the MNIT Jaipur seeks to undertake the following activities:Organize a)interactive group discussions or Sewa activities on campus as well as off campus.b) Oganize debates and talks on issues of national and international importance pertaining to social, economic, developmental concern.c) To facilitate guests (real life role model) to deliver lectures on issues concerning the society at large.d) Organize Fellowship/internship programs with various Sewa organizations.e) Organize flagship Conferences, Workshop and Seminar.f) To encourage participation of the students and faculty members’ in social cum academic activities which concerns today' s society.g) To form a Study Circle to discuss the issues among students and faculties on current topics which affect the society as well as to invite any eminent guest speaker. h) Adoption of a village near institution to spread awareness through organizing medical camp and adopting tree plantation activity."
  },
  {
    id: 15,
    name: "NSS",
    description: "The overall aim of National Service Scheme is to give an extension dimension to the higher education system and orient the student youth to community service while they are studying in educational institution. It is necessary to arouse the social conscience of the students, and to provide them an opportunity to work with the people who are in need of basic necessities of life. This will expose them to the realities of life and bring about a change in their social perception. Various activities can be adult school, coaching for poor and slum students, education of the deprived communities about their rights and the government schemes for their upliftment, distribution of leftover food to the deprived community, creating self-employment for them, encouraging child education, women empowerment, women upliftment etc. NSS volunteers may work for villages and slums and volunteer to complete 12O hours of regular activities during an academic year'. A village/ slum may be selected for implementation of NSS Programme. Programmes like Blood Donation Camps, Swachh Bharat Camps etc may be organised."
  },
  {
    id: 16,
    name: "Travel and Heritage Visit Club",
    description: "Many of us want to be a wanderer with a dream of exploring the whole world, to discover the hidden gems of nature and to gain knowledge & facts about the marvel ancient architecture. A club with a focus on travel that organizes activities such as hiking, cycling tours, trips, and camps, as well as the discovery and documenting of heritage sites in and around Jaipur and the surrounding area."
  },
  {
    id: 17,
    name: "Electoral Literacy",
    description: "An Electoral Literacy Club is a platform to engage students through interesting activities and hands-on experience to sensitize them on their electoral rights and familiarize them with the electoral process of registration and voting. At ELCs, learning meets fun. Activities and Games are designed to stimulate and motivate students provoking them to think and ask questions. Through ELC, Election Commission of India, aims at strengthening the culture of electoral participation among young and future voters. In the ELCs, members will be part of interesting and thought-provoking activities and games."
  },
  {
    id: 18,
    name: "Quiz Club MNIT",
    description: "Enables students to take part in quizzes to evaluate their knowledge in a multitude of areas, including but not limited to science, technology, literature, national and international politics, social science, and more. The goal here is to evaluate the pupils' level of comprehension on these topics."
  },
  {
    id: 19,
    name: "The Mavericks MNIT",
    description: "As its motto suggests, \"Awareness Overpowers Ignorance,\" and that is exactly what The Mavericks strive to do: make students more aware of current events happening all around the world. Activities include a Tedx chapter, surveys, webinars, Polls, and Journalism events, as well as Placement presentations highlighting the various academic and professional options that can be taken after graduation."
  },
];

function ClubDetails({ club }) {
    return (
      <div className="club-details-card">
        <h2>{club.name}</h2>
        <p>{club.description}</p>
      </div>
    );
  }
  
  function Clubs() {
    return (
      <div>
        <h1 className="club">Clubs at MNIT Jaipur</h1>
        <div className="clubs-container">
          {clubsData.map(club => (
            <ClubDetails key={club.id} club={club} />
          ))}
        </div>
      </div>
    );
  }
  
  export default Clubs;