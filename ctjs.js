var x;
function strLenth(){
    x = document.getElementById("textIn").value;
    var tam, tamMax;
    tam = x.length;
    tamMax = document.getElementById("tamMax").value;
    if(tamMax == ""){
        document.getElementById("status").innerHTML = "Dentro do limite estabelecido";
        document.getElementById("status").style.color = "rgb(0,65,106)";
    }else{
        if(tam <= tamMax){
            document.getElementById("status").innerHTML = "Dentro do limite estabelecido";
            document.getElementById("status").style.color = "rgb(0,65,106)";
        }else{
            document.getElementById("status").innerHTML = "Ultrapassou o limite estabelecido";
            document.getElementById("status").style.color = "rgb(242,25,5)";
        }
    }
    if(tam >= 100){
        alert("Limite atingido");
        document.getElementById("textIn").disabled=true;
    }
    document.getElementById("res").innerHTML = tam;
    stringWSpaces = x.replace(/ /g, "");
    document.getElementById("resWSpaces").innerHTML = stringWSpaces.length;
}
document.getElementById("data-1").checked = true;
document.getElementById("out-1").checked = true;

function checkOut(){
    var radios = document.getElementsByName("out");
    var choose;
    for(var i = 0; i < radios.length; i++){
        if(radios[i].checked){
            choose = radios[i].value;
            break;
        }
    }
    if(choose == "nao"){
        document.getElementById("container").style.display = "none";
        document.getElementById("textOut").value = "";

    }else{
        document.getElementById("container").style.display = "inline";
    }
}

function radioCheck(){
    var radios = document.getElementsByName("type");
    var choose;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            choose = radios[i].value;
            break;
        }
    }
    if(choose == "none"){
        document.getElementById("textOut").value = "";
    }else if(choose == "uppercase"){
        var content = x.toUpperCase();
        document.getElementById("textOut").value = content;
    }else if(choose == "lowercase"){
        var content = x.toLowerCase();
        document.getElementById("textOut").value = content;
        // console.log(content)
    }else if(choose == "capitalize"){
        var content = x.capitalize(); 
        document.getElementById("textOut").value = content;
    }
    
}
function checkType(){
    document.getElementById("selectTypeDiv").style.fontSize = "100%";
    var options = document.getElementsByName("type1");
    var choose;
    for(var i = 0; i < options.length; i++){
        if(options[i].checked){
            choose = options[i].value;
            break;
        }
    }
    if(choose == "compare"){
        document.getElementById("checkLengthDiv").style.display = "none";
        document.getElementById("checkTextDiv").style.display = "inline";
    }else{
        document.getElementById("checkLengthDiv").style.display = "inline";
        document.getElementById("checkTextDiv").style.display = "none";
    }
}

function checkStrings(){
    if(checkTypeIgnore()){
        var string1 = document.getElementById("textOneCompare").value.toLowerCase();
        var string2 = document.getElementById("textTwoCompare").value.toLowerCase();
    }else{
        var string1 = document.getElementById("textOneCompare").value;
        var string2 = document.getElementById("textTwoCompare").value;
    }
    if(string1 == string2){
        document.getElementById("resCompare").innerHTML = "Semelhantes";
        document.getElementById("resCompare").style.color = "rgb(0,65,106)";
    }else{
        document.getElementById("resCompare").innerHTML = "Distintos";
        document.getElementById("resCompare").style.color = "rgb(242,25,5)";
    }
}
function checkTypeIgnore(){
    var options = document.getElementsByName("type2");
    var choose;
    for(var i = 0; i < options.length; i++){
        if(options[i].checked){
            choose = options[i].value;
            break;
        }
    }
    if(choose == "compareYes"){
        return true;
    }else{
        return false;
    }
}

String.prototype.capitalize = function() {
    return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};


function clearText(){
    document.getElementById("textIn").value = "";
}

function clearText1(){
    document.getElementById("textOneCompare").value = "";
    document.getElementById("textTwoCompare").value = "";
}	