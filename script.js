//import 'lib/jquery-3.5.1.min.js'

let List = []
let SavedData = JSON.parse(localStorage.getItem("key"))
let ul = document.getElementById("list")
let btnGroup = document.getElementById("btn-group")
let textBox = document.getElementById("text")
let addBtn = document.getElementById("add")
let exportBtn = document.getElementById("export")

let buttons = []

//localStorage.clear()
//console.log( "c"+Completed,"l"+List)
if (SavedData){
    List = SavedData;
    renderHTML(List)
}


function deleteRecord(e){
    //console.log(e.target.id)
    for (let i = 0; i<List.length;i++){
      if( i == e.target.id){
          List.splice(i,1)
          //console.log(List)
          localStorage.setItem("key",JSON.stringify(List))
          renderHTML(List)
          return e.target.id
      }
    }}//[1,23,4,5,2,]

function changeClass(e){
    for (let i = 0; i<List.length;i++){
        if( `#${i}` == e.target.id){
            if(List[i][1]== 0){
                List[i][1] = 1
            }
            else if(List[i][1]== 1){
                List[i][1] = 0
            }
            localStorage.setItem("key",JSON.stringify(List))
            renderHTML(List)
            //window.location.reload()
            return
            }
          }}
    
function getData(e){
    if(e.code == "Enter"){
        let data = [e.target.value,0]
        if (data[0]){
        List.push(data)
        localStorage.setItem("key",JSON.stringify(List)) 
        e.target.value = "";
        renderHTML(List) }
}}
textBox.addEventListener('keydown',getData)


addBtn.addEventListener('click',function(){
    console.log('clickd')
    let data = [textBox.value,0]
        if (data[0]){
        List.push(data)
        localStorage.setItem("key",JSON.stringify(List)) 
        textBox.value = "";
        renderHTML(List) }
}) 

exportBtn.addEventListener('click',function(){
    console.log('clickd') 
    let jsonData = {}
    for (i=0;i<List.length;i=i+1){
        jsonData[i] = {"task":List[i][0],"task id":i}
    }
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(jsonData));
    var dlAnchor = document.getElementById('downloadAnchor')
    dlAnchor.setAttribute("href", dataStr)
    dlAnchor.setAttribute("download", "data.json")
    dlAnchor.click()
})
 

function renderHTML(val){
    //window.location.reload()
    let HTMLData = "";
    let list = ["unchecked","checked"]
    for(let i=0; i < val.length; i++){
        HTMLData += `
          <li class="${list[val[i][1]]}"> <i class = "fa fa-check"  id="#${i}"></i>${val[i][0]} 
          <button class ="delete-btn" id="${i}" >Delete</button> 
          </li>
        `
    }
   ul.innerHTML = HTMLData; 

   //onclick="function()" gives error with chrome extensions
   for(let i=0 ; i<val.length;i++){
    let button = document.getElementById(i.toString()) 
    button.addEventListener('click',deleteRecord);
    let icon = document.getElementById(`#${i}`)
    //console.log(icon)
    icon.addEventListener('click',changeClass)
    buttons.push(button)
   }
   

}