let mat = [
    [10,45,3,7.7,99],
    [9,27,93,1,56],
    [0,0,71,22,69]
]
for (let i = 0; i < mat.length; i++) {
    let soma = 0
    for (let j =0; j < mat[i].length; j++) {
        soma = soma + mat[i][j]
    }
    let media = soma / 5
    console.log("Média:", media)
}
console.table(mat)
