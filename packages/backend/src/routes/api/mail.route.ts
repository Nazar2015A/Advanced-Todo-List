import { Router } from 'express';
import bodyValidationMiddleware from '../../middlewares/body-validation.middleware';
import tryCatchMiddleware from '../../middlewares/try-catch.middleware';
import userController from '../../controllers/auth.controller';
import { userEmailSchema, userPasswordSchema } from '../../validator/body-validator';

const router: Router = Router();

// @route   GET api/mail/activate/:link
// @desc    Activate user account using activation link
// @access  Public

router.get('/active/:link', [tryCatchMiddleware(userController.activate.bind(userController))]);

// @route   POST api/mail/forgot-password
// @desc    Site form for for reset user`s password
// @access  Public

router.post('/forgot-password', [
  bodyValidationMiddleware(userEmailSchema),
  tryCatchMiddleware(userController.forgotPassword.bind(userController))
]);

// @route   PUT api/mail/reset-password/:token
// @desc    Email link for reset user`s password
// @access  Public

router.put('/reset-password/:token', [
  bodyValidationMiddleware(userPasswordSchema),
  tryCatchMiddleware(userController.resetPassword.bind(userController))
]);

export default router;
