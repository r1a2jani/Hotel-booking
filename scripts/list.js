const listView = document.querySelector("#list-view");
const mapView = document.querySelector("#map-view");
function handleView(event) {
  event.preventDefault();
  if (event.target.className.includes("list-view-btn")) {
    document
      .getElementsByClassName("map-view-btn")[0]
      .classList.remove("btn-primary");

    document
      .getElementsByClassName("hideThis")[0]
      .classList.remove("hotel-details-4");
    document
      .getElementsByClassName("hideThis")[0]
      .classList.add("hotel-details-3");
    document
      .getElementsByClassName("imgg")[0]
      .classList.remove("display-image2");
    document.getElementsByClassName("imgg")[0].classList.add("hide-image");

    document
      .getElementsByClassName("list-view-btn")[0]
      .classList.add("btn-primary");
  } else if (event.target.className.includes("map-view-btn")) {
    document
      .getElementsByClassName("list-view-btn")[0]
      .classList.remove("btn-primary");

    document.getElementsByClassName("imgg")[0].classList.remove("hide-image");

    document
      .getElementsByClassName("hideThis")[0]
      .classList.remove("hotel-details-3");

    document
      .getElementsByClassName("hideThis")[0]
      .classList.add("hotel-details-4");

    document
      .getElementsByClassName("map-view-btn")[0]
      .classList.add("btn-primary");
    document.getElementsByClassName("imgg")[0].classList.add("display-image2");
    // listView.style.display = "none";
    // mapView.style.display = "initial";
  }
}

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}
