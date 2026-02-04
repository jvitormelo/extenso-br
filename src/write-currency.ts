import { writeInteger, endsInRoundScale } from "./write-integer"

const currency = {
  singular: "real",
  plural: "reais",
  subunit: {
    singular: "centavo",
    plural: "centavos",
  },
} as const

/**
 * Writes the main currency unit (reais)
 */
function writeUnit(value: string): string {
  const num = Number(value)
  const text = writeInteger(value)

  if (num === 1) {
    return `${text} ${currency.singular}`
  }

  if (endsInRoundScale(value)) {
    return `${text} de ${currency.plural}`
  }

  return `${text} ${currency.plural}`
}

/**
 * Writes the currency subunit (centavos)
 */
function writeSubunit(value: string): string {
  const num = Number(value)
  const text = writeInteger(value)

  if (num === 1) {
    return `${text} ${currency.subunit.singular}`
  }

  return `${text} ${currency.subunit.plural}`
}

/**
 * Converts integer and decimal parts to Brazilian currency words
 */
export function writeCurrency(integerPart: string, decimalPart: string): string {
  const intValue = Number(integerPart)
  const decValue = Number(decimalPart)

  const hasInteger = intValue > 0
  const hasDecimal = decValue > 0

  if (!hasInteger && !hasDecimal) {
    return `zero ${currency.plural}`
  }

  if (!hasInteger) {
    return writeSubunit(decimalPart)
  }

  if (!hasDecimal) {
    return writeUnit(integerPart)
  }

  return `${writeUnit(integerPart)} e ${writeSubunit(decimalPart)}`
}
