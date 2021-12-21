function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

semRetorno('Oi', 'Voooid');

const pessoa = {
  nome: 'Silas',
  sobrenome: 'Bispo',
  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

pessoa.exibirNome();

export { pessoa };
