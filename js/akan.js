function akanNames(){
    var dayOfBirth=parseFloat(document.getElementById("day").value);
    var monthOfBirth=parseFloat(document.getElementById("month").value);
    var yearOfBirth=parseFloat(document.getElementById("year").value);
    var cc=(year-1)/100+1;
    var dayOfTheWeek = (c / 4 - 2 * c - 1 + 5 * y / 4 + 26 * (m + 1) / 10 + d) % 7;
    console.log(dayOfTheWeek);
    document.getElementById('result').innerHTML = Math.round(dayOfTheWeek);
    var boy = ["kwasi", "kwadwo", "kwabena", "kwaku", "yaw", "kofi", "kwame"];
    var girl = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var choice = document.getElementById('gender').value;
    if (choice === "male") {
    console.log(boy[Math.round(dayOfTheWeek)]);
    document.getElementById('akan').innerHTML = boy[Math.round(dayOfTheWeek)];
    }
    else if (choice === "female") {
    console.log(girl[Math.round(dayoftheweek)]);
    document.getElementById('akan').innerHTML = girl[Math.round(dayOfTheWeek)];
    } 
    else {
            console.log("invalid outuput");
        }
}
