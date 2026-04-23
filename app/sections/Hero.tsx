"use client";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        height: "100vh",
        width: "100%",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end", // Posisi quote di bawah seperti referensi
        overflow: "hidden",
        backgroundColor: "#000", 
      }}
    >
      {/* Background Image Container */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage: "url('/image.png')", // Sesuaikan path foto Anda
          backgroundSize: "cover",
          backgroundPosition: "center 20%", // Mengatur agar area wajah tetap terlihat ideal
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Subtle Bottom Gradient - Untuk keterbacaan teks */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)",
        }}
      />

      {/* Quote Section */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          paddingBottom: "100px", // Jarak dari bawah layar
          width: "90%",
        }}
      >
        <p
          style={{
            color: "white",
            fontSize: "18px", // Ukuran kecil sesuai permintaan
            fontStyle: "italic", // Miring
            fontWeight: "300",
            fontFamily: "'Playfair Display', serif",
            letterSpacing: "0.05em",
            opacity: 0.85,
            textShadow: "0 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          "Waktu itu mengerikan"
        </p>
      </div>
    </section>
  );
}