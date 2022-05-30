const labelHeader = document.getElementById("header");
const labelFooter = document.getElementById("footer");
const btnCloseLogin = document.querySelector(".close-login");
const btnShowLogin = document.getElementById("login-btn");
const containerLogin = document.querySelector(".conatainer-login");
const userName = document.getElementById("userName");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
const contactUS = document.getElementById("cont-contact");

const addHeader = () => {
  labelHeader.innerHTML = "";
  const html = `
  <a href="index.html">
  <img class="logo-img" src="assests/images/logo.png" alt="logo" /> </a>
        <a id="login-btn" href="#">Login</a>
  `;
  labelHeader.insertAdjacentHTML("afterbegin", html);
};

const addFooter = () => {
  const html = `
      <div class="contact-us">
        <button class="btn-contact" >Contact Us</button>
      </div>
      <div class="copy-right">
        <p>&copy; 2020 ROOM SEARCH PVT LTD.</p>
      </div>
      <div class="social-logo">
        <a href="https://www.facebook.com/" target="_blank"
          ><img
            src="assests/images/facebook.png"
            width="22px"
            height="20px"
        /></a>
        <a href="https://www.instagram.com" target="_blank"
          ><img
            src="assests/images/instagram.png"
            width="22px"
            height="20px"
        /></a>
        <a href="https://twitter.com" target="_blank"
          ><img src="assests/images/twitter.png" width="22px" height="20px"
        /></a>
      </div>
    `;

  labelFooter.insertAdjacentHTML("afterbegin", html);
};

const addLogin = () => {
  const html = `
  <div class="login">
           <p class="close-login">&#x10915</p>
           <h2 class="login-req">Please Login</h2>
           <form action="#">
             <div class="userD">
                <label class="userName" for="userName">Username</label>
               <input  class="form-inp" type="text" placeholder="Enter Username" id="userName" required>
             </div>
             <br>
             <div class="userD">
                <label class="pass" for="pass">Password</label>
                <input id="password" class="form-inp" type="password" placeholder="Enter Password" required>
             </div>
            </form>
            <button id="submit" class="submit">Submit</button>
            </div>
  `;
  containerLogin.insertAdjacentHTML("afterbegin", html);
};

const addContact = () => {
  const html = `
  <div class="contact-uss">
        <p class="close-contact">&#x10915</p>
        <h3 class="cont-heading">Thanku for reching out !!!</h3>
        <p class="cont-des">Please enter your email and we will get back to you</p>
        <form action="index.html">
          <input
            class="cont-inp"
            type="email"
            placeholder="Enter your email"
            autocomplete="off"
            required
          />
          <br />
          <button class="cont-sub">Submit</button>
        </form>
      </div>
  `;
  document
    .querySelector("#cont-contact")
    .insertAdjacentHTML("afterbegin", html);
};

const display = () => {
  addHeader();
  addFooter();
  addLogin();
  addContact();
};

display();
document.querySelector("#login-btn").addEventListener("click", function () {
  const cont = document.querySelector("#login-btn").textContent;
  if (cont === "Login") {
    containerLogin.classList.remove("hidden");
  } else {
    document.querySelector("#login-btn").textContent = "Login";
  }
});

// btnShowLogin.addEventListener("click", function () {});
document.querySelector(".close-login").addEventListener("click", function () {
  containerLogin.classList.add("hidden");
});
const login = false;

document.querySelector("#submit").addEventListener("click", (e) => {
  // e.preventDefault();
  const id = document.getElementById("userName").value;
  const pass = document.getElementById("password").value;

  if (id === "admin" && pass === "admin") {
    containerLogin.classList.add("hidden");
    setTimeout(() => alert("Loged In!"), 100);
    document.querySelector("#login-btn").textContent = "LogOut";
  }
});

document.querySelector(".btn-contact").addEventListener("click", (e) => {
  e.preventDefault();
  contactUS.classList.remove("hidden");
});
document.querySelector(".close-contact ").addEventListener("click", (e) => {
  e.preventDefault();
  contactUS.classList.add("hidden");
});

