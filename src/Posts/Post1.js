import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar';

function Post1() {
  return (
    <div className='fullPage'>
        <Navbar />
        <div className='mainText'>
        <div className='imageSeparate'>

            <div className='mainTextTitle'>
                <h1>2024-03-06 Till 2024-03-13</h1>
            </div>
            <div className='mainTextText'>
              <p>Denna vecka ägnades mest åt möten och förberedelser för det kommande arbetet. Under ett möte som ägde rum mellan kl 09:15 och 10:15 (2024-03-05) delades arbetsuppgifter ut och planer för nästa vecka diskuterades. <br/><br/>

Efter detta möte hölls ytterligare ett möte som varade i cirka 2 timmar, där front-end-teamet diskuterade arbetsmetoder och prioriteringar inför nästa vecka. En viktig punkt som togs upp var behovet av att förbättra Figma-designen för att underlätta kodningsprocessen.<br/><br/>

För att ge en överblick över de mest notvärdiga nya funktionerna:<br/><br/>

- Videofilminspelning: Användare kan nu enkelt spela in video av händelser och skicka dem som tips till polisen.<br/><br/>
</p>
<p>
- Ljudinspelning: För situationer där video inte är möjligt eller praktiskt, kan användare nu enkelt spela in ljud för att dokumentera olagliga händelser eller incidenter.<br/><br/>

- Inställningar: Inställnings sidan är under konstruktion av Fredrik. Han lär sig om tailwind medan arbetet håller på och han fixar just nu så att styling fungerar för appen.<br/><br/>

- Filsystem: Linus har arbetat på ett filsystem där allt du spelar in kommera att sparas.<br/><br/>
</p>
            </div>
        </div>
        <div className='imagePostHolder'>
            <img id='cameraImg' src={require('../img/camera.png')} />
    
        </div>
    </div>
    </div>
  );
}

export default Post1;