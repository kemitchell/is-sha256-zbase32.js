var RE = /^[abcdefghijkmnopqrstuwxyz13456789]{52}$/

module.exports = function (argument) {
  return RE.test(argument)
}
