

    let name 
    let matriknumber
    let corses
    let quiz
    let lab
    let ass
do{
    name = prompt("Enter Your Name:")
} while (!name || name.trim() === "")
do{
    matriknumber = prompt("Enter Your Matrik number:")
} while (!matriknumber || matriknumber.trim() === "")
do{
    corses = prompt("Enter Your Courses:")
}while(!corses || corses.trim() === "")

do{
    quiz = (prompt("Enter Your Quiz Mark:"))
} while (quiz.trim() == "" || quiz > 100 || quiz < 0)
do{
    lab = (prompt("Enter Your Lab Mark:"))
} while (lab.trim() == "" || lab > 100 || lab < 0)
do{
    ass = (prompt("Enter Your Assignment Mark:"))
} while (ass.trim() == "" || ass > 100 || ass < 0)

document.getElementById("name").textContent = name
document.getElementById("matrikNumber").textContent = matriknumber
document.getElementById("course").textContent = corses

document.getElementById("quiz").textContent = quiz
document.getElementById("lab").textContent = lab
document.getElementById("ass").textContent = ass

let sum = parseFloat(quiz) + parseFloat(lab) + parseFloat(ass)

document.getElementById("total").textContent = sum

let avg = Math.floor((sum) / 3)
document.getElementById("avg").textContent = avg

let arr = [quiz,lab,ass]

// let max = 0
// let index = -1
// arr.forEach((mark, idx) => {
//     if(mark > max){
//         max = mark
//         index = idx
//     }
// });

let max = Math.max(quiz,lab,ass)

document.getElementById("hight").textContent = max
let grade = "G+"
let comment = ""
if(avg > 80){
    grade = "A"
    comment = "Very Excellent"
}else if(avg > 75){
    grade = "A-"
    comment = "Excellent"
}
else if(avg > 70){
    grade = "B+"
    comment = "Very Good"
}
else if(avg > 65){
    grade = "B"
    comment = "Good"
}else if(avg > 60){
    grade = "B-"
    comment = "Not Bad"
}else if(avg > 55){
    grade = "C+"
    comment = "Pass"
}else if(avg > 50){
    grade = "C"
    comment = "Nice la"
}else if(avg > 47){
    grade = "C-"
    comment = "Boleh Lah"
}else if(avg > 44){
    comment = "Selamat Lepas"
    grade = "D+"
}
else if(avg > 40){
    grade = "D"
    comment = "it you lucky day"
}
else if(avg > 0){
    grade = "E"
    comment = "Sorry Fail try again"
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
    reset()
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
    reset()
    colorCode = document.getElementById("color").value
    console.log(colorCode);
    
    
    if(!isColorCode){
        isColorCode = true
        document.querySelector("main").style.backgroundColor = `${colorCode}`
    }else{
        isColorCode = false
        document.querySelector("main").style.backgroundColor = "rgba(240, 240, 240, 0.5)"
    }
    
})

function reset(){
    document.querySelector(".info").style.backgroundColor = "rgba(240, 240, 240, 0.5)"
    document.querySelector(".result").style.backgroundColor = "rgba(240, 240, 240, 0.5)"
    document.querySelector("main").style.backgroundColor = "#eee"    
    document.getElementById("dark").checked = false
    document.getElementById("result").checked = false

}

document.getElementById("reset").addEventListener("click" , reset)