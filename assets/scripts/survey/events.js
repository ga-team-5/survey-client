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

const onCalcResults = (event) => {
  event.preventDefault()
  const surveyId = $(event.target).data('survey-id')
  surveyApi.voteIndex(surveyId)
    .then(surveyUi.onVoteIndexSuccess)
    .catch(surveyUi.onVoteIndexFailure)
}

module.exports = {
  onSurveySubmit,
  onCalcResults
}
