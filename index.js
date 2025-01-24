let x = 10

const executor = (resolve) => {
    resolve(x)
}

const promise = new Promise(executor);

promise
    .then(number => number * 2)
    .then(number => number + 10)
    .then(number => number - 5)
    .then(number => console.log(number));