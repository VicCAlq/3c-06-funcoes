/*
Assunto 01 - Funções, Argumentos e Retornos

Uma das principais utilidades de escrever código é a possibilidade de organizar
instruções em blocos reutilizáveis. A estrutura que nos permite isso é chamada
de "Função".

Uma função é como uma receita: definimos uma série de passos uma única vez, e
depois podemos executar essa receita quantas vezes quisermos, apenas chamando
o nome dela. Em JavaScript, usamos a palavra-chave "function" para criar uma função.

Vamos ver a sintaxe básica:

function nomeDaFuncao() {
  código a ser executado
}

Para "chamar" (executar) a função, escrevemos:

nomeDaFuncao()

Exemplo básico:

function dizerOla() {
  console.log("Olá!")
}

dizerOla()

- O código acima imprime "Olá!" no console

=====================================
ARGUMENTOS (PARÂMETROS)
=====================================

Frequentemente, queremos que nossas funções trabalhem com dados diferentes
cada vez que são chamadas. Para isso, usamos "argumentos" (também chamados de
parâmetros).

Argumentos são valores que enviamos para dentro da função quando a chamamos.
Dentro da função, esses valores recebem um nome específico que definimos na
criação da função.

Veja o exemplo abaixo:

function nomeDaFuncao(nomeDoArgumento) {
  código que usa nomeDoArgumento
}

nomeDaFuncao(valorQueSeraEnviado)

Exemplo:

function cumprimentar(nome) {
  console.log("Olá, " + nome + "!")
}

cumprimentar("Maria")
cumprimentar("João")

- O código acima imprime "Olá, Maria!" e depois "Olá, João!"

Note que "nome" dentro da função é apenas um "apelido" local para o valor
que foi enviado. A função não sabe (e não precisa saber) como a variável se
chama fora do contexto dela.

=====================================
POR QUE USAMOS O NOME DO ARGUMENTO DENTRO DA FUNÇÃO?
=====================================

Isso é fundamental para entender como funções funcionam. Quando você envia
uma variável como argumento, o valor dela é copiado para o parâmetro da
função. O nome original da variável não é transportado para dentro da função.

Vamos entender com um exemplo:

let nomeDoUsuario = "Carlos"

function cumprimentar(nome) {
  console.log("Bem-vindo, " + nome)
}

cumprimentar(nomeDoUsuario)

O que acontece acima:
1. A variável "nomeDoUsuario" tem o valor "Carlos"
2. Quando chamamos cumprimentar(nomeDoUsuario), o VALOR "Carlos" é enviado
3. Dentro da função, esse valor é recebido pelo parâmetro "nome"
4. A função trabalha apenas com "nome", não conhece "nomeDoUsuario"

Isso permite que a mesma função seja usada com diferentes variáveis:

let aluno = "Ana"
let professor = "Pedro"

function mostrarNome(pessoa) {
  console.log("Nome: " + pessoa)
}

mostrarNome(aluno)     // imprime "Nome: Ana"
mostrarNome(professor) // imprime "Nome: Pedro"
mostrarNome("Lucas")   // imprime "Nome: Lucas"

Em todos os casos, dentro da função usamos "pessoa" para nos referir ao
valor recebido, independentemente de como a variável se chamava fora da
função ou se foi enviado um valor direto.

=====================================
MÚLTIPLOS ARGUMENTOS
=====================================

Uma função pode receber mais de um argumento. Separamos os parâmetros por vírgula:

function somar(a, b) {
  console.log(a + b)
}

somar(5, 3)  // imprime 8
somar(10, 7) // imprime 17

A ordem dos argumentos importa:

function apresentar(nome, idade) {
  console.log(nome + " tem " + idade + " anos")
}

apresentar("Julia", 25)  // imprime "Julia tem 25 anos"
apresentar(19, "Joaquim")  // imprime "19 tem Joaquim anos"

=====================================
RETORNO (RETURN)
=====================================

Até agora nossas funções apenas mostraram valores no console. Mas frequentemente
queremos que a função NOS DEVOLVA um resultado para podermos usar depois.
Para isso usamos o "return".

O "return" faz duas coisas:
1. Define qual valor a função deve devolver
2. Encerra a execução da função imediatamente

Sintaxe:

function nomeDaFuncao() {
  return valor
}

Exemplo:

function dobrar(numero) {
  return numero * 2
}

let resultado = dobrar(5)
console.log(resultado)  // imprime 10

A função calcula o dobro e RETORNA esse valor. Podemos guardar esse valor
em uma variável ou usar diretamente:

console.log(dobrar(4))  // imprime 8

=====================================
CASOS DE USO
=====================================

1. Função simples sem argumentos:

function mostrarData() {
  console.log("Hoje é 29/03/2026")
}

mostrarData()

-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

2. Função com argumento:

function verificarMaioridade(idade) {
  if (idade >= 18) {
    console.log("Maior de idade")
  } else {
    console.log("Menor de idade")
  }
}

verificarMaioridade(20)
verificarMaioridade(15)

-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

3. Função com retorno:

function calcularArea(base, altura) {
  return base * altura
}

let area1 = calcularArea(5, 3)
let area2 = calcularArea(10, 4)
console.log(area1)  // 15
console.log(area2)  // 40

-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

4. Função com retorno usada diretamente:

function juntarNomes(primeiro, segundo) {
  return primeiro + " " + segundo
}

console.log(juntarNomes("Ana", "Silva"))

-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

5. Função que modifica um valor e retorna:

function aplicarDesconto(preco, percentual) {
  let desconto = preco * (percentual / 100)
  return preco - desconto
}

let precoOriginal = 100
let precoComDesconto = aplicarDesconto(precoOriginal, 10)
console.log(precoComDesconto)  // 90

-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

6. Função que verifica condição e retorna booleano:

function ehPar(numero) {
  return numero % 2 === 0
}

console.log(ehPar(4))  // true
console.log(ehPar(7))  // false

-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

7. Função que processa lista e retorna nova lista:

function dobrarValores(lista) {
  let novaLista = []
  let indice = 0
  
  while (indice < lista.length) {
    novaLista.push(lista[indice] * 2)
    indice = indice + 1
  }
  
  return novaLista
}

let numeros = [1, 2, 3, 4]
let numerosDobrados = dobrarValores(numeros)
console.log(numerosDobrados)  // [2, 4, 6, 8]

-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

8. Função que retorna baseado em condição:

function maiorNumero(a, b) {
  if (a > b) {
    return a
  }
  return b
}

console.log(maiorNumero(10, 5))   // 10
console.log(maiorNumero(3, 8))    // 8

=====================================
IMPORTANTE SOBRE RETURN
=====================================

Quando uma função encontra um "return", ela para imediatamente e devolve
o valor. Qualquer código após o return NÃO é executado:

function exemplo() {
  return "acabei"
  console.log("isso nunca aparece")
}

console.log(exemplo())  // apenas imprime "acabei"

Uma função pode ter múltiplos returns (em diferentes caminhos condicionais),
mas apenas um será executado:

function avaliarNota(nota) {
  if (nota >= 7) {
    return "Aprovado"
  }
  if (nota >= 5) {
    return "Recuperação"
  }
  return "Reprovado"
}

console.log(avaliarNota(8))  // "Aprovado"
console.log(avaliarNota(6))  // "Recuperação"
console.log(avaliarNota(4))  // "Reprovado"

=====================================
RESUMO
=====================================

- function: palavra-chave para criar uma função
- argumentos/parâmetros: valores que a função recebe para trabalhar
- dentro da função usamos os nomes dos parâmetros, não das variáveis externas
- return: devolve um valor e encerra a função
- funções permitem reutilizar código e organizar melhor o programa

------------------------------------------------------------------------------

Questões 01 a 12: Funções

MÍNIMO NECESSÁRIO PARA NOTA MÁXIMA: 9 questões
*/

