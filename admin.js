


var questions = JSON.parse(localStorage.getItem("test")) || [{
    question: "What does HTML stand for?",
    options: [
        "Hyper Text Markup Language",
        "Hyperlinks and Text Markup Language",
        "Home Tool Markup Language",
        "None of the above"
    ],
    answer: 0
},
{
    question: "What is the correct HTML element for the largest heading?",
    options: [
        "<h6>",
        "<h1>",
        "<heading>",
        "<head>"
    ],
    answer: 1
},
{
    question: "Which tag is used to create an unordered list in HTML?",
    options: [
        "<ol>",
        "<li>",
        "<list>",
        "<ul>"
    ],
    answer: 3
},
{
    question: "Which attribute is used to specify the URL of an external script file in HTML?",
    options: [
        "href",
        "src",
        "link",
        "script"
    ],
    answer: 1
},
{
    question: "What is the correct HTML element for inserting a line break?",
    options: [
        "<lb>",
        "<break>",
        "<br>",
        "<line>"
    ],
    answer: 2
},
{
    question: "Which attribute is used to define inline styles in HTML?",
    options: [
        "style",
        "class",
        "id",
        "font"
    ],
    answer: 0
},
{
    question: "Which tag is used to define an image in HTML?",
    options: [
        "<picture>",
        "<img>",
        "<photo>",
        "<image>"
    ],
    answer: 1
},
{
    question: "Which tag is used to create a hyperlink in HTML?",
    options: [
        "<a>",
        "<link>",
        "<href>",
        "<hyperlink>"
    ],
    answer: 0
},
{
    question: "What is the correct HTML element for playing video files?",
    options: [
        "<media>",
        "<movie>",
        "<video>",
        "<play>"
    ],
    answer: 2
},
{
    question: "Which tag is used to define a table in HTML?",
    options: [
        "<td>",
        "<tab>",
        "<tr>",
        "<table>"
    ],
    answer: 3
}];

localStorage.setItem('test', JSON.stringify(questions))

const btn = document.getElementById("addBtn");
btn.addEventListener('click', () => {
    const AdminQ = document.getElementById("adminQue").value;
    const AdminO1 = document.getElementById("adminOpt1").value;
    const AdminO2 = document.getElementById("adminOpt2").value;
    const AdminO3 = document.getElementById("adminOpt3").value;
    const AdminO4 = document.getElementById("adminOpt4").value;
    const AdminAns = document.getElementById("adminAns").value;

    // Create a new question object
    const newQuestion = {
        question: AdminQ,
        options: [AdminO1, AdminO2, AdminO3, AdminO4],
        answer: parseInt(AdminAns) // Parse answer as an integer
    };
    
    // Add the new question to the array
    questions.push(newQuestion);
    
    // Save the updated array in local storage
    localStorage.setItem('test', JSON.stringify(questions));
    
    // Clear the input fields
    document.getElementById("adminQue").value = "";
    document.getElementById("adminOpt1").value = "";
    document.getElementById("adminOpt2").value = "";
    document.getElementById("adminOpt3").value = "";
    document.getElementById("adminOpt4").value = "";
    document.getElementById("adminAns").value = "";
});

var flag = false
document.getElementById('main').style.display = "none";
document.getElementById('adminCheck').style.display = "flex";
const btn1 = document.getElementById('check')
btn1.addEventListener('click', () => {
    if (document.getElementById('AdmName').value == "AdminQuiz123" && document.getElementById('password').value == '10May2009B_D') {
        flag = true
    }
    else {
        flag = false
    }
    if(flag){
        document.getElementById('main').style.display = "block";
        document.getElementById('adminCheck').style.display = "none";
    }
    else{
        document.getElementById('adminCheck').style.display = "flex";
    }
})
