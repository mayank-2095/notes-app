// import express from 'express';
const express = require('express');
const auth = require('../middlewares/auth')
const router = express.Router()
const userCtrl = require('../controllers/userCtrl')

// registering a user
router.route('/register').post(userCtrl.resgisterUser)

// logging a user
router.route('/login').post(userCtrl.loginUser)

// verify Token
router.get('/verify' , userCtrl.verifiedToken )


module.exports = router;