/* Questão 1
Crie uma função chamada "saudacao" que não recebe nenhum argumento e retorna 
a string "Bom dia!". Envie na resposta a função criada, sem executá-la (basta 
enviar o nome da função sem os parênteses)
*/
// Escreva o código da solução abaixo:

function saudacao() {
 return "Bom dia!"
}

export const resposta01 = saudacao

/* Questão 2
Crie uma função chamada "dobro" que recebe um número como argumento e retorna 
o dobro desse número. Envie na resposta a função criada, sem executá-la (basta 
enviar o nome da função sem os parênteses)
*/
// Escreva o código da solução abaixo:

function dobro(numero2) {
 return numero2 * 2
}

export const resposta02 = dobro


/* Questão 3
Crie uma função chamada "ehPositivo" que recebe um número como argumento e 
retorna true se o número for maior que zero, ou false caso contrário. 
Envie na resposta a função criada, sem executá-la (basta enviar o nome 
da função sem os parênteses)
*/
// Escreva o código da solução abaixo:

function ehPositivo(numero3) {
if( numero3 > 0) {
return true
}
else { 
return false
}
}

export const resposta03 = ehPositivo

/* Questão 4
Crie uma função chamada "nomeCompleto" que recebe dois argumentos: 
"primeiroNome" e "sobrenome", e retorna o nome completo separado por 
um espaço. Envie na resposta a função criada, sem executá-la 
(basta enviar o nome da função sem os parênteses)
*/
// Escreva o código da solução abaixo:

