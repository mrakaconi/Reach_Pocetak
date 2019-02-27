import React from 'react';
import podatak from '../data/utisci.json'
import Komentar from '../components/Komentar.js'



const mapirano = podatak.map((obj, i) => 
  <Komentar key={i} ime={obj.ime} utisak={obj.utisak} />
  
);

export default function Main(props) {
    return (
        <main>
          <h2>Utisci potrosaca:</h2>
          {mapirano}
        </main>
    )
}