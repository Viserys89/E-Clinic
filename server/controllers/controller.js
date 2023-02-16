const dokter = require("../models/dokter")

exports.create = async (req, res) => {
    try {
        const { dokter_id, nama, nik, jenis_kelamin, keahlian_id} = req.body

        const Dokter = await dokter.create({
            dokter_id, 
            nama,
            nik,
            jenis_kelamin,
            keahlian_id
        })

        return res.status(201).json({
            status: 201,
            success: true,
            message: "Dokter was created",
            data: {
                dokter: Dokter,
            },
            error: null
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            status: 500,
            success: false,
            message: "internal server error",
            data: null,
            error: "Internal Server Error"
        })
    }
}

exports.all = async (req, res) => {
    try {
        const Dokter = await dokter.findAll()
        return res.status(200).json({
            status: 200,
            success: true,
            message: "ok",
            data: {
                Dokter,
            },
            error: null
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            status: 500,
            success: false,
            message: "internal server error",
            data: null,
            error: "Internal Server Error"
        })
    }
}

exports.find = async (req, res) => {
    try {
        const { id } = req.params
        const dokter = await dokter.findOne({
            where: {
                id: id
            },
        })

        if (!dokter) {
            return res.status(404).json({
                status: 404,
                success: false,
                message: "dokter not found",
                data: null,
                error: "dokter Not Found"
            })
        }

        return res.status(200).json({
            status: 200,
            success: true,
            message: "ok",
            data: {
                dokter: dokter,
            },
            error: null
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            status: 500,
            success: false,
            message: "internal server error",
            data: null,
            error: "Internal Server Error"
        })
    }
}

exports.update = async (req, res) => {
    try {
        const { id } = req.params

        const updated = await dokter.update(req.body, {
            where: {
                id: id,
            }
        })

        if (!updated[0]) {
            return res.status(200).json({
                status: 200,
                success: false,
                message: "failed to update book",
                data: null,
                error: "Failed To Update Book"
            })
        }

        return res.status(200).json({
            status: 200,
            success: true,
            message: "dokter updated",
            data: null,
            error: null
        })

    } catch (error) {
        console.error(error)
        return res.status(500).json({
            status: 500,
            success: false,
            message: "internal server error",
            data: null,
            error: "Internal Server Error"
        })
    }
}

exports.destroy = async (req, res) => {
    try {
        const { id } = req.params

        const destroyed = await dokter.destroy({
            where: {
                id: id,
            }
        })

        if (!destroyed) {
            return res.status(200).json({
                status: 200,
                success: false,
                message: "failed to delete dokter",
                data: null,
                error: "Failed To Delete dokter"
            })
        }

        return res.status(200).json({
            status: 200,
            success: true,
            message: "dokter deleted",
            data: null,
            error: null
        })

    } catch (error) {
        console.error(error)
        return res.status(500).json({
            status: 500,
            success: false,
            message: "internal server error",
            data: null,
            error: "Internal Server Error"
        })
    }
}