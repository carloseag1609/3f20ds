class Matriz {
    
    constructor(filas = 10, columnas = 10) {
        this.filas = filas;
        this.columnas = columnas;
        this.arr = [];
        this.transpuesta = [];
    }

    llenar() {
        for(let i = 0; i < this.filas; i++) {
            let columna = [];
            for(let j = 0; j < this.columnas; j++) {
                columna.push(Math.floor(Math.random() * 11));
            }
            this.arr.push(columna);
        }
    }

    mostrar() {
        return this.arr;
    }

    mostrarTranspuesta() {
        return this.transpuesta;
    }

    transponer() {
        // LLenar matriz transpuesta con ceros para corregir error de acceder a indice undefined
        for(let i = 0; i < this.filas; i++) {
            let columna = [];
            for(let j = 0; j < this.columnas; j++) {
                columna.push(0);
            }
            this.transpuesta.push(columna);
        }

        if(this.columna === this.filas) {
            for(let i = 0; i < this.filas; i++) {
                for(let j = 0; j < this.filas; j++) {
                    this.transpuesta[i][j] = this.arr[j][i];
                }
            }
        } else {
            for(let i = 0; i < this.columnas; i++) {
                for(let j = 0; j < this.filas; j++) {
                    this.transpuesta[i][j] = this.arr[j][i];
                }
            }
        }
    }

    sacarFila(fila = 0) {
        return fila < this.filas ? this.arr[fila - 1] : 'Fila no válida'
    }

    sacarColumna(columna = 0) {
        return columna < this.columnas ? this.arr.map((value) => value[columna - 1]) : 'Columna no válida'
    }

}

module.exports = Matriz;
