// const showServeysTemplate = require('../templates/servey.handlebars')

const onVoteSuccess = (response) => {
  console.log(response)
}

const onVoteFailure = (response) => {
  console.log(response)
}

module.exports = {
  onVoteSuccess,
  onVoteFailure
}
