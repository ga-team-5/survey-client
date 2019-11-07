const surveyApi = require('./api')
const surveyUi = require('./ui')
const getFormFields = require(`../../../lib/get-form-fields`)

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

const onMySurveySubmit = (event) => {
  event.preventDefault()
  surveyApi.mySurveyIndex()
    .then(surveyUi.onMySurveySuccess)
    .catch(surveyUi.onMySurveyFailure)
}

const onCalcResults = (event) => {
  event.preventDefault()
  const surveyId = $(event.target).data('survey-id')
  surveyApi.voteIndex(surveyId)
    .then(surveyUi.onVoteIndexSuccess)
    .catch(surveyUi.onVoteIndexFailure)
}

const onCreateSurvey = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  surveyApi.surveyCreate(data)
    .then(surveyUi.onSurveyCreateSuccess)
    .catch(surveyUi.onSurveyCreateFailure)
}
module.exports = {
  onSurveySubmit,
  onCalcResults,
  onCreateSurvey,
  onMySurveySubmit
}
