import request from 'superagent'

export function getEmoji() {
  //call the emoji api
  request.get('/api/emoji')
  //process the response, and extract the data
  .then(res => res.body)
  // handle an API error
  .catch(err => {
    console.error('Emoji API troubles', err)
  })
}