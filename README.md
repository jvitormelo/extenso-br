# extenso-br

Reescrita moderna 0 depedência e minimalista do [extenso](https://github.com/theuves/extenso) para português brasileiro.

Converte valores monetários para texto por extenso, seguindo o padrão oficial para documentos governamentais.

```ts
import { currencyToWords } from "extenso-br";

currencyToWords("43151336237,82");
// "quarenta e três bilhões, cento e cinquenta e um milhões, trezentos e trinta e seis mil, duzentos e trinta e sete reais e oitenta e dois centavos"
```

## Instalação

```bash
npm install extenso-br
```

## Uso

```ts
import { currencyToWords } from "extenso-br";

currencyToWords("0,00"); // "zero reais"
currencyToWords("1,00"); // "um real"
currencyToWords("0,01"); // "um centavo"
currencyToWords("2,50"); // "dois reais e cinquenta centavos"
currencyToWords("1000,00"); // "mil reais"
currencyToWords("1000000,00"); // "um milhão de reais"
currencyToWords("2000000,00"); // "dois milhões de reais"
```

## Formato de Entrada

- Vírgula como separador decimal: `"1234,56"`
- Sempre 2 casas decimais: `"100,00"`
- Sem separador de milhar: `"1000000,00"` (não `"1.000.000,00"`)

## Licença

MIT
