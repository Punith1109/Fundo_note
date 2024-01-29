import Joi from '@hapi/joi';

export const newUserValidator = (req, res, next) => {
  const schema = Joi.object({
    first_name: Joi.string().min(4).required(),
    last_name: Joi.string().min(4).optional(),
    email_id: Joi.string().min(4).required(),
    password: Joi.string().min(6).required()
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    next();
  }
};
