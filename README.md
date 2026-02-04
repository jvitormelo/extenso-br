# extenso-br

Convert numbers to words in Brazilian Portuguese (número por extenso).

```ts
import { currencyToWords } from "extenso-br"

currencyToWords("1234,56")
// "mil duzentos e trinta e quatro reais e cinquenta e seis centavos"
```

## Installation

```bash
# From GitHub
bun add github:jvitormelo/extenso-br

# Or with npm/yarn/pnpm
npm install github:jvitormelo/extenso-br
```

## Usage

```ts
import { currencyToWords } from "extenso-br"

currencyToWords("0,00")        // "zero reais"
currencyToWords("1,00")        // "um real"
currencyToWords("0,01")        // "um centavo"
currencyToWords("2,50")        // "dois reais e cinquenta centavos"
currencyToWords("1000,00")     // "mil reais"
currencyToWords("1000000,00")  // "um milhão de reais"
currencyToWords("2000000,00")  // "dois milhões de reais"
```

## Input Format

- Use comma as decimal separator: `"1234,56"`
- Always include 2 decimal places: `"100,00"`
- No thousand separators: `"1000000,00"` (not `"1.000.000,00"`)

## Supported Range

- Integers up to quintilhões (quintillions)
- Centavos: 0-99

## License

MIT
