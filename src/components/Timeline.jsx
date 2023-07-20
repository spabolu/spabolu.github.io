import React from 'react'
import TimelineItem from './TimelineItem'
import Title from './Title'

export const TimelineItems = [
  {
    year: 'Present',
    title: 'Study Abroad in Ireland',
    duration: 'Current',
    details:
      'Currently studying at University College Dublin for Summer 2023, taking courses in both computer science and entrepreneurship.',
  },
  {
    year: 'Present',
    title: 'Creator of Courseer',
    duration: 'Current',
    details:
      'Currently working on Courseer, a website with 350+ users helping ASU students enroll in classes they need.',
  },
  {
    year: '2021',
    title: 'Technical Director',
    duration: '8 months',
    details:
      'Managed website, created content, and organized events as technical director for Python Users Group at ASU.',
  },
  {
    year: '2021',
    title: 'Internet of Things (IoT) Intern',
    duration: '4 months',
    details:
      'Improved Raspberry Pi Wi-Fi module, enabling 200% more concurrent connections and stable hotspot access.',
  },
  {
    year: '2021',
    title: 'Creative Developer',
    duration: '4 months',
    details:
      'Worked on creating interactive UI/UX elements for a website using Adobe XD for my university.',
  },
  {
    year: '2021',
    title: 'Web Security Research',
    duration: '2 months',
    details:
      'Researched web security and browser fingerprinting, creating a website that detects and fingerprints browser extensions.',
  },
  {
    year: '2020',
    title: 'Web Development Intern',
    duration: '1 month',
    details:
      'Worked on a web application for small businesses using Angular, helping with component creation and UI/UX design.',
  },
  {
    year: '2019',
    title: 'Computer Security Intern',
    duration: '2 months',
    details:
      'Shadowed a cyber security analyst at a police department and learned about computer security.',
  },
  {
    year: '2019',
    title: 'Code Sensei',
    duration: '2 years',
    details:
      'Upskilled children on coding using Scratch, JavaScript and Python, and designed curriculum for some of the projects.',
  },
]

function Timeline() {
  return (
    <div className="flex flex-col md:flex-row justify-center my-20">
      <div className="w-full md:w-7/12">
        <Title id="timeline">Experience</Title>
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
  )
}

export default Timeline
