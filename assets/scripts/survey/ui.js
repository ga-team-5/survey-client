// const showServeysTemplate = require('../templates/servey.handlebars')

const onVoteSuccess = (response) => {
  $('#message').text('Your vote is counted.')
  $('#message').css({ opacity: 1 })
  $("#message").animate({ opacity: 0 }, 5000)
  $('#message').addClass('alert')
  console.log(response)
}

const onVoteFailure = (response) => {
  $('#message').text('You can only vote once.')
  $('#message').css({ opacity: 1 })
  $("#message").animate({ opacity: 0 }, 5000)

  console.log(response)
}

const onVoteIndexSuccess = (response) => {
  console.log(response)
}

const onVoteIndexFailure = (response) => {
  console.log(response)
}

module.exports = {
  onVoteSuccess,
  onVoteFailure,
  onVoteIndexSuccess,
  onVoteIndexFailure
}
