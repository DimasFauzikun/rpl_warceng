const FAQPage = () => {
  return (
    <>
      <h3 className='mt-10 text-center text-2xl font-semibold'>FAQ</h3>

      <div
        tabIndex={0}
        className='collapse-plus collapse mt-5 border border-base-300 '
      >
        <div className='collapse-title text-xl font-medium'>
          Apa itu Warung Goceng?
        </div>
        <div className='collapse-content'>
          <p>
          Warung Goceng adalah sebuah platform inovatif yang menyediakan rekomendasi makanan dan panduan praktis untuk membuatnya. Brand ini didirikan dengan tujuan utama mendukung mahasiswa—khususnya yang memiliki keterbatasan waktu dan dana—agar tetap dapat menikmati makanan lezat yang mudah dibuat di rumah.
          <br></br>
          Dengan audiens yang luas, mulai dari generasi muda hingga yang lebih tua, Warung Goceng memastikan kontennya relevan, praktis, dan dapat diakses oleh berbagai kalangan. Website ini menjadi solusi ideal bagi mereka yang ingin mengeksplorasi pilihan makanan tanpa harus mengeluarkan banyak biaya atau menghabiskan waktu lama di dapur.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className='collapse-plus collapse border border-base-300 '
      >
        <div className='collapse-title text-xl font-medium'>
          Apa manfaat mengunjungi Website Warung Goceng?
        </div>
        <div className='collapse-content'>
        <ul>
          <li><strong>- Resep Mudah dan Praktis</strong>: Semua resep dirancang sederhana, dengan langkah-langkah yang mudah diikuti, cocok untuk pemula sekalipun.</li>
          <li><strong>- Bahan Masakan Terjangkau</strong>: Warung Goceng menyediakan rekomendasi resep dengan bahan yang ekonomis dan mudah ditemukan di sekitar Anda.</li>
          <li><strong>- Solusi untuk Mahasiswa dan Anak Kos</strong>: Fokus pada makanan yang cepat dibuat, hemat biaya, dan tetap enak, menjadikannya pilihan ideal untuk mahasiswa dan anak kos.</li>
          <li><strong>- Rekomendasi Makanan yang Beragam</strong>: Mulai dari makanan Indonesia hingga internasional, pengguna dapat menemukan inspirasi sesuai dengan selera masing-masing.</li>
          <li><strong>- Inspirasi Makanan Sehari-hari</strong>: Tidak perlu bingung lagi memikirkan apa yang akan dimasak atau dimakan; Warung Goceng punya banyak ide kreatif untuk setiap hari.</li>
          <li><strong>- Panduan Interaktif dan Informatif</strong>: Selain resep, website ini dilengkapi dengan panduan visual seperti foto atau video yang mempermudah proses memasak.</li>
        </ul>
      </div>

      </div>
      <div
        tabIndex={0}
        className='collapse-plus collapse border border-base-300 '
      >
        <div className='collapse-title text-xl font-medium'>
          Bagaimana cara mencari resep makanan di Website Resep Makanan?
        </div>
        <div className='collapse-content'>
          <p>
            Klik tombol menu dan kamu dapat melihat makanan berdasarkan
            kategorinya.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className='collapse-plus collapse border border-base-300 '
      >
        <div className='collapse-title text-xl font-medium'>
          Apakah resep makanan di Website Warung Goceng sudah diuji?
        </div>
        <div className='collapse-content'>
          <p>
            Ya, Kamu juga dapat melihat petunjuknya dengan menggunakan video
            youtube
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className='collapse-plus collapse border border-base-300 '
      >
        <div className='collapse-title text-xl font-medium'>
          Bisakah saya mengirimkan resep saya sendiri ke Website Warung Goceng?
        </div>
        <div className='collapse-content'>
          <p>Fitur belum dibuat</p>
        </div>
      </div>
      <div
        tabIndex={0}
        className='collapse-plus collapse border border-base-300 '
      >
        <div className='collapse-title text-xl font-medium'>
          Apakah situs web ini memiliki informasi gizi atau informasi alergi?
        </div>
        <div className='collapse-content'>
          <p>Tidak ada</p>
        </div>
      </div>
    </>
  );
};
export default FAQPage;
