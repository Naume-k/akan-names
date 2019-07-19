function akanNames(){
    var dayOfBirth=parseFloat(document.getElementById("day").value);
    var monthOfBirth=parseFloat(document.getElementById("month").value);
    var yearOfBirth=parseFloat(document.getElementById("year").value);
    var cc=(year-1)/100+1;
    var dayOfTheWeek = (c / 4 - 2 * c - 1 + 5 * y / 4 + 26 * (m + 1) / 10 + d) % 7;
    console.log(dayOfTheWeek);
    document.getElementById('result').innerHTML = Math.round(dayOfTheWeek);

    var male = ["kwasi", "kwadwo", "kwabena", "kwaku", "yaw", "kofi", "kwame"];
    var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var choice = document.getElementById('gender').value;

   if (choice === "male") {
        console.log(male[Math.round(dayOfTheWeek)]);
        document.getElementById('akan').innerHTML = male[Math.round(dayOfTheWeek)];
    }
    else if (choice === "female") {
    console.log(female[Math.round(dayOfTheWeek)]);
    document.getElementById('akan').innerHTML = female[Math.round(dayOfTheWeek)];
    } 
    else {
            console.log("invalid outuput");
        }
}
