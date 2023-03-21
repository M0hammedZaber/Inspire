var assert = require('assert');
var quoteScraper = require('./');

console.log('test for en');
quoteScraper('Agatha Christie');

function Home() {

    return (
  
      <div className='welcome-message'>
  
        <div className='image-container'>
          <h1>Welcome to Inspire</h1>
        </div>
  
        <div>
          <h3>Gewt Inspired!</h3>
          <Link to="/resumeForm"><button id="home-button" className="uk-button uk-button-primary">""</button></Link>
          <Link to="/jobSearch"><button id="home-button" className="uk-button uk-button-primary">""</button></Link>
          <Link to="/JobApplicationHistory"><button id="home-button" className="uk-button uk-button-primary">""</button></Link>
        </div>
  
      </div>
    );
  }