const mySurveysTemplate = require('../templates/mySurvey.handlebars')
const surveyIndexTemplate = require('../templates/survey.handlebars')

const onVoteSuccess = (response) => {
  $('#message').text('Your vote is counted.')
  $('#message').css({ opacity: 1 })
  $('#message').animate({ opacity: 0 }, 5000)
  $('#message').addClass('alert')
}

const onVoteFailure = (response) => {
  $('#message').text('You can only vote once.')
  $('#message').css({ opacity: 1 })
  $('#message').animate({ opacity: 0 }, 5000)
  $('#message').addClass('alert')
}

const onVoteIndexSuccess = (response) => {
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
  const form = $('#all-surveys-container').find(`form[data-survey-id='${surveyId}']`)
  $(form).find('.op1-display').html(` | votes: ${voteObj.op1}`)
  $(form).find('.op2-display').html(` | votes: ${voteObj.op2}`)
  $(form).find('.op3-display').html(` | votes: ${voteObj.op3}`)
  $(form).find('.op4-display').html(` | votes: ${voteObj.op4}`)
}

const onVoteIndexFailure = (response) => {
  $('#message').text('Failure')
  $('#message').css({ opacity: 1 })
  $('#message').animate({ opacity: 0 }, 5000)
  $('#message').addClass('alert')
}

const onSurveyCreateSuccess = (response) => {
  $('#createModalForm').trigger('reset')
  $('#createModal').modal('toggle')
  $('.my-survey').trigger('click')
  $('#message').text('Survey created! Edit it or click "All Surveys"')
  $('#message').css({ opacity: 1 })
  $('#message').animate({ opacity: 0 }, 7000)
  $('#message').addClass('alert')
}

const onSurveyCreateFailure = (response) => {
  $('#message').text('Failure')
  $('#message').css({ opacity: 1 })
  $('#message').animate({ opacity: 0 }, 5000)
  $('#message').addClass('alert')
}

const onMySurveySuccess = (response) => {
  const mySurveyHTML = mySurveysTemplate({surveys: response.surveys})
  $('#all-surveys-container').addClass('d-none')
  $('#all-surveys-container').html('')
  $('#my-surveys-container').removeClass('d-none')
  $('#my-surveys-container').html(mySurveyHTML)
}

const onSurveyIndexSuccess = (response) => {
  const surveyHTML = surveyIndexTemplate({surveys: response.surveys})
  $('#my-surveys-container').addClass('d-none')
  $('#my-surveys-container').html('')
  $('#all-surveys-container').removeClass('d-none')
  $('#all-surveys-container').html(surveyHTML)
}

const onSurveyIndexFailure = (response) => {
  $('#message').text('Ooops, something went wrong')
  $('#message').css({ opacity: 1 })
  $('#message').animate({ opacity: 0 }, 5000)
}

const onMySurveyFailure = (response) => {
  $('#message').text('Ooops, something went wrong')
  $('#message').css({ opacity: 1 })
  $('#message').animate({ opacity: 0 }, 5000)
}

const onMySurveyEditSuccess = (response) => {
  $('#message').text('Great! You successfully edited your survey')
  $('#message').css({ opacity: 1 })
  $('#message').animate({ opacity: 0 }, 5000)
  $('#message').addClass('alert')
  $('.my-survey').trigger('click')
}

const onMySurveyEditFailure = (response) => {
  $('#message').text('Try again')
  $('#message').addClass('alert')
  $('#message').css({ opacity: 1 })
  $('#message').animate({ opacity: 0 }, 5000)
}

const onMySurveyDeleteSuccess = (response) => {
  $('#message').text('You successfully deleted your survey')
  $('#message').css({ opacity: 1 })
  $('#message').animate({ opacity: 0 }, 5000)
  $('#message').addClass('alert')
  $('.my-survey').trigger('click')
}

const onMySurveyDeleteFailure = (response) => {
  $('#message').text('Ooops! Try again')
  $('#message').css({ opacity: 1 })
  $('#message').animate({ opacity: 0 }, 5000)
}

module.exports = {
  onVoteSuccess,
  onVoteFailure,
  onVoteIndexSuccess,
  onVoteIndexFailure,
  onMySurveySuccess,
  onMySurveyFailure,
  onMySurveyEditSuccess,
  onMySurveyEditFailure,
  onMySurveyDeleteSuccess,
  onMySurveyDeleteFailure,
  onSurveyCreateSuccess,
  onSurveyCreateFailure,
  onSurveyIndexFailure,
  onSurveyIndexSuccess
}
