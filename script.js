// Optional JavaScript for button interaction
document.getElementById('hire-btn').addEventListener('click', function() {
  alert("Thank you for your interest! I will get back to you soon.");
});
// tailwind.config.js
module.exports = {
  darkMode: 'class', // or 'media'
  // ...
}



// EmailJS Initialization
emailjs.init("koly"); // এখানে YOUR_USER_ID দিয়ে তোমার EmailJS user ID বসাতে হবে

// Form submission handler
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // ফর্ম সাবমিট হওয়ার পর পেজ রিফ্রেশ না হোক

  // ফর্ম থেকে ডাটা সংগ্রহ
  var formData = {
    user_name: document.getElementById("user_name").value,
    user_email: document.getElementById("user_email").value,
    message: document.getElementById("message").value
  };

  // EmailJS টেমপ্লেট পাঠানো
  emailjs.send("service_7mrd1gq", "YOUR_TEMPLATE_ID", formData)
    .then(function(response) {
      alert("Your message has been sent successfully!");
      console.log("SUCCESS", response);
    }, function(error) {
      alert("Failed to send message. Please try again.");
      console.log("ERROR", error);
    });
});
