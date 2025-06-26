---
title: "Book a Call"
url: "/book-a-call/"
layout: "single"
---
Need help with your electronics project?  
Let’s schedule a call and discuss how we can bring your idea to life.
We specialize in turning ideas into reality. Book a call by filling out this form:

<form id="callForm" class="flex flex-col gap-4 max-w-md mt-6">
  <input type="text" name="name" placeholder="Your Name" required class="border p-2 rounded">

  <input type="email" name="email" placeholder="Your Email" required class="border p-2 rounded">

  <input type="tel" name="phone" placeholder="Phone Number" required class="border p-2 rounded">

  <textarea name="requirement" placeholder="Tell us about your requirement" required class="border p-2 rounded"></textarea>

  <!-- Hidden field to send current time -->
  <input type="hidden" name="time" id="timeField" />

  <button type="submit" class="bg-primary text-white p-2 rounded">Send</button>
</form>

<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script>
  (function() {
    emailjs.init("k1WXitJpQhuiN6M_h"); // 🔁 Replace this with your actual EmailJS public key
  })();

  document.getElementById('callForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Set current time in hidden input
    const now = new Date();
    const formattedTime = now.toLocaleString(); // Example: 6/26/2025, 3:40:22 PM
    document.getElementById('timeField').value = formattedTime;

    // Send form using EmailJS
    emailjs.sendForm("service_nzgxj6b","template_qnpyjca", this)
      .then(() => {
        alert('Message sent successfully!');
        this.reset();
      }, (error) => {
        alert('Failed to send message. Error: ' + JSON.stringify(error));
      });
  });
</script>