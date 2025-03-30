import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import BlobShape from './BlobShape'

const Hero = () => {
  const heroRef = useRef()
  const titleRef = useRef()
  const subtitleRef = useRef()
  const textRef = useRef()
  const buttonsRef = useRef()
  const imageRef = useRef()
  const particlesRef = useRef([])

  // Create 15 particles for background animation
  const particles = Array(15).fill().map((_, i) => (
    <div
      key={i}
      ref={el => particlesRef.current[i] = el}
      className="absolute rounded-full bg-indigo-400 opacity-20"
      style={{
        width: `${Math.random() * 20 + 10}px`,
        height: `${Math.random() * 20 + 10}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    />
  ))

  useGSAP(() => {
    // Background particles animation
    particlesRef.current.forEach(particle => {
      gsap.from(particle, {
        scale: 0,
        opacity: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)"
      })
      gsap.to(particle, {
        y: (Math.random() > 0.5 ? -1 : 1) * (Math.random() * 50 + 20),
        x: (Math.random() * 40 + 20),
        duration: Math.random() * 3 + 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 2
      })
    })

    // Main content animation timeline
    const tl = gsap.timeline()
    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    .from(titleRef.current.querySelector('span'), {
      color: '#4f46e5',
      duration: 1.5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true
    }, 0)
    .from(subtitleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, 0.2)
    .from(textRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, 0.4)
    .from(buttonsRef.current.children, {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out"
    }, 0.6)
    .from(imageRef.current, {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)"
    }, 0.8)

    // Floating animation for image
    gsap.to(imageRef.current, {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    })

    // Force contact button to be visible after animations
    gsap.to(buttonsRef.current.children, {
      opacity: 1,
      y: 0,
      duration: 0.1,
      delay: 2
    })
  }, { scope: heroRef })

  return (
    <section 
      ref={heroRef}
      className="relative h-screen min-h-[600px] overflow-hidden flex items-center bg-gradient-to-br from-indigo-50 to-purple-50"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {particles}
      </div>
      
      {/* Decorative shapes */}
      <BlobShape 
        color="#E0E7FF" 
        size={600} 
        className="-top-40 -left-40 opacity-70"
      />
      <BlobShape 
        color="#A5B4FC" 
        size={500} 
        className="-bottom-40 -right-40 opacity-70"
      />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]">
        <div className="absolute inset-0 bg-[size:100px_100px] [background-image:linear-gradient(to_right,#818cf8_1px,transparent_1px),linear-gradient(to_bottom,#818cf8_1px,transparent_1px)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h1 ref={titleRef} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Hi, I'm <span className="text-indigo-600 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">Durva Goswami</span>
            </h1>
            <h2 ref={subtitleRef} className="text-2xl sm:text-3xl text-gray-700 mb-6 font-medium relative inline-block">
              <span className="relative z-10">Frontend Developer</span>
              <span className="absolute -bottom-1 left-0 w-full h-2 bg-indigo-200 opacity-60 -z-0"></span>
            </h2>
            <p ref={textRef} className="text-lg text-gray-600 mb-8 max-w-lg">
              I build exceptional digital experiences with modern technologies. 
              Currently based in Balaghat, India.
            </p>
            <div ref={buttonsRef} className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="relative px-8 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all font-medium shadow-lg hover:shadow-indigo-300 group overflow-hidden"
                style={{
                  display: 'inline-block',
                  visibility: 'visible',
                  opacity: 1
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Me
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
              <a 
                href="https://github.com/durvagoswami13" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-50 transition-colors font-medium flex items-center gap-2 group hover:shadow-lg hover:shadow-indigo-100"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center" ref={imageRef}>
            <div className="relative w-64 h-64 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-indigo-500 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 opacity-20"></div>
              <div className="absolute inset-0 rounded-full border-8 border-white opacity-10 pointer-events-none"></div>
              <img 
                src="https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D" 
                alt="Durva Goswami"
                className="w-full h-full object-cover relative z-10 hover:scale-105 transition-transform duration-500"
              />
              {/* Decorative circles */}
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-indigo-400 opacity-20 blur-md"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-purple-400 opacity-20 blur-md"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce w-6 h-10 border-2 border-indigo-600 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-indigo-600 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero