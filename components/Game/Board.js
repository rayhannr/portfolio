const Board = props => (
    <main className="w-full h-full flex flex-wrap flex-col items-center justify-center">
        <div className="flex w-48 justify-between m-2.5">
            <div className="score__item">
                <p className="font-architect font-semibold">X : {props.xScore}</p>
                <span className={!props.circleTurn ? 'lg:hidden font-architect font-semibold' : 'hidden'}>Turn</span>
            </div>
            <div className="score__item">
                <p className="font-architect font-semibold">O : {props.oScore}</p>
                <span className={props.circleTurn ? 'lg:hidden font-architect font-semibold' : 'hidden'}>Turn</span>
            </div>
        </div>

        <div className={`board grid justify-center content-center justify-items-center items-center ${props.circleTurn ? 'o' : 'x'}`} style={{ gridTemplateColumns: "repeat(9, auto" }}>
            {props.children}
        </div>
    </main>
)

export default Board