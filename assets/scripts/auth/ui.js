// ui.js for users

'use strict'

const store = require('../store')
const surveyIndexTemplate = require('../templates/survey.handlebars')

const signUpSuccess = function (data) {
  $('#message2').text('Signed up successfully')
  $('#message2').css({ opacity: 1 })
  $('#message2').addClass('alert')
  $('#message2').animate({ opacity: 0 }, 5000)
  $('#sign-up').trigger('reset')
}

const signUpFailure = function (error) {
  $('#message2').text('Error on sign up')
  $('#message2').addClass('alert')
  $('#message2').css({ opacity: 1 })
  $('#message2').animate({ opacity: 0 }, 5000)
  $('#sign-up').trigger('reset')
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully')
  $('#message').removeClass()
  $('#message').addClass('alert')
  $('#message').css({ opacity: 1 })
  $('#message').animate({ opacity: 0 }, 5000)
  $('.sign-up').hide()
  $('.sign-in').hide()
  $('.navbar').removeClass('d-none')

  const surveyHTML = surveyIndexTemplate({surveys: data.surveys})
  $('#all-surveys-container').removeClass('d-none')
  $('#all-surveys-container').html(surveyHTML)
}

const signInFailure = function (error) {
  $('#message2').text('Error on sign in')
  $('#message2').addClass('alert')
  $('#message2').css({ opacity: 1 })
  $('#message2').animate({ opacity: 0 }, 5000)
}

const signOutSuccess = function () {
  $('#message2').text('Signed out successfully')
  $('#message2').addClass('alert')
  $('form').trigger('reset')
  $('.sign-up').show()
  $('.sign-in').show()
  $('#all-surveys-container').addClass('d-none')
  $('#all-surveys-container').html('')
  $('.navbar').addClass('d-none')
  $('#message').css({ opacity: 1 })
  store.user = null
}

const signOutFailure = function (error) {
  $('#message').text('Error on sign out')
  $('#message').removeClass()
  $('#message').addClass('alert')
}

const changePasswordSuccess = function () {
  $('#message').text('Changed password successfully')
  $('#message').removeClass()
  $('#message').addClass('alert')
}

const changePasswordFailure = function (error) {
  $('#message').text('Error on change password')
  $('#message').removeClass()
  $('#message').addClass('alert')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
