# Documentação do Projeto

## Funções do Projeto

Aqui estão as principais funções do projeto:

### `handleNameChange(event)`

- Descrição: Atualiza o estado `name` com o valor do nome digitado no input.
- Funcionalidade: Permite capturar e armazenar o valor do nome digitado pelo usuário.

### `handleAddCard()`

- Descrição: Adiciona um novo cartão à lista de cartões.
- Funcionalidade: Cria um objeto `newCard` com o valor do nome digitado (`name`) e o horário atual (`time`). Em seguida, adiciona esse novo cartão à lista de cartões (`cardList`) utilizando o `setCardList`. Por fim, limpa o valor do nome digitado no estado `name` para que o input seja redefinido.

### `getCurrentTime()`

- Descrição: Obtém o horário atual no formato "hh:mm:ss".
- Funcionalidade: Cria um objeto `Date` para obter a data e o horário atuais. Em seguida, extrai a hora, os minutos e os segundos usando os métodos `getHours()`, `getMinutes()` e `getSeconds()` respectivamente. O horário é formatado como uma string no formato "hh:mm:ss" e retornado para ser utilizado ao adicionar um novo cartão.

### `handleNameChange` (onChange do input de nome)

- Descrição: Atualiza o estado `name` com o valor do nome digitado no input.
- Funcionalidade: Captura e armazena o valor do nome digitado pelo usuário em tempo real.

### `handleAddCard` (onClick do botão "Adicionar")

- Descrição: Adiciona um novo cartão à lista de cartões.
- Funcionalidade: Cria um novo cartão (`newCard`) com o valor do nome digitado (`name`) e o horário atual obtido por `getCurrentTime()`. O novo cartão é adicionado à lista de cartões (`cardList`). Em seguida, o valor do nome é limpo para que o input seja redefinido e o usuário possa adicionar mais cartões.

### `setCardList`

- Descrição: Função específica fornecida pelo React que permite atualizar o estado em componentes funcionais. Quando eu ultilizo `setCardList` e passo uma nova lista de cartões como argumento dessa função, o React detecta essa alteração e atualiza automaticamente o estado do array `cardList` com o novo valor.

## Componente `Card`

- Descrição: Componente que representa um cartão com o nome e o horário.
- Funcionalidade: Renderiza um cartão na interface contendo o nome e o horário fornecidos como propriedades (`name` e `time`). É utilizado dentro do componente `Home` para exibir os cartões adicionados.
