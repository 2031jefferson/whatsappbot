//const { start } = require('repl');
const venom = require('venom-bot');
const comandos = require('./comandos.js')

   venom 
    .create()
    .then((client) => start(client));

    function start(client){
        client.onMessage((msg) => {
            if(msg.body === 'oi' || msg.body === 'olá'){
                client
                    .sendText(msg.from, 'Olá! tudo bem com você')
                    .then((result) => {
                        console.log('result: ', result); //retorna o sucesso no envio da msg
                    })

                    .catch((erro) => {
                        console.error('Erro ao enviar mensagem: ', erro);
                    });
            }
            if (msg.body.startsWith('#sendto ')) {
                // Direct send a new message to specific id
                let number = msg.body.split(' ')[1];
                let messageIndex = msg.body.indexOf(number) + number.length;
                let message = msg.body.slice(messageIndex, msg.body.length);
                number = number.includes('@c.us') ? number : `${number}@c.us`;
                client.sendText(msg.from, `*Mensagem enviada pra ${number}*`)
                client.sendText(number, message);
              } 
        });
        
        client.onMessage(async (message) =>{
            comandos(client, message)
        })
        
    }