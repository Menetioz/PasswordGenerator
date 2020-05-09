var chars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"]
var password = [];
$("#gen").click(function(){
    $("#pass").val("");
    $("#pass").val(generate());
    password = [];
}); 
console.log("js charger");
function generate() {
    for (var i = 0; i < 8; i++) {
        var rdm = random(0,chars.length)
        password.push(chars[rdm]);   
    }
    return password.join('');
    
}
function random(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

