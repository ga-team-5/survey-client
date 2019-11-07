'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
const authEvents = require('./auth/events')
const surveyEvents = require('./survey/events')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out-btn').on('click', authEvents.onSignOut)
  $('.all-surveys-container').on('submit', 'form', surveyEvents.onSurveySubmit)
  $('.all-surveys-container').on('click', '.results-btn-div button', surveyEvents.onCalcResults)
  $('#createModalForm').on('submit', surveyEvents.onCreateSurvey)
  $('.my-survey').on('click', surveyEvents.onMySurveySubmit)
  $('.edit-survey-button').on('click', surveyEvents.onMySurveyEdit)
  $('.delete-survey-button').on('click', surveyEvents.onMySurveyDelete)
  $('#createModalForm').on('submit', surveyEvents.onCreateSurvey)
})
