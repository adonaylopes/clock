const clock = document.getElementById("clock");
function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    const Time = `${hours}:${minutes}:${seconds}`
    clock.innerText = Time;
    setInterval(updateClock, 1000);
}