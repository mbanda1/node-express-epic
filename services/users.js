import items from '../data.js'

export const getOne = () => async (req, res, next) => {
    try {
        const { id } = req.params

        const item = items.find((item) => item.id === id)

        res.status(200);
        res.send(item)
    } catch (error) {
        next(error);
    }
};



export const getMany = () => async (req, res, next) => {
    try {

        res.send(items)

    } catch (error) {
        next(error);
    }
};

export const addOne = () => async (req, res, next) => {
    try {

        const { name } = req.body
        let item = {
            id: Math.floor(Math.random() * 999),
            name,
        }

        res.status(201).send(item)
    } catch (error) {
        next(error);
    }
};


