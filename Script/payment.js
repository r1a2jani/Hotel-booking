const btn = document.querySelector("btn-success");
const paynow = () => {
  const cont = document.querySelector("#login-btn").textContent;
  console.log(cont);
  if (true) {
    document.querySelector(".btn-success").disabled = false;
    document.querySelector(".btn-success").addEventListener("click", () => {
      alert("Booking SucessFull");
    });
  }
};
paynow();