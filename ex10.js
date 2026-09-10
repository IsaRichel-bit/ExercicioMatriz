let mat = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]
for(let i =0; i < 4; i++){
    let maior = 0
    for(let j = 0; j < 4; j++){
        if(mat[i][j] > maior){
            maior = mat[i][j]
        }
    }
    console.log("O maior elemento da linha", i, "é", maior)
}
