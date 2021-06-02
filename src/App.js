// App.js
// Esta classe será o ponto de partida da nossa aplicação
//************************************************************* */ 

// importar da pasta 'node_modules' a package do React 
import React from 'react';
// importar o componente 'Tabela'
import Tabela from './Tabela'
// importar o CSS
import 'bootstrap/dist/css/bootstrap.min.css';


// cria o 'componente' App
// neste caso é criada uma FUNÇÃO
class App extends React.Component {

  // esta variável é passível de ser alterado o seu conteúdo
  // e, essa é uma das características dos STATE
  // estamos a definir esta variável fora do 'render'
  state = {
    // o sinal de atribuição é conseguido à custa do símbolo :
    // alunos: [...] <=> alunos = [...]
    alunos: [
      {
        nome: "João",
        apelido: "Lopes"
      },
      {
        nome: "Luísa",
        apelido: "Matos"
      },
      {
        nome: "Mário",
        apelido: "Santos"
      },
      {
        nome: "Ana",
        apelido: "Silva"
      }
    ]
  }


  // método que sabe identificar o 'aluno' que deverá ser retirado da tabela
  removeAluno = (index) => {
    // recuperar os alunos que estão representados na tabela
    const { alunos } = this.state

    // alterar essa lista, retirando dela o aluno identificado pelo 'index'
    this.setState({
      // filter é um método do 'state' que permite aplicar um filtro sobre os 
      // dados do state
      alunos: alunos.filter((aluno, i) => {
        // devolve todos os dados que não forem iguais ao index
        return i !== index
      }),
    });
  }

  // todas as classes terão, obrigatoriamente,
  // um método chamado 'render'
  render() {
    // definir o acesso à variável com os dados dos alunos
    const { alunos } = this.state

    // todo o componente tem obrigatoriamente de 'devolver' alguma coisa
    return (
      <div className="container" > {/* e apenas consegue devolver um ÚNICO objeto */}
        <h1>Lista com dados de alunos</h1>
        <br />
        {/* 'dadosAlunos' é uma variável de entrada no componente
              Naturalmente, do lado do componente existirá um parâmetro para receber estes dados */}
        {/*  {alunos} - 'alunos' será o nome dos dados
                        está escrita entre chavetas {} pq é a forma de se aceder ao
                        conteúdo de variáveis, dentro do JSX */}
        <Tabela dadosAlunos={alunos} aluno={this.removeAluno} />
        <br />
      </div >
    );
  }
}

// um componente só é acessível se for 'exportado'
export default App;

