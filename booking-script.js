document.addEventListener("DOMContentLoaded", () => {
    // Get URL parameters to populate booking details
    const urlParams = new URLSearchParams(window.location.search)
    const checkIn = urlParams.get("check-in") || formatDate(new Date())
    const checkOut = urlParams.get("check-out") || formatDate(addDays(new Date(), 5))
    const guests = urlParams.get("guests") || "2"
  
    // Update summary information
    const summaryCheckIn = document.getElementById("summary-check-in")
    const summaryCheckOut = document.getElementById("summary-check-out")
    const summaryGuests = document.getElementById("summary-guests")
  
    if (summaryCheckIn) {
      summaryCheckIn.textContent = formatDateForDisplay(checkIn)
    }
  
    if (summaryCheckOut) {
      summaryCheckOut.textContent = formatDateForDisplay(checkOut)
    }
  
    if (summaryGuests) {
      summaryGuests.textContent = `${guests} ${Number.parseInt(guests) === 1 ? "guest" : "guests"}`
    }
  
    // Calculate and update price details
    updatePriceCalculation(checkIn, checkOut)
  
    // Payment method selection
    const paymentMethods = document.querySelectorAll(".payment-method")
    const creditCardForm = document.querySelector(".credit-card-form")
  
    paymentMethods.forEach((method) => {
      method.addEventListener("click", function () {
        // Remove active class from all methods
        paymentMethods.forEach((m) => m.classList.remove("active"))
  
        // Add active class to clicked method
        this.classList.add("active")
  
        // Check the radio button
        const radio = this.querySelector("input[type='radio']")
        radio.checked = true
  
        // Show/hide credit card form
        if (radio.id === "credit-card") {
          creditCardForm.style.display = "block"
        } else {
          creditCardForm.style.display = "none"
        }
      })
    })
  
    // Form validation
    const bookingForm = document.getElementById("booking-form")
    const completeBookingBtn = document.querySelector(".booking-actions .btn-primary")
  
    if (completeBookingBtn && bookingForm) {
      completeBookingBtn.addEventListener("click", (e) => {
        // Check if form is valid
        const isValid = validateForm()
  
        if (!isValid) {
          e.preventDefault()
          alert("Please fill in all required fields correctly.")
        } else {
          // Store booking details in localStorage for confirmation page
          const bookingDetails = {
            apartment: "Luxury Downtown Apartment",
            location: "Downtown, New York City",
            checkIn: checkIn,
            checkOut: checkOut,
            guests: guests,
            firstName: document.getElementById("first-name").value,
            lastName: document.getElementById("last-name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            specialRequests: document.getElementById("special-requests").value,
            paymentMethod: document.getElementById("credit-card").checked ? "credit-card" : "paypal",
            totalPrice: 1500,
          }
  
          localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails))
        }
      })
    }
  
    // Credit card input formatting
    const cardNumberInput = document.getElementById("card-number")
    const expiryDateInput = document.getElementById("expiry-date")
    const cvvInput = document.getElementById("cvv")
  
    if (cardNumberInput) {
      cardNumberInput.addEventListener("input", function () {
        this.value = formatCardNumber(this.value)
      })
    }
  
    if (expiryDateInput) {
      expiryDateInput.addEventListener("input", function () {
        this.value = formatExpiryDate(this.value)
      })
    }
  
    if (cvvInput) {
      cvvInput.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "").substring(0, 3)
      })
    }
  
    // Helper functions
    function formatDate(date) {
      const year = date.getFullYear()
      const month = String(date.getMonth() + 1).padStart(2, "0")
      const day = String(date.getDate()).padStart(2, "0")
      return `${year}-${month}-${day}`
    }
  
    function formatDateForDisplay(dateString) {
      const date = new Date(dateString)
      const options = { year: "numeric", month: "long", day: "numeric" }
      return date.toLocaleDateString("en-US", options)
    }
  
    function addDays(date, days) {
      const result = new Date(date)
      result.setDate(result.getDate() + days)
      return result
    }
  
    function updatePriceCalculation(checkIn, checkOut) {
      const pricePerNight = 250
      const start = new Date(checkIn)
      const end = new Date(checkOut)
  
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
          priceTotal.innerHTML = `<span>Total (USD)</span><span>$${total}</span>`
        }
      }
    }
  
    function validateForm() {
      const requiredFields = ["first-name", "last-name", "email", "phone"]
  
      let isValid = true
  
      requiredFields.forEach((field) => {
        const input = document.getElementById(field)
        if (!input.value.trim()) {
          input.classList.add("error")
          isValid = false
        } else {
          input.classList.remove("error")
        }
      })
  
      // Validate email format
      const emailInput = document.getElementById("email")
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (emailInput.value && !emailRegex.test(emailInput.value)) {
        emailInput.classList.add("error")
        isValid = false
      }
  
      // If credit card is selected, validate card details
      if (document.getElementById("credit-card").checked) {
        const cardFields = ["card-number", "expiry-date", "cvv", "card-name"]
  
        cardFields.forEach((field) => {
          const input = document.getElementById(field)
          if (!input.value.trim()) {
            input.classList.add("error")
            isValid = false
          } else {
            input.classList.remove("error")
          }
        })
      }
  
      return isValid
    }
  
    function formatCardNumber(value) {
      // Remove all non-digits
      const v = value.replace(/\D/g, "")
  
      // Limit to 16 digits
      const limited = v.substring(0, 16)
  
      // Add spaces after every 4 digits
      const formatted = limited.replace(/(\d{4})(?=\d)/g, "$1 ")
  
      return formatted
    }
  
    function formatExpiryDate(value) {
      // Remove all non-digits
      const v = value.replace(/\D/g, "")
  
      // Limit to 4 digits
      const limited = v.substring(0, 4)
  
      // Add slash after first 2 digits
      if (limited.length > 2) {
        return limited.substring(0, 2) + "/" + limited.substring(2)
      }
  
      return limited
    }
  
    // Add error styling
    const style = document.createElement("style")
    style.textContent = `
      .error {
        border-color: #f72585 !important;
        box-shadow: 0 0 0 2px rgba(247, 37, 133, 0.2) !important;
      }
      
      .error::placeholder {
        color: #f72585;
      }
    `
    document.head.appendChild(style)
  })
  