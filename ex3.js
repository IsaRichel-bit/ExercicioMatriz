let mat = [
    [10,45,3,7.7,99],
    [9,27,93,1,56],
    [0,0,71,22,69]
]
let temperatura = 0;
let dia = 0;
let cidade = 0;
for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++){
        if (mat[i][j] > temperatura) {
            temperatura = mat[i][j];
            dia = j;
            cidade = i;
        }
    }
}
console.log ("A maior temperatura é", temperatura)
console.log ("O dia da maior temperatura é", dia )
console.log ("A cidade da maior temperatura é", cidade )