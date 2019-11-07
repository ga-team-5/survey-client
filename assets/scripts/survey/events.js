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

const onMySurveySubmit = (event) => {
  event.preventDefault()
  surveyApi.mySurveyIndex()
    .then(surveyUi.onMySurveySuccess)
    .catch(surveyUi.onMySurveyFailure)
}

const onMySurveyEdit = (event) => {
  event.preventDefault()
  surveyApi.mySurveyIndex()
    .then(surveyUi.onMySurveyEditSuccess)
    .catch(surveyUi.onMySurveyEditFailure)
}


const onMySurveyDelete = (event) => {
  event.preventDefault()
  surveyApi.mySurveyIndex()
    .then(surveyUi.onMySurveyDeleteSuccess)
    .catch(surveyUi.onMySurveyDeleteyFailure)
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
  onMySurveySubmit,
  onMySurveyEdit,
  onMySurveyDelete,
  onCalcResults
}
