import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar';

function Post6() {
  return (
    <div className='fullPage'>
        <Navbar />
        <div className='mainText'>
        <div className='imageSeparate'>

            <div className='mainTextTitle'>
                <h1>2024-04-12 till 2024-04-19</h1>
            </div>
            <div className='mainTextText'>
              <p>Denna vecka ligger fokuset på nya grejer, men också på att bli klar med äldre funktioner inom appen. Men det är helt enkelt ännu en vecka av arbete. <br/> <br/>

Här är några av veckans betydande framsteg från våra teammedlemmar: <br/> <br/>

Daniel B har börjat kolla på hur man ska kolla på hur man ska göra privata chattfunktionen i appen. I början av veckan så gjorde han mycket research om hur han skulle börja, men senare i veckan när han hade börjat så kom det många problem. Han kunde inte “ta emot nya meddelanden från samma personer”.Ibland tog alla chattar bort sig själva för någon anledning. Daniel planerar på att försöka lösa detta nästa vecka. <br/> <br/>

Fredrik har också arbetat med privata meddelanden i princip så har han gjort samma sak som Daniel B gjorde. <br/> <br/>

Max har gjrort så att man får token på HomePage efter inloggningen men när han försökte avkoda den så fick han errors. Han testade många saker som till exempel jwt-decode och jwt-expo. <br/> <br/>
</p>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Post6;