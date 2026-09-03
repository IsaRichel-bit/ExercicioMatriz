let mat = [
    [1,2],
    [4,5],
    [7,8]
]
let transposta = []
for (let i = 0; i < 2; i++){
    transposta[i] = []
    for(let j = 0; j < 3; j++){
        transposta[i][j] = mat[j][i]
    }
}
console.log(transposta)