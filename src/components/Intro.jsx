import React from 'react'

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold dark:text-stone-100">
        Saketh Pabolu
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Computer Science Student
      </p>
      <p className="text-sm max-w-2xl mb-6 font-semibold">
        Hi there! My name is Saketh, and I am a computer science student at
        Arizona State University. As a junior, I have a strong passion for
        technology and programming. I am the creator of{' '}
        <a
          href="https://courseer.co/"
          target="_blank"
          className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
          rel="noreferrer noopener"
        >
          Courseer
        </a>
        , a SaaS website assisting students with enrolling in their classes by
        sending a timely text notification. With a keen eye for problem-solving
        and a natural aptitude for coding, I am dedicated to pursuing a
        successful career in the tech industry and currently looking for a tech
        internship. Check out my side projects below!
      </p>
    </div>
  )
}

export default Intro
