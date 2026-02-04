import { describe, expect, it } from "bun:test";
import { currencyToWords } from "./index";

describe("currencyToWords", () => {
  describe("zero values", () => {
    it("converts 0,00 to zero reais", () => {
      expect(currencyToWords("0,00")).toBe("zero reais");
    });
  });

  describe("centavos only (no reais)", () => {
    it("converts 0,01 to um centavo", () => {
      expect(currencyToWords("0,01")).toBe("um centavo");
    });

    it("converts 0,02 to dois centavos", () => {
      expect(currencyToWords("0,02")).toBe("dois centavos");
    });

    it("converts 0,10 to dez centavos", () => {
      expect(currencyToWords("0,10")).toBe("dez centavos");
    });

    it("converts 0,15 to quinze centavos", () => {
      expect(currencyToWords("0,15")).toBe("quinze centavos");
    });

    it("converts 0,50 to cinquenta centavos", () => {
      expect(currencyToWords("0,50")).toBe("cinquenta centavos");
    });

    it("converts 0,99 to noventa e nove centavos", () => {
      expect(currencyToWords("0,99")).toBe("noventa e nove centavos");
    });
  });

  describe("reais only (no centavos)", () => {
    it("converts 1,00 to um real", () => {
      expect(currencyToWords("1,00")).toBe("um real");
    });

    it("converts 2,00 to dois reais", () => {
      expect(currencyToWords("2,00")).toBe("dois reais");
    });

    it("converts 10,00 to dez reais", () => {
      expect(currencyToWords("10,00")).toBe("dez reais");
    });

    it("converts 15,00 to quinze reais", () => {
      expect(currencyToWords("15,00")).toBe("quinze reais");
    });

    it("converts 21,00 to vinte e um reais", () => {
      expect(currencyToWords("21,00")).toBe("vinte e um reais");
    });

    it("converts 100,00 to cem reais", () => {
      expect(currencyToWords("100,00")).toBe("cem reais");
    });

    it("converts 101,00 to cento e um reais", () => {
      expect(currencyToWords("101,00")).toBe("cento e um reais");
    });

    it("converts 200,00 to duzentos reais", () => {
      expect(currencyToWords("200,00")).toBe("duzentos reais");
    });

    it("converts 999,00 to novecentos e noventa e nove reais", () => {
      expect(currencyToWords("999,00")).toBe(
        "novecentos e noventa e nove reais"
      );
    });
  });

  describe("thousands", () => {
    it("converts 1000,00 to mil reais", () => {
      expect(currencyToWords("1000,00")).toBe("mil reais");
    });

    it("converts 1001,00 to mil e um reais", () => {
      expect(currencyToWords("1001,00")).toBe("mil e um reais");
    });

    it("converts 1100,00 to mil e cem reais", () => {
      expect(currencyToWords("1100,00")).toBe("mil e cem reais");
    });

    it("converts 1234,00 to mil duzentos e trinta e quatro reais", () => {
      expect(currencyToWords("1234,00")).toBe(
        "mil duzentos e trinta e quatro reais"
      );
    });

    it("converts 2000,00 to dois mil reais", () => {
      expect(currencyToWords("2000,00")).toBe("dois mil reais");
    });

    it("converts 10000,00 to dez mil reais", () => {
      expect(currencyToWords("10000,00")).toBe("dez mil reais");
    });

    it("converts 100000,00 to cem mil reais", () => {
      expect(currencyToWords("100000,00")).toBe("cem mil reais");
    });

    it("converts 999999,00 to novecentos e noventa e nove mil novecentos e noventa e nove reais", () => {
      expect(currencyToWords("999999,00")).toBe(
        "novecentos e noventa e nove mil novecentos e noventa e nove reais"
      );
    });
  });

  describe("millions", () => {
    it("converts 1000000,00 to um milhão de reais", () => {
      expect(currencyToWords("1000000,00")).toBe("um milhão de reais");
    });

    it("converts 1000001,00 to um milhão e um reais", () => {
      expect(currencyToWords("1000001,00")).toBe("um milhão e um reais");
    });

    it("converts 2000000,00 to dois milhões de reais", () => {
      expect(currencyToWords("2000000,00")).toBe("dois milhões de reais");
    });

    it("converts 1500000,00 to um milhão quinhentos mil reais", () => {
      expect(currencyToWords("1500000,00")).toBe(
        "um milhão quinhentos mil reais"
      );
    });
  });

  describe("billions", () => {
    it("converts 1000000000,00 to um bilhão de reais", () => {
      expect(currencyToWords("1000000000,00")).toBe("um bilhão de reais");
    });

    it("converts 2000000000,00 to dois bilhões de reais", () => {
      expect(currencyToWords("2000000000,00")).toBe("dois bilhões de reais");
    });

    it("converts 43151336237,82 with commas between scale groups (government standard)", () => {
      expect(currencyToWords("43151336237,82")).toBe(
        "quarenta e três bilhões, cento e cinquenta e um milhões, trezentos e trinta e seis mil, duzentos e trinta e sete reais e oitenta e dois centavos"
      );
    });
  });

  describe("reais and centavos combined", () => {
    it("converts 1,01 to um real e um centavo", () => {
      expect(currencyToWords("1,01")).toBe("um real e um centavo");
    });

    it("converts 1,50 to um real e cinquenta centavos", () => {
      expect(currencyToWords("1,50")).toBe("um real e cinquenta centavos");
    });

    it("converts 1234,56 to mil duzentos e trinta e quatro reais e cinquenta e seis centavos", () => {
      expect(currencyToWords("1234,56")).toBe(
        "mil duzentos e trinta e quatro reais e cinquenta e seis centavos"
      );
    });

    it("converts 1000000,50 to um milhão de reais e cinquenta centavos", () => {
      expect(currencyToWords("1000000,50")).toBe(
        "um milhão de reais e cinquenta centavos"
      );
    });
  });

  describe("teens (11-19)", () => {
    it("converts 0,11 to onze centavos", () => {
      expect(currencyToWords("0,11")).toBe("onze centavos");
    });

    it("converts 0,12 to doze centavos", () => {
      expect(currencyToWords("0,12")).toBe("doze centavos");
    });

    it("converts 0,13 to treze centavos", () => {
      expect(currencyToWords("0,13")).toBe("treze centavos");
    });

    it("converts 0,14 to quatorze centavos", () => {
      expect(currencyToWords("0,14")).toBe("quatorze centavos");
    });

    it("converts 0,16 to dezesseis centavos", () => {
      expect(currencyToWords("0,16")).toBe("dezesseis centavos");
    });

    it("converts 0,17 to dezessete centavos", () => {
      expect(currencyToWords("0,17")).toBe("dezessete centavos");
    });

    it("converts 0,18 to dezoito centavos", () => {
      expect(currencyToWords("0,18")).toBe("dezoito centavos");
    });

    it("converts 0,19 to dezenove centavos", () => {
      expect(currencyToWords("0,19")).toBe("dezenove centavos");
    });

    it("converts 11,00 to onze reais", () => {
      expect(currencyToWords("11,00")).toBe("onze reais");
    });

    it("converts 19,00 to dezenove reais", () => {
      expect(currencyToWords("19,00")).toBe("dezenove reais");
    });
  });

  describe("connector 'e' edge cases", () => {
    it("converts 1010,00 to mil e dez reais", () => {
      expect(currencyToWords("1010,00")).toBe("mil e dez reais");
    });

    it("converts 1200,00 to mil e duzentos reais", () => {
      expect(currencyToWords("1200,00")).toBe("mil e duzentos reais");
    });

    it("converts 1050,00 to mil e cinquenta reais", () => {
      expect(currencyToWords("1050,00")).toBe("mil e cinquenta reais");
    });

    it("converts 2001,00 to dois mil e um reais", () => {
      expect(currencyToWords("2001,00")).toBe("dois mil e um reais");
    });

    it("converts 2100,00 to dois mil e cem reais", () => {
      expect(currencyToWords("2100,00")).toBe("dois mil e cem reais");
    });

    it("converts 2101,00 to dois mil cento e um reais", () => {
      expect(currencyToWords("2101,00")).toBe("dois mil cento e um reais");
    });

    it("converts 10001,00 to dez mil e um reais", () => {
      expect(currencyToWords("10001,00")).toBe("dez mil e um reais");
    });

    it("converts 10100,00 to dez mil e cem reais", () => {
      expect(currencyToWords("10100,00")).toBe("dez mil e cem reais");
    });

    it("converts 10101,00 to dez mil cento e um reais", () => {
      expect(currencyToWords("10101,00")).toBe("dez mil cento e um reais");
    });

    it("converts 1000100,00 to um milhão e cem reais", () => {
      expect(currencyToWords("1000100,00")).toBe("um milhão e cem reais");
    });

    it("converts 1001000,00 to um milhão mil reais", () => {
      expect(currencyToWords("1001000,00")).toBe("um milhão mil reais");
    });

    it("converts 1100000,00 to um milhão cem mil reais", () => {
      expect(currencyToWords("1100000,00")).toBe("um milhão cem mil reais");
    });
  });

  describe("more combined reais and centavos", () => {
    it("converts 0,21 to vinte e um centavos", () => {
      expect(currencyToWords("0,21")).toBe("vinte e um centavos");
    });

    it("converts 100,01 to cem reais e um centavo", () => {
      expect(currencyToWords("100,01")).toBe("cem reais e um centavo");
    });

    it("converts 101,11 to cento e um reais e onze centavos", () => {
      expect(currencyToWords("101,11")).toBe(
        "cento e um reais e onze centavos"
      );
    });

    it("converts 1000,99 to mil reais e noventa e nove centavos", () => {
      expect(currencyToWords("1000,99")).toBe(
        "mil reais e noventa e nove centavos"
      );
    });

    it("converts 1001,01 to mil e um reais e um centavo", () => {
      expect(currencyToWords("1001,01")).toBe("mil e um reais e um centavo");
    });

    it("converts 10000,10 to dez mil reais e dez centavos", () => {
      expect(currencyToWords("10000,10")).toBe("dez mil reais e dez centavos");
    });

    it("converts 100000,50 to cem mil reais e cinquenta centavos", () => {
      expect(currencyToWords("100000,50")).toBe(
        "cem mil reais e cinquenta centavos"
      );
    });

    it("converts 1000001,01 to um milhão e um reais e um centavo", () => {
      expect(currencyToWords("1000001,01")).toBe(
        "um milhão e um reais e um centavo"
      );
    });

    it("converts 2500000,75 to dois milhões quinhentos mil reais e setenta e cinco centavos", () => {
      expect(currencyToWords("2500000,75")).toBe(
        "dois milhões quinhentos mil reais e setenta e cinco centavos"
      );
    });
  });

  describe("error handling", () => {
    it("throws error for non-string input", () => {
      // @ts-expect-error testing invalid input
      expect(() => currencyToWords(123)).toThrow("Input must be a string");
    });

    it("throws error for missing comma", () => {
      expect(() => currencyToWords("1234")).toThrow(
        "Invalid format: expected comma decimal separator"
      );
    });

    it("throws error for wrong decimal places", () => {
      expect(() => currencyToWords("1234,5")).toThrow(
        "Invalid format: expected 2 decimal places"
      );
    });

    it("throws error for non-numeric characters", () => {
      expect(() => currencyToWords("abc,00")).toThrow(
        "Invalid format: non-numeric characters found"
      );
    });
  });
});
