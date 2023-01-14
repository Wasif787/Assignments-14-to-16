var Names = ["Michael","John","Tony"];
var Scores = [320,230,480];
var totalScore = 500;
for (let i = 0; i < Names.length || i < Scores.length; i++) {

        var Percentage = Scores[i]/totalScore *100;

        document.write("Score of "+Names[i]+" is "+Scores[i]+". Percentage: "+Percentage+"%<br>")
}