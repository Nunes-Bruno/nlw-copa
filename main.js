function creatGame(player1, hour, player2) {
  return `
  <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira do Brasil" />
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Bandeira de Sérvia" />
  </li>
`
}

let delay = -0.4
function creatcard(date, day, games) {
  delay = delay + 0.4
  return `
  <div class="card" style="animation-delay: ${delay}s">
      <h2>${date}<span>${day}</span></h2>
      <ul>
      ${games}
      </ul>
    </div>
  `
}
document.querySelector("#cards").innerHTML =
  creatcard("24/11", "quinta", creatGame("brazil", "16:00", "serbia")) +
  creatcard(
    "28/11",
    "segunda",
    creatGame("switzerland", "13:00", "brazil") +
      creatGame(
        "portugal",
        "16:00",
        "uruguai"
      ) /* exemplo para criar outros cards de jogos*/
  ) +
  creatcard("02/12", "sexta", creatGame("cameroon", "16:00", "brazil"))
