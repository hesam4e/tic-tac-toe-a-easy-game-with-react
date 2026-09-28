export function Cell({symbol, onClick}) {

    return (
        <div
            onClick={onClick}
            className={`cell ${symbol || ''}`}>
        </div>
    );
}