# extenso-br

TypeScript library to convert numbers to words in Brazilian Portuguese (número por extenso).

Example: `1.234.567,89` → "um milhão duzentos e trinta e quatro mil quinhentos e sessenta e sete reais e oitenta e nove centavos"

## Commands

```sh
bun test              # Run tests
bun test --watch      # Run tests in watch mode
```

## Project Structure

```
src/
├── index.ts           # Main export (currencyToWords)
├── index.test.ts      # Test suite
├── write-currency.ts  # Currency formatting (reais/centavos)
├── write-integer.ts   # Integer-to-words conversion
└── word-lists.ts      # Word lists (units, teens, tens, hundreds, scales)
```

## Input Format

- Brazilian number format: comma as decimal separator (e.g., `"1234,56"`)
- Always requires 2 decimal places
- No thousand separators in input

## Brazilian Portuguese Number Rules

### Connector "e" (and)
- Used between tens and units: "vinte e um" (21)
- Used between hundreds and remainder: "cento e um" (101)
- Used before last group if < 100 or round hundred: "mil e cem" (1100)

### Special Cases
- 100 = "cem" (standalone), "cento" (with remainder): "cento e um" (101)
- 1000 = "mil" (not "um mil")
- "de" before currency on round millions/billions: "um milhão de reais"

### Scales (short scale)
- mil (thousand)
- milhão/milhões (million)
- bilhão/bilhões (billion)
- trilhão/trilhões (trillion)

### Currency
- 1 real (singular), 2+ reais (plural)
- 1 centavo (singular), 2+ centavos (plural)

## Bun

Use Bun instead of Node.js:

- `bun test` for testing
- `bun <file>` to run files
- `bun install` for dependencies
