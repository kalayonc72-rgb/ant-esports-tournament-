document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('reg').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('msg').textContent =
    'Demo only: your details have NOT been sent or saved. Connect Google Forms or a backend before accepting real registrations.';
});