import React, { useState } from 'react';
import Select from '../../components/Form/Select';
import Button from '../../components/Button/Button'; // Corrija o caminho se necessário

const bancos = [
  { label: 'Banco do Brasil', value: '001' },
  { label: 'Caixa Econômica', value: '341' },
];

export default function Step1() {
  const [valorSelecionado, setValorSelecionado] = useState('');

  return (
    <div className="space-y-6">
      <Select
        label="1. Selecione um banco"
        options={bancos}
        value={valorSelecionado}
        onChange={setValorSelecionado}
      />
      <div className="flex justify-between">
        <Button>Voltar</Button>
        <Button>Próximo</Button>
      </div>
    </div>
  );
}