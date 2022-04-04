/* eslint-disable prettier/prettier */


// maneira rápida, contém o this.attr
export class Colaborador {
  constructor(public readonly nome: string, public readonly sobrenome: string) {}
}

// public é redundante, não é necessário
// forma longa
export class Empresa {
  public readonly nome: string;
  public readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  public adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador)
  }

  public mostrarColaboradores(): void {
    for(const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

const empresa = new Empresa('NomeDaEmpresa', '11.111.111/0001-11');

const colaborador1 = new Colaborador('Luiz', 'Otávio');
const colaborador2 = new Colaborador('Maria', 'Luiza');
const colaborador3 = new Colaborador('Jadson', 'Carlos');

console.log(empresa.nome)
console.log(empresa.colaboradores)
empresa.adicionaColaborador(colaborador1)
empresa.adicionaColaborador(colaborador2)
empresa.adicionaColaborador(colaborador3)
empresa.mostrarColaboradores()

