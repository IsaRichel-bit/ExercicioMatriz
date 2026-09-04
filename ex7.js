let a = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
let b = [ [10, 11, 12], [13, 14, 15], [16, 17, 18] ];
let soma = [];

for (let i =0; i < 3; i++){
    soma[i] = [];
    for (let j =0;j < 3; j++){
        soma[i][j] = a[i][j] + b[i][j]
    }
}
for (let i =0; i < 3; i++){
    console.log(soma[i]);
}