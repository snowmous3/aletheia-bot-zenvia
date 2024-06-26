import request_promise from 'request-promise'
const { post } = request_promise

const sendMessage = (message) => {
  post({
    uri: 'https://api.zenvia.com/v2/channels/instagram/messages',
    headers: {
      'X-API-TOKEN': 'YOUR TOKEN',
    },
    body: {
      from: message.to,
      to: message.from,
      contents: [
        {
          type: 'text',
          text: 'Message here....',
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
export default sendMessage
