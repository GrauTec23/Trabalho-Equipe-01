class Time {                   
    constructor(nome) {        // O construtor inicia a instância com o nome do time 
      this.nome = nome;        // Armazena o nome do time
    }
    
    getNome() {                // Método para obter o nome do time
      return this.nome;        // Retorna o nome do time associado a esta instância
    }
  
    setNome(novoNome) {        // Método para definir um novo nome para o time
      this.nome = novoNome;    // Atualiza o nome do time com o novo nome fornecido
    }
  }
  
  class Jogador extends Time {              // Classe "Jogador" que herda de "Time"
    constructor(nomeTime, nomeJogador) {    // Construtor da classe Jogador, recebe o nome do time e o nome do jogador ao ser instanciado
      super(nomeTime);                      // Configura o nome do time usando o construtor da classe pai (Time)
      this.nomeJogador = nomeJogador;       // Adiciona o nome do jogador como uma propriedade específica
    }
  
    getNomeJogador() {                      // Método para obter o nome do jogador
      return this.nomeJogador;              // Retorna o nome do jogador associado a esta instância
    }
  
    setNomeJogador(novoNome) {              // Método para definir um novo nome para o jogador
      this.nomeJogador = novoNome;          // Atualiza o nome do jogador com o novo nome fornecido
    }
  }
  
  class Tecnico extends Time {
    constructor(nomeTime, nomeTecnico) {
      super(nomeTime);
      this.nomeTecnico = nomeTecnico;
    }
  
    getNomeTecnico() {
      return this.nomeTecnico;
    }
  
    setNomeTecnico(novoNome) {
      this.nomeTecnico = novoNome;
    }
  }
  
  class Estadio extends Time {
    constructor(nomeTime, nomeEstadio) {
      super(nomeTime);
      this.nomeEstadio = nomeEstadio;
    }
  
    getNomeEstadio() {
      return this.nomeEstadio;
    }
  
    setNomeEstadio(novoNome) {
      this.nomeEstadio = novoNome;
    }
  }
  
  class PosicaoTabela extends Time {
    constructor(nomeTime, posicao) {
      super(nomeTime);
      this.posicao = posicao;
    }
  
    getPosicao() {
      return this.posicao;
    }
  
    setPosicao(novaPosicao) {
      this.posicao = novaPosicao;
    }
  }
  
  let meuTime = new Time("Flamengo");       // Imprime o nome do time usando o método getNome da classe Time
  console.log("Nome do Time:", meuTime.getNome()); 
  
  let jogador1 = new Jogador("Flamengo", "Gabigol");
  console.log("Nome do Jogador:", jogador1.getNomeJogador());
  
  let tecnico1 = new Tecnico("Flamengo", "Tite");
  console.log("Nome do Técnico:", tecnico1.getNomeTecnico());
  
  let estadio1 = new Estadio("Flamengo", "Maracanã");
  console.log("Nome do Estádio:", estadio1.getNomeEstadio());
  
  let posicao1 = new PosicaoTabela("Flamengo", 1);
  console.log("Posição na Tabela:", posicao1.getPosicao());
  