const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')
const db = require('./connection')



app.use('/styles', express.static("public"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))



app.get('/regist', (req, res) => {
    res.send('register.ejs')
})

app.post('/regist', (req, res) => {
const {NISN, Asal_Sekolah, Nama_Lengkap, Tempat_Lahir, Jenis_Kelamin, Alamat, Nama_Ayah, Nama_Ibu, Pekerjaan_Ortu, Agama, Alamat_Ortu} = req.body
const sql = `INSERT INTO siswa (NISN, Asal_Sekolah, Nama_Lengkap, Tempat_Lahir, Jenis_Kelamin, Alamat, Nama_Ayah, Nama_Ibu, Pekerjaan_Ortu, Agama, Alamat_Ortu) VALUES (${NISN}, '${Asal_Sekolah}', '${Nama_Lengkap}', '${Tempat_Lahir}', '${Jenis_Kelamin}', '${Alamat}', '${Nama_Ayah}', '${Nama_Ibu}', '${Pekerjaan_Ortu}', '${Agama}', '${Alamat_Ortu}')` 
    db.query(sql, (err, result) => {
        if (err) throw err
        console.log(result)
    })
    res.send('data masuk')
})

app.get('/listdata', (req, res) => {
    const sql = `SELECT * FROM siswa`
    db.query(sql, (err, result) => {
        if (err) throw err
    })
    res.send(sql)
})

app.listen(port, (err, resutl) =>{
    console.log('berjalan')
    if (err) throw err
    
})