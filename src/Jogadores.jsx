import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './App.css'


function Jogadores() {

    const {id} = useParams()
    const [jogadores, setJogadores] = useState({})

useEffect(() => {

const fetchData  = async () => {
 const response = await fetch(`https://api.cartola.globo.com/atletas/mercado/${id}`);
 const data = await response.json();

 setJogadores(data);
 console.log(data);

}

fetchData()
    }, [id])


    return (
        <>
        <div className='container'>
        <div>
            <img className='headerLogo' src='https://logodownload.org/wp-content/uploads/2017/05/cartola-fc-logo-5.png'/>
            </div>

            
      {jogadores && 

        <>

          <div>Jogadores do {jogadores.clubes && jogadores.clubes[id].nome}</div>
          

        {jogadores.atletas && jogadores.atletas.map((show) => (
            
              <>
              <div className='perfil'>
              <img src={show.foto && show.foto.replace('FORMATO', '220x220')} />
              <div className='nomeJogador'>{show.nome}</div>
              </div>
              </>
            ))}
          
         
        </>
      }
</div>
     
        </>
    )}


export default Jogadores;
