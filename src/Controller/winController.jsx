export function checkWinner(board) {
    let isFull=true;
    for (const line of LINES) {
        const [a, b, c] = line.cells.map(([r, c]) => board[r][c]);
        if (a && a === b && b === c) {
            return { winner: a, line };
        }
        if (!a||!b||!c){
            isFull = false;
        }
    }
    if (isFull) {
        return 'd'
    }
    return null;
}

export const LINES = [
    { cells: [[0,0],[0,1],[0,2]], type: 'row', index: 0 },
    { cells: [[1,0],[1,1],[1,2]], type: 'row', index: 1 },
    { cells: [[2,0],[2,1],[2,2]], type: 'row', index: 2 },
    { cells: [[0,0],[1,0],[2,0]], type: 'col', index: 0 },
    { cells: [[0,1],[1,1],[2,1]], type: 'col', index: 1 },
    { cells: [[0,2],[1,2],[2,2]], type: 'col', index: 2 },
    { cells: [[0,0],[1,1],[2,2]], type: 'diag', index: 0 },
    { cells: [[0,2],[1,1],[2,0]], type: 'diag', index: 1 },
];