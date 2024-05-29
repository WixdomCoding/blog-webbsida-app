import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar';

function Post3() {
  return (
    <div className='fullPage'>
        <Navbar />
        <div className='mainText'>
         <div className='imageSeparate'>

            <div className='mainTextTitle'>
                <h1>2024-03-20 till 2024-03-27</h1>
            </div>
            <div className='mainTextText'>
              <p>Eftersom att förra veckan var fylld med lärning och förberedning så har denna vecka varit fylld med arbete och nya framsteg på appen. Vi hade endast ett möte på 2024-03-22 mellan 13:30 och 14:30 där vi tog en återblick och kollade igenom de projekveckor some gått och vad som är gjort hittills.
Här är några av veckans betydande framsteg från våra teammedlemmar: <br/> <br/>

Laurence har denna vecka fokuserat på designen för att förbättra användarupplevelsen genom att göra den mer estetiskt tilltalande och mer funktionell. Utöver det har han implementerat en inställningsknapp för användare som vill vara anonyma när de skickar in rapporter. <br/> <br/>



Fredrik har fixat en funktion där du kan välja en stad som en “favorit” så att det är enklare att välja stad istället att behöva söka efter en stad varje gång du ska ändra. Han har också börjat kolla på hur dynamiska ikon förändringar fungerar. <br/> <br/>

Daniel B har lyckats implementera en api och har också lyckats fetchat datan ur den 
då varje text innehåll i modal ser olika ut för varje titel man väljer att klicka inom eftersökt information.
</p>
            </div>
        </div>
        <div className='imagePostHolder'>
            <img id='phoneShowcase' src={require('../img/phoneShowcase.png')} />
        </div>
        </div>
    </div>
  );
}

export default Post3;