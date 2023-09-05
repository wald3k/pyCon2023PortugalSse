const ws = new WebSocket("ws://localhost:8000/ws");

ws.onopen = (event) => {
    document.getElementById("status").innerHTML = "Connected";
};

ws.onmessage = (event) => {
    document.getElementById("time").innerHTML = `<p>Server time: ${event.data}</p>`;
};

ws.onclose = (event) => { 
    document.getElementById("status").innerHTML = "Disconnected" // disable onclose handler first
};

window.onbeforeunload = function() {
    ws.close();
    return "Are you sure to leave this page?";
};
