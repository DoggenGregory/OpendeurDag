
var testInput = "yellow";


function changeBackground(){
    testInput = $("#testInputField")[0].value;
    $("#test").css("background-color", testInput)
    
    //document.body.style.backgroundColor= "red";
      
}