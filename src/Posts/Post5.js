import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar';

function Post5() {
  return (
    <div className='fullPage'>
        <Navbar />
        <div className='mainText'>
        <div className='imageSeparate'>

            <div className='mainTextTitle'>
                <h1>2024-04-05 till 2024-04-12</h1>
            </div>
            <div className='mainTextText'>
              <p>Nu när alla har haft en chans att njuta av sin ledighet och återhämta sig, är det dags att återgå till projektet. Förra veckan såg vi många uppgifter bli avklarade, men samtidigt påbörjades också många nya. Under denna vecka har vi sett framsteg när flera påbörjade uppgifter har slutförts. <br/> <br/>

Här är några av veckans betydande framsteg från våra teammedlemmar:<br/> <br/>

Max har ägnat tid åt att undersöka hur man implementerar notiser i appen. Han har studerat ett antal videor som visar olika metoder för detta ändamål. Bland annat har han fördjupat sig i hur Google Auth fungerar, men han känner att han behöver ytterligare tid för att fullständigt förstå processen. Förhoppningsvis kommer han att kunna ägna sig åt detta under nästa vecka.<br/> <br/>

Fredrik har påbörjat arbetet med livechattfunktionen. Inom chatten kommer användare att kunna spara, ta bort enskilda chattar och rensa hela chattloggen, samt skicka meddelanden. Fredrik rapporterar att det enda som återstår är några designjusteringar och att implementera en backend för att hantera chattarna och skicka dem till frontend. Han har också granskat möjligheten att förbättra Figma-skissen för chat-funktionen.<br/> <br/>
</p>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Post5;