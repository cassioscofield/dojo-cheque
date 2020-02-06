module.exports = {
    converterPorExtenso: converterPorExtenso
};

function converteDe1a99(argAsInt) {
    if (argAsInt < 20 && argAsInt > 10) {
        return tabelaDeOnzeADezenove[argAsInt];
    } else if (argAsInt < 10) {
        return tabelaDeUnidades[argAsInt];
    } else if (argAsInt === 10) {
        return 'dez';
    } else if (argAsInt % 10 == 0 && argAsInt < 100) {
        return tabelaDeDezenas[argAsInt];
    } else if (argAsInt > 20 && argAsInt < 100) {
        return `${tabelaDeDezenas[Math.floor(argAsInt/10)*10]} e ${tabelaDeUnidades[argAsInt%10]}` ;
    }
    return null;
}

function converterPorExtenso(args) {
    var argAsInt = parseInt(args, 10);
    if (argAsInt < 100) {
        return converteDe1a99(argAsInt)
    }
    if (argAsInt % 100 == 0) {
        return tabelaDeCentenas[argAsInt];
    } else {
        if (argAsInt < 200) {
            if (argAsInt < 110) {
                return `cento e ${tabelaDeUnidades[argAsInt%10]}`;
            }
            return `cento e ${converteDe1a99(argAsInt%100)}`
        }
        return `${tabelaDeCentenas[Math.floor(argAsInt/100)*100]} e ${converteDe1a99(argAsInt%100)}`;
    }
}

var tabelaDeUnidades = {
    '0':  'zero',
    '1': 'um',
    '2': 'dois',
    '3': 'três',
    '4': 'quatro',
    '5': 'cinco',
    '6': 'seis',
    '7': 'sete',
    '8': 'oito',
    '9': 'nove',
};

var tabelaDeOnzeADezenove = {
    '11': 'onze',
    '12': 'doze',
    '13': 'treze',
    '14': 'quatorze',
    '15': 'quinze',
    '16': 'dezesseis',
    '17': 'dezessete',
    '18': 'dezoito',
    '19': 'dezenove'
};

var tabelaDeDezenas = {
    '10': 'dez',
    '20': 'vinte',
    '30': 'trinta',
    '40': 'quarenta',
    '50': 'cinquenta',
    '60': 'sessenta',
    '70': 'setenta',
    '80': 'oitenta',
    '90': 'noventa'
};

var tabelaDeCentenas = {
    '100': 'cem',
    '200': 'duzentos',
    '300': 'trezentos',
    '400': 'quatrocentos',
    '500': 'quinhentos',
    '600': 'seiscentos',
    '700': 'setecentos',
    '800': 'oitocentos',
    '900': 'novecentos'
};

