let g_health = Number(100);
let n_health = Number(100);

function restart() {
  g_health = Number(100);
  n_health = Number(100);
  location.reload();
  update();
  mainGame();
}

function update() {
  const g_title = document.getElementById("p1_");
  const n_title = document.getElementById("p2_");
  g_title.textContent = `Goku's Health ❤️ - ${g_health}`;
  n_title.textContent = `Naruto's Health ❤️ - ${n_health}`;
}

function gameOver() {
  const winner = document.getElementById("winner");
  if (g_health <= 0 || n_health <= 0) {
    if (g_health > n_health) {
      winner.textContent = "Goku is the Winner";
    } else if (g_health < n_health) {
      winner.textContent = "Naruto is the Winner";
    }
    document.getElementById("victory").play();
  }
}

function mainGame() {
  document.addEventListener("keydown", function (e) {
    if (g_health > Number(0) && n_health > Number(0)) {
      if (e.key == "d" || e.key == "D") {
        document.getElementById("g_punch").play();
        n_health -= Number(15);
        update();
        gameOver();
      } else if (e.key == "4" || e.key == 4) {
        document.getElementById("n_punch").play();
        g_health -= Number(15);
        update();
        gameOver();
      } else if (e.key == "s" || e.key == "S") {
        if (g_health <= 99) {
          g_health += Number(10);
          update();
          gameOver();
        }
      } else if (e.key == "5" || e.key == 5) {
        if (n_health <= 99) {
          n_health += Number(10);
          update();
          gameOver();
        }
      }
    }
  });
}
mainGame();
