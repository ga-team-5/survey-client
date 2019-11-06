// const showServeysTemplate = require('../templates/servey.handlebars')

const onVoteSuccess = (response) => {
  $('#message').addClass('alert')
  console.log(response)
}

const onVoteFailure = (response) => {
  console.log(response)
}

module.exports = {
  onVoteSuccess,
  onVoteFailure
}
