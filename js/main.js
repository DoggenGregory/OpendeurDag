


function changeBackground(){
    testInput = $("#testInputField")[0].value;
    $("#test").css("background-color", testInput)   
    //document.body.style.backgroundColor= "red";   
}
function fontSizeP(){
    testInput = $("#testInputField")[0].value;
    $("p").css("fontSize","2px")
}

 function inputSwitchBtn(x){
    //$("#testInputButton").attr("onclick",x);
    $("#testInputButton").text(x);
}
