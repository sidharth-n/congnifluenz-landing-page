import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ParticleBackgroundProps {
  color?: string;
  density?: number;
  speed?: number;
  interactive?: boolean;
}

const ParticleBackground = ({
  color = '#00FFFF',
  density = 1000,
  speed = 0.0005,
  interactive = true,
}: ParticleBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    // Canvas setup
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ 
      canvas, 
      antialias: true,
      alpha: true,
    });
    
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50, 
      window.innerWidth / window.innerHeight, 
      0.1, 
      2000
    );
    camera.position.z = 500;
    
    // Particles setup
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = density;
    
    const posArray = new Float32Array(particleCount * 3);
    const scaleArray = new Float32Array(particleCount);
    
    // Create random positions and scales
    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 1000;
    }
    
    for (let i = 0; i < particleCount; i++) {
      scaleArray[i] = Math.random();
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('scale', new THREE.BufferAttribute(scaleArray, 1));
    
    // Particle material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 2,
      color: new THREE.Color(color),
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    });
    
    // Create the particle system
    const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particleSystem);
    
    // Mouse movement effect
    let mouseX = 0;
    let mouseY = 0;
    
    if (interactive) {
      const handleMouseMove = (event: MouseEvent) => {
        mouseX = (event.clientX - window.innerWidth / 2) * 0.1;
        mouseY = (event.clientY - window.innerHeight / 2) * 0.1;
      };
      
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate particle system slightly based on mouse position
      particleSystem.rotation.x += speed;
      particleSystem.rotation.y += speed;
      
      if (interactive && mouseX && mouseY) {
        particleSystem.rotation.x += mouseY * 0.00001;
        particleSystem.rotation.y += mouseX * 0.00001;
      }
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup on component unmount
    return () => {
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      window.removeEventListener('resize', handleResize);
      
      scene.remove(particleSystem);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, [color, density, speed, interactive]);
  
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" />;
};

export default ParticleBackground;