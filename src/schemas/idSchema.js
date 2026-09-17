const z = require("zod");

const idSchema = z.object({
    id: z.coerce.number("ID deve ser numérico").int("ID deve ser um número inteiro").positive("ID deve ser maior que zero")
});

module.exports = idSchema;
