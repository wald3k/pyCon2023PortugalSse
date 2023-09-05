let url = 'http://127.0.0.1:8000'

setInterval(() => {
    fetch(url)
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
        document.getElementById("time").innerHTML = json["time"]
    })     
}, 5000);
