
import './App.css'
import Cabecalho from './Cabecalho'
import CardCentral from './CardCentral'
import Perfil from './Perfil'

function App() {
  return (
    <div className='bg-slate-900'>
      <Cabecalho />

      <div className='flex items-start justify-center min-w-screen-lg'>

        <div className="flex justify-center items-start w-[30%]">
          <Perfil />
        </div>

        <div  className="flex flex-col w-[70%] gap-3 p-3 justify-center items-center">
          <CardCentral Imagem="https://github.com/CassioJhones.png" Nome="Cassio Jhones" Cargo="Estagiario" botaoTitle="Ir para publicação" />
          <CardCentral Imagem="https://github.com/Joacks.png" Nome="Joacks Lemos" Cargo="Dev" botaoTitle="Ir para publicação" />
          <CardCentral Imagem="https://github.com/Guilhermechgas.png "Nome="Guilherme" Cargo="Dev" botaoTitle="Ir para publicação" />
          <CardCentral Imagem="https://github.com/CassiaAlvalaz.png "Nome="Cassia" Cargo="Estagiario" botaoTitle="Ir para publicação" />
          <CardCentral Imagem="https://github.com/ryuuzera.png "Nome="Fagner" Cargo="Dev" botaoTitle="Ir para publicação" />
        </div>

      </div>
    </div>
  )
}

export default App