import Joi from "joi";

export const createOrder = {
    body: Joi.object().keys({
        description: Joi.string().required(),
        serviceType: Joi.string().required(),
        date: Joi.date().required(),
        // user: Joi.string().required(),
        // cateStore: Joi.string().required(),
        // cateService: Joi.string().required(),
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

// customer 

export const createOrderByCustomer = {
    body: Joi.object().keys({
        description: Joi.string().allow('', null),
        appointmentSchedule : Joi.date().required(),
        serviceType: Joi.string().required(),
        accountId : Joi.string().allow('', null),
        email : Joi.string().allow('', null),
        name: Joi.string().required(),
        number_phone: Joi.string().required(),
        showroomId: Joi.string().required(),
    })
}