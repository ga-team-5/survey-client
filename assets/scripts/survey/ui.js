// const showServeysTemplate = require('../templates/servey.handlebars')

const onVoteSuccess = (response) => {
  $('#message').addClass('alert')
  console.log()
}

const onVoteFailure = () => {

}

module.exports = {
  onVoteSuccess,
  onVoteFailure
}
