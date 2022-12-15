import Joi from "joi";

export const createOrder = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        description: Joi.string().required(),
        serviceType: Joi.string().required(),
        date: Joi.date().required(),
        addresses: Joi.string().required(),
        phone: Joi.string().required(),
        price: Joi.number().required(),
        subPrice: Joi.number().required(),
    })
}

export const getById = {
    params: Joi.object().keys({
        id: Joi.string().required(),
    })
}

export const deleteByIds = {
    body: Joi.object().keys({
        ids: Joi.array().items(Joi.string()),
    }),
};