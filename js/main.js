let rowData = document.getElementById("rowData");

$(".closebtn").css("display", "none");
$(".openNav").click(function () {
  $("#leftMenu").animate({ width: "250px" }, 50);
  $("#home-content").animate({ marginLeft: "250px" }, 50);
  $(".openNav").css("display", "none");
  $(".closebtn").css("display", "block");
  $(".nav_link").addClass("active");
  $(".copyRight").addClass("active-2");
  $(".copyRight").css("display", "block");
});
$(".closebtn").click(function () {
  $("#leftMenu").animate({ width: "0px" }, 50);
  $("#home-content").animate({ marginLeft: "0px" }, 50);
  $(".openNav").css("display", "block");
  $(".closebtn").css("display", "none");
  $(".nav_link").removeClass("active");
  $(".copyRight").css("display", "none");
});

$(".action").css("display", "none");
$(".nav_link1").click(function openSearch(){
  $(".action").css("display", "block");
  
 
})

async function fetchApi() {
  let res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
  let data = await res.json();
  console.log(data);
  display(data);
}

fetchApi();

function display(arr) {
    let crtona = "";
    let mealsToDisplay = arr.meals.slice(0,20); 
    for (let i = 0; i < mealsToDisplay.length; i++) {
      crtona += `
        <div class="col-md-3 g-3">
          <div onclick="displayIngredients('${mealsToDisplay[i].idMeal}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
            <img class="w-100 rounded-2 imgemodal" src="${mealsToDisplay[i].strMealThumb}" alt="">
            <div class="meal-layer position-absolute d-flex align-items-center text-black p-2 justify-content-center">
              <h3>${mealsToDisplay[i].strMeal}</h3>
            </div>
          </div>
        </div>
      `;

    }
    rowData.innerHTML = crtona;
    window.globalMeals = arr.meals;
}  

function displayIngredients(idMeal) {
  let meal = window.globalMeals.find(meal => meal.idMeal === idMeal);
  let crtona = `
    <div class="col-md-4">
      <img class="w-100 rounded-3 text-white" src="${meal.strMealThumb}" alt="">
      <h2 class="text-white">${meal.strMeal}</h2>
    </div>
    <div class="col-md-8">
      <h2 class="text-white">Instructions</h2>
      <p calss="text-white">${meal.strInstructions}</p>
      <h3 class="text-white"><span class="fw-bolder text-white">Area: </span>${meal.strArea}</h3>
      <h3 class="text-white"><span class="fw-bolder text-white">Category: </span>${meal.strCategory}</h3>
      <h3 class="text-white">Recipes:</h3>
      <ul class="list-unstyled d-flex g-3 flex-wrap">
      
      <li class="p-1 m-1 bg-danger text-white ">${meal.strIngredient1}</li>
      <li class="p-1 m-1 bg-danger text-white ">${meal.strIngredient2}</li>
      <li class="p-1 m-1 bg-danger text-white ">${meal.strIngredient3}</li>
      <li class="p-1 m-1 bg-danger text-white ">${meal.strIngredient4}</li>
      <br>
      <li class="p-1 m-1 bg-danger text-white ">${meal.strIngredient5}</li>
      <li class="p-1 m-1 bg-danger text-white ">${meal.strIngredient6}</li>
      <li class="p-1 m-1 bg-danger text-white ">${meal.strIngredient7}</li>
      <li class="p-1 m-1 bg-danger text-white ">${meal.strIngredient8}</li>
      <li class="p-1 m-1 bg-danger text-white ">${meal.strIngredient9}</li>
      <li class="p-1 m-1 bg-danger text-white ">${meal.strIngredient10}</li>
      <br>
      <li class="p-1 m-1 bg-danger text-white ">${meal.strIngredient11}</li>
      <li class="p-1 m-1 bg-danger text-white ">${meal.strIngredient12}</li>
      <li class="p-1 m-1 bg-danger text-white ">${meal.strIngredient13}</li>
      </ul>
      <h3 class="text-white">Tags:</h3>
      <ul class="list-unstyled d-flex g-3 flex-wrap">
        <li class=" bg-white rounded text-secondary">${meal.strTags}</li>
      </ul>
      <a target="_blank" href="${meal.strSource}" class="btn btn-success text-white">Source</a>
      <a target="_blank" href="${meal.strYoutube}" class="btn btn-danger text-white">Youtube</a>
    </div>
  `;
  
  rowData.innerHTML = crtona;
}

