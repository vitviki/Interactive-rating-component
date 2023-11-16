const submitBtn = document.getElementsByTagName("button")[0];
const listElements = document.getElementsByClassName("circle");
const ratings_container = document.getElementsByClassName("ratings")[0];
const thank_you_container = document.getElementsByClassName("thank-you")[0];
const score = thank_you_container.querySelector(".score p");

let rating = 1;

function selectItem(element) {
  for (let e of listElements) {
    if (e === element) {
      const classes = element.classList;
      if (classes.contains("selected")) {
        element.classList.remove("selected");
      } else {
        element.classList.add("selected");
        rating = element.innerText;
      }
    } else {
      e.classList.remove("selected");
    }
  }
}

// Click events

for (let element of listElements) {
  element.addEventListener("click", () => selectItem(element));
}

submitBtn.addEventListener("click", () => {
  score.innerHTML = `You selected ${rating} out of 5`;
  ratings_container.style.display = "none";
  thank_you_container.style.visibility = "visible";
});
