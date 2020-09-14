function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Gandalf',
  sobrenome: 'the Gray',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Jack', 'Gandalf');
pessoa.exibirNome();

export { pessoa };
