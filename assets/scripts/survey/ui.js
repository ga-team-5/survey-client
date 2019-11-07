// const showServeysTemplate = require('../templates/servey.handlebars')

const onVoteSuccess = (response) => {
  $('#message').text('Your vote is counted.')
  $('#message').css({ opacity: 1 })
  $('#message').animate({ opacity: 0 }, 5000)
  $('#message').addClass('alert')
  console.log(response)
}

const onVoteFailure = (response) => {
  $('#message').text('You can only vote once.')
  $('#message').css({ opacity: 1 })
  $('#message').animate({ opacity: 0 }, 5000)

  console.log(response)
}

const onVoteIndexSuccess = (response) => {
  console.log(response)
  const votes = response.votes
  const surveyId = votes[0].survey_id
  const voteObj = votes.reduce((acc, cur) => {
    switch (cur.option_id) {
      case 1:
        acc.op1 += 1
        break
      case 2:
        acc.op2 += 1
        break
      case 3:
        acc.op3 += 1
        break
      case 4:
        acc.op4 += 1
        break
    }
    return acc
  }, {op1: 0, op2: 0, op3: 0, op4: 0})
  console.log(voteObj)
  console.log(surveyId)
  const form = $('#all-surveys-container').find(`form[data-survey-id='${surveyId}']`)
  $(form).find('.op1-display').html(` | votes: ${voteObj.op1}`)
  $(form).find('.op2-display').html(` | votes: ${voteObj.op2}`)
  $(form).find('.op3-display').html(` | votes: ${voteObj.op3}`)
  $(form).find('.op4-display').html(` | votes: ${voteObj.op4}`)
}

const onVoteIndexFailure = (response) => {
  console.log(response)
}

const onMySurveySuccess = (response) => {
  $('#message').text('Here we go!')
  $('#message').css({ opacity: 1 })
  $('#message').animate({ opacity: 0 }, 5000)
  $('#message').addClass('alert')
  console.log(response)
}

const onMySurveyFailure = (response) => {
  $('#message').text('Ooops, something went wrong')
  $('#message').css({ opacity: 1 })
  $('#message').animate({ opacity: 0 }, 5000)
}

module.exports = {
  onVoteSuccess,
  onVoteFailure,
  onVoteIndexSuccess,
  onVoteIndexFailure,
  onMySurveySuccess,
  onMySurveyFailure
}
