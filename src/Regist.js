
import React from 'react';
function Regist () {
    return (
  <div>
    <form action="/regist" method="POST">
            <legend class="text-pop-up-top">FORMULIR PENDAFTARAN</legend>
            <h3 class="text-shadow-pop-left">*Indentitas Siswa</h3>
            <p>
                <label for="Nama_Lengkap">Nama Lengkap:</label>
                <br />
                <input type="text" name="nama" placeholder="Nama..." />
            </p>
            <p>
                <label for="Tempat_Lahir">TTL:</label>
                <br />
                <input type="date" name="TTL" placeholder="DD/MM/YY" />
            </p>
            <p>
                <label for="Jenis_Kelamin">Jenis Kelamin:</label>
                <br />
                <br />
                <a>laki laki: </a>
                <input type="checkbox" name="Jenis kelamin" placeholder="Jenis kelamin" />
                <a>/</a>
                <a>Perempuan: </a>
                <input type="checkbox" name="Jenis kelamin" placeholder="Jenis kelamin" />
            </p>
            <p>
                <label for="Alamat">Alamat:</label>
                <br />
                <input type="text" name="nama" placeholder="Nama..." />
            </p>
            <br />
       
         
            <h3 class="text-shadow-pop-left">*Asal Sekolah</h3>
            <p>
                <label for="Asal_Sekolah">SMP / MTs:</label>
            </p>
            <input type="text" name="nama" placeholder="Nama..." />
            <br />
            <p>
                <label for="NISN">NISN:</label>
                <br />
                <input type="text" name="nama" placeholder="Nama..." />
                <br />
            </p>
            <br />
          


            <h3 class="text-shadow-pop-left">*Identitas orang Tua</h3>
            <p>
                <label for="Nama_Ayah">Nama Ayah:</label>
                <br />
                <input type="text" name="nama" placeholder="Nama..." />
                <br />
            </p>
            <p>
                <label for="Nama_Ibu">Nama Ibu:</label>
                <br />
                <input type="text" name="nama" placeholder="Nama..." />
                <br />
            </p>
            <p>
                <label for="Pekerjaan_Ortu">Pekerjaan Orang tua:</label>
                <br />
                <input type="text" name="Pekerjaan" placeholder="Pekerjaan..." />
                <br />
            </p>
            <p>
                <label for="Agama">Agama:</label>
                <br />
                <input type="text" name="agama" placeholder="agama..." />
                <br />
            </p>
            <p>
                <label for="Alamat_Ortu">Alamat:</label>
                <br />
                <input type="text" name="Alamat" placeholder="Alamat..." />
            </p>       
    </form>

  </div>
    
    )
}

export default Regist