import './App.css';

const sites = [
  { name: 'site1', host: 'site1.bhenning.com' },
  { name: 'site2', host: 'site2.bhenning.com' },
  { name: 'site3', host: 'site3.bhenning.com' },
  { name: 'site4', host: 'site4.bhenning.com' },
  { name: 'site5', host: 'site5.bhenning.com' },
  { name: 'site6', host: 'site6.bhenning.com' },
  { name: 'site7', host: 'site7.bhenning.com' },
  { name: 'site8', host: 'site8.bhenning.com' },
  { name: 'site9', host: 'site9.bhenning.com' },
];

function App() {
  return (
    <div className="App">
      <header className="site-header">
        <p className="header-eyebrow">bhenning.com / dashboard</p>
        <h1>site<em>4</em></h1>
        <p className="header-sub">tools &amp; utilities — select a destination</p>
        <div className="header-rule" />
      </header>

      <section className="site-section">
        <div className="section-label"><h2>Sites</h2></div>
        <div className="grid">
          {sites.map(({ name, host }) => (
            <a key={name} href={`https://${host}`} className="card">
              <span className="card-name">{name}</span>
              <span className="card-path">{host}</span>
              <span className="arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <footer className="site-footer">bhenning.com &mdash; site4</footer>
    </div>
  );
}

export default App;
