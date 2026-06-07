
function Footer() {
  return (
    <footer className="bot">
      <div >
        <h3 >
          Scuderia Ferrari
        </h3>
        <p >Maranello, Italy</p>
        <p className="coords">44.5324° N, 10.8640° E</p>

        <p className="qo">
          "Ferrari is not just a car, it's a lifestyle"
        </p>

        <div className="social-links">
          <a href="https://www.instagram.com/ferrari/" target="_blank" className="text-white text-sm uppercase tracking-widest mx-3 hover:text-red-600 transition-colors">Instagram</a>
          <a href="https://x.com/Ferrari" target="_blank" rel="" className="text-white text-sm uppercase tracking-widest mx-3 hover:text-red-600 transition-colors">X</a>
          <a href="https://www.youtube.com/@Ferrari" target="_blank" rel="" className="text-white text-sm uppercase tracking-widest mx-3 hover:text-red-600 transition-colors">YouTube</a>
          <a href="https://www.ferrari.com/en-EN/formula1" target="_blank" rel="" className="text-white text-sm uppercase tracking-widest mx-3 hover:text-red-600 transition-colors">Ferrari.com</a>
        </div>

        <div className="end">
          <p> 2026 Ferrari F1 Tribute. All rights reserved.</p>
          <p>Not affiliated with Scuderia Ferrari.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;