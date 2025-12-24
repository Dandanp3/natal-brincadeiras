const spinBtn = document.getElementById("spinBtn")
const resetBtn = document.getElementById("resetBtn")
const rouletteDisplay = document.getElementById("rouletteDisplay")
const currentPrenda = document.getElementById("currentPrenda")
const prendasRestantes = document.getElementById("prendasRestantes")

const todasPrendas = [
  "💃 Dançar Michael Jackson",
  "🐶 Imitar um animal até alguém adivinhar",
  "📺 Fazer uma propaganda vendendo um objeto aleatório da sala",
  "⭐ Imitar um famoso",
  "👥 Imitar alguém do grupo para acertarem",
  "💕 Falar a frase mais romântica que conseguir para um objeto",
  "😁😡🤢🥰 Falar uma frase que o grupo mandar imitando os emojis",
  "🎯 Fazer uma prenda que o Grupo mandar",
  "🎭 Fazer mimica de um objeto",
  "🎬 Escolher alguém para atuar uma cena de filme/serie a sua escolha",
  "🦁 Cantar Hakuna Matata",
]

let prendasDisponiveis = [...todasPrendas]
let isSpinning = false

spinBtn.addEventListener("click", () => {
  if (!isSpinning && prendasDisponiveis.length > 0) {
    spinRoulette()
  }
})

resetBtn.addEventListener("click", () => {
  prendasDisponiveis = [...todasPrendas]
  prendasRestantes.textContent = prendasDisponiveis.length
  currentPrenda.textContent = "Aperte o botão para começar"
  spinBtn.disabled = false

  const prendasText = rouletteDisplay.querySelector(".prenda-text")
  prendasText.textContent = "Prendas reiniciadas!"

  setTimeout(() => {
    prendasText.textContent = "Pronto para girar!"
  }, 1500)
})

function spinRoulette() {
  isSpinning = true
  spinBtn.disabled = true
  rouletteDisplay.classList.add("spinning")

  currentPrenda.textContent = "🎲 Girando..."

  let spinCount = 0
  const spinDuration = 3000
  const spinInterval = 100
  const totalSpins = spinDuration / spinInterval

  const spinTimer = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * prendasDisponiveis.length)
    const prendasText = rouletteDisplay.querySelector(".prenda-text")
    prendasText.textContent = prendasDisponiveis[randomIndex]

    spinCount++

    if (spinCount >= totalSpins) {
      clearInterval(spinTimer)
      selectFinalPrenda()
    }
  }, spinInterval)
}

function selectFinalPrenda() {
  const randomIndex = Math.floor(Math.random() * prendasDisponiveis.length)
  const prendaSelecionada = prendasDisponiveis[randomIndex]

  rouletteDisplay.classList.remove("spinning")

  const prendasText = rouletteDisplay.querySelector(".prenda-text")
  prendasText.textContent = prendaSelecionada

  currentPrenda.textContent = `🎉 ${prendaSelecionada}`

  prendasDisponiveis.splice(randomIndex, 1)
  prendasRestantes.textContent = prendasDisponiveis.length

  setTimeout(() => {
    isSpinning = false

    if (prendasDisponiveis.length > 0) {
      spinBtn.disabled = false
      currentPrenda.textContent = "Pronto para a próxima prenda!"
    } else {
      currentPrenda.textContent = "🎊 Todas as prendas foram realizadas!"
      prendasText.textContent = "Fim do jogo!"
    }
  }, 2000)
}
