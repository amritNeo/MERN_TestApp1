const express = require('express');
const router = express.Router()

const userSignUpController = require('../controller/userSignup')
const userLogoutController = require('../controller/userLogout')
const userSignInController = require('../controller/userSignin')
const userDetailsController = require('../controller/userDetails')
const authToken = require('../middleware/authToken')
const allUsersContoller = require('../controller/allUsers');
const updateUserController = require('../controller/updateUser');

router.post('/signup', userSignUpController)
router.post('/signin', userSignInController)
router.get('/userDetails', authToken, userDetailsController)
router.get('/logout', userLogoutController)
router.get('/userList', authToken, allUsersContoller)
router.post('/updateUser', authToken,updateUserController)


// const AllProductsController = require('../controller/allProducts');
// router.get('/allProducts', AllProductsController)

module.exports = router