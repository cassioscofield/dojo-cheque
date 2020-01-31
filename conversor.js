module.exports = {
    converterPorExtenso: converterPorExtenso
};

function converterPorExtenso(args) {
    // if( args == '1'){
    //     return 'um';
    // } else if(args == '10'){
    //     return 'dez';
    // } else if(args == '2'){
    //     return 'dez';
    // } else if(args == '10'){
    //     return 'dez';
    // }
    if (parseInt(args, 10) < 20 && parseInt(args, 10) > 10) {
        return tabelaDeOnzeADezenove[args];
    } else if (parseInt(args, 10) < 10) {
        return tabelaDeUnidades[args];
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
}

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

