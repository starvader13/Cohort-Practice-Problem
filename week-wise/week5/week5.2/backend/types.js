const zod = require('zod')

const bodySchema = zod.object({
    title: zod.string(),
    description: zod.string()
});

const idSchema = zod.object({
    id: zod.string()
});

module.exports = {
    bodySchema,
    idSchema
}
