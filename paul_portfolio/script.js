
/* script.js - basic interactivity & validation */
document.addEventListener('DOMContentLoaded', function(){
  // mobile menu toggle (if any)
  const form = document.querySelector('#contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = form.elements['name'].value.trim();
      const email = form.elements['email'].value.trim();
      const message = form.elements['message'].value.trim();
      const errors = [];
      if(name.length < 2) errors.push('Please enter your name (2+ characters).');
      if(!/^\S+@\S+\.\S+$/.test(email)) errors.push('Please enter a valid email address.');
      if(message.length < 10) errors.push('Message should be at least 10 characters.');
      const out = document.querySelector('#formOutput');
      if(errors.length){
        out.innerHTML = '<div style="color:#b02a37"><strong>Error:</strong> ' + errors.join('<br>') + '</div>';
      } else {
        out.innerHTML = '<div style="color:green"><strong>Success:</strong> Message validated. This demo does not send emails. Save the form data to your server or service (example: Netlify Forms or a server-side script).</div>';
        form.reset();
      }
    });
  }

  // scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  // reveal small animations on scroll (lightweight)
  const observers = document.querySelectorAll('.fadein');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if(en.isIntersecting) en.target.classList.add('visible');
    });
  }, {threshold:0.15});
  observers.forEach(el => io.observe(el));
});

