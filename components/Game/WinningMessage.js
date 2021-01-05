const WinningMessage = props => (
    <div className={`winning-message absolute top-0 left-0 right-0 bottom-0 ${props.show ? 'flex justify-center items-center flex-col' : 'hidden'}`}>
        <div>{props.draw ? 'Imbang!' : `${props.circleTurn ? 'X' : 'O'} wins!`} </div>
        <button id="restartButton" onClick={props.restart}>Play again</button>
    </div>
)

export default WinningMessage