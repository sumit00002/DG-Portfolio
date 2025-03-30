import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ScribbleFollower = () => {
  const containerRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });
  const trails = useRef([]);
  const trailCount = 20;
  const speed = 0.2;
  const animationRef = useRef();

  useEffect(() => {
    // Only proceed if container is available
    if (!containerRef.current) return;

    // Create scribble trail elements
    const newTrails = [];
    for (let i = 0; i < trailCount; i++) {
      const trail = document.createElement('div');
      trail.className = `absolute w-2 h-2 rounded-full bg-indigo-400 pointer-events-none`;
      trail.style.opacity = '0';
      containerRef.current.appendChild(trail);
      newTrails.push({
        element: trail,
        x: 0,
        y: 0,
        scale: Math.random() * 0.5 + 0.5,
        life: 0
      });
    }
    trails.current = newTrails;

    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // GSAP animation loop
    const animate = () => {
      // Update main position with easing
      pos.current.x += (mouse.current.x - pos.current.x) * speed;
      pos.current.y += (mouse.current.y - pos.current.y) * speed;

      // Update trails in reverse order
      for (let i = trails.current.length - 1; i >= 0; i--) {
        const trail = trails.current[i];
        
        if (i === 0) {
          // First trail follows directly
          trail.x = pos.current.x;
          trail.y = pos.current.y;
          trail.life = 1; // Full opacity
        } else {
          // Other trails follow previous trail
          const prev = trails.current[i - 1];
          trail.x += (prev.x - trail.x) * speed;
          trail.y += (prev.y - trail.y) * speed;
          trail.life = prev.life * 0.9; // Gradually fade out
        }

        // Apply position and opacity if element still exists
        if (trail.element) {
          gsap.set(trail.element, {
            x: trail.x,
            y: trail.y,
            scale: trail.scale,
            opacity: trail.life,
            backgroundColor: `hsl(${260 + i * 2}, 80%, 60%)`
          });
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationRef.current);
      
      // Clean up trail elements safely
      if (containerRef.current) {
        trails.current.forEach(trail => {
          if (trail.element && trail.element.parentNode === containerRef.current) {
            containerRef.current.removeChild(trail.element);
          }
        });
      }
      trails.current = [];
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
    />
  );
};

export default ScribbleFollower;