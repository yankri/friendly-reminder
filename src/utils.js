import lunicode from './assets/lunicode';

const luni = new lunicode();
luni.tools.creepify.options.top = false;
luni.tools.creepify.options.middle = true;
luni.tools.creepify.options.bottom = true;
luni.tools.creepify.options.maxHeight = 15;
luni.tools.creepify.options.randomization = 100;
const spongebobTransform = function(input) {
    return input.split('').map((character, index) => {
        if (character === '' || index % 2 == 0) return character.toLowerCase();

        else return character.toUpperCase();
    }).join('')
}

const cuteTransform = function(input) {
  const cutePrepend = `${String.fromCodePoint(0x1F36D)}  ${String.fromCodePoint(0x1F380)}`;
  const cuteAppend = `${String.fromCodePoint(0x1F380)}  ${String.fromCodePoint(0x1F36D)}`;
  const cuteConverted = input.split('').map((character) => {
      if (character === '' || character === ' ') return character;
      const letter =  `${String.fromCodePoint(convertToCuteLetters(character))}` || '';
    
      return letter;
  }).join('');

  return `${cutePrepend} ${cuteConverted} ${cuteAppend}`;
}

const abominationTransform = function(input) {
    return luni.tools.creepify.encode(input);
}

const sparkleSpaceTransform = function(input) {
    const sparkle = String.fromCodePoint(0x2728);

    const spacedWords = input.split(' ').map((word) => {
        return word.split('').join(' ');
    }).join(' / ');

    return `${sparkle} ${spacedWords} ${sparkle}`;
}

const convertToCuteLetters = function (letter) {
    switch(letter.toLowerCase() ){
        case 'a':
            return 0x1D4B6;
        case 'b':
            return 0x1D4B7;
        case 'c':
            return 0x1D4B8;
        case 'd':
            return 0x1D4B9;
        case 'e':
            return 0x212F;
        case 'f':
            return 0x1D4BB;
        case 'g':
            return 0x210A;
        case 'h':
            return 0x1D4BD;
        case 'i':
            return 0x1D4BE;
        case 'j':
            return 0x1D4BF;
        case 'k':
            return 0x1D4C0;
        case 'l':
            return 0x1D4C1;
        case 'm':
            return 0x1D4C2;
        case 'n':
            return 0x1D4C3;
        case 'o':
            return 0x2134;
        case 'p':
            return 0x1D4C5;
        case 'q':
            return 0x1D4C6;
        case 'r':
            return 0x1D4C7;
        case 's':
            return 0x1D4C8;
        case 't':
            return 0x1D4C9;
        case 'u':
            return 0x1D4CA;
        case 'v':
            return 0x1D4CB;
        case 'w':
            return 0x1D4CC;
        case 'x':
            return 0x1D4CD;
        case 'y':
            return 0x1D4CE;
        case 'z':      
            return 0x1D4CF; 
        default:
          return letter;
    }
}

const transformInput = function(input, type) {
    switch(type) {
        case 'sponge':
            return spongebobTransform(input);
        case 'cute':
            return cuteTransform(input);
        case 'enhance': 
            return sparkleSpaceTransform(input);
        case 'abomination': 
            return abominationTransform(input);
    }
}

export {
    spongebobTransform,
    cuteTransform,
    abominationTransform,
    sparkleSpaceTransform,
    transformInput
}