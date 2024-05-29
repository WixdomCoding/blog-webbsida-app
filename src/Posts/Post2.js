import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar';

function Post2() {
  return (
    <div className='fullPage'>
        <Navbar />
        <div className='mainText'>
            <div className='imageSeparate'>
                <div className='mainTextTitle'>
                    <h1>2024-03-13 till 2024-03-20</h1>
                </div>
                <div className='mainTextText'>
                    <p>
                        Den senaste veckan har varit en intensiv period av lärande och framsteg för vårt team på 2Witness-projektet. Med projektet som blir allt mer komplicerat har det blivit uppenbart att många av oss bara har en grundläggande förståelse för React Native. Detta har resulterat i en vecka fylld med intensiv inlärning och förståelse av den teknologi vi arbetar med. <br/><br/>

                        I veckan hölls också ett möte i Stockholm vid iOffice. Trots utmaningar med att ta sig dit lyckades vi anpassa mötet för att inkludera alla, även de som var tvungna att delta via sina datorer. <br/><br/>

                        Här är några av veckans betydande framsteg från våra teammedlemmar: <br/><br/>

                        Adam har tillbringat veckan med att granska flera tutorials om zoomfunktioner och att lägga till blixtar i kameran. Efter ett möte med Niclas lyckades de tillsammans fixa zoomfunktionen genom att implementera en slider i slutet av veckan. <br/><br/>

                        David har gjort betydande framsteg denna vecka genom att införa en strukturerad kategorisering av brott inom vår app. Genom att skapa tydliga och användarvänliga kategorier för olika brottstyper gör han det enklare för användare att välja rätt kategori när de rapporterar händelser till polisen. Dessutom har David utvecklat en dynamisk händelselista där användare kan få en översikt över de senaste brottshändelserna och relaterade nyheter. Denna funktion ger användarna en värdefull inblick i det som händer i deras omgivning och hjälper dem att hålla sig informerade om den aktuella brottsutvecklingen. Davids arbete med att strukturera och presentera denna information på ett överskådligt sätt är en betydelsefull förbättring för vår app och bidrar till att öka dess användbarhet och relevans för användarna. <br/><br/>

                        Daniel B har fördjupat sig i api:er och hur man integrerar dem i mobilapplikationen. Dessutom har han skapat en FAQ-sida inom appen och experimenterat med en uppladdningsfunktion för bilder och videor. Efter översyn valde han att ersätta denna funktion med en informationsikon, vilket leder användarna till en sida med detaljerad information om händelsen, inklusive möjligheten att skicka tips. <br/><br/>

                        Fredrik har gjort framsteg genom att säkerställa att användarinställningar sparas korrekt efter att appen har stängts och öppnats igen. Han har också arbetat med att implementera en funktion för att välja stad, som kommer att utökas i framtiden. <br/><br/>
                    </p>
                </div>
            </div>
            
            <div className='imagePostHolder'>
                <img id='officeimg' src={require('../img/meetingioffice.jpeg')} />
                <img id='cityimg' src={require('../img/citylist.png')} />
            </div>

        </div>
    </div>
  );
}

export default Post2;