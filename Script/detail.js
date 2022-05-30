const btnSubmit = document.querySelector(".btn-outline-success");
const inputAdults = document.getElementById("adult");
const inputName = document.getElementById("name");
const inputFromDate = document.getElementById("fromDate");
const inputToDate = document.getElementById("toDate");
const inputPrice = document.getElementById("price");

const getDays = (date1, date2) => {
  const dt1 = new Date(date1);
  const dt2 = new Date(date2);
  const time_difference = dt2.getTime() - dt1.getTime();
  const days = time_difference / (1000 * 60 * 60 * 24);
  return days;
};
const calcPrice = (adults = 1, days, cost) => adults * cost * days;
document.querySelector("#bookNow").addEventListener("click", () => {
  //   e.preventDefault();
  const adults = inputAdults.value;
  const fDate = inputFromDate.value;
  const tDate = inputToDate.value;
  const days = getDays(fDate, tDate);
  const cost = calcPrice(adults, days, 1000);

  inputPrice.value = cost;
  displayBill();
});

const displayBill = () => {
  const name = inputName.value;
  console.log(name);
};