/**
 *   @author toto
 *   @createdDate    2017-12-06 05:05 PM
 *   @email  toto6321@qq.com
 */

const User = require('../models/user')

module.exports.usersFindAll = (req, res) => {
  User
    .find({})
    .exec((err, users) => {
      if (err) {
        res.status(400).send()
      } else {
        res.status(200).send(users)
      }
    })
}

module.exports.usersFindOneById = (req, res) => {
  if (req.params && req.params.uid) {
    console.log(req.params.uid)
    User
      .find({_id: req.params.uid.trim()})
      .exec((err, user) => {
        err
          ? res.status(400).send()
          :					res.status(200).send(user)
      })
  }
}

module.exports.userCreate = (req, res) => {
  let {nickname = '', name = '', gender = 0, email = '', mobile = undefined, pwd = undefined} = req.body
  console.log(nickname)
  console.log(name)
  console.log(gender)
  console.log(email)
  console.log(mobile)
  console.log(pwd)

  if (gender && email && mobile && pwd) {
    const newUser = {
      nickname: nickname || '',
      name: name || '',
      gender: gender || 0,
      mobile: mobile || '',
      email: email,
      pwd: pwd
    }
    User
      .create(newUser, (err, user) => {
        if (err) {
          res.status(400).send(err)
        } else {
          res.status(200).send(user)
        }
      })
  } else {
    res.status(300).send({msg: 'parameter error'})
  }
}
