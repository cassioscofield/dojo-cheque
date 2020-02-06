var expect = require('expect');
var conversor = require('./conversor');

describe('testes do conversor por extenso', function(){
    it('deve converter 1 para um', function(done) {
        var result = conversor.converterPorExtenso('1');
        expect(result).toBe('um');
        done();
    });
    it('deve converter 0 para zero', function(done) {
        var result = conversor.converterPorExtenso('0');
        expect(result).toBe('zero');
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

    it('deve converter as dezenas', function(done) {
        var result = conversor.converterPorExtenso('20');
        expect(result).toBe('vinte');
        var result2 = conversor.converterPorExtenso('30');
        expect(result2).toBe('trinta');
        var result3 = conversor.converterPorExtenso('40');
        expect(result3).toBe('quarenta');
        var result4 = conversor.converterPorExtenso('50');
        expect(result4).toBe('cinquenta');
        var result5 = conversor.converterPorExtenso('60');
        expect(result5).toBe('sessenta');
        var result6 = conversor.converterPorExtenso('70');
        expect(result6).toBe('setenta');
        var result7 = conversor.converterPorExtenso('80');
        expect(result7).toBe('oitenta');
        var result8 = conversor.converterPorExtenso('90');
        expect(result8).toBe('noventa');
        done();
    });
    it('deve converter de 21 a 99', function(done) {
        
        let b = {
            '21':'vinte e um',
            '22':'vinte e dois',
            '23':'vinte e três',
            '24':'vinte e quatro',
            '25':'vinte e cinco',
            '26':'vinte e seis',
            '27':'vinte e sete',
            '28':'vinte e oito',
            '29':'vinte e nove',
            '31':'trinta e um',
            '46': 'quarenta e seis',
            '87': 'oitenta e sete',
            '99': 'noventa e nove'
        };
        for(let a in b){
            var result = conversor.converterPorExtenso(a);
            expect(result).toBe(b[a]);           
        }
  
        done();
    });
    it('deve converter 100 para cem', function(done) {
        var result = conversor.converterPorExtenso('100');
        expect(result).toBe('cem');
        done();
    });
    it('deve converter 101 para cento e um', function(done) {
        var result = conversor.converterPorExtenso('101');
        expect(result).toBe('cento e um');
        done();
    });
    it('deve converter 111 para cento e onze', function(done) {
        var result = conversor.converterPorExtenso('111');
        expect(result).toBe('cento e onze');
        done();
    });
    it('deve converter 111 para cento e onze', function(done) {
        let b = {
            '200':'duzentos',
            '220':'duzentos e vinte',
            '290':'duzentos e noventa',
            '345':'trezentos e quarenta e cinco',
            '690':'seiscentos e noventa',
            '801':'oitocentos e um',
            '725':'setecentos e vinte e cinco',
            '999': 'novecentos e noventa e nove'
        };
        for(let a in b){
            var result = conversor.converterPorExtenso(a);
            expect(result).toBe(b[a]);           
        }
        done();
    });

});

