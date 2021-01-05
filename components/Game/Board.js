const Board = props => (
    <main className="w-full h-full flex flex-wrap flex-col items-center justify-center">
        <div className="flex w-48 justify-between m-2.5">
            <div className="score__item">
                <p>X : {props.xScore}</p>
            </div>
            <div className="score__item">
                <p>O : {props.oScore}</p>
            </div>
        </div>

        <div className={`board grid justify-center content-center justify-items-center items-center ${props.circleTurn ? 'o' : 'x'}`} style={{gridTemplateColumns: "repeat(9, auto"}}>
            {props.children}
        </div>
    </main>
)

export default Board