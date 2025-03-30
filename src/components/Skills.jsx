import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

const Skills = () => {
  const skillsRef = useRef()
  const headingRef = useRef()
  const cardsRef = useRef()

  useGSAP(() => {
    gsap.from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: skillsRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    })

    gsap.from(cardsRef.current.children, {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: skillsRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    })
  }, { scope: skillsRef })

  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "HTML", icon: "💎", level: 95 },
        { name: "CSS", icon: "🎨", level: 90 },
        { name: "JavaScript", icon: "⚡", level: 85 },
        { name: "React", icon: "⚛️", level: 80 },
        { name: "Tailwind CSS", icon: "🌀", level: 85 }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: "🟢", level: 75 },
        { name: "MongoDB", icon: "🍃", level: 70 }
      ]
    },
    {
      category: "Tools",
      items: [
        { name: "Git", icon: "📌", level: 85 },
        { name: "GitHub", icon: "🐙", level: 80 },
        { name: "VS Code", icon: "💻", level: 90 },
        { name: "Debugging", icon: "🔍", level: 80 },
        { name: "Deployment", icon: "🚀", level: 75 }
      ]
    }
  ]

  const SkillBar = ({ name, level }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 font-medium">{name}</span>
        <span className="text-gray-600">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-gradient-to-r from-indigo-400 to-indigo-600 h-2.5 rounded-full" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  )

  return (
    <section 
      ref={skillsRef}
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <div ref={headingRef} className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          My <span className="text-indigo-600">Skills</span>
        </h2>
        <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
      </div>
      
      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skills.map((skillCategory, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-indigo-500"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
              {skillCategory.category}
            </h3>
            <div className="space-y-4">
              {skillCategory.items.map((skill, i) => (
                <div key={i} className="mb-4">
                  <div className="flex items-center mb-1 gap-2">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="ml-auto text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-gradient-to-r from-indigo-400 to-indigo-600 h-2.5 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills