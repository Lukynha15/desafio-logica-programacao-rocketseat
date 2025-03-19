let numberOne = prompt("Digite seu primeiro valor")
let numberTwo = prompt("Digite seu segundo valor")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

let sum = numberOne + numberTwo
let sub = numberOne - numberTwo
let mult = numberOne * numberTwo
let half = numberOne / numberTwo

alert(`A soma dos números foi ${sum}`)
alert(`A subtração dos números foi ${sub}`)
alert(`A multiplicação dos números foi ${mult}`)
alert(`A divisão dos números foi ${half.toFixed(2)}`)

if ( sum % 2 === 0 ) {
  alert("A soma dos números foi par")
} else {
  alert("A soma dos números foi impar")
}

if (numberOne == numberTwo) {
  alert("Números iguais")
} else {
  alert("Números diferentes")
}
