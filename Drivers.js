const drivers =[
{
    name: 'Lewis Hamilton',
    image: '/Images/lewis-ham1.avif',
    nationality: 'United Kingdom',
    titles: '7-time World Champion',
    born: 'January 7, 1985 (Age: 41)',
    number: '44',
},
{
    name: 'Charles Leclerc',
    image: '/Images/Charles1.avif',
    nationality: 'Monaco',
    titles: 'Future World Champion',
    born: 'October 16, 1997 (Age: 28)',
    number: '16',
}
];

function Drivers() {
  return (
    <div>
      <div className="container">
        <h1>Ferrari Drivers</h1>
      </div>

      <section className="card-cont">
        {drivers.map((d) => (
          <div key={d.name} className="card">
            <img className="imgg" src={d.image} alt={d.name} />
            <div className="card-body">
              <h3>{d.name}</h3>
              <ul>
                <li>Nationality: {d.nationality}</li>
                <li>{d.titles}</li>
                <li>Born: {d.born}</li>
                <li>Car Number {d.number}</li>
              </ul>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Drivers;