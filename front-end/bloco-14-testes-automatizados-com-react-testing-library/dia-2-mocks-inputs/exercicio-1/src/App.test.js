import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// zerar a contagem da chamada de funções antes de cada teste:
// afterEach(() => jest.clearAllMocks()); 

describe ('Estudando teste', () =>  {

// it('fetches a joke', async () => {

//   // ao invés do global chamar a função fetch que tem a promisse, ele vai chamar a função simulada. Quando a promisse é resolvida, ela retorna um objeto que tem a propriedade json, propriedade essa que quando é chamada retorna uma promisse resolvida, que retorna uma piada joke. Coloca dentro de chaves uma parte do objeto da piada.
//   global.fetch = jest.fn(() => Promise.resolve({
//     json: () => Promise.resolve({
//       id: '7h3oGtrOfxc',
//       joke: 'Whiteboards ... are remarkable.',
//       status: 200,
//     }),
//   }));


//   render(<App />);
//   // Encontrar um texto. Como é um async/await, usa find, e não get.
//   const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
//   expect(renderedJoke).toBeInTheDocument();
//   expect(renderedJoke).toBeInTheDocument();
//   expect(global.fetch).toBeCalledTimes(1);
//   expect(global.fetch).toBeCalledWith('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
// });

it('alterando o valor dos campos e testando o valor guardado', () => {
  render(<App />);
  // Observe a sintaxe no nosso exemplo: estamos utilizando o evento type , e no primeiro argumento da função informamos o elemento que queremos interagir ( inputNome ), e no segundo parâmetro, o que queremos digitar neste campo ( 'Estudante da Trybe' ). O toHaveValue('Estudante da Trybe') pode ajudar a entender o que está acontecendo é O console.log

  const inputNome = screen.getByRole('textbox', { name: /nome/i });
  expect(inputNome).toBeInTheDocument();
  expect(inputNome).toHaveValue('');
  userEvent.type(inputNome, 'Estudante da Trybe');
  expect(inputNome).toHaveValue('Estudante da Trybe');

  const inputEmail = screen.getByRole('textbox', {name: /email/i});
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveValue('');
  userEvent.type(inputEmail, 'estudante@trybe.com');
  expect(inputEmail).toHaveValue('estudante@trybe.com');
})
});
