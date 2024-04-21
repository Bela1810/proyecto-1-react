import './App.css';
import Helloworld from './components/helloworld';

function App(){
    return(
        <div className='App'>
            <div className='principal-container'>
                <h1>Te presento las Eras de Taylor Swift</h1>
                <Helloworld
                    era='Fearless Era'
                    year= '2008'
                    picture='fearless-era'
                    testimony= 'Fearless (en español: Sin miedo) es el segundo álbum de estudio de la cantante y compositora estadounidense Taylor Swift, fue lanzado el 11 de noviembre de 2008 por el sello discográfico Big Machine Records. Escrito predominantemente por Swift mientras promocionaba su álbum debut homónimo de 2006 en 2007-2008' />
            </div>     
        </div>
    )
}

export default App;