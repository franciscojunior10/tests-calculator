const calc = require('../src/calc');

describe(('Calc'), () => {
    it(('should be able to sum'), () => {
        const result = calc.somar(1,2)

        expect(result).toBe(3)
    });

    it(('should be able to subtract'), () => {
        const result = calc.subtrair(3,1)

        expect(result).toBe(2)
    });

    it(('should be able to multiply'), () => {
        const result = calc.multiplicar(1,2)

        expect(result).toBe(2)
    });

    it(('should be able to divide'), () => {
        const result = calc.dividir(4,2)

        expect(result).toBe(2)
    });
})