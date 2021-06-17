// **************
// welcome section function
// ****************
const welcomeForm = document.querySelector(".welcome-form");
const welcomeInput = welcomeForm.querySelector(".welcome-input");
const toDoSection = document.querySelector(".to-do-sec");

const wrap = document.querySelector(".wrap");
const leftSection = wrap.querySelector(".left-side");
const rightSection = wrap.querySelector(".right-side");
// console.log(welcomeInput.value);
const USER_KEY = "currentUser"

// show welcome text when current user is
function showWelcome(text){
    welcomeForm.classList.remove("show");
    const welcomeTxt = document.querySelector(".welcome-text");
    welcomeTxt.innerHTML=`Happy <span>${text}</span>'s day!`
}

// save user name to localstorage
function saveName(name){
    localStorage.setItem(USER_KEY, name);
}

// when submit form
function submitForm(e){
    e.preventDefault();
    const userValue = welcomeInput.value;
    // console.log(userValue);
    showWelcome(userValue);
    saveName(userValue);
    rightSection.classList.add("show");
    wrap.style.justifyContent = "space-between";
    leftSection.style.width = "44.9%";
    rightSection.style.width = "54.9%";
}

// ask for name when currentuser isn't
function askForName(){
    welcomeForm.classList.add("show");
    welcomeForm.addEventListener("submit", submitForm);
}

// load name from localstorage
function loadName(){
    const currentUser = localStorage.getItem(USER_KEY);
    if(currentUser === null){
        askForName();
    }else{
        showWelcome(currentUser);
       
        rightSection.classList.add("show");
        wrap.style.justifyContent = "space-between";
        leftSection.style.width = "44.9%";
        rightSection.style.width = "54.9%";
    }
}

function init(){
    loadName();
}
init();