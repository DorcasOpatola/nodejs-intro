const Joi = require ("joi");

const userSchema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .require(),
    password: Joi.string()

})
