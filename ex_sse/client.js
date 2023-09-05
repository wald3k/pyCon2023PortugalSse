let time_url = 'http://127.0.0.1:8000/time'

const eventSource = new EventSource(time_url);
eventSource.addEventListener('new_message', function(event) {
  // Update UI with received data
  document.getElementById("time").innerHTML = event.data
});
