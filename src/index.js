module.exports = function toReadable (number) {
  let read = '';
  number = number + '';
  number = number.split('');
    function firstTen(num){
        switch (num) {
                case '0':
                    read = read + 'zero';
                    break;
                case '1':
                    read = read + 'one';  
                    break;
                case '2':
                    read = read + 'two'; 
                    break;
                case '3':
                    read = read + 'three';
                    break;
                case '4':
                    read = read + 'four'; 
                    break; 
                case '5':
                    read = read + 'five'; 
                    break;
                case '6':
                    read = read + 'six';
                    break;
                case '7':
                    read = read + 'seven'; 
                    break; 
                case '8':
                    read = read + 'eight'; 
                    break;
                case '9':
                    read = read + 'nine'; 
                    break;   
                default:
                break;
        }
    }
    function secondTen(num){
        switch (num) {
                case '1':
                    switch (number[number.length - 2] + number[number.length - 1]) {
                        case '10':
                            read = read + 'ten';
                            break;
                        case '11':
                            read = read + 'eleven';
                            break;
                        case '12':
                            read = read + 'twelve';
                            break;
                        case '13':
                            read = read + 'thirteen';
                            break;
                        case '14':
                            read = read + 'fourteen';
                            break;
                        case '15':
                            read = read + 'fifteen';
                            break;
                        case '16':
                            read = read + 'sixteen';
                            break;
                        case '17':
                            read = read + 'seventeen';
                            break;
                        case '18':
                            read = read + 'eighteen';
                            break;
                        case '19':
                            read = read + 'nineteen';
                            break;
                        default:
                            break;
                    }
                    break;
                case '2':
                    read = read + 'twenty'; 
                    break;
                case '3':
                    read = read + 'thirty';
                    break;
                case '4':
                    read = read + 'forty'; 
                    break; 
                case '5':
                    read = read + 'fifty'; 
                    break;
                case '6':
                    read = read + 'sixty';
                    break;
                case '7':
                    read = read + 'seventy'; 
                    break; 
                case '8':
                    read = read + 'eighty'; 
                    break;
                case '9':
                    read = read + 'ninety'; 
                    break;   
                default:
                    break;
        }
    }

    function thirdTen (num) {
        switch (num) {
            case '1':
                read = read + 'one hundred';  
                break;
            case '2':
                read = read + 'two hundred'; 
                break;
            case '3':
                read = read + 'three hundred';
                break;
            case '4':
                read = read + 'four hundred'; 
                break; 
            case '5':
                read = read + 'five hundred'; 
                break;
            case '6':
                read = read + 'six hundred';
                break;
            case '7':
                read = read + 'seven hundred'; 
                break; 
            case '8':
                read = read + 'eight hundred'; 
                break;
            case '9':
                read = read + 'nine hundred'; 
                break;   
            default:
            break;
        }
    }

    if (number.length == 1)
        firstTen(number[0]);

    if (number.length == 2){
        secondTen(number[0]);
        if (number[0] != '1' && number[1] != '0'){
            read = read + ' ';
            firstTen(number[1]);
        }
    }
    
    if (number.length == 3){
        thirdTen(number[0]);
        if (number[1] != '0') {
            read = read + ' ';
            secondTen(number[1]);
        }
        if (number[1] != '1' && number[2] != '0') {
            read = read + ' ';
            firstTen(number[2]);
        }
    }  


    return read;
}
