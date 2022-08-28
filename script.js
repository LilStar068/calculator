const buttons = document.querySelector('.buttons')
const button = document.querySelectorAll('span')
const output = document.getElementById('value')
const toggle = document.querySelector('.toggle')

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function() {
        if (this.innerText == "=") {
            output.innerText = parseFloat(eval(value.innerText)).toFixed(3)
        } else {
            if (this.innerText == "Clear") {
                value.innerText = ""
            } else {
               value.innerText += this.innerText 
            }
        }
    })
}

toggle.addEventListener("click", () => {
    document.body.classList.toggle('dark')
})