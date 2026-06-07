const champions = [
  { name: 'Alberto Ascari', bio: 'Born on 13 July 1918 and died 26 May 1955 (aged 36) in a car collision testing the Ferrari 750 Monza. He won 2 Championships (1952, 1953).',
     Image: '/Images/Ascari_last.jpg' },
  { name: 'Juan Manuel Fangio', bio: 'The Argentine driver born on 24 June 1911 and died 17 July 1995 (aged 84). He won 5 Championships (1951, 1954, 1955, 1956, 1957).',
     Image: '/Images/Juan Manuel.jpg' },
  { name: 'Mike Hawthorn', bio: 'The British driver born on 10 April 1929 and died 22 January 1959 (aged 29) in a single vehicle road collision. He won 1 Championship (1958).',
     Image: '/Images/Mike_Hawthorn.jpg' },
  { name: 'Phil Hill', bio: 'The American driver born on April 20, 1927 and died August 28, 2008 (aged 81). He won 1 Championship (1961).',
     Image: '/Images/Phil_Hill.jpg' },
  { name: 'John Surtees', bio: 'The British driver born 11 February 1934 and died 10 March 2017 (aged 83). He won 1 Championship (1964).',
     Image: '/Images/John_Surtees.jfif' },
  { name: 'Niki Lauda', bio: 'The Austrian driver born 22 February 1949 and died 20 May 2019 (aged 70). He won 3 Championships (1975, 1977, 1984).',
     Image: '/Images/Niki lauda.jpg' },
  { name: 'Jody Scheckter', bio: 'The South African driver born 29 January 1950. He won 1 Championship (1979).',
     Image: '/Images/Jody_Scheckter.jpg' },
  { name: 'Michael Schumacher', bio: 'The German driver born 3 January 1969. The most successful driver, holding the record for 7 Championships (1994, 1995, 2000, 2001, 2002, 2003, 2004), five of them with Ferrari.',
     Image: '/Images/Michael_Schumacher.jpg' },
  { name: 'Kimi Räikkönen', bio: 'Born on 17 October 1979. He won 1 Championship (2007) and is the most recent Ferrari driver to win the championship.', 
    Image: '/Images/kimi rr.jpg' },
];

function About() {
  return (
    <div>
      <div className="container">
        <h1>About Ferrari</h1>
      </div>

      <section className="info">
        <p>
          Ferrari is the oldest team in Formula 1. Founded by Enzo Ferrari in 1929, it is the most famous F1 team in the world and holds the record of 16 Constructors' Championships. Their most recent one was in 2008. Ferrari also holds the record for the most Drivers' Championships with 15 won by different legendary drivers including:
        </p>
      </section>

      <section className="grid">
        {champions.map((c) => (
          <div key={c.name} className="infoimg">
            <img src={c.Image} alt={c.name} />
            <h2 className="AA">{c.name}</h2>
            <p>{c.bio}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default About;