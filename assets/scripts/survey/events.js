const surveyApi = require('./api')
const surveyUi = require('./ui')

const onSurveySubmit = (event) => {
  const optionId = $(`${event.target} input[name='vote']:checked`).val()
  const surveyId = $(event.target).data('survey-id')
  surveyApi.voteCreate(optionId, surveyId)
    .then(surveyUi.onVoteSuccess)
    .catch(surveyUi.onVoteFailure)
}

module.exports = {
  onSurveySubmit
}
