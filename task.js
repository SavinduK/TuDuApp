let listName = document.getElementById('task-list')
let List = []
let SavedData = JSON.parse(localStorage.getItem("key"))
let listNo = JSON.parse(localStorage.getItem("id"))

let titleBox = document.getElementById('title')
let textBox = document.getElementById('description') 
let addBtn = document.getElementById('add')
let container = document.getElementById('container')

if (SavedData){
    List = SavedData;
    renderHTML(List)
}

function renderHTML(val){
    for (let i = 0; i<List.length;i++){
        if( `%${i}` == listNo){
            listName.innerHTML = List[i][0]
            let htmlData = ""
            for(let j=0;j<List[i][1].length;j++){
                htmlData +=`
                <div class="card  mb-3 ">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4><b>${List[i][1][j][0]}</b></h4>
                    <i class="fa-solid fa-trash fa-lg" id="#${j}"></i>
                </div>  
                <div class="card-body">
                <div class="card-text">
                    <p>${List[i][1][j][1]}</p>
                </div></div>   
                </div>
                `
            }
            container.innerHTML = htmlData
            for (let i = 0; i<List.length;i++){
                if( `%${i}` == listNo){
                    for(let j=0;j<List[i][1].length;j++){
                        let icon = document.getElementById(`#${j}`)
                        icon.addEventListener('click',deleteRecord)
                    }}}
      }}
}

function deleteRecord(e){
    console.log(e.target.id)
    for (let i = 0; i<List.length;i++){
      if( `%${i}` == listNo){
        for(let j=0;j<List[i][1].length;j++){
            if(e.target.id == `#${j}`){
            List[i][1].splice(j,1)
            localStorage.setItem("key",JSON.stringify(List))
            renderHTML(List)
        }}   
    }}}

addBtn.addEventListener('click',function(e){
    for (let i = 0; i<List.length;i++){
        if( `%${i}` == listNo){
            List[i][1].push([titleBox.value,textBox.value])
            if (titleBox.value){
                localStorage.setItem("key",JSON.stringify(List)) 
                textBox.value = ""
                titleBox.value = ""
                renderHTML(List) }
      }}  
})
