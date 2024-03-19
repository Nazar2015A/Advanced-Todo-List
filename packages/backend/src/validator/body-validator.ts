import Joi from 'joi';

const todoBodySchema = Joi.object({
  title: Joi.string().min(5).required(),
  description: Joi.string().min(5),
  isCompleted: Joi.boolean().default(false),
  isPrivate: Joi.boolean().default(false)
}).options({ abortEarly: false });

const userRegistrSchema = Joi.object({
  firstName: Joi.string().min(2).required(),
  lastName: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(5).required()
}).options({ abortEarly: false });

const userLoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(5).required()
}).options({ abortEarly: false });

const userEmailSchema = Joi.object({
  email: Joi.string().email().required()
}).options({ abortEarly: false });

const userPasswordSchema = Joi.object({
  password: Joi.string().min(5).required()
}).options({ abortEarly: false });

const userChangePasswordBodySchema = Joi.object({
  oldPassword: Joi.string().required().min(5),

  newPassword: Joi.string().required().min(5)
}).options({ abortEarly: false });

export {
  todoBodySchema,
  userRegistrSchema,
  userLoginSchema,
  userEmailSchema,
  userPasswordSchema,
  userChangePasswordBodySchema
};
