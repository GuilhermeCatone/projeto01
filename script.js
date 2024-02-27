function toggleMode() {
  //ativANDO O BOTÃO
  const html = document.documentElement
  html.classList.toggle('ligth')

  // pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir imagem
  if (html.classList.contains("ligth")) {
    //img 1 
    img.setAttribute("src", "./assets/img - light.png")
  } else {
    //img 2
    img.setAttribute("src", "./assets/img.png")
  }


}