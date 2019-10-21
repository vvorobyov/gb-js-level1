class ChessBoard {
    constructor() {

  
        const colList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        this.boardEl = document.createElement('div');
        this.boardEl.classList.add('b-chessBoard');
        this.board = [];
        for (let row = 0; row < 9; row++) {
            let rowEl = {
                legend: this._createLegendItem(row?row:'')
            };
            for (const col of colList) {
                if (row === 0){
                    rowEl[col] = this._createLegendItem(col);
                }else{
                    rowEl[col] = this._createBoardCell();
                }  
            }
            this.board[row] = rowEl;
        }
    }

    /**
     * Функция создает div.b-chessBoard__legend элемент
     * и присваивает в innerText переданное значение
     * 
     * @param {String} value - Значение прописываемое в легенде
     * @returns {HTMLElement} - Элемент легенды
     */
    _createLegendItem(value) {
        let item = document.createElement('div');
        item.classList.add('b-chessBoard__legend');
        item.innerText = value;
        this.boardEl.appendChild(item);
        return item;
    }

    /**
     * Функция создает div.b-chessBoard__cell элемент
     * 
     * @returns {HTMLElement} - Ячейка игрового поля
     */
    _createBoardCell() {
        let item = document.createElement('div');
        item.classList.add('b-chessBoard__cell');
        this.boardEl.appendChild(item);
        return item;
    }

    showBoard(){
        document.body.appendChild(this.boardEl)
    }
}