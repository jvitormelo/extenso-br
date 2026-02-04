import { units, teens, tens, hundreds, scales } from "./word-lists"

/**
 * Converts a number 0-99 to words
 */
function writeLessThan100(n: number): string {
  if (n < 10) {
    return units[n]!
  }
  if (n < 20) {
    return teens[n - 10]!
  }
  const ten = Math.floor(n / 10)
  const unit = n % 10
  if (unit === 0) {
    return tens[ten - 2]!
  }
  return `${tens[ten - 2]} e ${units[unit]}`
}

/**
 * Converts a number 0-999 to words
 */
function writeLessThan1000(n: number): string {
  if (n < 100) {
    return writeLessThan100(n)
  }
  if (n === 100) {
    return "cem"
  }
  const hundred = Math.floor(n / 100)
  const remainder = n % 100
  if (remainder === 0) {
    return hundreds[hundred - 1]!
  }
  return `${hundreds[hundred - 1]} e ${writeLessThan100(remainder)}`
}

/**
 * Splits a numeric string into groups of 3 digits from right to left
 * Example: "1234567" -> [1, 234, 567]
 */
function splitIntoGroups(value: string): number[] {
  const groups: number[] = []
  let remaining = value

  while (remaining.length > 0) {
    const start = Math.max(0, remaining.length - 3)
    const group = remaining.slice(start)
    groups.unshift(Number(group))
    remaining = remaining.slice(0, start)
  }

  return groups
}

/**
 * Checks if a number needs "e" connector before it
 * Rules: use "e" if number is < 100 OR is a round hundred (100, 200, etc.)
 */
function needsConnector(n: number): boolean {
  if (n < 100) return true
  if (n % 100 === 0) return true
  return false
}

/**
 * Converts a positive integer string to words in Brazilian Portuguese
 */
export function writeInteger(value: string): string {
  const num = Number(value)

  if (num === 0) {
    return "zero"
  }

  if (num < 1000) {
    return writeLessThan1000(num)
  }

  const groups = splitIntoGroups(value)
  const parts: string[] = []

  for (let i = 0; i < groups.length; i++) {
    const group = groups[i]!
    if (group === 0) continue

    const scaleIndex = groups.length - i - 2 // -2 because last group has no scale

    if (scaleIndex < 0) {
      // Last group (units, no scale)
      parts.push(writeLessThan1000(group))
    } else if (scaleIndex === 0) {
      // Thousands
      if (group === 1) {
        parts.push("mil")
      } else {
        parts.push(`${writeLessThan1000(group)} mil`)
      }
    } else {
      // Millions and above
      const scale = scales[scaleIndex]!
      const scaleName = group === 1 ? scale[0] : scale[1]
      parts.push(`${writeLessThan1000(group)} ${scaleName}`)
    }
  }

  // Join parts with appropriate connectors
  if (parts.length === 1) {
    return parts[0]!
  }

  // Build result with appropriate connectors between parts
  const result: string[] = [parts[0]!]

  // Find the last non-zero group's value (the units group)
  const lastGroup = groups[groups.length - 1]!
  const isLastGroupNonZero = lastGroup > 0

  for (let i = 1; i < parts.length; i++) {
    const isLastPart = i === parts.length - 1

    // Only use "e" before the last part if it's the units group and needs connector
    const useConnector = isLastPart && isLastGroupNonZero && needsConnector(lastGroup)

    result.push(useConnector ? ` e ${parts[i]}` : ` ${parts[i]}`)
  }

  return result.join("")
}

/**
 * Checks if the integer ends with zeros after the scale (for "de" insertion)
 * Example: 1000000 (one million) -> true, 1000001 -> false
 */
export function endsInRoundScale(value: string): boolean {
  const num = Number(value)
  if (num < 1000000) return false

  // Check if divisible by 1 million and the remainder is 0
  const lastSixDigits = Number(value.slice(-6))
  return lastSixDigits === 0
}