function nomeCompleto(primeiroNome, sobrenome) {
return primeiroNome + ' ' + sobrenome 
}

export const resposta04 = nomeCompleto

// Lista para as questões 5 a 8
export const travaLinguas = [
  "Três pratos de trigo para três tigres tristes",
  "O rato roeu a roupa do rei de Roma",
  "A aranha arranha a rama, a rama arranha a aranha",
  "Fui ao fundo do poço buscar um pouco de aço, mas no fundo do poço não havia aço nenhum",
  "O sábio não diz o que sabe, o tolo não sabe o que diz",
  "Papo de papa-pipa, pipa de papa-papo",
  "Um prato de trigo para dois tigres tristes"
]

/* Questão 5
Crie uma função chamada "contarTravaLinguas" que a lista de travaLinguas 
como argumento e retorna a quantidade total de trava-línguas (use a 
propriedade .length). Envie na resposta a função criada, sem executá-la 
(basta enviar o nome da função sem os parênteses)
*/
// Escreva o código da solução abaixo:

function contarTravaLinguas(travaLinguas) {
return travaLinguas.length; }

export const resposta05 = contarTravaLinguas

/* Questão 6
Crie uma função chamada "obterTravaLingua" que recebe um número como 
argumento (representando um índice) e retorna o trava-língua correspondente 
àquele índice na lista "travaLinguas". Considere que o primeiro item 
está no índice 0. Envie na resposta a função criada, sem executá-la 
(basta enviar o nome da função sem os parênteses)
*/
// Escreva o código da solução abaixo:

function obterTravaLingua(indice6) {
return travaLinguas[indice6] }

export const resposta06 = obterTravaLingua

/* Questão 7
Crie uma função chamada "contarPalavrasTravaLingua" que recebe um 
número como argumento (representando um índice) e retorna a quantidade 
de palavras do trava-língua naquele índice. Dica: use o método .split(" ") 
diretamente no texto para separar as palavras e depois conte quantas existem.
Este método retorna uma lista. Envie na resposta a função criada, sem 
executá-la (basta enviar o nome da função sem os parênteses)
*/
// Escreva o código da solução abaixo:

function contarPalavrasTravaLingua(indice7) {
return travaLinguas[indice7].split(" ").length;
}

export const resposta07 = contarPalavrasTravaLingua

/* Questão 8
Crie uma função chamada "buscarTravaLinguasComPalavra" que recebe uma 
palavra como argumento e retorna uma lista (array) contendo apenas os 
trava-línguas que possuem aquela palavra. Dica: percorra a lista com 
um loop while, verifique se cada item inclui a palavra usando o método 
.includes(), e adicione à nova lista apenas os que atenderem à condição. 
Envie na resposta a função criada, sem executá-la (basta enviar 
o nome da função sem os parênteses)
*/
// Escreva o código da solução abaixo:

