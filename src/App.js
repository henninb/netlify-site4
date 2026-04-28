import './App.css';

const domain = window.location.hostname.endsWith('brianhenning.com') ? 'brianhenning.com' : 'bhenning.com';
const siteLabels = ['site1', 'site2', 'site3', 'site4', 'site5', 'site6', 'site7', 'site8', 'site9'];

function App() {
  const sites = siteLabels.map(name => ({ name, host: `${name}.${domain}` }));

  return (
    <div className="App">
      <header className="site-header">
        <p className="header-eyebrow">{domain} / dashboard</p>
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

      <footer className="site-footer">{domain} &mdash; site4</footer>
    </div>
  );
}

export default App;
