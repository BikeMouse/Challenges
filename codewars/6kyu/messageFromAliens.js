/*
Aliens send messages to our planet, but they use a very strange language. Try to decode the messages!
*/

function decode(m) {
    let clean = m.split(m[0]).reverse().filter((e)=>e !== '');
    let result = '';
    for (let i = 0; i < clean.length; i++){
      switch (clean[i]) {
      case '/\\':
        result += 'a';
        break;
      case ']3':
        result += 'b';
        break;
      case '(':
        result += 'c';
        break;
      case '|)':
        result += 'd';
        break;
      case '[-':
        result += 'e';
        break;
      case '/=':
        result += 'f';
        break;
      case '(_,':
        result += 'g';
        break;
      case '|-|':
        result += 'h';
        break;
      case '|':
        result += 'i';
        break;
      case '_T':
        result += 'j';
        break;
      case '/<':
        result += 'k';
        break;
      case '|_':
        result += 'l';
        break;
      case '|\\/|':
        result += 'm';
        break;
      case '|\\|':
        result += 'n';
        break;
      case '()':
        result += 'o';
        break;
      case '|^':
        result += 'p';
        break;
      case '()_':
        result += 'q';
        break;
      case '/?':
        result += 'r';
        break;
      case '_\\~':
        result += 's';
        break;
      case '~|~':
        result += 't';
        break;
      case '|_|':
        result += 'u';
        break;
      case '\\/':
        result += 'v';
        break;
      case '\\/\\/':
        result += 'w';
        break;
      case '><':
        result += 'x';
        break;
      case '`/':
        result += 'y';
        break;
      case '~/_':
        result += 'z';
        break;
      default:
        result += ' ';
        break;
      };
    };
    return result;
}
  