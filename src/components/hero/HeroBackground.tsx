import { useEffect, useRef } from "react"
import * as THREE from "three"

const HeroBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()
  const mousePosition = useRef({ x: 0, y: 0 })
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Create and set up video element
    const video = document.createElement("video")
    video.src = "/bg_video.mp4"
    video.loop = true
    video.muted = true
    video.playsInline = true
    video.autoplay = true
    video.className =
      "absolute inset-0 w-full h-full object-cover z-0 opacity-60"
    video.style.filter = "brightness(0.7) contrast(1.1)"
    containerRef.current.appendChild(video)

    // Force video to play without user interaction
    video.play().catch(error => {
      console.log("Video autoplay failed:", error)
      // Just try again - many browsers will allow it on the second attempt
      setTimeout(() => {
        video.play().catch(() => {
          console.log("Video still cannot play automatically")
        })
      }, 100)
    })
    videoRef.current = video

    // Detect if device is mobile
    const isMobile = window.innerWidth < 768

    // Set up scene for wave effect only
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

    // Make background transparent to show video behind
    renderer.setClearColor(0x000000, 0)

    const rendererContainer = document.createElement("div")
    rendererContainer.className = "absolute inset-0 z-10"
    containerRef.current.appendChild(rendererContainer)
    rendererContainer.appendChild(renderer.domElement)

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

    // Animation function - only animates the wave now
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
        containerRef.current.contains(rendererContainer)
      ) {
        containerRef.current.removeChild(rendererContainer)
      }

      if (
        videoRef.current &&
        containerRef.current?.contains(videoRef.current)
      ) {
        containerRef.current.removeChild(videoRef.current)
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
        pointerEvents: "auto",
        touchAction: "pan-y", // Allow vertical scrolling
      }}
    />
  )
}

export default HeroBackground
