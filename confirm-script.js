document.addEventListener("DOMContentLoaded", () => {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
    const navList = document.querySelector(".nav-list")
  
    if (mobileMenuToggle) {
      mobileMenuToggle.addEventListener("click", function () {
        this.classList.toggle("active")
        navList.classList.toggle("active")
      })
    }
  
    // Create and animate confetti
    createConfetti()
  
    // Animate confirmation icon with checkmark drawing
    animateCheckmark()
  
    // Add staggered animation to sections
    animateSections()
  })
  
  // Create confetti animation
  function createConfetti() {
    const confettiContainer = document.createElement("div")
    confettiContainer.className = "confetti-container"
    document.body.appendChild(confettiContainer)
  
    const colors = ["#4361ee", "#4cc9f0", "#f72585", "#4895ef", "#3d56bc"]
    const shapes = ["circle", "square", "triangle"]
  
    // Create 100 confetti pieces
    for (let i = 0; i < 100; i++) {
      setTimeout(() => {
        const confetti = document.createElement("div")
        confetti.className = "confetti"
  
        // Random position, color, shape, size and rotation
        const left = Math.random() * 100
        const color = colors[Math.floor(Math.random() * colors.length)]
        const shape = shapes[Math.floor(Math.random() * shapes.length)]
        const size = Math.random() * 10 + 5
        const rotation = Math.random() * 360
  
        confetti.style.left = `${left}%`
        confetti.style.top = "-20px"
        confetti.style.backgroundColor = color
        confetti.style.width = `${size}px`
        confetti.style.height = `${size}px`
        confetti.style.transform = `rotate(${rotation}deg)`
  
        if (shape === "circle") {
          confetti.style.borderRadius = "50%"
        } else if (shape === "triangle") {
          confetti.style.width = "0"
          confetti.style.height = "0"
          confetti.style.backgroundColor = "transparent"
          confetti.style.borderLeft = `${size / 2}px solid transparent`
          confetti.style.borderRight = `${size / 2}px solid transparent`
          confetti.style.borderBottom = `${size}px solid ${color}`
        }
  
        confettiContainer.appendChild(confetti)
  
        // Animate falling
        const animationDuration = Math.random() * 3 + 2
        const horizontalMovement = (Math.random() - 0.5) * 100
  
        confetti.animate(
          [
            { transform: `translateY(0) translateX(0) rotate(${rotation}deg)`, opacity: 1 },
            {
              transform: `translateY(${window.innerHeight}px) translateX(${horizontalMovement}px) rotate(${rotation + 360}deg)`,
              opacity: 0,
            },
          ],
          {
            duration: animationDuration * 1000,
            easing: "cubic-bezier(0.25, 1, 0.5, 1)",
          },
        )
  
        // Remove confetti after animation
        setTimeout(() => {
          confetti.remove()
        }, animationDuration * 1000)
      }, i * 50) // Stagger confetti creation
    }
  
    // Remove container after all animations
    setTimeout(() => {
      confettiContainer.remove()
    }, 8000)
  }
  
  // Animate checkmark drawing
  function animateCheckmark() {
    const confirmationIcon = document.querySelector(".confirmation-icon i")
  
    if (confirmationIcon) {
      // Create SVG checkmark
      const iconParent = confirmationIcon.parentNode
      iconParent.removeChild(confirmationIcon)
  
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
      svg.setAttribute("viewBox", "0 0 52 52")
      svg.setAttribute("width", "80")
      svg.setAttribute("height", "80")
  
      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle")
      circle.setAttribute("cx", "26")
      circle.setAttribute("cy", "26")
      circle.setAttribute("r", "25")
      circle.setAttribute("fill", "none")
      circle.setAttribute("stroke", "#4cc9f0")
      circle.setAttribute("stroke-width", "2")
  
      const check = document.createElementNS("http://www.w3.org/2000/svg", "path")
      check.setAttribute("fill", "none")
      check.setAttribute("stroke", "#4cc9f0")
      check.setAttribute("stroke-width", "2")
      check.setAttribute("d", "M14.1 27.2l7.1 7.2 16.7-16.8")
  
      svg.appendChild(circle)
      svg.appendChild(check)
      iconParent.appendChild(svg)
  
      // Animate circle
      const circleLength = 2 * Math.PI * 25
      circle.style.strokeDasharray = circleLength
      circle.style.strokeDashoffset = circleLength
  
      circle.animate([{ strokeDashoffset: circleLength }, { strokeDashoffset: 0 }], {
        duration: 1000,
        easing: "ease-out",
        fill: "forwards",
      })
  
      // Animate checkmark
      const checkLength = check.getTotalLength()
      check.style.strokeDasharray = checkLength
      check.style.strokeDashoffset = checkLength
  
      setTimeout(() => {
        check.animate([{ strokeDashoffset: checkLength }, { strokeDashoffset: 0 }], {
          duration: 800,
          easing: "ease-out",
          fill: "forwards",
        })
      }, 800)
    }
  }
  
  // Animate sections with staggered timing
  function animateSections() {
    // Add intersection observer for scroll-based animations
    const sections = document.querySelectorAll(".confirmation-section, .step-card, .apartment-card")
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Add animation with staggered delay
            setTimeout(() => {
              entry.target.style.opacity = "0"
              entry.target.style.transform = "translateY(20px)"
  
              entry.target.animate(
                [
                  { opacity: 0, transform: "translateY(20px)" },
                  { opacity: 1, transform: "translateY(0)" },
                ],
                {
                  duration: 600,
                  easing: "ease-out",
                  fill: "forwards",
                },
              )
  
              entry.target.style.opacity = "1"
              entry.target.style.transform = "translateY(0)"
            }, index * 150)
  
            // Unobserve after animation
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 },
    )
  
    sections.forEach((section) => {
      observer.observe(section)
    })
  
    // Add hover effects to buttons
    const buttons = document.querySelectorAll(".btn")
    buttons.forEach((button) => {
      button.addEventListener("mouseenter", function () {
        this.style.transition = "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
      })
    })
  
    // Add ripple effect to cards
    const cards = document.querySelectorAll(".step-card, .apartment-card")
    cards.forEach((card) => {
      card.addEventListener("click", function (e) {
        const rect = this.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
  
        const ripple = document.createElement("span")
        ripple.style.position = "absolute"
        ripple.style.width = "0"
        ripple.style.height = "0"
        ripple.style.borderRadius = "50%"
        ripple.style.backgroundColor = "rgba(255, 255, 255, 0.7)"
        ripple.style.transform = "translate(-50%, -50%)"
        ripple.style.left = `${x}px`
        ripple.style.top = `${y}px`
  
        this.style.position = "relative"
        this.style.overflow = "hidden"
        this.appendChild(ripple)
  
        ripple.animate(
          [
            { width: "0", height: "0", opacity: 1 },
            { width: "400px", height: "400px", opacity: 0 },
          ],
          {
            duration: 800,
            easing: "ease-out",
          },
        )
  
        setTimeout(() => {
          ripple.remove()
        }, 800)
      })
    })
  }
  
  // Add calendar functionality
  document.addEventListener("DOMContentLoaded", () => {
    const calendarBtn = document.querySelector(".btn-outline:nth-child(2)")
  
    if (calendarBtn) {
      calendarBtn.addEventListener("click", (e) => {
        e.preventDefault()
  
        // Create calendar data
        const startDate = new Date("2023-05-15")
        const endDate = new Date("2023-05-20")
  
        // Format for Google Calendar
        const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=LuxStay%20Reservation%20-%20Luxury%20Downtown%20Apartment&dates=${formatDate(startDate)}/${formatDate(endDate)}&details=Your%20reservation%20at%20Luxury%20Downtown%20Apartment%20in%20New%20York%20City.%20Confirmation%20number%3A%20LUX-12345678&location=123%20Broadway%2C%20Apt%2045%2C%20New%20York%2C%20NY%2010001`
  
        window.open(googleCalendarUrl, "_blank")
      })
    }
  
    // Format date for Google Calendar
    function formatDate(date) {
      return date.toISOString().replace(/-|:|\.\d+/g, "")
    }
  })
  
  // Print functionality
  document.addEventListener("DOMContentLoaded", () => {
    const printBtn = document.querySelector(".btn-primary:first-child")
  
    if (printBtn) {
      printBtn.addEventListener("click", (e) => {
        e.preventDefault()
        window.print()
      })
    }
  })
  