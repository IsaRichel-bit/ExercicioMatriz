let mat = [
    [1,0,0],
    [0,1,0],
    [0,0,1]
]
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i == j) {
            if (mat[i][j] == 1) {
                } 
                else {
                    console.log("Não é uma matriz identidade")
                    return
                }
        }
        else if (mat[i][j] == 0) {
        }
        else {
            console.log("Não é uma matriz identidade")
            return
        }

    }
  }
console.log("É uma matriz identidade")
