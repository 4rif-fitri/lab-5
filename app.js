

    let name 
    let matriknumber
    let corses
    let quiz
    let lab
    let ass
do{
    name = prompt("Enter Your Name:")
}while(name.trim() == null)
do{
    matriknumber = prompt("Enter Your Matrik number:")
}while(matriknumber.trim() == null)
do{
    corses = prompt("Enter Your Courses:")
}while(corses.trim() == null)

do{
    quiz = (prompt("Enter Quiz Mark:"))
}while(quiz.trim() == null)
do{
    lab = (prompt("Enter Your Lab Mark:"))
}while(lab.trim() == null)
do{
    ass = (prompt("Enter Your Assignment Mark:"))
}while(ass.trim() == null)

document.getElementById("name").textContent = name
document.getElementById("matrikNumber").textContent = matriknumber
document.getElementById("course").textContent = corses

document.getElementById("quiz").textContent = quiz
document.getElementById("lab").textContent = lab
document.getElementById("ass").textContent = ass

let sum = parseFloat(quiz) + parseFloat(lab) + parseFloat(ass)

document.getElementById("total").textContent = sum

let avg = (sum) / 300
document.getElementById("avg").textContent = avg


let arr = [quiz,lab,ass]

let max = 0
let index = -1
arr.forEach((mark, idx) => {
    if(mark > max){
        max = mark
        index = idx
    }
});

let persen = avg * 100
console.log(persen);


document.getElementById("hight").textContent = max
let grade = "E"
let comment = ""
if(persen > 80){
    grade = "A"
    comment = "Good"
}else if(persen > 75){
    grade = "A-"
    comment = "Good"
}
else if(persen > 70){
    grade = "B+"
    comment = "Not Bad"
}
else if(persen > 65){
    grade = "B"
    comment = "Not Bad"
}else if(persen > 60){
    grade = "B-"
    comment = "Not Bad"
}else if(persen > 55){
    grade = "C+"
    comment = "Ok"
}else if(persen > 50){
    grade = "C"
    comment = "Ok"
}else if(persen > 47){
    grade = "C-"
    comment = "Ok"
}else if(persen > 44){
    comment = "Selamat"
    grade = "D+"
}
else if(persen > 40){
    grade = "D"
    comment = "Selamat"
}
else if(persen > 0){
    grade = "E"
    comment = "Cuba Lagi"
}
document.getElementById("NAME").textContent = name
document.getElementById("grade").textContent = grade

document.getElementById("status").textContent = grade !="E" ? "Pass" : "Fail" 

document.getElementById("feedbackk").textContent = comment

if( grade == "E"){
    document.querySelector('.bulat').style.backgroundColor = "red"
    document.querySelector('.bulat p ').textContent = "X"
}else{
    document.querySelector('.bulat').style.backgroundColor = "lightgreen"
    document.querySelector('.bulat').textContent = "✔"
}

let isHighlight = false

document.getElementById("highlight").addEventListener("click" , e => {
    if(!isHighlight){
        isHighlight = true
        document.querySelector(".info").style.backgroundColor = "lightgoldenrodyellow"
        document.querySelector(".result").style.backgroundColor = "lightgoldenrodyellow"
    }else{
        isHighlight = false
        document.querySelector(".info").style.backgroundColor = "rgba(240, 240, 240, 0.5)"
        document.querySelector(".result").style.backgroundColor = "rgba(240, 240, 240, 0.5)"
    }
})
let colorCode
let isColorCode = false

colorCode = document.getElementById("color").value

document.getElementById("theme").addEventListener("click", e => {
    
colorCode = document.getElementById("color").value


    if(!isColorCode){
        isColorCode = true
        document.querySelector(".info").style.backgroundColor = `${colorCode}`
        document.querySelector(".result").style.backgroundColor = `${colorCode}`
    }else{
        isColorCode = false
        document.querySelector(".info").style.backgroundColor = "rgba(240, 240, 240, 0.5)"
        document.querySelector(".result").style.backgroundColor = "rgba(240, 240, 240, 0.5)"
    }
    
})

document.getElementById("reset").addEventListener("click" , e => {
    document.querySelector(".info").style.backgroundColor = "rgba(240, 240, 240, 0.5)"
    document.querySelector(".result").style.backgroundColor = "rgba(240, 240, 240, 0.5)"    
    
})