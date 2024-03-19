import { Router } from 'express';
import bodyValidationMiddleware from '../../middlewares/body-validation.middleware';
import { userLoginSchema, userRegistrSchema } from '../../validator/body-validator';
import tryCatchMiddleware from '../../middlewares/try-catch.middleware';
import AuthController from '../../controllers/auth.controller';

const router: Router = Router();

// @route   POST api/auth/register
// @desc    User registration
// @access  Public

router.post('/register', [
  bodyValidationMiddleware(userRegistrSchema),
  tryCatchMiddleware(AuthController.registration.bind(AuthController))
]);

// @route   POST api/auth/login
// @desc    User login
// @access  Public

router.post('/login', [
  bodyValidationMiddleware(userLoginSchema),
  tryCatchMiddleware(AuthController.login.bind(AuthController))
]);

export default router;
