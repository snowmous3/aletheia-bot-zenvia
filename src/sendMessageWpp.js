import request_promise from 'request-promise'
const { post } = request_promise

const sendMessageToWhatsApp = (message) => {
  console.log(message)
  post({
    uri: 'https://api.zenvia.com/v2/channels/whatsapp/messages',
    headers: {
      'X-API-TOKEN': 'YOUR TOKEN',
    },
    body: {
      from: message.to,
      to: message.from,
      contents: [
        {
          type: 'text',
          text: 'Recebido',
        },
      ],
    },
    json: true,
  })
    .then((response) => {
      console.log('Response:', response)
    })
    .catch((error) => {
      console.log('Error:', error)
    })
  return 'Message sent to WhatsApp!'
}
export default sendMessageToWhatsApp
