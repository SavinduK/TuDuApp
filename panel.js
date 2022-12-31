let SavedId = JSON.parse(localStorage.getItem("id"))
let SavedData = JSON.parse(localStorage.getItem("key"))
const taskInput = document.getElementById('task')
const dataInput = document.getElementById('data')
const urlInput = document.getElementById('urldata')
const button = document.getElementById('button')
const urlBtn = document.getElementById('url')

taskInput.value = SavedData[SavedId][0]
dataInput.value = SavedData[SavedId][2]
SavedData[SavedId][3].forEach(index => {
        urlInput.innerHTML += `
       <a> <li>${index}</li> </a>
    `
    })
    //console.log(SavedData[SavedId])
    //console.log(SavedData[SavedId][0])

button.addEventListener('click', function(e) {
    SavedData[SavedId][0] = taskInput.value
    SavedData[SavedId][2] = dataInput.value
    SavedId = -1
    localStorage.setItem("key", JSON.stringify(SavedData));
    localStorage.setItem("id", JSON.stringify(SavedId));
})

urlBtn.addEventListener('click', function() {
    function logTabs(tabs) {
        let url = tabs[0].url
        index = SavedData[SavedId][3].length
        console.log(index)
        console.log(SavedData[SavedId][3])
        SavedData[SavedId][3][index] = url
        localStorage.setItem("key", JSON.stringify(SavedData));
    }

    function onError() {
        console.log("error")
    }
    chrome.tabs.query({ active: true, currentWindow: true }).then(logTabs, onError)

})