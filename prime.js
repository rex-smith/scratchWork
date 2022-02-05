function getNumber() {
    let number = 0;
    while (number < 2) {
        number = prompt('Please enter a positive number greater than 1: ');
    }
    return number;
    
}

function outputPrimes(number) {
    let text = '';
    outer: for (i = 2; i<=number; i++) {
        for (j=2; j<=i; j++) {
            if (i%j === 0) {
                if (i===j) {
                    text += i +' ';
                } else {
                    break;
                }
            }
        }
    }
    return text;
}

function prime() {
    let userNumber = getNumber();
    console.log(outputPrimes(userNumber));
}

prime();