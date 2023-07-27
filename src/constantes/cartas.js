const imagens = [
  'avatar.png',
  'barbie.png',
  'galinha_pintadinha.png',
  'harry_potter.png',
  'macqueen.png',
  'shrek.png'
]

// const imagens2 = [
//   'monstros1.png',
//   'monstros2.png',
//   'rapunzel.png',
//   'spider-man.png',
//   'elsa.png',
//   'frozen1.png'
// ]

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
