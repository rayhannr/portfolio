const WinningMessage = props => (
    <div className={`winning-message absolute top-0 left-0 right-0 bottom-0 ${props.show ? 'flex justify-center items-center flex-col' : 'hidden'}`}>
        <div className="font-architect font-semibold text-xl">{props.draw ? 'Draw!' : `${props.winner && props.winner.toUpperCase()} wins!`} </div>
        <button id="restartButton" className="bg-content text-background hover:bg-content-hover hover:text-background-hover border border-solid border-content hover:border-content-hover focus:outline-none" onClick={props.restart}>Play again</button>
    </div>
)

export default WinningMessage