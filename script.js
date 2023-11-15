let tableRows = document.querySelectorAll("tr");
let date;
let maxTemperature = -Infinity;

for(let i = 1; i < tableRows.length; i++){

    let temperature = parseFloat(tableRows[i].querySelector("td:nth-child(4)").textContent);
    console.log("temperature:" + temperature);

    if(temperature > maxTemperature){
        maxTemperature = temperature;
        date = tableRows[i].querySelector("td:nth-child(3)").textContent;
    }
    console.log("maxTemperature: " + maxTemperature);
}
console.log(date + "\t" + maxTemperature);
alert("The most hottest day is:\n Date: " + date + "\nmax temperature: " + maxTemperature);

