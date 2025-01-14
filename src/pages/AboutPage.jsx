import Button from "../components/Button"

const AboutPage = () => {
  return (
    <>
      <h3 className='mt-10 text-2xl font-semibold text-center'>
        Selamat datang di Warung Goceng
      </h3>
      <p className='py-3'>
        Kami adalah p sebuah platform inovatif yang menyediakan rekomendasi makanan dan panduan praktis untuk membuatnya. Brand ini didirikan dengan tujuan utama mendukung mahasiswa—khususnya yang memiliki keterbatasan waktu dan dana—agar tetap dapat menikmati makanan lezat yang mudah dibuat di rumah.
        <br></br><br></br>
        Dengan audiens yang luas, mulai dari generasi muda hingga yang lebih tua, Warung Goceng memastikan kontennya relevan, praktis, dan dapat diakses oleh berbagai kalangan. Website ini menjadi solusi ideal bagi mereka yang ingin mengeksplorasi pilihan makanan tanpa harus mengeluarkan banyak biaya atau menghabiskan waktu lama di dapur.
        <br></br><br></br>
        Filosofi dari Warung Goceng adalah "Sederhana, Terjangkau, dan Lezat," yang tercermin dalam setiap rekomendasi makanan dan resep yang disajikan. Warung Goceng juga berkomitmen untuk menjadi inspirasi bagi siapa saja yang ingin memulai gaya hidup memasak sendiri dengan cara yang mudah dan menyenangkan.
      </p>

      <Button text="Mulai Memasak"/>

    </>
  );
};

export default AboutPage;
