const formatData = require('./formater')
const cengkareng = require('./kecamatan/cengkareng')
const grogol = require('./kecamatan/grogol')
const kalideres = require('./kecamatan/kalideres')
const kebonjeruk = require('./kecamatan/kebonjeruk')
const kembangan = require('./kecamatan/kembangan')
const palmerah = require('./kecamatan/palmerah')
const tamansari = require('./kecamatan/tamansari')
const tambora = require('./kecamatan/tambora')
const cempakaPutih = require('./kecamatan/cempakaPutih')
const gambir = require('./kecamatan/gambir')
const joharBaru = require('./kecamatan/joharBaru')
const kemayoran = require('./kecamatan/kemayoran')
const menteng = require('./kecamatan/menteng')
const sawahBesar = require('./kecamatan/sawahBesar')
const senen = require('./kecamatan/senen')
const tanahAbang = require('./kecamatan/tanahAbang')
const cilandak = require('./kecamatan/cilandak')
const jagakarsa = require('./kecamatan/jagakarsa')
const kebayoranBaru = require('./kecamatan/kebayoranBaru')
const kebayoranLama = require('./kecamatan/kebayoranLama')
const mampangPrapatan = require('./kecamatan/mampangPrapatan')
const pancoran = require('./kecamatan/pancoran')
const pasarMinggu = require('./kecamatan/pasarMinggu')
const pesanggrahan = require('./kecamatan/pesanggrahan')
const setiabudi = require('./kecamatan/setiabudi')
const setiabudi1 = require('./kecamatan/setiabudi1')
const tebet = require('./kecamatan/tebet')
const cakung = require('./kecamatan/cakung')
const cipayung = require('./kecamatan/cipayung')
const ciracas = require('./kecamatan/ciracas')
const durenSawit = require('./kecamatan/durenSawit')
const jatinegara = require('./kecamatan/jatinegara')
const kramatjati = require('./kecamatan/kramatjati')
const matraman = require('./kecamatan/matraman')
const pasarRebo = require('./kecamatan/pasarRebo')
const pulogadung = require('./kecamatan/pulogadung')
const cilincing = require('./kecamatan/cilincing')
const danauSunter = require('./kecamatan/danauSunter')
const kelapaGading = require('./kecamatan/kelapaGading')
const koja = require('./kecamatan/koja')
const pademangan = require('./kecamatan/pademangan')
const tanjungPriok = require('./kecamatan/tanjungPriok')
const kepulauanSeribu = require('./kecamatan/kepulauanSeribu')
const kebayoranLama2 = require('./kecamatan/kebayoranLama2')
const makasar = require('./kecamatan/penjaringan')
const penjaringan = require('./kecamatan/makasar')
const kebayoranLama3 = require('./kecamatan/kebayoranLama3')
const danauSunter2 = require('./kecamatan/danauSunter2')


const allData = [
  {
    coords: formatData(cengkareng),
    name: 'cengkareng',
    case: 137
  },
  {
    coords: formatData(grogol),
    name: 'grogol petamburan',
    case: 159
  },
  {
    coords: formatData(kalideres),
    name: 'kali deres',
    case: 122
  },
  {
    coords: formatData(kebonjeruk),
    name: 'kebon jeruk',
    case: 184
  },
  {
    coords: formatData(kembangan),
    name: 'kembangan',
    case: 130
  },
  {
    coords: formatData(palmerah),
    name: 'palmerah',
    case: 173
  },
  {
    coords: formatData(tamansari),
    name: 'taman sari',
    case: 102
  },
  {
    coords: formatData(tambora),
    name: 'tambora',
    case: 126
  },
  {
    coords: formatData(cempakaPutih),
    name: 'cempaka putih',
    case: 94
  },
  {
    coords: formatData(gambir),
    name: 'gambir',
    case: 49
  },
  {
    coords: formatData(joharBaru),
    name: 'johar baru',
    case: 67
  },
  {
    coords: formatData(kemayoran),
    name: 'kemayoran',
    case: 128
  },
  {
    coords: formatData(menteng),
    name: 'menteng',
    case: 73
  },
  {
    coords: formatData(sawahBesar),
    name: 'sawah besar',
    case: 91
  },
  {
    coords: formatData(senen),
    name: 'senen',
    case: 110
  },
  {
    coords: formatData(tanahAbang),
    name: 'tanah abang',
    case: 334
  },
  {
    coords: formatData(cilandak),
    name: 'cilandak',
    case: 92
  },
  {
    coords: formatData(jagakarsa),
    name: 'jagakarsa',
    case: 94
  },
  {
    coords: formatData(kebayoranBaru),
    name: 'kebayoran baru',
    case: 71
  },
  {
    coords: formatData(kebayoranLama),
    name: 'kebayoran lama',
    case: 135
  },
  {
    coords: formatData(mampangPrapatan),
    name: 'mampang prapatan',
    case: 57
  },
  {
    coords: formatData(pancoran),
    name: 'pancoran',
    case: 62
  },
  {
    coords: formatData(pasarMinggu),
    name: 'pasar minggu',
    case: 113
  },
  {
    coords: formatData(pesanggrahan),
    name: 'pesanggrahan',
    case: 81
  },
  {
    coords: formatData(setiabudi),
    name: 'setia budi',
    case: 67
  },
  {
    coords: formatData(setiabudi1),
    name: 'setia budi',
    case: 67
  },
  {
    coords: formatData(tebet),
    name: 'tebet',
    case: 131
  },
  {
    coords: formatData(cakung),
    name: 'cakung',
    case: 123
  },
  {
    coords: formatData(cipayung),
    name: 'cipayung',
    case: 69
  },
  {
    coords: formatData(ciracas),
    name: 'ciracas',
    case: 62
  },
  {
    coords: formatData(durenSawit),
    name: 'duren sawit',
    case: 251
  },
  {
    coords: formatData(jatinegara),
    name: 'jatinegara',
    case: 146
  },
  {
    coords: formatData(kramatjati),
    name: 'kramat jati',
    case: 145
  },
  {
    coords: formatData(matraman),
    name: 'matraman',
    case: 137
  },
  {
    coords: formatData(pasarRebo),
    name: 'pasar rebo',
    case: 54
  },
  {
    coords: formatData(pulogadung),
    name: 'pulo gadung',
    case: 140
  },
  {
    coords: formatData(cilincing),
    name: 'cilincing',
    case: 94
  },
  {
    coords: formatData(danauSunter),
    name: 'danau sunter',
    case: 189
  },
  {
    coords: formatData(kelapaGading),
    name: 'kelapa gading',
    case: 118
  },
  {
    coords: formatData(koja),
    name: 'koja',
    case: 127
  },
  {
    coords: formatData(pademangan),
    name: 'pademangan',
    case: 184
  },
  {
    coords: formatData(tanjungPriok),
    name: 'tanjung priok',
    case: 285
  },
  {
    coords: formatData(kepulauanSeribu),
    name: 'kepulauan seribu',
    case: 14
  },
  {
    coords: formatData(kebayoranLama2),
    name: 'kebayoran lama',
    case: 135
  },
  {
    coords: formatData(makasar),
    name: 'makasar',
    case: 67
  },
  {
    coords: formatData(penjaringan),
    name: 'penjaringan',
    case: 180
  },
  {
    coords: formatData(kebayoranLama3),
    name: 'kebayoran lama',
    case: 135
  },
  {
    coords: formatData(danauSunter2),
    name: 'danau sunter',
    case: 186
  }
]

module.exports = allData