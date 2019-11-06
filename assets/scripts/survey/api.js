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

const updateSurvey = function (formData, target) {
  return $.ajax({
    url: config.apiUrl + '/surveys/' + target,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: JSON.stringify(formData),
    contentType: 'application/json'
  })
}

const takeSurveys = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/surveys',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const deleteSurvey = (target) => {
  return $.ajax({
    url: config.apiUrl + '/surveys/' + target,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getSurveyStats = function (target) {
  return $.ajax({
    url: config.apiUrl + '/surveys/' + target + '/stats',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
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

module.exports = {
  surveyIndex,
  createSurvey,
  updateSurvey,
  takeSurveys,
  deleteSurvey,
  getSurveyStats,
  voteCreate
}
