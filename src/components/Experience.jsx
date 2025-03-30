import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

const Experience = () => {
  const experienceRef = useRef()
  const headingRef = useRef()
  const timelineRef = useRef()

  useGSAP(() => {
    gsap.from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: experienceRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    })

    gsap.from(timelineRef.current.children, {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: experienceRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    })
  }, { scope: experienceRef })

  const experiences = [
    {
      role: "Full Stack Web Developer Intern",
      company: "Connect Shiksha Coding Community, Balaghat",
      duration: "2023 - Present",
      description: [
        "Developed and maintained web applications using React, Node.js, and MongoDB",
        "Collaborated with team members to implement new features and improve existing ones",
        "Participated in code reviews and debugging sessions",
        "Assisted in deployment and maintenance of production applications"
      ],
      icon: "👩‍💻"
    }
  ]

  return (
    <section 
      ref={experienceRef}
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <div ref={headingRef} className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Work <span className="text-indigo-600">Experience</span>
        </h2>
        <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
      </div>
      
      <div ref={timelineRef} className="space-y-8">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-indigo-500"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {exp.role}
              </h3>
              <span className="text-indigo-600 font-medium">
                {exp.duration}
              </span>
            </div>
            <h4 className="text-lg text-gray-700 mb-4">
              {exp.company}
            </h4>
            <ul className="space-y-2">
              {exp.description.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-indigo-600 mr-2 mt-1">•</span>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience