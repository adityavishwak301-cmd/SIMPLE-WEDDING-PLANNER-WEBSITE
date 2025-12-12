function validateLogin() {
  const email = document.getElementById('login_user').value.trim();
  const pass = document.getElementById('login_pass').value.trim();

  if (!email) { alert('Please enter email'); return false; }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) { 
    alert('Enter a valid email'); 
    return false; 
  }

  if (!pass) { alert('Please enter password'); return false; }

  if (pass.length < 4) { 
    alert('Password must be at least 4 characters'); 
    return false; 
  }

  alert('Login successful (demo)');
window.location.href = "home.html";

  return true;
}



function validateInquiry() {
  const name = document.getElementById('inq_name').value.trim();
  const email = document.getElementById('inq_email').value.trim();
  const phone = document.getElementById('inq_phone').value.trim();
  const msg = document.getElementById('inq_msg').value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name) { alert('Please enter your name'); return false; }
  if (!email) { alert('Please enter your email'); return false; }
  if (!emailPattern.test(email)) { alert('Enter a valid email'); return false; }
  if (phone && phone.replace(/\D/g, '').length !== 10) { alert('If you add phone, enter 10 digits'); return false; }
  if (!msg) { alert('Please write a message'); return false; }

  alert('Inquiry submitted (demo). Thank you!');
  return true;
}
