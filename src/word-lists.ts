// 0-9
export const units = [
  "zero",
  "um",
  "dois",
  "três",
  "quatro",
  "cinco",
  "seis",
  "sete",
  "oito",
  "nove",
] as const

// 10-19
export const teens = [
  "dez",
  "onze",
  "doze",
  "treze",
  "quatorze",
  "quinze",
  "dezesseis",
  "dezessete",
  "dezoito",
  "dezenove",
] as const

// 20, 30, 40... 90
export const tens = [
  "vinte",
  "trinta",
  "quarenta",
  "cinquenta",
  "sessenta",
  "setenta",
  "oitenta",
  "noventa",
] as const

// 100, 200... 900
export const hundreds = [
  "cento",
  "duzentos",
  "trezentos",
  "quatrocentos",
  "quinhentos",
  "seiscentos",
  "setecentos",
  "oitocentos",
  "novecentos",
] as const

// Scale names (SHORT scale) - [singular, plural]
export const scales = [
  ["mil", "mil"],
  ["milhão", "milhões"],
  ["bilhão", "bilhões"],
  ["trilhão", "trilhões"],
  ["quatrilhão", "quatrilhões"],
  ["quintilhão", "quintilhões"],
] as const
