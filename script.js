const note = document.getElementById('note');
const clearBtn = document.getElementById('clear');
const exportBtn = document.getElementById('export');

// Carregar conteúdo salvo no localStorage
note.value = localStorage.getItem('blocoDeNotas') || "";

// Salvar automaticamente a cada digitação
note.addEventListener('input', () => {
  localStorage.setItem('blocoDeNotas', note.value);
});

// Limpar notas
clearBtn.addEventListener('click', () => {
  if (confirm('Tem certeza que deseja apagar todas as anotações?')) {
    note.value = '';
    localStorage.removeItem('blocoDeNotas');
  }
});

// Exportar notas como arquivo .txt
exportBtn.addEventListener('click', () => {
  const blob = new Blob([note.value], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'minhas-anotacoes.txt';
  a.click();
  URL.revokeObjectURL(url);
});
