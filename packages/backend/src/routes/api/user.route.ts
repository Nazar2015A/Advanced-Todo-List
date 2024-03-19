import { Router } from 'express';
import bodyValidationMiddleware from '../../middlewares/body-validation.middleware';
import { userChangePasswordBodySchema } from '../../validator/body-validator';
import tryCatchMiddleware from '../../middlewares/try-catch.middleware';
import userController from '../../controllers/user.controller';

const router: Router = Router();

// @route   Get api/user
// @desc    Get user
// @access  Private

router.get('', [tryCatchMiddleware(userController.getUser.bind(userController))]);

// @route   Put api/user/change-password
// @desc    Update user password
// @access  Private

router.put('/change-password', [
  bodyValidationMiddleware(userChangePasswordBodySchema),
  tryCatchMiddleware(userController.changePassword.bind(userController))
]);

export default router;