function buscarTravaLinguasComPalavra(palavra) {
  const travaLinguasComPalavra = [];
  let indice8 = 0;
  
  while (indice8 < travaLinguas.length) {
if( travaLinguas[indice8].includes(palavra))
{
  travaLinguasComPalavra.push(travaLinguas[indice8]);
  }
  indice8++;
  }
return travaLinguasComPalavra 
}

export const resposta08 = buscarTravaLinguasComPalavra

// Lista para as questões 9 a 12
export const elementos = [
  { nome: "Hidrogênio", numeroAtomico: 1 },
  { nome: "Hélio", numeroAtomico: 2 },
  { nome: "Lítio", numeroAtomico: 3 },
  { nome: "Berílio", numeroAtomico: 4 },
  { nome: "Boro", numeroAtomico: 5 },
  { nome: "Carbono", numeroAtomico: 6 },
  { nome: "Nitrogênio", numeroAtomico: 7 },
  { nome: "Oxigênio", numeroAtomico: 8 },
  { nome: "Flúor", numeroAtomico: 9 },
  { nome: "Neônio", numeroAtomico: 10 },
  { nome: "Sódio", numeroAtomico: 11 },
  { nome: "Magnésio", numeroAtomico: 12 },
  { nome: "Alumínio", numeroAtomico: 13 },
  { nome: "Silício", numeroAtomico: 14 }
]

/* Questão 9
Crie uma função chamada "contarElementos" que recebe a lista "elementos" 
como argumento e retorna a quantidade total de elementos químicos na 
lista. Envie na resposta a função criada, sem executá-la (basta 
enviar o nome da função sem os parênteses)
*/
// Escreva o código da solução abaixo:

function contarElementos(elementos) {
return elementos.length;
}
export const resposta09 = contarElementos

/* Questão 10
Crie uma função chamada "buscarPorNumeroAtomico" que recebe dois 
argumentos: a lista "elementos" e um número atômico. A função deve 
retornar o objeto do elemento que possui aquele número atômico, 
ou null se não encontrar. Envie na resposta a função criada, sem 
executá-la (basta enviar o nome da função sem os parênteses)
*/
// Escreva o código da solução abaixo:

function buscarPorNumeroAtomico(elementos, numeroAtomico) {
  let indice10 = 0;
  
  while(indice10 < elementos.length) {
    if(elementos[indice10].numeroAtomico === numeroAtomico) {
      return elementos[indice10]
    }
    indice10++;
  }
  return null;
}

export const resposta10 = buscarPorNumeroAtomico

/* Questão 11
Crie uma função chamada "listarNomesElementos" que recebe a lista 
"elementos" como argumento e retorna uma nova lista contendo 
apenas os nomes (strings) dos elementos, na mesma ordem. Envie na 
resposta a função criada, sem executá-la (basta enviar o 
nome da função sem os parênteses)
*/
// Escreva o código da solução abaixo:

function listarNomesElementos(elementos) {
  const nomeElementos11 = []
  let indice11 = 0;
  
  
  while(indice11 < elementos.length) {
    nomeElementos11.push(elementos[indice11].nome);
    
    indice11++;
}
return nomeElementos11;
}

export const resposta11 = listarNomesElementos

/* Questão 12
Crie uma função chamada "elementosComNumeroPar" que recebe a lista 
"elementos" como argumento e retorna uma nova lista contendo apenas 
os elementos (objetos completos) cujo número atômico é par. Envie na 
resposta a função criada, sem executá-la (basta enviar o nome da 
função sem os parênteses)
*/
// Escreva o código da solução abaixo:

function elementosComNumeroPar(elementos) {
  const elementosPar12 = []
  let indice12 = 0;
  
  while(indice12 < elementos.length) {
    if (elementos[indice12].numeroAtomico % 2 === 0)
    {
    elementosPar12.push(elementos[indice12]);
}
indice12++;
}
return elementosPar12;
}
export const resposta12 = elementosComNumeroPar

