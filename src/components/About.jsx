import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

const About = () => {
  const aboutRef = useRef()
  const headingRef = useRef()
  const contentRef = useRef()
  const infoCardRef = useRef()

  useGSAP(() => {
    gsap.from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    })

    gsap.from(contentRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    })

    gsap.from(infoCardRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.4,
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    })
  }, { scope: aboutRef })

  return (
    <section 
      ref={aboutRef}
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <div ref={headingRef} className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          About <span className="text-indigo-600">Me</span>
        </h2>
        <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div ref={contentRef} className="md:w-1/2">
          <p className="text-lg text-gray-600 mb-6">
            Hello! I'm Durva Goswami, a passionate Frontend Developer with expertise in building 
            modern web applications using React, JavaScript, and other cutting-edge technologies.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            I hold a Bachelor's degree in Computer Applications (BCA) from Sardar Patel University, 
            Balaghat. My journey in web development started with a curiosity about how websites work, 
            and it has now become my profession and passion.
          </p>
          <p className="text-lg text-gray-600">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source 
            projects, or enjoying a good cup of coffee while brainstorming my next project idea.
          </p>
        </div>
        
        <div ref={infoCardRef} className="md:w-1/2 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            Personal Information
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="bg-indigo-100 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <span className="font-medium text-gray-700">Name:</span>
                <span className="ml-2 text-gray-600">Durva Goswami</span>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-indigo-100 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <span className="font-medium text-gray-700">Email:</span>
                <span className="ml-2 text-gray-600">durvagoswami6@gmail.com</span>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-indigo-100 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <span className="font-medium text-gray-700">Phone:</span>
                <span className="ml-2 text-gray-600">+91 5697856974</span>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-indigo-100 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <span className="font-medium text-gray-700">Location:</span>
                <span className="ml-2 text-gray-600">Balaghat, Madhya Pradesh, India</span>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-indigo-100 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <div>
                <span className="font-medium text-gray-700">Education:</span>
                <span className="ml-2 text-gray-600">BCA from Sardar Patel University, Balaghat</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About