var action = process.argv[3];
var param1 = parseFloat(process.argv[2]);
var param2 = parseFloat(process.argv[4]);

calculator(action, param1, param2);

function calculator(func, a, b) {
    var result;
    switch (func) {
        case 'a': 
        case '+':
            result = addition(a, b);
            break;
        case 's':
        case '-':
            result = subtraction(a, b);
            break;
        case 'm':
        case '*':
            result = multiplication(a, b);
            break;
        case 'd':
        case '/':
        case ':':
            result = division(a, b);
            break;
        default:
            throw 'incorrect action!';
            break;
    }
    console.log(result);
}

function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        throw 'division by 0!';
    }
}