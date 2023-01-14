var studentScores = [];
var a = prompt("Scores Array","Number of Student's Score you want to add in Array")
for (let i = 0; i < a; i++) {
    var score = +prompt("Scores Array","Enter the Score");
    studentScores.push(score);

    
}
document.write("Student's Score: {"+studentScores+"}<br>");
studentScores.sort();
document.write("Student's Score sorted array: {"+studentScores+"}<br>");

