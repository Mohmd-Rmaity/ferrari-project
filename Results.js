const hamiltonResults = [
  { race: 'Australian GP', position: '4', points: '12' },
  { race: 'Chinese GP', position: '3rd', points: '15' },
  { race: 'Japanese GP', position: '6', points: '8' },
  { race: 'Miami GP', position: '6', points: '8' },
  { race: 'Canada GP', position: '2', points: '18',standing:'4th with 72 Points' },
];

const leclercResults = [
  { race: 'Australian GP', position: '3rd', points: '15' },
  { race: 'Chinese GP', position: '4', points: '12' },
  { race: 'Japanese GP', position: '3rd', points: '15' },
  { race: 'Miami GP', position: '8', points: '4' },
  { race: 'Canada GP', position: '4', points: '12',standing:'3rd with 75 Points' },
];

function Results() {
  return (
    <div>
      <div className="container">
        <h1>Results</h1>
      </div>

      <div>
        <h2 className="dr-name">Lewis Hamilton 2026 Results</h2>
        <table className="results-table">
            <tr>
              <th>Race</th>
              <th>Position</th>
              <th>Points</th>
              <th>Driver Standing</th>
            </tr>
          <tbody>
            {hamiltonResults.map((r, i) => (
              <tr key={r.race}>
                <td>{r.race}</td>
                <td>{r.position}</td>
                <td>{r.points}</td>
                <td>{r.standing}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="dr-name">Charles Leclerc 2026 Results</h2>
        <table className="results-table">
            <tr>
              <th>Race</th>
              <th>Position</th>
              <th>Points</th>
              <th>Driver Standing</th>
            </tr>
          <tbody>
            {leclercResults.map((r, i) => (
              <tr key={r.race}>
                <td>{r.race}</td>
                <td>{r.position}</td>
                <td>{r.points}</td>
                <td>{r.standing}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Results;