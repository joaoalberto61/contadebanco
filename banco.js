let Banco = {
    conta: '7621592032',
    agencia: 'Banco do Brasil - Agencia 2304',
    saldo: 3500,
    tipo: 'Conta Corrente',
    
    buscarSaldo: function() {
      return this.saldo;
    },

    buscarAgencia: function(){
        return this.agencia
    },

    buscarTipo: function(){
        return this.tipo
    },
    
    deposito: function(valor) {
      if (valor > 0) {
        this.saldo += valor;
        return `Depósito de R$ ${valor} realizado com sucesso. Novo saldo: R$ ${this.saldo}`;
      } else {
        return 'Valor de depósito inválido';
      }
    },
    
    saque: function(valor) {
      if (valor > 0 && valor <= this.saldo) {
        this.saldo -= valor;
        return `Saque de R$ ${valor} realizado com sucesso. Novo saldo: R$ ${this.saldo}`;
      } else if (valor <= 0) {
        return 'Valor de saque inválido';
      } else {
        return 'Saldo insuficiente para realizar o saque';
      }
    },
    
    numeroDaConta: function() {
      return this.conta;
    }
  };
  
  console.log(Banco.buscarAgencia()); //Exibe a agencia.
  console.log('Conta: ', Banco.numeroDaConta()); // Exibe o numero da conta do usuario.
  console.log('Tipo de conta: ', Banco.buscarTipo()); // Mostrar o tipo da conta.
  console.log('Saldo atual: R$', Banco.buscarSaldo()); // Exibe o saldo atual.
  console.log(Banco.deposito(500)); // Realiza um depósito de R$500.
  console.log(Banco.saque(200)); // Realiza um saque de R$200.
  
  