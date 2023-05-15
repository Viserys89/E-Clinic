const {data, user_controls} = require('../models/datas');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const crypto = require('crypto');
const secret_key= process.env.JWT_SECRET  || crypto.randomBytes(32).toString('hex');
const {body, validationResult} = require('express-validator');
const Sequelize = require('sequelize');

exports.login = [
  //validasi express-validator
  body("nik")
  .isLength({ max: 16 })
  .isNumeric()
  .withMessage("NIK Tidak Valid")
  .escape(true),
  body("pass").isLength({ min: 8 }).withMessage("Password Minimal 8 Karakter"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ alert: errors.array().map((items) => items.msg)[0] });
    }
    if (!req.body.nik || !req.body.pass) {
      return res.status(400).json({ alert: "NIK dan Password Harus Diisi!" });
    }
    data.findOne({ where: { nik: req.body.nik } }).then((nik) => {
      if (!nik) {
        return res
          .status(404)
          .json({ alert: "Nik Tidak Terdaftar, Register Sekarang!" });
      }
      let token = req.body.remember
        ? jwt.sign({ id: nik.pasien_id }, secret_key, {
            expiresIn: "30d",
          })
        : jwt.sign({ id: nik.pasien_id }, secret_key, {
            expiresIn: "5h",
          });

      return bcrypt.compare(req.body.pass,nik.password,(err, passwordHash) => {
          if (passwordHash) {
            this.auth(token, nik, req, res);
          } else {
            return res.status(404).json({ alert: "Password Salah" });
          }
        }
      );
    });
  },
];

exports.auth = (token, nik, req, res) => {
  //dapatkan model device dengan mengambil userAgent
  // const agent = req.useragent
  // const source = agent.source
  // const deviceDetector = new DeviceDetector();
  // let device
  // let deviceData
  // console.log(source);
  // if(deviceName){
  //   device = deviceDetector.parse(deviceName);
  //   deviceData = `${device.os.name}, ${device.device.brand}, ${device.device.model}`
  // } else{
  //   device = deviceDetector.parse(source)
  //   deviceData = `${device.os.name} ${device.os.version}, ${device.device?.type || null}, ${device.device?.brand || null} ${device.device?.model || null}`
  // }

  let decodedToken;
  try {
    decodedToken = jwt.verify(token, secret_key);
    console.log(decodedToken);
  } catch (err) {
    return res.status(500).json({ alert: "Error token expired" });
  }
  if (!decodedToken) {
    return res.status(401).json({ alert: "Unauthorized" });
  }
  // update status akun
  user_controls
    .update(
      {
        is_login: true,
        last_login: Sequelize.Sequelize.fn("now"),
        jwt_token: token,
      },
      {
        where: { id_user: decodedToken.id },
      }
    )
    .then(() => {
      user_controls.findOne({where : {id_user: decodedToken.id}}).then((data) => {
        return res
        .status(200)
        .json({
          alert: "Login Berhasil",
          id: nik.pasien_id,
          namalengkap: nik.namalengkap,
          nik: nik.nik,
          email: nik.email,
          tanggalLahir: nik.tanggallahir,
          golongandarah: nik.golongandarah,
          tempatLahir: nik.tempatlahir,
          alamat: nik.alamat,
          rw: nik.rw,
          rt: nik.rt,
          kodepos: nik.kodepos,
          kodewilayah: nik.kodewilayah,
          pekerjaan: nik.pekerjaan,
          jeniskelamin: nik.jeniskelamin,
          profilePic: nik.profile,
          token: token,
          level: data.level,
        });
      })
    });
};

exports.rememberauth = (req, res, next) => {
  //login otomatis jika remember me aktif dengan mengambil id yang disimpan dalam jwt
  const authHeader = req.get('Authorization');  
  if (!authHeader) {
    return res.status(401).json({alert: 'Authentication Gagal'});
  }
  const token = authHeader.split(' ')[1];
  res.send('Authorization header value: ' + authHeader);
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, secret_key);
  } catch (err) {
    return res
      .status(500)
      .json({alert: 'Error token expired. Silahkan login kembali'});
  }
  if (!decodedToken) {
    return res.status(401).json({alert: 'Unauthorized'});
  }
  data.findOne({where: {pasien_id: decodedToken.id}}).then(nik => {
    if (nik) {
      user_controls.update(
        {
          is_login: true,
          last_login: Sequelize.Sequelize.fn('now'),
          jwt_token: token,
        },
        {
          where: {id_user: decodedToken.id},
        },
      ).then(() => {
        user_controls.findOne({where : {id_user: decodedToken.id}}).then((data) => {
          return res
          .status(200)
          .json({
            alert: "anda berhasil login",
            id: nik.pasien_id,
            namalengkap: nik.namalengkap,
            nik: nik.nik,
            email: nik.email,
            tanggalLahir: nik.tanggallahir,
            golongandarah: nik.golongandarah,
            tempatLahir: nik.tempatlahir,
            alamat: nik.alamat,
            rw: nik.rw,
            rt: nik.rt,
            kodepos: nik.kodepos,
            kodewilayah: nik.kodewilayah,
            pekerjaan: nik.pekerjaan,
            jeniskelamin: nik.jeniskelamin,
            profilePic: nik.profile,
            token: token,
            level: data.level,
          });
        })
      });
    } else {
      res.status(404).json({alert: 'Error tolong login kembali'});
    }
  });
};
exports.logout = (req, res, next) => {
  user_controls
    .update(
      {
        is_login: false,
        jwt_token: null,
        last_logout: Sequelize.Sequelize.fn('now'),
      },
      {
        where: {id_user: req.body.id},
      },
    )
    .then(id => {
      if (id) {
        return res.status(200).json({alert: 'Logout Berhasil'});
      } 
    })
    .catch(err => {
      console.log(err);
    });
};
