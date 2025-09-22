const form = document.getElementById("timerForm");
const timerDisplay = document.getElementById("timerDisplay");
const message = document.getElementById("message");

let countdown;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const minutes = parseInt(document.getElementById("minutes").value);

  if (isNaN(minutes) || minutes <= 0) return;

  clearInterval(countdown);
  message.textContent = "";

  let time = minutes * 60;

  updateDisplay(time);

  countdown = setInterval(() => {
    time--;
    updateDisplay(time);

    if (time <= 0) {
      clearInterval(countdown);
      message.textContent = "⏰ Süre bitti!";
    }
  }, 1000);
});

function updateDisplay(seconds) {
  const min = String(Math.floor(seconds / 60)).padStart(2, '0');
  const sec = String(seconds % 60).padStart(2, '0');
  timerDisplay.textContent = `${min}:${sec}`;
}
