document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.querySelector(".signup form");
    const loginForm = document.querySelector(".login form");
    const chk = document.getElementById("chk");
  
    // Sign Up Submit Handler
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const username = signupForm.querySelector("input[name='txt']").value;
      const email = signupForm.querySelector("input[name='email']").value;
      const phone = signupForm.querySelector("input[name='broj']").value;
      const password = signupForm.querySelector("input[name='pswd']").value;
  
      // Simulated success message
      alert(`✅ Sign Up Successful!\nUsername: ${username}\nEmail: ${email}\nPhone: ${phone}`);
      
      signupForm.reset();
      chk.checked = false; // Switch to login view
    });
  
    // Login Submit Handler
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const email = loginForm.querySelector("input[name='email']").value;
      const password = loginForm.querySelector("input[name='pswd']").value;
     
  
      // Simulated check (replace with real logic)
      if (email === "a@gmail.com" && password === "1234") {
        window.location.href='trial.html';
      } else {
        alert("❌ Invalid Email or Password.");
      }
    });
    
  });
  