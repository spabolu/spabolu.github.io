import React from "react";
import TimelineItem from "./TimelineItem";
import Title from "./Title";

// export const TimelineItems = [
//   {
//     year: 'Today',
//     title: 'Creator of Courseer',
//     duration: 'now',
//     details:
//       'I am currently working on a project called Courseer. It is a website that helps students enroll in classes they need when they are open.'
//   },
//   {
//     year: '2021',
//     title: 'Director at Python Users Group',
//     duration: '8 months',
//     details:
//       'I was the technical director of the Python Users Group at my university. I was responsible for managing the website, creating content, and organizing events.'
//   },
//   {
//     year: '2021',
//     title: 'Creative Developer',
//     duration: '4 months',
//     details:
//       'I was working on creating interactive UI/UX elements for a website application using Adobe XD.'
//   },
//   {
//     year: '2021',
//     title: 'Web Security Research',
//     duration: '2 months',
//     details:
//       'I was research about web security and how browser fingerprinting works. I created a website that detects browser extensions installed and fingerprint them.'
//   },
//   {
//     year: '2020',
//     title: 'Web Development Intern',
//     duration: '1 month',
//     details:
//       'I was working on a web application for small businesses using Angular. I helped with creating components, designing UI/UX for the website.'
//   },
//   {
//     year: '2019',
//     title: 'Computer Security Intern',
//     duration: '2 months',
//     details:
//       'This was my first internship. I was an intern at the police department in my city. I was shadowing a cyber security analyst and learning about computer security.'
//   },
//   {
//     year: '2019',
//     title: 'Code Sensei',
//     duration: '2 years',
//     details:
//       'I was teaching children how to code using Scratch, JavaScript and Python. I was responsible for designing the curriculum for some of the projects.'
//   }
// ];

export const TimelineItems = [
  {
    year: "Today",
    title: "Creator of Courseer",
    duration: "Current",
    details:
      "Currently working on Courseer, a website that helps students enroll in classes when they are open.",
  },
  {
    year: "2021",
    title: "Director at Python Users Group",
    duration: "8 months",
    details:
      "Managed the website, created content, and organized events as technical director of the Python Users Group at my university.",
  },
  {
    year: "2021",
    title: "Creative Developer",
    duration: "4 months",
    details:
      "Worked on creating interactive UI/UX elements for a website using Adobe XD for my university.",
  },
  {
    year: "2021",
    title: "Web Security Research",
    duration: "2 months",
    details:
      "Researched web security and browser fingerprinting, creating a website that detects and fingerprints browser extensions.",
  },
  {
    year: "2020",
    title: "Web Development Intern",
    duration: "1 month",
    details:
      "Worked on a web application for small businesses using Angular, helping with component creation and UI/UX design.",
  },
  {
    year: "2019",
    title: "Computer Security Intern",
    duration: "2 months",
    details:
      "Shadowed a cyber security analyst at a police department and learned about computer security.",
  },
  {
    year: "2019",
    title: "Code Sensei",
    duration: "2 years",
    details:
      "Taught children how to code using Scratch, JavaScript and Python, and designed curriculum for some of the projects.",
  },
];

function Timeline() {
  return (
    <div className="flex flex-col md:flex-row justify-center my-20">
      <div className="w-full md:w-7/12">
        <Title id="timeline">Timeline</Title>
        {TimelineItems.map((item, index) => (
          <TimelineItem
            key={index}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
}

export default Timeline;
