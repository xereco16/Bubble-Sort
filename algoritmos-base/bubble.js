const{
    ler,
    escrever,
    exec
} = require('./utils/utils')


function random(qnt) {
    let arr = []
    let cont = 0
    while (cont<10) {
        arr.push(Math.floor(Math.random()*qnt))
        cont++
    }
    return arr
}


function BubbleSort(arr) {
    for (let last = arr.length - 1; last > 0 ; last--) {
        for (let index = 0; index < last; index++) {
            if (arr[index]>arr[index+1]) {
                [arr[index], arr[index+1]] = [arr[index+1], arr[index]]
            }
        }   
    }
    return arr
}
let rand = random (10)
console.log(rand);
console.log(BubbleSort(rand));