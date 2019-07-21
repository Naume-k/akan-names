function akanNames(){
    var dayOfBirth=parseFloat(document.getElementById("days").innerHTML);
    var monthOfBirth=parseFloat(document.getElementById("months").innerHTML);
    var yearOfBirth=parseFloat(document.getElementById("years").innerHTML);
    var cc=(yearOfBirth-1)/100+1;
    var dayOfTheWeek =  ( ( (CC/4) -2*CC-1) + ((5*yearOfBirth/4) ) + ((26*(monthOfBirth+1)/10)) + dayOfBirth ) % 7;
    console.log(dayOfTheWeek);
    document.getElementById('output').innerHTML = Math.round(dayOfTheWeek);

    var male = ["kwasi", "kwadwo", "kwabena", "kwaku", "yaw", "kofi", "kwame"];
    var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var collect = document.getElementById('gender').value;

   if (collect === "male") {
        console.log(male[Math.round(dayOfTheWeek)]);
        document.getElementById('name').innerHTML = male[Math.round(dayOfTheWeek)]; 
    }
    else if (collect === "female") {
    console.log(female[Math.round(dayOfTheWeek)]);
    document.getElementById('name').innerHTML = female[Math.round(dayOfTheWeek)];
    } 
    else {
            alert("invalid outuput");
        }
        
}
