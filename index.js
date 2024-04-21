let List = []
let SavedData = JSON.parse(localStorage.getItem("key"))
let ul = document.getElementById("list")
let textBox = document.getElementById("text")

let addBtn = document.getElementById("add")
let exportBtn = document.getElementById("dl")

let listNo = JSON.parse(localStorage.getItem("id"))

if (SavedData){
    List = SavedData;
    renderHTML(List)
}

function deleteRecord(e){
    console.log(e.target.id)
    for (let i = 0; i<List.length;i++){
      if( `#${i}` == e.target.id){
        List.splice(i,1)
        localStorage.setItem("key",JSON.stringify(List))
        renderHTML(List)
        return e.target.id
    }
    }}

function redirectTo(e){
    if(e.target != this){
        return
    }
    localStorage.setItem("id",JSON.stringify(e.target.id))
    let redirectAnchor = document.getElementById('redirect')
    redirectAnchor.click()
}

addBtn.addEventListener('click',function(){
    console.log('clickd')
    let data = [textBox.value,[]]
        if (data[0]){
        List.push(data)
        localStorage.setItem("key",JSON.stringify(List)) 
        textBox.value = "";
        renderHTML(List) }
}) 

exportBtn.addEventListener('click',function(){
    console.log('clickd') 
    let jsonData = List
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(jsonData));
    var dlAnchor = document.getElementById('downloadAnchor')
    dlAnchor.setAttribute("href", dataStr)
    dlAnchor.setAttribute("download", "data.json")
    dlAnchor.click()
})
 

function renderHTML(val){
    let HTMLData = "";
    for(let i=0; i < val.length; i++){
        HTMLData += `
          <li class="li" id="%${i}"> ${val[i][0]} <i class="fa-solid fa-trash fa-lg delete-icon" id="#${i}"></i></li> `
    }
   ul.innerHTML = HTMLData; 
   //onclick="function()" gives error with chrome extensions
   for(let i=0 ; i<val.length;i++){
    let icon = document.getElementById(`#${i}`)
    icon.addEventListener('click',deleteRecord)
    let listItem = document.getElementById(`%${i}`)
    listItem.addEventListener('click',redirectTo)
   }
}