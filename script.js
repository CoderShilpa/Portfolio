// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Back to top button functionality
    const backToTopButton = document.querySelector(".back-to-top")
  
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add("active")
      } else {
        backToTopButton.classList.remove("active")
      }
    })
  
    backToTopButton.addEventListener("click", (e) => {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: "smooth" })
    })
  
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav a")
  
    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        const targetSection = document.querySelector(targetId)
  
        window.scrollTo({
          top: targetSection.offsetTop - 100,
          behavior: "smooth",
        })
      })
    })
  
    // Form submission handling with email functionality
    const contactForm = document.getElementById("contactForm")
  
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Get form values
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const message = document.getElementById("message").value
  
        // Simple validation
        if (!name || !email || !message) {
          alert("Please fill in all fields")
          return
        }
  
        // Create email content
        const emailBody = `
          Name: ${name}
          Email: ${email}
          Message: ${message}
        `
  
        // Send email using mailto link (simple solution)
        const mailtoLink = `mailto:upadhyayshilpa57@gmail.com?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(emailBody)}`
        window.location.href = mailtoLink
  
        // Show confirmation
        alert(`Thank you for your message, ${name}! I'll get back to you soon.`)
  
        // Reset form
        contactForm.reset()
      })
    }
  
    // Typing animation for the hero section
    const roles = ["Full Stack Web Developer"]
    let roleIndex = 0
    let charIndex = 0
    let isDeleting = false
    const roleElement = document.querySelector(".role")
    const typingSpeed = 100 // Speed in milliseconds
  
    function typeRole() {
      const currentRole = roles[roleIndex]
  
      if (isDeleting) {
        // Remove a character
        roleElement.textContent = currentRole.substring(0, charIndex - 1)
        charIndex--
      } else {
        // Add a character
        roleElement.textContent = currentRole.substring(0, charIndex + 1)
        charIndex++
      }
  
      // If word is complete
      if (!isDeleting && charIndex === currentRole.length) {
        // Pause at the end
        isDeleting = true
        setTimeout(typeRole, 1500)
      }
      // If deletion is complete
      else if (isDeleting && charIndex === 0) {
        isDeleting = false
        roleIndex = (roleIndex + 1) % roles.length
        setTimeout(typeRole, 500)
      }
      // Continue typing or deleting
      else {
        setTimeout(typeRole, isDeleting ? typingSpeed / 2 : typingSpeed)
      }
    }
  
    // Start the typing animation
    setTimeout(typeRole, 1000)
  
    // Project cards hover effect
    const projectCards = document.querySelectorAll(".project-card")
  
    projectCards.forEach((card) => {
      card.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-15px)"
      })
  
      card.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0)"
      })
    })
  
    // Skill cards hover effect
    const skillCards = document.querySelectorAll(".skill-card")
  
    skillCards.forEach((card) => {
      card.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-10px) scale(1.05)"
      })
  
      card.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0) scale(1)"
      })
    })
  })
  
  