document.getElementById('navContact').addEventListener('click', () => {
    rowData.innerHTML = `
        <div class="contact min-vh-100 d-flex justify-content-center align-items-center">
            <div class="container w-75 text-center">
                <div class="row g-4">
                    <div class="col-md-6">
                        <input id="nameInput" onkeyup="inputsValidation()" type="text" class="form-control" placeholder="Enter Your Name">
                        <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
                            Special characters and numbers not allowed
                        </div>
                    </div>
                    <div class="col-md-6">
                        <input id="emailInput" onkeyup="inputsValidation()" type="email" class="form-control " placeholder="Enter Your Email">
                        <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
                            Email not valid *example@yyy.zzz
                        </div>
                    </div>
                    <div class="col-md-6">
                        <input id="phoneInput" onkeyup="inputsValidation()" type="text" class="form-control " placeholder="Enter Your Phone">
                        <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
                            Enter valid Phone Number
                        </div>
                    </div>
                    <div class="col-md-6">
                        <input id="ageInput" onkeyup="inputsValidation()" type="number" class="form-control " placeholder="Enter Your Age">
                        <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
                            Enter valid age
                        </div>
                    </div>
                    <div class="col-md-6">
                        <input id="passwordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Enter Your Password">
                        <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
                            Enter valid password *Minimum eight characters, at least one letter and one number:*
                        </div>
                    </div>
                    <div class="col-md-6">
                        <input id="repasswordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Re-enter Password">
                        <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
                            Passwords do not match
                        </div>
                    </div>
                </div>
                <button id="submitBtn" disabled class="btn btn-outline-danger px-2 mt-3">Submit</button>
            </div>
        </div>
    `;
    // Attach validation event listeners to new elements
    attachValidationListeners();
});

function attachValidationListeners() {
    document.getElementById('nameInput').addEventListener('keyup', inputsValidation);
    document.getElementById('emailInput').addEventListener('keyup', inputsValidation);
    document.getElementById('phoneInput').addEventListener('keyup', inputsValidation);
    document.getElementById('ageInput').addEventListener('keyup', inputsValidation);
    document.getElementById('passwordInput').addEventListener('keyup', inputsValidation);
    document.getElementById('repasswordInput').addEventListener('keyup', inputsValidation);
}

function inputsValidation() {
    const nameInput = document.getElementById('nameInput').value.trim();
    const emailInput = document.getElementById('emailInput').value.trim();
    const phoneInput = document.getElementById('phoneInput').value.trim();
    const ageInput = document.getElementById('ageInput').value.trim();
    const passwordInput = document.getElementById('passwordInput').value;
    const repasswordInput = document.getElementById('repasswordInput').value;

    const nameAlert = document.getElementById('nameAlert');
    const emailAlert = document.getElementById('emailAlert');
    const phoneAlert = document.getElementById('phoneAlert');
    const ageAlert = document.getElementById('ageAlert');
    const passwordAlert = document.getElementById('passwordAlert');
    const repasswordAlert = document.getElementById('repasswordAlert');
    const submitBtn = document.getElementById('submitBtn');

    const isNameValid = validateName(nameInput);
    const isEmailValid = validateEmail(emailInput);
    const isPhoneValid = validatePhoneNumber(phoneInput);
    const isAgeValid = validateAge(ageInput);
    const isPasswordValid = validatePassword(passwordInput);
    const isRePasswordValid = passwordInput === repasswordInput;

    nameAlert.classList.toggle('d-none', isNameValid);
    emailAlert.classList.toggle('d-none', isEmailValid);
    phoneAlert.classList.toggle('d-none', isPhoneValid);
    ageAlert.classList.toggle('d-none', isAgeValid);
    passwordAlert.classList.toggle('d-none', isPasswordValid);
    repasswordAlert.classList.toggle('d-none', isRePasswordValid);

    submitBtn.disabled = !(isNameValid && isEmailValid && isPhoneValid && isAgeValid && isPasswordValid && isRePasswordValid);
}

function validateName(name) {
    const re = /^[a-zA-Z\s]+$/;
    return re.test(name);
}

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validatePhoneNumber(number) {
    const re = /^\d{10}$/;
    return re.test(number);
}

function validateAge(age) {
    return !isNaN(age) && parseInt(age) >= 18;
}

function validatePassword(password) {
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return re.test(password);
}
document.getElementById('navArea').addEventListener('click', fetchAreas);
document.getElementById('navIngredients').addEventListener('click', fetchIngredients);




