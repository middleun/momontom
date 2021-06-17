// **************
// to do section function
// ****************
const toDoForm = document.querySelector(".to-do-form");
const toDoInput = toDoForm.querySelector(".to-do-input");
const ongoList = document.querySelector(".ongoing-list");
const finList = document.querySelector(".finished-list");
// console.log(toDoInput);

const LS_ONGOING = "ongoing";
const LS_FINISHED = "finished"

let ONGOING = [];
let FINISHED = [];

// save FINSIHED LIST to localstorage
function saveFin(){
    localStorage.setItem(LS_FINISHED, JSON.stringify(FINISHED));
}

// delete to do list
function delToDo(e){
    const clickI = e.target;
    const clickBtn = clickI.parentNode;
    const clickLi = clickBtn.parentNode;
    // delete from ONGOING LIST
    if(clickLi.parentNode === ongoList){
        ongoList.removeChild(clickLi);
        const removeOngo = ONGOING.filter(function(something){
            // console.log(toDo.id, clickLi.id);
            return something.id !== parseInt(clickLi.id);
        });
        ONGOING = removeOngo;
        saveOngo();
    }else{
        // delete from FINISHED LIST
        finList.removeChild(clickLi);
        const removeFinished = FINISHED.filter(function(toDo){
            // console.log(toDo.id, clickLi.id);
            return toDo.id !== parseInt(clickLi.id);
        });
        FINISHED = removeFinished;
        saveFin();
    }
}

// add to FINISHED list when submit form
function addToFin(moveText){
    // console.log(moveText);
    const finLi = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
    delBtn.addEventListener("click",delToDo);
    const backBtn = document.createElement("button");
    backBtn.innerHTML = `<i class="fas fa-backspace"></i>`;
    backBtn.addEventListener("click", moveToEach);
    const span = document.createElement("span");
    span.innerText = moveText;
    finLi.appendChild(span);
    finLi.appendChild(backBtn);
    finLi.appendChild(delBtn);
    finList.appendChild(finLi);
    
    newId = FINISHED.length+1;
    finLi.id = newId;
    const finObject = {
        id: newId,
        value: moveText
    }
    FINISHED.push(finObject);
    saveFin();
}

function moveToEach(e){
    const targetI = e.target;
    const targetBtn = targetI.parentNode;
    // console.log(targetBtn);
    const targetLi = targetBtn.parentNode;
    // console.dir(targetLi);
    const targetText = targetLi.firstChild.innerText;
    if(targetLi.parentNode === ongoList){
        addToFin(targetText);
        delToDo(e);
    }else{
        addToOngo(targetText);
        delToDo(e);
    }
}

// save to localstorage when submit form
function saveOngo(){
    localStorage.setItem(LS_ONGOING, JSON.stringify(ONGOING));
};

// add to ONGOING list when submit form
function addToOngo(text){
    const ongoLi = document.createElement("li");
    const ongoSpan = document.createElement("span");
    ongoSpan.innerText = text;
    const delBtn = document.createElement("button");
    delBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
    delBtn.addEventListener("click", delToDo);
    const finBtn = document.createElement("button");
    finBtn.innerHTML = `<i class="fas fa-check-square"></i>`;
    finBtn.addEventListener("click",moveToEach);
        
    ongoLi.appendChild(ongoSpan);
    ongoLi.appendChild(finBtn);
    ongoLi.appendChild(delBtn);
    ongoList.appendChild(ongoLi);

    newId = ONGOING.length+1;
    ongoLi.id = newId;
    
    const ongoObj = {
        id : newId,
        value : text
    }

    ONGOING.push(ongoObj);
    saveOngo();
}

function submitToDo(e){
    e.preventDefault();
    const submitValue = toDoInput.value;
    if(submitValue === ""){
        alert("please ENTER things to do");
    }else{
        addToOngo(submitValue);
    }
    toDoInput.value="";
}

// load ongoing list from localstorage
function loadOngo(){
    const currentToDo = localStorage.getItem(LS_ONGOING);
    if(currentToDo !== null){
        const parsedOngo = JSON.parse(currentToDo);
        parsedOngo.forEach(function(toDo){
            addToOngo(toDo.value);
        });
    }
}

function loadFin(){
    const currentToDo = localStorage.getItem(LS_FINISHED);
    if(currentToDo !== null){
        const parsedFin = JSON.parse(currentToDo);
        parsedFin.forEach(function(toDo){
            addToFin(toDo.value);
        });
    }
}

function init(){
    loadOngo();
    loadFin();
    toDoForm.addEventListener("submit", submitToDo);
}
init();


