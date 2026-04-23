"use client";

const features = [
  {
    icon: "",
    title: "3 Bulan Intensif",
    desc: "Bukan sekedar kelas. Ini program terstruktur dengan target bisnis nyata — dari validasi ide sampai sistem yang berjalan.",
  },
  {
    icon: "",
    title: "Pendampingan 12 Bulan",
    desc: "Setelah 3 bulan, kamu tidak ditinggal sendirian. Gua temani sampai 1 tahun penuh — karena bisnis itu marathon, bukan sprint.",
  },
  {
    icon: "",
    title: "Akses Langsung ke Bagus",
    desc: "Konsultasi real-time via WhatsApp. Tidak ada gatekeeper. Tidak ada waiting list mingguan. Pertanyaanmu dijawab ketika kamu butuh.",
  },
  {
    icon: "",
    title: "Belajar dari Luka Nyata",
    desc: "Materi bukan dari buku teks — tapi dari kesalahan mahal yang sudah Bagus bayar duluan. Kamu tinggal belajar tanpa harus bayar dengan hal yang sama.",
  },
  {
    icon: "",
    title: "Sistem, Bukan Sekadar Skill",
    desc: "Target akhirnya: kamu punya sistem bisnis yang jalan meski kamu tidak ada. Bukan nambah kerjaan — tapi bangun mesin yang bekerja untukmu.",
  },
  {
    icon: "",
    title: "Komunitas & Networking",
    desc: "Bergabung dengan ekosistem mentor-mentee yang saling support. Kolaborasi, referral, dan koneksi bisnis yang organik.",
  },
];

const forWho = [
  "Karyawan yang ingin punya penghasilan sampingan di atas UMR",
  "Pemula yang belum tahu mau mulai dari mana",
  "Pebisnis yang stuck dan tidak tahu kenapa bisnisnya tidak berkembang",
  "Orang yang lelah jalan sendiri tanpa panduan yang tepat",
];

export default function Mentoring() {
  const handleWA = () => {
    const msg = encodeURIComponent(
      "Halo Kak Bagus, saya tertarik dengan program mentoring. Boleh saya tahu lebih lanjut?"
    );
    window.open(`https://wa.me/62XXXXXXXXXX?text=${msg}`, "_blank");
  };

  return (
    <section
      id="mentoring"
      className="section-pad"
      style={{ background: "var(--black-2)" }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: "700px", marginBottom: "72px" }}>
          <div className="gold-line" />
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "0.3em",
              color: "var(--gold)",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            Program Mentoring
          </p>
          <h2
            style={{
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: "24px",
            }}
          >
            Kamu Tidak Harus
            <br />
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
              Bayar dengan Luka
            </em>
            <br />
            yang Sama.
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "var(--white-dim)",
              lineHeight: 1.8,
            }}
          >
            Gua sudah jalani jalan itu. Sudah bayar mahal dengan waktu,
            tenaga, dan kesalahan. Sekarang saatnya kamu belajar dari
            ringkasan itu — bukan dari awal lagi.
          </p>
        </div>

        {/* Features grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "rgba(201,168,76,0.1)",
            marginBottom: "72px",
          }}
          className="features-grid"
        >
          {features.map((f, i) => (
            <div
              key={i}
              style={{
                background: "var(--black-2)",
                padding: "40px 32px",
                transition: "background 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background =
                  "var(--black-3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background =
                  "var(--black-2)";
              }}
            >
              <div style={{ fontSize: "32px", marginBottom: "16px" }}>
                {f.icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "20px",
                  fontWeight: 700,
                  marginBottom: "12px",
                  color: "var(--white)",
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--white-dim)",
                  lineHeight: 1.8,
                }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* For who + CTA */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
          }}
          className="mentoring-bottom"
        >
          {/* For who */}
          <div>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "28px",
                fontWeight: 700,
                marginBottom: "32px",
                color: "var(--white)",
              }}
            >
              Program Ini Untuk Kamu yang...
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {forWho.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      background: "var(--gold)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "12px",
                        color: "var(--black)",
                        fontWeight: 700,
                      }}
                    >
                      ✓
                    </span>
                  </div>
                  <p style={{ color: "var(--white-dim)", fontSize: "16px", lineHeight: 1.6 }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA card */}
          <div
            style={{
              background: "var(--black-3)",
              border: "1px solid rgba(201,168,76,0.3)",
              padding: "48px 40px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                letterSpacing: "0.3em",
                color: "var(--gold)",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Mulai Perjalananmu
            </div>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "32px",
                fontWeight: 900,
                marginBottom: "16px",
                lineHeight: 1.2,
              }}
            >
              Mentoring
              <br />
              3 Bulan Intensif
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "var(--white-dim)",
                lineHeight: 1.8,
                marginBottom: "32px",
              }}
            >
              Slot terbatas. Bagus hanya menerima peserta yang benar-benar
              siap bergerak — bukan sekadar ingin tapi tidak bertindak.
            </p>
            <div
              style={{
                width: "100%",
                height: "1px",
                background: "rgba(201,168,76,0.2)",
                marginBottom: "32px",
              }}
            />
            <button
              onClick={handleWA}
              style={{
                width: "100%",
                background: "var(--gold)",
                border: "none",
                color: "var(--black)",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "18px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                marginBottom: "16px",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.background =
                  "var(--gold-light)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.background = "var(--gold)";
              }}
            >
              Daftar via WhatsApp
            </button>
            <p
              style={{
                fontSize: "12px",
                color: "rgba(245,240,232,0.3)",
              }}
            >
              Konsultasi gratis sebelum daftar
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .features-grid {
            grid-template-columns: 1fr !important;
          }
          .mentoring-bottom {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
