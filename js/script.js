let button = document.querySelector(".button");
let random = 0;

async function getData() {
  const res = await fetch(
    "https://api.spoonacular.com/mealplanner/generate?apiKey=ca67fc9b69c84003a944a7fb53482d34"
  );
  const data = await res.json();
  draw(data);
}
getData();
button.addEventListener("click", function () {
  random = Math.floor(Math.random() * 8);
  getData();
});

function draw(data) {
  let breakfast1 = document.querySelector(".breakfast1");
  let lunch1 = document.querySelector(".lunch1");
  let dinner1 = document.querySelector(".dinner1");
  let minB = document.querySelector(".minB");
  let minL = document.querySelector(".minL");
  let minD = document.querySelector(".minD");
  let servingsB = document.querySelector(".servingsB");
  let servingsL = document.querySelector(".servingsL");
  let servingsD = document.querySelector(".servingsD");

  let weekDay = [];
  weekDay = Object.values(data.week);

  let arr = [];
  arr.push(breakfast1);
  arr.push(lunch1);
  arr.push(dinner1);
  let arr1 = [];
  arr1.push(minB);
  arr1.push(minL);
  arr1.push(minD);
  let arr2 = [];
  arr2.push(servingsB);
  arr2.push(servingsL);
  arr2.push(servingsD);

  let nut = document.getElementsByClassName("nutrients");
  let cal = document.getElementsByClassName("cal");
  let car = document.getElementsByClassName("car");
  let fat = document.getElementsByClassName("fat");
  let pro = document.getElementsByClassName("pro");

  for (let i = 0; i < 3; i++) {
    arr[i].innerHTML = weekDay[random].meals[i].title;
    arr[i].href = weekDay[random].meals[i].sourceUrl;
    arr1[i].innerHTML = weekDay[random].meals[i].readyInMinutes + " min";
    arr2[i].innerHTML = weekDay[random].meals[i].servings + "  PPL";
    cal[i].innerHTML = "calories:" + " " + weekDay[random].nutrients.calories;
    car[i].innerHTML =
      "carbohydrates:" + " " + weekDay[random].nutrients.carbohydrates;
    fat[i].innerHTML = "fat:" + " " + weekDay[random].nutrients.fat;
    pro[i].innerHTML = "protein:" + " " + weekDay[random].nutrients.protein;
  }
}
getDataRecipes();

