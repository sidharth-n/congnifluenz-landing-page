import { useEffect, useRef } from "react"
import * as THREE from "three"

const HeroBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()
  const mousePosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!containerRef.current) return

    // Detect if device is mobile
    const isMobile = window.innerWidth < 768

    // Set up scene
    const scene = new THREE.Scene()

    // Set up camera with different FOV for mobile
    const camera = new THREE.PerspectiveCamera(
      isMobile ? 60 : 75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    // Position camera based on device
    camera.position.z = isMobile ? 30 : 20

    // Set up renderer with correct size
    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile, // Disable antialiasing on mobile for better performance
      alpha: true,
    })

    // Use window dimensions to ensure full coverage
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)) // Limit pixel ratio for better performance

    // Make background darker and more visible
    renderer.setClearColor(0x050a14, 0.95)
    containerRef.current.appendChild(renderer.domElement)

    // Create wave geometry - smaller and less detailed on mobile
    const waveGeometry = new THREE.PlaneGeometry(
      isMobile ? 200 : 150,
      isMobile ? 200 : 150,
      isMobile ? 35 : 75,
      isMobile ? 35 : 75
    )
    const waveMaterial = new THREE.MeshBasicMaterial({
      color: 0x4dbaff,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    })
    const waveMesh = new THREE.Mesh(waveGeometry, waveMaterial)
    waveMesh.rotation.x = -Math.PI / 2
    waveMesh.position.y = -10
    scene.add(waveMesh)

    // Create spherical particles - fewer on mobile
    const sphereGeometry = new THREE.SphereGeometry(
      isMobile ? 0.25 : 0.15,
      isMobile ? 6 : 8,
      isMobile ? 6 : 8
    )
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x4dbaff,
      transparent: true,
      opacity: 0.8,
    })

    // Create a group to hold all spheres
    const particlesGroup = new THREE.Group()
    scene.add(particlesGroup)

    // Create individual sphere instances - fewer on mobile
    const particlesCount = isMobile ? 200 : 400
    const spherePositions = []
    const spheres = []

    for (let i = 0; i < particlesCount; i++) {
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial.clone())

      // Random position
      const x = (Math.random() - 0.5) * (isMobile ? 150 : 120)
      const y = (Math.random() - 0.5) * (isMobile ? 150 : 120)
      const z = (Math.random() - 0.5) * (isMobile ? 150 : 120)

      sphere.position.set(x, y, z)

      // Store original position for animation
      spherePositions.push({ x, y, z })

      // Random scale for variety
      const scale = Math.random() * 0.5 + 0.5
      sphere.scale.set(scale, scale, scale)

      particlesGroup.add(sphere)
      spheres.push(sphere)
    }

    // Handle mouse/touch movement
    const handleMouseMove = event => {
      // Calculate normalized coordinates (-1 to 1)
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      }
    }

    // Touch handler for mobile - modified to not interfere with scrolling
    const handleTouchMove = event => {
      if (event.touches.length > 0) {
        // Don't prevent default to allow scrolling
        // Only use the touch event to update the mouse position
        mousePosition.current = {
          x: (event.touches[0].clientX / window.innerWidth) * 2 - 1,
          y: -(event.touches[0].clientY / window.innerHeight) * 2 + 1,
        }
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("touchmove", handleTouchMove, { passive: true }) // Use passive listener to improve scroll performance

    // Animation function
    const animate = () => {
      const time = Date.now() * 0.001
      // Reduce animation speed on mobile
      const speedFactor = isMobile ? 0.5 : 1

      // Animate wave based on mouse position
      const wavePositions = waveMesh.geometry.attributes.position
      const mouseInfluence = isMobile ? 1 : 1.5

      for (let i = 0; i < wavePositions.count; i++) {
        const x = wavePositions.getX(i)
        const y = wavePositions.getY(i)

        // Apply base wave animation - slower on mobile
        let z = Math.sin(x * 0.05 + time * speedFactor) * 4
        z += Math.cos(y * 0.05 + time * speedFactor) * 4

        // Add mouse influence on wave
        const distanceX =
          (x / (isMobile ? 200 : 150)) * 2 - mousePosition.current.x
        const distanceY =
          (y / (isMobile ? 200 : 150)) * 2 - mousePosition.current.y
        const distance = Math.sqrt(
          distanceX * distanceX + distanceY * distanceY
        )

        // Create a ripple effect where mouse is pointing
        if (distance < 1) {
          z +=
            (1 - distance) * mouseInfluence * Math.sin(time * 5 * speedFactor)
        }

        wavePositions.setZ(i, z)
      }

      wavePositions.needsUpdate = true

      // Animate spheres with interaction - slower on mobile
      spheres.forEach((sphere, i) => {
        // Use the correct stored positions array
        const originalPos = spherePositions[i]

        // Gentle floating movement
        sphere.position.x =
          originalPos.x + Math.sin(time * speedFactor + i * 0.1) * 0.5
        sphere.position.y =
          originalPos.y + Math.cos(time * speedFactor + i * 0.1) * 0.5
        sphere.position.z =
          originalPos.z + Math.sin(time * speedFactor * 0.5 + i * 0.1) * 0.5

        // Subtle attraction to mouse position
        const mouseVector = new THREE.Vector3(
          mousePosition.current.x * 20,
          mousePosition.current.y * 20,
          0
        )

        const direction = new THREE.Vector3()
        direction.subVectors(mouseVector, sphere.position).normalize()

        // Calculate distance to mouse
        const mouseDistance = sphere.position.distanceTo(mouseVector)

        // Only affect nearby particles
        if (mouseDistance < 30) {
          const strength = (1 - mouseDistance / 30) * 0.05 * speedFactor
          sphere.position.x += direction.x * strength
          sphere.position.y += direction.y * strength
          sphere.position.z += direction.z * strength
        }
      })

      // Rotate entire particle group - slower on mobile
      particlesGroup.rotation.y += 0.0005 * speedFactor
      particlesGroup.rotation.x += 0.0002 * speedFactor

      renderer.render(scene, camera)
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      const newIsMobile = window.innerWidth < 768

      // Update camera
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()

      // Update camera position if device type changes
      if (newIsMobile !== isMobile) {
        camera.position.z = newIsMobile ? 30 : 20
      }

      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    // Clean up
    return () => {
      if (
        containerRef.current &&
        containerRef.current.contains(renderer.domElement)
      ) {
        containerRef.current.removeChild(renderer.domElement)
      }

      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleTouchMove)

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }

      // Dispose geometries and materials
      waveGeometry.dispose()
      waveMaterial.dispose()
      sphereGeometry.dispose()
      sphereMaterial.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        overflow: "hidden",
        pointerEvents: "auto", // Changed to "auto" to allow clicks but handled properly in touch events
        touchAction: "pan-y", // Allow vertical scrolling
      }}
    />
  )
}

export default HeroBackground
