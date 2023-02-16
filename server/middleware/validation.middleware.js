exports.createDokterValidation = (req, res, next) => {
    const { nama, nik, jenis_kelamin, keahlian_id } = req.body

    if (nama === undefined || nama == "") {
        return res.status(400).json({
            status: 400,
            success: false,
            message: "bad request",
            data: {
                original: req.body
            },
            error: "nama tidak ditemukan"
        })
    }

    if (nik === undefined || nik == "") {
        return res.status(400).json({
            status: 400,
            success: false,
            message: "bad request",
            data: {
                original: req.body
            },
            error: "nik tidak ditemukan"
        })
    }

    if (jenis_kelamin === undefined || jenis_kelamin == "") {
        return res.status(400).json({
            status: 400,
            success: false,
            message: "bad request",
            data: {
                original: req.body
            },
            error: "jenis_kelamin tidak ditemukan"
        })
    }

    if (keahlian_id === undefined || keahlian_id == "") {
        return res.status(400).json({
            status: 400,
            success: false,
            message: "bad request",
            data: {
                original: req.body
            },
            error: "keahlian_id tidak ditemukan"
        })
    }

    next()
}