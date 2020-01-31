var expect = require('expect');
var conversor = require('./conversor');

describe('testes do conversor por extenso', function(){
    it('deve converter 1 para um', function(done) {
        var result = conversor.converterPorExtenso('1');
        expect(result).toBe('um');
        done();
    });

    it('deve converter 10 para dez', function(done) {
        var result = conversor.converterPorExtenso('10');
        expect(result).toBe('dez');
        done();
    });
    it('deve converter 2 a 9 por extenso', function(done) {
        var result = conversor.converterPorExtenso('2');
        expect(result).toBe('dois');
        var result2 = conversor.converterPorExtenso('3');
        expect(result2).toBe('três');
        var result4 = conversor.converterPorExtenso('4');
        expect(result4).toBe('quatro');
        done();
    });

    it('deve converter 11 a 20 por extenso', function(done) {
        var result = conversor.converterPorExtenso('11');
        expect(result).toBe('onze');
        var result2 = conversor.converterPorExtenso('12');
        expect(result2).toBe('doze');
        var result3 = conversor.converterPorExtenso('13');
        expect(result3).toBe('treze');
        var result4 = conversor.converterPorExtenso('14');
        expect(result4).toBe('quatorze');
        var result5 = conversor.converterPorExtenso('15');
        expect(result5).toBe('quinze');
        var result6 = conversor.converterPorExtenso('16');
        expect(result6).toBe('dezesseis');
        done();
    });
    
});

