let currentPage = 1
const totalPages = 2

const pages = document.querySelectorAll(".page")
const prevBtn = document.getElementById("prevBtn")
const nextBtn = document.getElementById("nextBtn")
const pageIndicator = document.getElementById("pageIndicator")

function updatePage() {
  pages.forEach((page) => {
    page.classList.remove("active")
    if (Number.parseInt(page.dataset.page) === currentPage) {
      page.classList.add("active")
    }
  })

  pageIndicator.textContent = `Página ${currentPage} de ${totalPages}`

  prevBtn.disabled = currentPage === 1
  nextBtn.disabled = currentPage === totalPages
}

prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--
    updatePage()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
})

nextBtn.addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++
    updatePage()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
})

updatePage()
