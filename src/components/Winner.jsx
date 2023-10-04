import { Square } from './Square'

export function WinnerModal ({ winner, resetGame }) {
  if (winner === null) return

  const winnerText = winner === false
    ? 'Match tie'
    : 'Winner'

  return (
    <section className='winner'>
      <div className='text'>
        <h2>{winnerText}</h2>
        {winner &&
          <header className='win'>
            <Square>{winner}</Square>
          </header>}
        <footer>
          <button onClick={resetGame}>start again</button>
        </footer>
      </div>
    </section>
  )
}
