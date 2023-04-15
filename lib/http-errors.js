export const APIError = class extends Error {
    constructor(params) {
        super(params.message)
        this.name = this.constructor.name
        this.status = params.status
        this.code = params.code
    }
}


export const invalidSchemaError = {
    status: 400,
    code: 'invalid_schema',
    message: 'Data supplied does not match the schema',
}
