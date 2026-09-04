let jogador = [
    {nome: "Yuri Alberto", posicao: "Atacante", time: "Corinthians"},
    {nome: "Neymar", posicao: "Meia", time: "Santos"},
    {nome: "Cristiano Ronaldo", posicao: "Atacante", time: "Juventus"},
    {nome: "Messi", posicao: "Atacante", time: "Miami"},
    {nome: "Dybala", posicao: "Ponta", time: "Roma"}
];
let mat = [
    [1,3,0,2],
    [0,0,2,1],
    [2,1,0,3],
    [1,2,3,0],
    [3,0,0,1]
];
// Letra A e C
let maior = 0;
let jogadorMaior = "";
for (let i = 0; i < 5; i++){
    let soma = 0;
    for (let j = 0; j < 4; j++){
        soma = soma + mat[i][j];
    }
    let media = soma / 4;
    console.log("Média do Jogador:",jogador[i].nome,media);
if (media > maior){
    maior = media;
    jogadorMaior = i;
}
}
console.log("O jogador com maior média de gols por partida é:",jogador[jogadorMaior].nome,"Posição:",jogador[jogadorMaior].posicao,"com média de:",maior);
// Letra B e D
let menor = Infinity;
let partida = "";
for (let j = 0; j < 4; j++){
    let soma =0;
    for (let i =0; i < 5; i++){
        soma = soma + mat[i][j];
    }
    let media = soma / 5;
    console.log("Média de Gols por Partida é:",media);
    if (media < menor){
        menor = media;
        partida = j;
    }
}
console.log("A menor média de gols é:",menor,"na partida:",partida + 1);
