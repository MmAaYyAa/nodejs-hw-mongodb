import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Contactname should be a string',
  }),
  phoneNumber: Joi.string()
    .min(3)
    .max(20)
    .pattern(/^\+?[1-9]\d{1,14}$/)
    .required(),
  email: Joi.string().email().required(),
  isFavourite: Joi.boolean().default(false),
  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .default('personal')
    .required(),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).messages({
    'string.base': 'Contactname should be a string',
  }),
  phoneNumber: Joi.string()
    .min(3)
    .max(20)
    .pattern(/^\+?[1-9]\d{1,14}$/),
  email: Joi.string().email(),
  isFavourite: Joi.boolean().default(false),
  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .default('personal'),
});
