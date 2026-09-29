import {useState} from 'react';
import {Cell} from "./Cell.jsx";
import {checkWinner} from "../winController.jsx";
import '../Styles/index.css'
import {Blood} from "./Blood.jsx";
import {Thunder} from "./Thunder.jsx";
import {Line} from "./Line.jsx";

function App() {
    const [board, setBoard] = useState([[null, null, null], [null, null, null], [null, null, null],]);
    const [turn, setTurn] = useState('x');
    const [winner, setWinner] = useState(null);
    const [winningLine, setWinningLine] = useState(null);
    const coords = winningLine ? getLineCoords(winningLine) : null;
    const [xWin, setXWin] = useState(0);
    const [oWin, setOWin] = useState(0);

    return (
        <>
            {winner === 'x' && <Blood/>}
            {winner === 'o' && <Thunder/>}
            <main className="App">
                <div className="scoreboard">
                    <div className="icon"><img src="src/image/xIcon.webp" alt={'x'}/> : {xWin}</div>

                    <div className="icon"> {oWin} : <img src="src/image/oIcon.webp" alt={'o'}/></div>
                </div>

                <h2>{winner ? `برنده: ${winner}` : `نوبت: ${turn}`}</h2>
                <div className="board">
                    <div className="container">
                        {board.map((row, r) => row.map((value, c) => (<Cell
                            key={`${r}-${c}`}
                            symbol={value}
                            onClick={() => handleClick(r, c)}
                        />)))}</div>
                    {coords && <Line coords={coords}/>}
                </div>
                {winner!==null && <button className={"reset"} onClick={reset}>reset</button>}

            </main>
        </>);

    function handleClick(x, y) {
        if (board[x][y] === null && !winner) {
            const next = board.map(row => [...row]);
            next[x][y] = turn;
            setBoard(next);
            const w = checkWinner(next);
            if (w) {
                setWinner(w.winner);
                setWinningLine(w.line)
                if (w.winner === 'x') {
                    setXWin(xWin + 1)
                }
                if(winner==='o') setOWin(oWin + 1);
            } else {
                setTurn(turn === 'x' ? 'o' : 'x');
            }
        }
    }

    function reset() {
        setBoard([[null, null, null], [null, null, null], [null, null, null],]);
        setTurn('x');
        setWinner(null);
        setWinningLine(null);
    }


}

const CENTERS = [16.66, 50, 83.33];

function getLineCoords(line) {
    const [start, , end] = line.cells;
    return {
        x1: CENTERS[start[1]], y1: CENTERS[start[0]], x2: CENTERS[end[1]], y2: CENTERS[end[0]],
    };
}

export default App;