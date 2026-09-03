let mat = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
let soma = 0
let n = mat.length

for (let i = 0; i < n; i++) {
        soma = soma +mat[i][n - 1 - i]
}
console.log(soma)