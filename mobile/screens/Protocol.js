import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function Protocol() {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Protocol COVID-19</Text>
      <View style={styles.protocol_box}>
        <ScrollView
          contentContainerStyle={{
            flexWrap: "wrap",
            alignItems: "center",
            width: 290,
          }}
        >
          <Text style={styles.title}>
            Aturan New Normal Kemenkes untuk Cegah Penularan COVID-19
          </Text>
          <Text style={styles.info}>
            Peraturan Pemerintah nomor 21 Tahun 2020 tentang Pembatasan Sosial
            Berskala Besar (PSBB) dalam rangka percepatan penanganan COVID-19
            {"\n"}
            {"\n"}
            Panduan pencegahan penularan COVID-19 secara rinci antara lain:
            {"\n"}
            {"\n"}
            A. Selama PSBB bagi Tempat Kerja
            {"\n"}
            {"\n"}
            a. Kebijakan Manajemen dalam Pencegahan Penularan COVID-19
            {"\n"}
            {"\n"}
            1) Pihak manajemen agar senantiasa memantau dan memperbaharui
            perkembangan informasi tentang COVID-19 di wilayahnya. (Secara
            berkala dapat diakses di http://infeksiemerging.kemkes.go.id. dan
            kebijakan Pemerintah Daerah setempat).
            {"\n"}
            {"\n"}
            2) Pembentukan Tim Penanganan Covid-19 di tempat kerja yang terdiri
            dari Pimpinan, bagian kepegawaian, bagian K3 dan petugas Kesehatan
            yang diperkuat dengan Surat Keputusan dari Pimpinan Tempat Kerja.
            {"\n"}
            {"\n"}
            3) Pimpinan atau pemberi kerja memberikan kebijakan dan prosedur
            untuk pekerja melaporkan setiap ada kasus dicurigai Covid-19 (gejala
            demam atau batuk/pilek/nyeri tenggorokan/sesak nafas) untuk
            dilakukan pemantauan oleh petugas kesehatan.
            {"\n"}
            {"\n"}
            4) Tidak memperlakukan kasus positif sebagai suatu stigma.
            {"\n"}
            {"\n"}
            5) Pengaturan bekerja dari rumah (work from home). Menentukan
            pekerja esensial yang perlu tetap bekerja/datang ke tempat kerja dan
            pekerja yang dapat melakukan pekerjaan dari rumah.
            {"\n"}
            {"\n"}
            b. Jika ada pekerja esensial yang harus tetap bekerja selama PSBB
            berlangsung:
            {"\n"}
            {"\n"}
            1) Di pintu masuk tempat kerja lakukan pengukuran suhu dengan
            menggunakan thermogun, dan sebelum masuk kerja terapkan Self
            Assessment Risiko Covid-19 untuk memastikan pekerja yang akan masuk
            kerja dalam kondisi tidak terjangkit Covid-19.
            {"\n"}
            {"\n"}
            2) Pengaturan waktu kerja tidak terlalu panjang (lembur) yang akan
            mengakibatkan pekerja kekurangan waktu untuk beristirahat yang dapat
            menyebabkan penurunan sistem kekebalan/imunitas tubuh.
            {"\n"}
            {"\n"}
            3) Untuk pekerja shift :{"\n"}
            {"\n"}
            a) Jika memungkinkan tiadakan shift 3 (waktu kerja yang dimulai pada
            malam hingga pagi hari)
            {"\n"}
            {"\n"}
            b) Bagi pekerja shift 3 atur agar yang bekerja terutama pekerja
            berusia kurang dari 50 tahun.
            {"\n"}
            {"\n"}
            4) Mewajibkan pekerja menggunakan masker sejak perjalanan dari/ke
            rumah, dan selama di tempat kerja.
            {"\n"}
            {"\n"}
            5) Mengatur asupan nutrisi makanan yang diberikan oleh tempat kerja,
            pilih buah-buahan yang banyak mengandung vitamin C seperti jeruk,
            jambu, dan sebagainya untuk membantu mempertahankan daya tahan
            tubuh. Jika memungkinkan pekerja dapat diberikan suplemen vitamin C.
            {"\n"}
            {"\n"}
            6) Memfasilitasi tempat kerja yang aman dan sehat,
            {"\n"}
            {"\n"}
            a) Higiene dan sanitasi lingkungan kerja
            {"\n"}
            {"\n"}- Memastikan seluruh area kerja bersih dan higienis dengan
            melakukan pembersihan secara berkala menggunakan pembersih dan
            desinfektan yang sesuai (setiap 4 jam sekali). Terutama pegangan
            pintu dan tangga, tombol lift, peralatan kantor yang digunakan
            bersama, area dan fasilitas umum lainnya.
            {"\n"}- Menjaga kualitas udara tempat kerja dengan mengoptimalkan
            sirkulasi udara dan sinar matahari masuk ruangan kerja, pembersihan
            filter AC.
            {"\n"}
            {"\n"}
            b) Sarana cuci tangan {"\n"}
            {"\n"}- Menyediakan lebih banyak sarana cuci tangan (sabun dan air
            mengalir). {"\n"}- Memberikan petunjuk lokasi sarana cuci tangan{" "}
            {"\n"}- Memasang poster edukasi cara mencuci tangan yang benar.{" "}
            {"\n"}- Menyediakan handsanitizer dengan konsentrasi alkohol minimal
            70% di tempat-tempat yang diperlukan (seperti pintu masuk, ruang
            meeting, pintu lift, dll)
            {"\n"}
            {"\n"}
            c) Physical Distancing dalam semua aktifitas kerja. Pengaturan jarak
            antar pekerja minimal 1 meter pada setiap aktifitas kerja
            (pengaturan meja kerja/workstation, pengaturan kursi saat di kantin,
            dll).
            {"\n"}
            {"\n"}
            d) Mengkampanyekan Gerakan Masyarakat Hidup Sehat (GERMAS) melalui
            Pola Hidup Sehat dan Perilaku Hidup Bersih dan Sehat (PHBS) di
            tempat kerja sebagai berikut:
            {"\n"}
            {"\n"}- Cuci Tangan Pakai Sabun (CTPS) Mendorong pekerja mencuci
            tangan saat tiba di tempat kerja, sebelum makan, setelah kontak
            dengan pelanggan/pertemuan dengan orang lain, setelah dari kamar
            mandi, setelah memegang benda yang kemungkinan terkontaminasi.
            {"\n"}- Etika batuk Membudayakan etika batuk (tutup mulut dan hidung
            dengan lengan atas bagian dalam) dan jika menggunakan tisu untuk
            menutup batuk dan pilek, buang tisu bekas ke tempat sampah yang
            tertutup dan cuci tangan dengan sabun dan air mengalir setelahnya.
            {"\n"}- Olahraga bersama sebelum kerja dengan tetap menjaga jarak
            aman, dan anjuran berjemur matahari saat jam istirahat.
            {"\n"}- Makan makanan dengan gizi seimbang.
            {"\n"}- Hindari penggunaan alat pribadi secara bersama seperti alat
            sholat, alat makan, dan lain lain.
            {"\n"}
            {"\n"}
            c. Sosialisasi dan Edukasi pekerja mengenai Covid-19
            {"\n"}
            {"\n"}
            1) Edukasi dilakukan secara intensif kepada seluruh pekerja dan
            keluarga agar memberikan pemahaman yang benar terkait masalah
            pandemi Covid-19, sehingga pekerja mendapatkan pengetahuan untuk
            secara mandiri melakukan tindakan preventif dan promotif guna
            mencegah penularan penyakit, serta mengurangi kecemasan berlebihan
            akibat informasi tidak benar.
            {"\n"}
            {"\n"}
            2) Materi edukasi yang dapat diberikan:
            {"\n"}
            {"\n"}
            a) Penyebab COVID-19 dan cara pencegahannya
            {"\n"}
            {"\n"}
            b) Mengenali gejala awal penyakit dan tindakan yang harus dilakukan
            saat gejala timbul.
            {"\n"}
            {"\n"}
            c) Praktek PHBS seperti praktek mencuci tangan yang benar, etika
            batuk
            {"\n"}
            {"\n"}
            d) Alur pelaporan dan pemeriksaan bila didapatkan kecurigaan
            {"\n"}
            {"\n"}
            e) Metode edukasi yang dapat dilakukan: pemasangan banner, pamphlet,
            majalah dinding, dll di area strategis yang mudah dilihat setiap
            pekerja seperti di pintu masuk, area makan/kantin, area istirahat,
            tangga serta media audio & video yang disiarkan secara berulang.
            SMS/whats up blast ke semua pekerja secara berkala untuk
            mengingatkan.
            {"\n"}
            {"\n"}
            f) Materi edukasi dapat diakses pada www.covid19.go.id.
          </Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#65DCB8",
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#097C54",
    marginTop: 60,
  },
  protocol_box: {
    backgroundColor: "#B3EFDD",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 15,
    width: 340,
    height: 480,
    borderRadius: 5,
    marginVertical: 25,
  },
  title: {
    color: "#566573",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  info: {
    color: "#566573",
  },
  btn: {
    alignItems: "center",
    width: 320,
    padding: 10,
    marginBottom: 45,
    marginTop: 15,
    borderRadius: 5,
    backgroundColor: "#00B979",
  },
  btn_text: {
    color: "#B3EFDD",
  },
});
