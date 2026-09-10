let mat = [
    [1,-2,3,4],
    [5,6,7,-8],
    [-9,10,-11,12],
    [13,-14,15,16]
]
let maior = 0
let linha = 0
let coluna =0
for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat.length; j++) {
        if(mat[i][j] > maior){
            maior = mat[i][j]
            linha = i
            coluna = j
        }
        
    }
}
    console.log("O maior número é:", maior)
    console.log("A linha é",linha)
    console.log("A Coluna é:",coluna)