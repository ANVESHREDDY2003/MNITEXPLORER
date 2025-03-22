import React from 'react';
import './departments.css';

// Description Component
function DepartmentDescription() {
  return (
    <div className="department-description-card">
      <h1>Departments in MNIT Jaipur</h1>
      <p>
        Malaviya National Institute of Technology (MNIT) in Jaipur offers various departments with undergraduate, postgraduate, and doctoral programs. The institute is committed to providing quality education and research opportunities in various fields of engineering and technology.
      </p>
      <p>
        Each department at MNIT Jaipur has experienced faculty members and state-of-the-art facilities to foster academic excellence and holistic development of students.
      </p>
    </div>
  );
}

function DepartmentDetails({ department }) {
  return (
    <div className="department-details-card">
      <h2>{department.name}</h2>
      <p>Description: {department.description}</p>
      <p>Head of Department: {department.hod}</p>
    </div>
  );
}

function Departments() {
  const departmentsData = [
    {
      "id": 1,
      "name": "Computer Science and Engineering",
      "description": "The Department of Computer Science and Engineering at MNIT Jaipur offers undergraduate, postgraduate, and doctoral programs. It is known for its cutting-edge research and strong focus on practical applications of computer science.",
      "hod": "Dr. Namita Mittal"
    },
    {
      "id": 2,
      "name": "Electronics and Communication Engineering",
      "description": "The Department of Electronics and Communication Engineering is committed to providing quality education and research opportunities in the field of electronics and communication.",
      "hod": "Prof. Lava Bhargava"
    },
    {
      "id": 3,
      "name": "Mechanical Engineering",
      "description": "The Department of Mechanical Engineering offers diverse areas of study, including thermal engineering, design and manufacturing, and materials science.",
      "hod": "Prof. Himanshu Chaudhary"
    },
    {
      "id": 4,
      "name": "Electrical Engineering",
      "description": "The Department of Electrical Engineering focuses on imparting knowledge in the areas of electrical systems, power electronics, and renewable energy.",
      "hod": "Prof. Harpal Tiwari"
    },
    {
      "id": 5,
      "name": "Civil Engineering",
      "description": "The Department of Civil Engineering offers courses in structural engineering, geotechnical engineering, and transportation engineering.",
      "hod": "Prof. Mahender Choudhar"
    },
    {
      "id": 6,
      "name": "Chemical Engineering",
      "description": "The Department of Chemical Engineering focuses on chemical processes, process control, and environmental engineering.",
      "hod": "Dr. Sushant Upadhyaya"
    },
    {
      "id": 7,
      "name": "Metallurgical and Materials Engineering",
      "description": "The Department of Metallurgical and Materials Engineering offers courses related to metallurgical engineering and materials science.",
      "hod": "Prof. Upender Pandel"
    },
    {
      "id": 8,
      "name": "Management Studies",
      "description": "The Department of Management Studies focuses on management.",
      "hod": "Dr. Deepak Verma"
    },
    {
      "id": 9,
      "name": "Architecture and Planning",
      "description": "The Department of Architecture and Planning offers programs in architecture and urban planning, emphasizing sustainable and innovative design.",
      "hod": "Dr. Satish Pipralia"
    },
    {
      "id": 10,
      "name": "Physics",
      "description": "The Department of Physics offers courses in various fields of physics, including condensed matter physics and optics.",
      "hod": "Prof. Kanupriya Sachdev"
    },
    {
      "id": 11,
      "name": "Chemistry",
      "description": "The Department of Chemistry focuses on research and teaching in various branches of chemistry, including organic and inorganic chemistry.",
      "hod": "Prof. Jyoti Joshi"
    },
    {
      "id": 12,
      "name": "Mathematics",
      "description": "The Department of Mathematics offers courses in pure and applied mathematics, including numerical methods and mathematical modeling.",
      "hod": "Dr. Vatsala Mathur"
    },
    {
      "id": 13,
      "name": "Humanities and Social Sciences",
      "description": "The Department of Humanities and Social Sciences offers courses in subjects such as economics, sociology, and literature.",
      "hod": "Dr. Preeti Bhatt"
    },
  ];

  return (
    <div>
      <DepartmentDescription />
      <div className="departments-container">
        {departmentsData.map(department => (
          <DepartmentDetails key={department.id} department={department} />
        ))}
      </div>
    </div>
  );
}

export default Departments;