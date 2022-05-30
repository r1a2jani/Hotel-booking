const btnViewMore = document.querySelector(".btn-view-more");
const conCity = document.querySelector(".location-city");

btnViewMore.addEventListener("click", () => {
  const btnText = btnViewMore.textContent;
  if (btnText === "View more >") {
    document.querySelector(".location-city2").classList.remove("hidden");
    btnViewMore.textContent = `View less >`;
    console.log(btnText);
  } else {
    document.querySelector(".location-city2").classList.add("hidden");
    btnViewMore.textContent = `View more >`;
  }
});
       