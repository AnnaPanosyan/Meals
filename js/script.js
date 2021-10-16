let button = document.querySelector(".button");
let random = 0;

async function getData() {
  const res = await fetch(
    "https://api.spoonacular.com/mealplanner/generate?apiKey=6e49cbbb74ad4068b1fef220e69d43d6"
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

  //let nut = document.getElementsByClassName("nutrients");
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

let button1 = document.querySelector(".button1");
button1.addEventListener("click", function () {
  let searchInputTxt = document.querySelector(".searchInput").value.trim();
  fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`
  )
    .then((response) => response.json())
    .then((data) => {
      let recipes = "";
      let allrecipes = document.querySelector(".allrecipes");
      for (let i = 0; i < data.meals.length; i++) {
        console.log(data.meals[i].strMeal);
        recipes += `<h2 class=".recipes">${data.meals[i].strMeal}</h2>`;
      }
      allrecipes.innerHTML = recipes;
    });
});
