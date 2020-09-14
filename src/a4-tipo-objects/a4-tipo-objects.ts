const objetoA: {
  chaveA: string;
  readonly chaveB: string;
  chaveC?: string;
  [key: string]: unknown; // Index Signature
} = {
  chaveA: 'valor A',
  chaveB: 'valorB',
};

objetoA.chaveA = 'Outro valor';
objetoA.chaveC = 'Outra chave';
objetoA.chaveD = 'Nova chave';
