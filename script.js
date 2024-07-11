const passwordInput = document.getElementById('password');
const messageElement = document.getElementById('strength-message');

passwordInput.addEventListener('keyup', (event) => {
  const password = event.target.value;
  const strength = calculateStrength(password);
  messageElement.textContent = strength;
});

function calculateStrength(password) {
  let strength = 'Weak';
  if (password.length >= 8) {
    strength = 'Medium';
    if (/[a-z]/.test(password) && /[A-Z]/.test(password) && /\d/.test(password) && /[!@#$%^&*]/.test(password)) {
      strength = 'Strong';
    }
  }
  return strength;
}
