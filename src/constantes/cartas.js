const imagens = [
  'avatar.png',
  'barbie.png',
  'galinha_pintadinha.png',
  'harry_potter.png',
  'macqueen.png',
  'shrek.png'
]

const imagens2 = [
  'divertidamente.png',
  'sakura.png',
  'rapunzel.png',
  'sasuke.png',
  'raiva.png',
  'naruto.png',
  'madagascar.png',
  'madagascar2.png',
  'madagascar3.png',
  'math.png',
]

const cartasUnicas = imagens.map((imagem, idDoPar) => ({
  idDoPar,
  imagem
}))

export const paresDeCartas = [...cartasUnicas, ...cartasUnicas].map(
  (carta, id) => ({
    ...carta,
    id
  })
)


const cartasUnicas2 = imagens2.map((imagem, idDoPar) => ({
  idDoPar,
  imagem
}))

export const paresDeCartas2 = [...cartasUnicas2, ...cartasUnicas2].map(
  (carta, id) => ({
    ...carta,
    id
  })
)
