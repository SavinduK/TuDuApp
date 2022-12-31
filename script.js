//import 'lib/jquery-3.5.1.min.js'

let List = []
let SavedData = JSON.parse(localStorage.getItem("key"))
let ul = document.getElementById("list")
let btnGroup = document.getElementById("btn-group")
let textBox = document.getElementById("text")

let buttons = []

//localStorage.clear()
//console.log( "c"+Completed,"l"+List)
if (SavedData) {
    List = SavedData;
    renderHTML(List)
}


function deleteRecord(e) {
    //console.log(e.target.id)
    for (let i = 0; i < List.length; i++) {
        if (i == e.target.id) {
            List.splice(i, 1)
                //console.log(List)
            localStorage.setItem("key", JSON.stringify(List))
            renderHTML(List)
            return e.target.id
        }
    }
} //[1,23,4,5,2,]

function changeClass(e) {
    for (let i = 0; i < List.length; i++) {
        if (`#${i}` == e.target.id) {
            if (List[i][1] == 0) {
                List[i][1] = 1
            } else if (List[i][1] == 1) {
                List[i][1] = 0
            }
            localStorage.setItem("key", JSON.stringify(List))
            renderHTML(List)
                //window.location.reload()
            return
        }
    }
}

function editPopup(e) {
    for (let i = 0; i < List.length; i++) {
        if (`@${i}` == e.target.id) {
            console.log("200")
            chrome.windows.create({ url: "./panel.html", type: "popup", width: 250, height: 250, });
            localStorage.setItem("id", JSON.stringify(i))
        }
    }
}

function getData(e) {
    if (e.code == "Enter") {
        let data = [e.target.value, 0, "", []]
        if (data[0]) {
            /*
            array.push('2');
            array.splice(array.length, 0, '2');
            array[array.length] = '2';
            */
            List[List.length] = data
            localStorage.setItem("key", JSON.stringify(List));
            e.target.value = "";
            renderHTML(List)
            console.log(List)
        }
    }
}
textBox.addEventListener('keydown', getData);


function renderHTML(val) {
    //window.location.reload()
    let HTMLData = "";
    let list = ["unchecked", "checked"]
    for (let i = 0; i < val.length; i++) {
        HTMLData += `
          <li class="${list[val[i][1]]}"> <i class = "fa fa-check"  id="#${i}"></i>${val[i][0]} 
          <button class ="delete-btn" id="${i}" >Delete</button> 
          <button class ="edit-btn" id="@${i}" >Edit</button> 
          </li>
        `
    }
    ul.innerHTML = HTMLData;

    //onclick="function()" gives error with chrome extensions
    for (let i = 0; i < val.length; i++) {
        let button = document.getElementById(i.toString())
        button.addEventListener('click', deleteRecord);
        let icon = document.getElementById(`#${i}`)
            //console.log(icon)
        icon.addEventListener('click', changeClass)
        let editBtn = document.getElementById(`@${i}`)
        editBtn.addEventListener('click', editPopup)
        buttons.push(button)
    }


}