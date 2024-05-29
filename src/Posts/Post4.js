import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar';

function Post4() {
  return (
    <div className='fullPage'>
        <Navbar />
        <div className='mainText'>
            <div className='imageSeparate'>

                <div className='mainTextTitle'>
                    <h1>2024-03-27 till 2024-04-05</h1>
                </div>
                <div className='mainTextText'>
                <p>Denna vecka har de flesta tagit påsklov, vilket har resulterat i en något lugnare arbetsvecka. På grund av detta finns det inte mycket att rapportera. Nästa vecka förväntas dock arbetet återupptas från där det lämnades. För att klargöra, påsklovet var inte exakt definierat till det tidigare nämnda datumet (2024-03-27 till 2024-04-05). De flesta tog ledigt mellan den 2:a och 5:e april. Eventuella uppgifter som utfördes under denna vecka, men inte under påsklovet, kommer att dokumenteras och tas upp i rapporten nästa vecka.</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Post4;