'use strict'

const config = require('../config')
const store = require('../store')

const surveyIndex = () => {
  return $.ajax({
    url: config.apiUrl + '/surveys',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const mySurveyIndex = () => {
  return $.ajax({
    url: config.apiUrl + `/surveys?user=${store.user._id}`,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const createSurvey = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/surveys',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const voteCreate = (optionId, surveyId) => {
  return $.ajax({
    url: config.apiUrl + '/votes',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      vote: {
        survey_id: surveyId,
        option_id: optionId
      }
    }
  })
}

const voteIndex = (surveyId) => {
  return $.ajax({
    url: config.apiUrl + `/votes?survey=${surveyId}`,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const surveyCreate = (data) => {
  return $.ajax({
    url: config.apiUrl + '/surveys',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const mySurveyEdit = (surveyId, data) => {
  return $.ajax({
    url: config.apiUrl + `/surveys/${surveyId}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const mySurveyDelete = (surveyId) => {
  return $.ajax({
    url: config.apiUrl + `/surveys/${surveyId}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  surveyIndex,
  createSurvey,
  voteCreate,
  voteIndex,
  surveyCreate,
  mySurveyIndex,
  mySurveyEdit,
  mySurveyDelete
}
