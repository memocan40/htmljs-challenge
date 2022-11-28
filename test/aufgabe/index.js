// get buttons
let question = document.getElementById("question1");
let answer1 = document.getElementById("ans1");
let answer2 = document.getElementById("ans2");
let answer3 = document.getElementById("ans3");
let answer4 = document.getElementById("ans4");

let data1 =document.getElementById("data1")
let data2 =document.getElementById("data2")
let data3 =document.getElementById("data3")
let data4 =document.getElementById("data4")
let data5 =document.getElementById("data5")
let data6 =document.getElementById("data6")
let data7 =document.getElementById("data7")
let data8 =document.getElementById("data8")
let data9 =document.getElementById("data9")
let data10 =document.getElementById("data10")

// functions
let cryptdata = function () {
    if (question.innerHTML.includes('Mehmet')) {
        data1.innerHTML ="Josh"
        data2.innerHTML ="27"
        data3.innerHTML ="Olivia"
        data4.innerHTML ="Female"
        data5.innerHTML ="Milk"
        data6.innerHTML ="Tea"
        data7.innerHTML ="item I"
        data8.innerHTML ="item III"
        data9.innerHTML ="Level 2"
        data10.innerHTML ="Level 1"
    }else{
        data1.innerHTML ="J&$%§"
        data2.innerHTML ="j/MD(&§"
        data3.innerHTML ="JFzfkduf/&%"
        data4.innerHTML ="JfdzsUE%$//%"
        data5.innerHTML ="(%§$sUE%$//%"
        data6.innerHTML =")D/FzsUE%$//%"
        data7.innerHTML ="asdfvUE%$//%"
        data8.innerHTML ="JfdzsUE%$//%"
        data9.innerHTML ="(&%$dzsUE%$//%"
        data10.innerHTML ="J=(&%zsUE%$//%"
    }
}
let wrongAnswer = function () {
    let oldText = question.innerHTML;
    question.innerHTML = "Falsch!";
    setTimeout(() => {
        question.innerHTML = oldText;
    }, 2000);
}
let refresh = function () {
    setTimeout(() => {
        cryptdata();
    }, 3000);
    // functionality quiz
    if (question.innerHTML.includes('räder')) {
        answer4.onclick = function () {
            question.innerHTML = 'Richtig!';
            setTimeout(() => {
                question.innerHTML = "Fischer Fritz fischt frische...";
                answer1.innerHTML = "Kühe";
                answer2.innerHTML = "Möhren";
                answer3.innerHTML = "Fische";
                answer4.innerHTML = "Mäuse";
                refresh();
            }, 2000);
        }
        answer1.onclick = function () { wrongAnswer(); }
        answer2.onclick = function () { wrongAnswer(); }
        answer3.onclick = function () { wrongAnswer(); }
    } else if (question.innerHTML.includes('Fritz')) {
        console.log(2)
        answer3.onclick = function () {
            question.innerHTML = "Genau! die letze frage...";
            setTimeout(() => {
                question.innerHTML = "Wer ist der gemachte Programmierer für alle zwecke!";
                answer1.innerHTML = "Elon Musk";
                answer2.innerHTML = "Mehmet Can";
                answer3.innerHTML = "Bill Gates";
                answer4.innerHTML = "Larry Page";
                refresh();
            }, 2000);
        }
        answer1.onclick = function () { wrongAnswer(); }
        answer2.onclick = function () { wrongAnswer(); }
        answer4.onclick = function () { wrongAnswer(); }
    } else if (question.innerHTML.includes('Programmierer')) {
        answer2.onclick = function () {
            question.innerHTML = "Klasse sie Ihre Daten werden nun entschlüsselt...!";
            setTimeout(() => {
                question.innerHTML = "Mehmet Can";
                answer1.innerHTML = "Mehmet Can";
                answer2.innerHTML = "Mehmet Can";
                answer3.innerHTML = "Mehmet Can";
                answer4.innerHTML = "Mehmet Can";
                refresh();
            }, 2000);
        }
    } else if (question.innerHTML.includes('Mehmet')) {

    }
}
refresh();