async function fetchCategories() {
    try {
        const apiUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        displayCategories(data.categories);
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
}

function displayCategories(categories) {
    let html = '';
    categories.forEach(category => {
        html += `
            <div class="col-md-3 g-3">
                <div onclick="fetchMealsByCategory('${category.strCategory}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                    <img class="w-100 rounded-2 imgemodal" src="${category.strCategoryThumb}" alt="">
                    <div class="meal-layer position-absolute d-flex align-items-center text-black p-2 justify-content-center">
                        <h3">${category.strCategory}</h3>
                    </div>
                </div>
            </div>
        `;
    });
    rowData.innerHTML = html;
}

async function fetchAreas() {
    try {
        const apiUrl = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        displayAreas(data.meals);
    } catch (error) {
        console.error('Error fetching areas:', error);
    }
}

function displayAreas(areas) {
    let html = '';
    areas.forEach(area => {
        html += `
            <div class="col-md-3 g-3 cursor-pointer">
                <div onclick="fetchMealsByArea('${area.strArea}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer icon-main">
                    <i class="fa-solid fa-house-laptop text-white iconssdad"></i>
                    <h3 class="text-white cursor-pointer">${area.strArea}</h3>
                    
                </div>
            </div>
        `;
    });
    rowData.innerHTML = html;
}

async function fetchMealsByArea(area) {
    try {
        const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`;
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        displayMeals(data.meals);
    } catch (error) {
        console.error(`Error fetching meals for ${area}:`, error);
    }
}

async function fetchIngredients() {
    try {
        const apiUrl = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        displayIngredients2(data.meals.slice(0, 20));
    } catch (error) {
        console.error('Error fetching ingredients:', error);
    }
}

function displayIngredients2(ingredients) {
    let html = '';
    ingredients.forEach(ingredient => {
        html += `
            <div class="col-md-3 g-3">
                <div onclick="fetchMealsByIngredient('${ingredient.strIngredient}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer icon-main">
                    <i class="fa-solid fa-drumstick-bite iconssdad"></i>
                    <h3 class="text-white">${ingredient.strIngredient}</h3>
                    <p class="text-white">${ingredient.strDescription.split(" ").slice(0, 20).join(" ")}</p>
                </div>
            </div>
        `;
    });
    rowData.innerHTML = html;
}

async function fetchMealsByIngredient(ingredient) {
    try {
        const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        displayMeals(data.meals.slice(0, 20));
    } catch (error) {
        console.error(`Error fetching meals for ${ingredient}:`, error);
    }
}

async function fetchMealsByCategory(category) {
    try {
        const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        displayMeals(data.meals);
    } catch (error) {
        console.error(`Error fetching meals for ${category}:`, error);
    }
}

function displayMeals(meals) {
    let html = '';
    meals.forEach(meal => {
        html += `
            <div class="col-md-3 g-3">
                <div onclick="displayMealDetails(${meal.idMeal})" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                    <img class="w-100 rounded-2" src="${meal.strMealThumb}" alt="">
                    <div class="meal-layer position-absolute d-flex align-items-center text-black p-2 justify-content-center">
                        <h3>${meal.strMeal}</h3>
                    </div>
                </div>
            </div>
        `;
    });
    rowData.innerHTML = html;
}

async function displayMealDetails(idMeal) {
    try {
        const apiUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        const meal = data.meals[0];
        if (!meal) return;
        
        let html = `
            <div class="col-md-4">
                <img class="w-100 rounded-3" src="${meal.strMealThumb}" alt="">
                <h2>${meal.strMeal}</h2>
            </div>
            <div class="col-md-8">
                <h2>Instructions</h2>
                <p>${meal.strInstructions}</p>
                <h3><span class="fw-bolder">Area: </span>${meal.strArea}</h3>
                <h3><span class="fw-bolder">Category: </span>${meal.strCategory}</h3>
                <h3>Recipes:</h3>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                    <!-- Add dynamic list items here if needed -->
                </ul>
                <h3>Tags:</h3>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                    <!-- Add dynamic list items here if needed -->
                </ul>
                <a target="_blank" href="${meal.strSource}" class="btn btn-success">Source</a>
                <a target="_blank" href="${meal.strYoutube}" class="btn btn-danger">Youtube</a>
            </div>
        `;
        
        rowData.innerHTML = html;
    } catch (error) {
        console.error(`Error fetching meal details for ${idMeal}:`, error);
    }
}
document.getElementById('navSearch').addEventListener('click', () => {
    const mealNameInput = document.getElementById('mealName');
    const mealLetterInput = document.getElementById('mealLetter');
    
    if (!mealNameInput || !mealLetterInput) {
        rowData.innerHTML = `
            <div class="d-felx  justify-content-center align-items-center" >
                <input type="text" id="mealName" placeholder="Search by Meal Name">
                <input type="text" id="mealLetter" placeholder="Search by Meal Letter">
                <div id="mealResults" class="row"></div>
            </div>
        `;
        const mealNameInput = document.getElementById('mealName');
        const mealLetterInput = document.getElementById('mealLetter');
    
        mealNameInput.addEventListener('input', searchMeals);
        mealLetterInput.addEventListener('input', searchMeals);
    }
});

async function searchMeals() {
    const mealNameInput = document.getElementById('mealName');
    const mealLetterInput = document.getElementById('mealLetter');
    const mealName = mealNameInput.value.trim();
    const mealLetter = mealLetterInput.value.trim().toLowerCase();

    let url;
    if (mealName) {
        url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
    } else if (mealLetter.length === 1 && mealLetter.match(/[a-z]/i)) {
        url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${mealLetter}`;
    } else {
        return;
    }

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayMeals(data.meals);
    } catch (error) {
        console.error('Error fetching meals:', error);
    }
}


document.getElementById('navCategories').addEventListener('click', fetchCategories);

async function fetchCategories() {
    try {
        const apiUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        displayCategories(data.categories);
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
}

function displayCategories(categories) {
    let html = '';
    categories.forEach(category => {
        html += `
            <div class="col-md-3 g-3">
                <div onclick="fetchMealsByCategory('${category.strCategory}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                    <img class="w-100 rounded-2 imgemodal" src="${category.strCategoryThumb}" alt="">
                    <div class="meal-layer position-absolute d-flex align-items-center text-black p-2 justify-content-center">
                        <h3>${category.strCategory}</h3>
                    </div>
                </div>
            </div>
        `;
    });
    rowData.innerHTML = html;
}



