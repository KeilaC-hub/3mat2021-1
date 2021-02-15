let frutas = ['laranja', 'maça', 'banana', 'pera', 'uva', 'mamao']

// exibir vetor
console.log(frutas)

// tirar o último elemento do vetor
let ultimaFruta = frutas.pop()

console.log(frutas)
console.log(ultimaFruta)

// tirar o primeiro elemento do vetor
let primeiraFruta = frutas.shift()

console.log(frutas)
console.log(primeiraFruta)

// removendo de posições intermediárias
// splice()
// 1º parâmetro: posição que será removida (lembre-se que a contagem começa em zero)
// 2º parâmetro: quantidade de elementos que resão removidos
let terceiraFruta = frutas.splice(2,1) // fruta na posição 2

console.log(frutas)
console.log(terceiraFruta) // splice() sempre retorna um vetor

// inserindo um elemento no fil do vetor
frutas.push('jabuticaba')

console.log(frutas)

// inserir um elemento no início do vetor
frutas.unshift('amora')

console.log(frutas)

// inserindo em posição intermediária
// splice() para inserção
// 1º parâmetro: a posição onde ocorrerá a inserção
// 2º parâmetro: quantos elementos serão excluídos (0)
// Parâmetros seguintes: elementos a serem inseridos

// Inserindo na 4º posição
frutas.splice(3, 0, 'pêssego')
console.log(frutas)

// inserindo duas frutas na 3º posição
frutas.splice(2, 0, 'caqui', 'jaca')
console.log(frutas)

// substituindo 6º fruta
frutas.splice(5, 1, 'abacate')
console.log(frutas)