//Part a

var Colors = ["Red","Yellow","Green","Blue","Black","White","Grey"];
document.write("Colors name: {"+Colors+"}<br>");

var inputColor = prompt("Array of Colors!","Please enter the color which you want to shift at the begining of the array");

arrayUpdated = false;
for (let i = 0; i < Colors.length; i++) {
   
    if(inputColor === Colors[i]){
        Colors.unshift(inputColor);
        Colors.splice(i+1,1);
        document.write("Colors name: {"+Colors+"}");
        var arrayUpdated = true;
        break;
        
    }
}
if(arrayUpdated == false){
    document.write("Error! Please select a color from given array of colors.")
}

//Part b

var Colors = ["Red","Yellow","Green","Blue","Black","White","Grey"];
document.write("Colors name: {"+Colors+"}<br>");

var inputColor = prompt("Array of Colors!","Please enter the color which you want to shift at the end of the array");

arrayUpdated = false;
for (let i = 0; i < Colors.length; i++) {
   
    if(inputColor === Colors[i]){
        Colors.push(inputColor);
        Colors.splice(i,1);
        document.write("Colors name: {"+Colors+"}");
        var arrayUpdated = true;
        break;
        
    }
}
if(arrayUpdated == false){
    document.write("Error! Please select a color from given array of colors.")
}

//Part c

var Colors = ["Red","Yellow","Green","Blue","Black","White","Grey"];
document.write("Colors name: {"+Colors+"}<br>");
Colors.unshift("Brown","Pink")
document.write("Colors name: {"+Colors+"}<br>");

//Part d

Colors.shift();
document.write("Colors name: {"+Colors+"}<br>");

//Part e

Colors.pop();
document.write("Colors name: {"+Colors+"}");

//Part f

var Colors = ["Red","Yellow","Green","Blue","Black","White","Grey"];
document.write("Colors name: {"+Colors+"}<br>");

var inputColor = prompt("Array of Colors!","Please enter the color name which you want to add in the array");
var inputIndex = prompt("Array of Colors!","Also enter the index number");

Colors[inputIndex] = inputColor;
document.write("Colors name: {"+Colors+"}");

//Part g


var Colors = ["Red","Yellow","Green","Blue","Black","White","Grey"];
document.write("Colors name: {"+Colors+"}<br>");

var deleteIndex = +prompt("Array of Colors!","Please enter the index number from where you want to delete the Colors");
var quantityofIndex = +prompt("Array of Colors!","Also enter the how many colors you want to delete in array");

Colors.splice(deleteIndex-1,quantityofIndex);
document.write("Colors name: {"+Colors+"}");