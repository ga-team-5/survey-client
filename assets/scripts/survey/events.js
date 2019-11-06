const surveyApi = require('./api')
const surveyUi = require('./ui')

const onSurveySubmit = (event) => {
  event.preventDefault()
  const optionId = $('input[name=vote]:checked', event.target).val()
  const surveyId = $(event.target).data('survey-id')
  surveyApi.voteCreate(optionId, surveyId)
    .then(surveyUi.onVoteSuccess)
    .then(data => {
      $(event.target).trigger('reset')
    })
    .catch(surveyUi.onVoteFailure)
}

module.exports = {
  onSurveySubmit
}
