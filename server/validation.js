const Joi = require("joi");

const registerValidation = (object) => {
  const schema = Joi.object({
    username: Joi.string().min(2).max(20).required(),
    email: Joi.string().email().trim().max(50).required(),
    password: Joi.string().min(6).max(100).required(),
  });
  return schema.validate(object);
};

const loginValidation = (object) => {
  const schema = Joi.object({
    email: Joi.string().email().trim().max(50).required(),
    password: Joi.string().min(6).max(100).required(),
  });
  return schema.validate(object);
};

// 不在joi範圍內的不得更改 (isAdmin不用怕被動到)
// 之後schema有變更來此增加內容
const updateValidation = (object) => {
  const schema = Joi.object({
    username: Joi.string().min(2).max(20),
    email: Joi.string().email().trim().max(50),
    password: Joi.string().min(6).max(100),
  });
  return schema.validate(object);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.updateValidation = updateValidation;
