# Automação de Alertas com Node.js

Este projeto é um script de automação criado para simular uma tarefa de rotina de um Analista de Suporte em uma empresa de tecnologia. O script monitora uma API (simulada) e envia alertas críticos ou de aviso para um canal do Slack, demonstrando proficiência em **JavaScript assíncrono**, manipulação de dados e integração de sistemas.

-----

### Funcionalidades

  * **Comunicação Assíncrona:** Utiliza `async/await` e `Promises` para simular uma requisição de API sem bloquear a execução do script.
  * **Processamento de Dados:** Filtra um conjunto de dados para identificar apenas alertas com status `'critical'` ou `'warning'`.
  * **Integração com Slack:** Usa a biblioteca `axios` para enviar mensagens formatadas para um canal do Slack via Webhook.
  * **Tratamento de Erros:** Inclui blocos `try...catch` para lidar com falhas de forma robusta, seja na requisição de API ou no envio da mensagem para o Slack.

-----

### Guia de Uso

Siga os passos abaixo para configurar e rodar o projeto.

#### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/en) e o `npm` (gerenciador de pacotes do Node) instalados em sua máquina.

#### Instalação

1.  Clone este repositório para o seu computador:
    ```bash
    git clone https://github.com/VitorBSilvaDev/node-projects-automacao-de-alertas.git
    ```
2.  Navegue até o diretório do projeto e instale as dependências:
    ```bash
    cd node-projects-automacao-de-alertas
    npm install
    ```

#### Configuração

1.  Crie um Webhook para o seu workspace do Slack seguindo [este guia](https://api.slack.com/messaging/webhooks).

2.  Abra o arquivo `index.js` no seu editor de código.

3.  Substitua a URL `slackWebHookUrl` com a URL do Webhook que você acabou de criar.

    ```javascript
    // Arquivo: index.js
    const slackWebHookUrl = 'SUA_URL_DO_WEBHOOK_AQUI'; 
    ```

#### Execução

Para rodar o script, execute o seguinte comando no terminal na raiz do projeto:

```bash
node index.js
```

O terminal exibirá o log do processo, e as mensagens de alerta serão enviadas para o canal do Slack que você configurou.

-----

### Aprendizados do Projeto

Este projeto foi uma oportunidade para praticar e consolidar conceitos essenciais para desenvolvimento back-end e análise de suporte:

  - Uso de **`async/await`** e **`Promises`** para controlar o fluxo de operações assíncronas.
  - Realização de requisições HTTP para APIs externas com a biblioteca **`axios`**.
  - Estrutura de dados em **JSON** e sua manipulação com JavaScript.
  - Organização de código em módulos com a sintaxe **`import` e `export`**.
  - Implementação de um sistema de automação para tarefas de monitoramento e notificação.
