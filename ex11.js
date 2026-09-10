let mat = [
    [1,-2,3,4],
    [5,6,7,-8],
    [-9,10,-11,12],
    [13,-14,15,16]
]
let positivo = 0
let negativo = 0
for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat.length; j++) {
        if(mat[i][j] > 0){
            positivo++
        }
        else{
            negativo++
        }
        
    }
}
console.log("Positivos:"+positivo)
console.log("Negativo:"+negativo)