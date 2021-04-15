let sumTwenty = 0;

for (i = 1; i <= 20; i++) {
    sumTwenty = sumTwenty + i;
}

console.log('1:', sumTwenty);

let numbers = ['one', 'two', 'three', 'four', 'five'];

for (i = 0; i < 5; i++) {
    if (numbers[i] === 'one') {
        console.log('There is one bottle of beer on the wall.');
    } else {
        console.log(`There are ${numbers[i]} bottles of beer on the wall`);
    }
}

for (i = 0; i < 21; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even.`);
    } else {
        console.log(`${i} is odd.`);
    }
}

for (i = 1; i <= 10; i++) {
    for (j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

let sumThousand = 0;

for (i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sumThousand = sumThousand + i;
    }
}

console.log('6:', sumThousand);

for (i = 1; i <=10; i++) {
    process.stdout.write(`${i * 100} `);
}
console.log('');

for (i = 0; i < 6; i++) {
    process.stdout.write(`${i * 2} `);
}
console.log('');

for (i = 1; i < 6; i++) {
    process.stdout.write(`${i * 3} `);
}
console.log('');

for (i = 9; i >= 0; i--) {
    process.stdout.write(`${i} `);
}
console.log('');

for (i = 1; i < 5; i++) {
    process.stdout.write(`${i} ${i} ${i} `);
}
console.log('');

for (i = 1; i < 5; i++) {
    process.stdout.write(`${i} ${i} ${i} `);
}
console.log('');

for (i = 0; i < 5; i++) {
    process.stdout.write(`${i} `);
} for (i = 0; i < 5; i++) {
    process.stdout.write(`${i} `);
} for (i = 0; i < 5; i++) {
    process.stdout.write(`${i} `);
}
console.log('');

const wordPalindrome = 'tarrarrat';

let wordArray = wordPalindrome.split("");

for (i = 0; i < wordArray.length / 2; i++) {
    if (wordArray[i] !== wordArray[wordArray.length - i - 1]) {
        console.log(wordArray[i], wordArray[wordArray.length - i]);
        console.log('Word is not a palindrome');
        break;
    } else if (i + 1 >= wordArray.length / 2) {
        console.log('Word is a palindrome');
        break;
    }
}