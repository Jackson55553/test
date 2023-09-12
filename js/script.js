
const button = document.getElementById('welcome-button');
let txt_btn = document.getElementById('welcome-btn');
let state = true;


console.log(txt_btn.innerText)
console.log(button.textContent)


button.onclick = () => {
    
    if (state) {
        txt_btn.innerText = "Нажал"
        state = false   
    }
    else{
        txt_btn.innerText = "Нажал еще раз"
        state = true
    }
}