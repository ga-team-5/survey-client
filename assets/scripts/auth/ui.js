// ui.js for users

'use strict'

const store = require('../store')
const surveyIndexTemplate = require('../templates/survey.handlebars')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').removeClass()
  $('#message').addClass('alert')
  console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = function (error) {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('alert')
  console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully')
  $('#message').removeClass()
  $('#message').addClass('alert')
  $("#message").animate({ opacity: 0 }, 5000)
  $('.sign-up').hide()
  $('.sign-in').hide()
  $('.navbar').removeClass('d-none')

  const surveyHTML = surveyIndexTemplate({surveys: data.surveys})
  $('#all-surveys-container').removeClass('d-none')
  $('#all-surveys-container').html(surveyHTML)
  console.log('signInSuccess ran. Data is :', data)
}

const signInFailure = function (error) {
  $('#message').text('Error on sign in')
  $('#message').removeClass()
  $('#message').addClass('alert')
  console.error('signInFailure ran. Error is :', error)
}

const signOutSuccess = function () {
  $('#message').text('Signed out successfully')
  $('#message').removeClass()
  $('#message').addClass('alert')
  $('form').trigger('reset')
  $('.sign-up').show()
  $('.sign-in').show()
  $('#all-surveys-container').addClass('d-none')
  $('#all-surveys-container').html('')
  $('.navbar').addClass('d-none')
  $('#message').css({ opacity: 1 })
  console.log('signOutSuccess ran and nothing was returned!')
  store.user = null
}

const signOutFailure = function (error) {
  $('#message').text('Error on sign out')
  $('#message').removeClass()
  $('#message').addClass('alert')
  console.error('signOutFailure ran. Error is :', error)
}

const changePasswordSuccess = function () {
  $('#message').text('Changed password successfully')
  $('#message').removeClass()
  $('#message').addClass('alert')
  console.log('changePasswordSuccess ran and nothing was returned!')
}

const changePasswordFailure = function (error) {
  $('#message').text('Error on change password')
  $('#message').removeClass()
  $('#message').addClass('alert')
  console.error('changePasswordFailure ran. Error is :', error)
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
