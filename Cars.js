const cars = [
  {
    name: 'SF-26',
    image: '/Images/ThisSeasoncar.avif',
    description: 'The F1 Car for Ferrari in the 2026 season. It weighs 770 kg (including driver, coolant and oil) and runs on a 1.6 L direct injection V6 turbocharged engine limited to 15,000 RPM.',
  },
  {
    name: 'SF-25',
    image: '/Images/LastSeasoncar.jpg',
    description: 'The F1 Car for Ferrari in the 2025 season. It weighs 800 kg (including driver, excluding fuel) and runs on a 1.6 L direct injection V6 turbocharged engine limited to 15,000 RPM.',
  },
  {
    name: 'SF-24',
    image: '/Images/llastseasoncar.png',
    description: 'The F1 Car for Ferrari in the 2024 season. It weighs 800 kg (including driver, excluding fuel) and runs on a 1.6 L direct injection V6 turbocharged engine limited to 15,000 RPM.',
  },
  {
    name: 'Ferrari F40',
    image: '/Images/lewisf40.webp',
    description: 'A legendary mid-engine supercar produced from 1987 to 1992 to celebrate Ferrari\'s 40th anniversary. The last car personally approved by Enzo Ferrari.',
  },
  {
    name: 'Ferrari LaFerrari',
    image: '/Images/la ferrari.webp',
    description: 'A limited-production hybrid hypercar (2013-2016) with only 499 coupes produced. Combines a 6.3-liter V12 with a HY-KERS electric motor.',
  },
  {
    name: 'Ferrari 488 Pista',
    image: '/Images/ferrari pista.jpg',
    description: 'A track-focused special series sports car featuring the most powerful V8 engine in Ferrari\'s history — a 3.9L twin-turbo.',
  },
];

function Cars() {
  return (
    <div>
      <div className="container">
        <h1>Ferrari Cars</h1>
      </div>

      <section className="grid">
        {cars.map((car) => (
          <div key={car.name} className="card">
            <img className="imgg" src={car.image} alt={car.name} />
            <div className="card-body">
              <h2>{car.name}</h2>
              <p>{car.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Cars;