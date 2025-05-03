document.addEventListener("DOMContentLoaded", () => {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
    const navList = document.querySelector(".nav-list")
  
    if (mobileMenuToggle) {
      mobileMenuToggle.addEventListener("click", function () {
        this.classList.toggle("active")
        navList.classList.toggle("active")
      })
    }
  
    // Thumbnail Image Click Handler
    const thumbnails = document.querySelectorAll(".thumbnail")
    const mainImage = document.querySelector(".main-image")
  
    if (thumbnails.length > 0 && mainImage) {
      thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener("click", function () {
          // Remove active class from all thumbnails
          thumbnails.forEach((t) => t.classList.remove("active"))
  
          // Add active class to clicked thumbnail
          this.classList.add("active")
  
          // Update main image
          const newSrc = this.querySelector("img").getAttribute("src")
  
          // Add fade effect
          mainImage.style.opacity = "0"
          setTimeout(() => {
            mainImage.setAttribute("src", newSrc)
            mainImage.style.opacity = "1"
          }, 300)
        })
      })
    }
  
    // Save Button Toggle
    const saveBtn = document.querySelector(".save-btn")
  
    if (saveBtn) {
      saveBtn.addEventListener("click", function () {
        const icon = this.querySelector("i")
  
        if (icon.classList.contains("far")) {
          icon.classList.remove("far")
          icon.classList.add("fas")
          icon.style.color = "#f72585"
        } else {
          icon.classList.remove("fas")
          icon.classList.add("far")
          icon.style.color = ""
        }
      })
    }
  
    // Read More Toggle
    const readMoreBtn = document.querySelector(".read-more-btn")
    const descriptionContent = document.querySelector(".description-content")
  
    if (readMoreBtn && descriptionContent) {
      const paragraphs = descriptionContent.querySelectorAll("p")
  
      // Hide paragraphs after the first one initially
      if (paragraphs.length > 1) {
        for (let i = 1; i < paragraphs.length; i++) {
          paragraphs[i].style.display = "none"
        }
  
        readMoreBtn.addEventListener("click", function () {
          for (let i = 1; i < paragraphs.length; i++) {
            if (paragraphs[i].style.display === "none") {
              paragraphs[i].style.display = "block"
              this.textContent = "Show less"
            } else {
              paragraphs[i].style.display = "none"
              this.textContent = "Read more"
            }
          }
        })
      } else {
        readMoreBtn.style.display = "none"
      }
    }
  
    // Date Picker Default Values
    const checkInDate = document.getElementById("check-in-date")
    const checkOutDate = document.getElementById("check-out-date")
  
    if (checkInDate && checkOutDate) {
      // Set default dates (today and tomorrow)
      const today = new Date()
      const tomorrow = new Date(today)
      tomorrow.setDate(tomorrow.getDate() + 1)
  
      // Format dates as YYYY-MM-DD
      const formatDate = (date) => {
        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, "0")
        const day = String(date.getDate()).padStart(2, "0")
        return `${year}-${month}-${day}`
      }
  
      checkInDate.value = formatDate(today)
      checkOutDate.value = formatDate(tomorrow)
  
      // Update price calculation when dates change
      const updatePriceCalculation = () => {
        const pricePerNight = 250
        const start = new Date(checkInDate.value)
        const end = new Date(checkOutDate.value)
  
        // Calculate number of nights
        const nights = Math.round((end - start) / (1000 * 60 * 60 * 24))
  
        if (nights > 0) {
          const subtotal = nights * pricePerNight
          const cleaningFee = 100
          const serviceFee = Math.round(subtotal * 0.12)
          const total = subtotal + cleaningFee + serviceFee
  
          // Update the price details
          const priceItems = document.querySelectorAll(".price-item")
          const priceTotal = document.querySelector(".price-total")
  
          if (priceItems.length >= 3 && priceTotal) {
            priceItems[0].innerHTML = `<span>$${pricePerNight} x ${nights} nights</span><span>$${subtotal}</span>`
            priceItems[2].innerHTML = `<span>Service fee</span><span>$${serviceFee}</span>`
            priceTotal.innerHTML = `<span>Total</span><span>$${total}</span>`
          }
        }
      }
  
      checkInDate.addEventListener("change", function () {
        // Ensure check-out is after check-in
        if (new Date(checkOutDate.value) <= new Date(this.value)) {
          const newCheckOut = new Date(this.value)
          newCheckOut.setDate(newCheckOut.getDate() + 1)
          checkOutDate.value = formatDate(newCheckOut)
        }
  
        updatePriceCalculation()
      })
  
      checkOutDate.addEventListener("change", function () {
        // Ensure check-out is after check-in
        if (new Date(this.value) <= new Date(checkInDate.value)) {
          const newCheckOut = new Date(checkInDate.value)
          newCheckOut.setDate(newCheckOut.getDate() + 1)
          this.value = formatDate(newCheckOut)
        }
  
        updatePriceCalculation()
      })
  
      // Initial price calculation
      updatePriceCalculation()
    }
  
    // Add hover animations to cards and buttons
    const animatedElements = document.querySelectorAll(".apartment-card, .step-card, .testimonial-card, .btn")
  
    animatedElements.forEach((element) => {
      // Mouse enter animation
      element.addEventListener("mouseenter", function () {
        if (this.classList.contains("btn")) {
          this.style.transform = "translateY(-3px)"
          this.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
        } else {
          this.style.transform = "translateY(-10px)"
          this.style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
        }
      })
  
      // Mouse leave animation
      element.addEventListener("mouseleave", function () {
        if (this.classList.contains("btn")) {
          this.style.transform = "translateY(0)"
          this.style.boxShadow = ""
        } else {
          this.style.transform = "translateY(0)"
          this.style.boxShadow = ""
        }
      })
    })
  
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll(".btn")
  
    buttons.forEach((button) => {
      button.addEventListener("click", function (e) {
        const x = e.clientX - e.target.getBoundingClientRect().left
        const y = e.clientY - e.target.getBoundingClientRect().top
  
        const ripple = document.createElement("span")
        ripple.classList.add("ripple")
        ripple.style.left = `${x}px`
        ripple.style.top = `${y}px`
  
        this.appendChild(ripple)
  
        setTimeout(() => {
          ripple.remove()
        }, 600)
      })
    })
  
    // Add scroll animations
    const revealElements = document.querySelectorAll(".section-header, .apartment-card, .step-card, .testimonial-card")
  
    function checkScroll() {
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const windowHeight = window.innerHeight
  
        if (elementTop < windowHeight - 100) {
          element.classList.add("revealed")
        }
      })
    }
  
    // Add CSS for scroll animations
    const style = document.createElement("style")
    style.textContent = `
          .section-header, .apartment-card, .step-card, .testimonial-card {
              opacity: 0;
              transform: translateY(30px);
              transition: opacity 0.6s ease, transform 0.6s ease;
          }
          
          .revealed {
              opacity: 1;
              transform: translateY(0);
          }
          
          .ripple {
              position: absolute;
              background-color: rgba(255, 255, 255, 0.7);
              border-radius: 50%;
              transform: scale(0);
              animation: ripple 0.6s linear;
              pointer-events: none;
          }
          
          @keyframes ripple {
              to {
                  transform: scale(4);
                  opacity: 0;
              }
          }
          
          .nav-list.active {
              display: flex;
              flex-direction: column;
              position: absolute;
              top: 70px;
              right: 20px;
              background: white;
              padding: 20px;
              border-radius: var(--border-radius);
              box-shadow: var(--shadow-lg);
              z-index: 100;
          }
          
          .mobile-menu-toggle.active span:nth-child(1) {
              transform: rotate(45deg) translate(5px, 5px);
          }
          
          .mobile-menu-toggle.active span:nth-child(2) {
              opacity: 0;
          }
          
          .mobile-menu-toggle.active span:nth-child(3) {
              transform: rotate(-45deg) translate(7px, -6px);
          }
          
          @media (max-width: 768px) {
              .nav-list {
                  display: none;
              }
              
              .mobile-menu-toggle {
                  display: block;
              }
              
              .header-actions {
                  display: none;
              }
              
              .apartment-content {
                  grid-template-columns: 1fr;
              }
              
              .steps-container {
                  flex-direction: column;
              }
              
              .footer-content {
                  grid-template-columns: 1fr;
              }
          }
      `
    document.head.appendChild(style)
  
    // Check for elements on initial load
    checkScroll()
  
    // Check for elements on scroll
    window.addEventListener("scroll", checkScroll)
  })
  