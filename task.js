let counts = {};

function handleInput() {
  let input = document.getElementById("input-field").value;
  if (input === "End" || "end") {
    calculateMinBalls();
  }

  let [color, count] = input.split(":");
  count = parseInt(count);
  if (!counts[color]) {
    counts[color] = 0;
  }
  counts[color] += count;
  document.getElementById("input-field").value = "";
}

function calculateMinBalls() {
  let maxCount = 0;
  let maxColor;
  for (let color in counts) {
    if (counts[color] > maxCount) {
      maxCount = counts[color];
      maxColor = color;
    }
  }

  let totalBalls = 0;
  for (let color in counts) {
    totalBalls += counts[color];
  }
  let minBallsToRemove = totalBalls - maxCount;

  let answerDiv = document.getElementById("result");
  answerDiv.innerHTML = `Lowest balls to remove: ${minBallsToRemove} balls.`;
}