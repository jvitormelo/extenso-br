import { writeCurrency } from "./write-currency"

/**
 * Converts a Brazilian currency value string to words.
 *
 * @param value - Currency value as string with comma decimal separator (e.g., "1234,56")
 * @returns The value written in Brazilian Portuguese (e.g., "um mil duzentos e trinta e quatro reais e cinquenta e seis centavos")
 *
 * @example
 * currencyToWords("0,00")    // "zero reais"
 * currencyToWords("1,00")    // "um real"
 * currencyToWords("1,50")    // "um real e cinquenta centavos"
 * currencyToWords("1234,56") // "um mil duzentos e trinta e quatro reais e cinquenta e seis centavos"
 */
export function currencyToWords(value: string): string {
  if (typeof value !== "string") {
    throw new Error("Input must be a string")
  }

  if (!value.includes(",")) {
    throw new Error('Invalid format: expected comma decimal separator (e.g., "1234,56")')
  }

  const parts = value.split(",")
  const integerPart = parts[0]!
  const decimalPart = parts[1]

  if (decimalPart === undefined || decimalPart.length !== 2) {
    throw new Error('Invalid format: expected 2 decimal places (e.g., "1234,56")')
  }

  if (!/^\d+$/.test(integerPart) || !/^\d{2}$/.test(decimalPart)) {
    throw new Error("Invalid format: non-numeric characters found")
  }

  return writeCurrency(integerPart, decimalPart)
}
