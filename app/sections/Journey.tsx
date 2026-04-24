"use client";

const milestones = [
  {
    year: "1999",
    tag: "Awal Mula",
    title: "Lahir di Desa Tanpa Listrik",
    desc: "Pati, Jawa Tengah. Tidak ada listrik, tidak ada jalan aspal, tidak ada internet. Tapi di sinilah karakter terbentuk  dalam keheningan dan keterbatasan.",
    icon: "",
  },
  {
    year: "2010-an",
    tag: "Ujian Pertama",
    title: "Berhenti Sekolah, Mulai Kerja",
    desc: "Selesai SD, jalan ke depan tertutup karena biaya. Bukan akhir cerita  tapi titik balik. Dari sinilah ia belajar sesuatu yang tidak diajarkan di bangku sekolah mana pun.",
    icon: "",
  },
  {
    year: "Fase I",
    tag: "Jatuh Pertama",
    title: "Kerja Serabutan, Bersih Kebun, Masuk Hutan",
    desc: "Mengandalkan tenaga fisik. Bersihkan kebun tetangga. Kerja di hutan. Tapi mata dan pikirannya selalu mencari: ada cara yang lebih baik dari ini.",
    icon: "",
  },
  {
    year: "Fase II",
    tag: "Bangkit",
    title: "Jaga Toko Siang, Warung 24 Jam Malam",
    desc: "Dua pekerjaan sekaligus. Siang jadi karyawan, malam jadi bos kecil. Dari sinilah ia belajar arti disiplin dan manajemen waktu  bukan dari seminar.",
    icon: "",
  },
  {
    year: "Fase III",
    tag: "Titik Balik",
    title: "Business Kit & Brosur Manual",
    desc: "Memulai bisnis terstruktur pertama. Promosi manual door-to-door dengan brosur. Produk pertama: pembalut kesehatan Natesh. Hasilnya? Banyak penolakan  dan satu pelajaran berharga setiap harinya.",
    icon: "",
  },
  {
    year: "Saat Ini",
    tag: "Kebebasan",
    title: "Pensiun Ibu, Thailand & Singapura",
    desc: "Sistem bisnisnya tumbuh. Mobilnya sendiri, bukan kredit. Ibunya pensiun  dan pertama kali dalam hidupnya, mereka terbang ke luar negeri bersama. Thailand. Singapura.",
    icon: "",
  },
  {
    year: "Sekarang",
    tag: "Misi Baru",
    title: "Mentor & Konten Kreator",
    desc: "Kini Kami membuka program mentoring intensif. Bukan sebagai guru yang mengajar dari atas  tapi sebagai partner yang menemani dari samping, dengan bekal pengalaman gagal yang nyata.",
    icon: "",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="section-pad" style={{ background: "var(--black)", overflowX: "hidden" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div className="gold-line" style={{ margin: "0 auto 20px" }} />
          <p style={{ fontSize: "10px", letterSpacing: "0.3em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "15px" }}>
            Perjalanan
          </p>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 64px)", fontWeight: 900, lineHeight: 1.1 }}>
            My Journey.
            <br />
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Ini Real.</em>
          </h2>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Center line */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: "1px",
              background: "linear-gradient(to bottom, transparent, var(--gold), transparent)",
              opacity: 0.3,
              transform: "translateX(-50%)",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {milestones.map((m, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  // Tetap menggunakan 3 kolom bahkan di mobile
                  gridTemplateColumns: "1fr clamp(40px, 10vw, 60px) 1fr",
                  alignItems: "start",
                  marginBottom: "40px",
                }}
              >
                {/* Left Side */}
                <div
                  style={{
                    textAlign: "right",
                    paddingRight: "clamp(10px, 3vw, 40px)",
                    opacity: i % 2 === 0 ? 1 : 0,
                    pointerEvents: i % 2 === 0 ? "auto" : "none",
                  }}
                >
                  {i % 2 === 0 && <MilestoneCard milestone={m} align="right" />}
                </div>

                {/* Center dot & Year */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", zIndex: 2 }}>
                  <div
                    style={{
                      width: "clamp(30px, 8vw, 48px)",
                      height: "clamp(30px, 8vw, 48px)",
                      borderRadius: "50%",
                      background: "var(--black-3)",
                      border: "2px solid var(--gold)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "clamp(14px, 4vw, 20px)",
                      flexShrink: 0,
                    }}
                  >
                    {m.icon}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "clamp(10px, 2.5vw, 13px)",
                      color: "var(--gold)",
                      letterSpacing: "0.1em",
                      textAlign: "center",
                    }}
                  >
                    {m.year}
                  </div>
                </div>

                {/* Right Side */}
                <div
                  style={{
                    paddingLeft: "clamp(10px, 3vw, 40px)",
                    opacity: i % 2 === 1 ? 1 : 0,
                    pointerEvents: i % 2 === 1 ? "auto" : "none",
                  }}
                >
                  {i % 2 === 1 && <MilestoneCard milestone={m} align="left" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MilestoneCard({
  milestone,
  align,
}: {
  milestone: (typeof milestones)[0];
  align: "left" | "right";
}) {
  return (
    <div
      style={{
        background: "var(--black-3)",
        border: "1px solid rgba(201,168,76,0.15)",
        padding: "clamp(12px, 3vw, 28px)", // Padding mengecil di mobile
        textAlign: align === "right" ? "right" : "left",
        position: "relative",
        transition: "border-color 0.3s ease",
      }}
    >
      <span
        style={{
          display: "inline-block",
          fontSize: "clamp(7px, 2vw, 9px)",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--gold)",
          background: "var(--gold-dim)",
          padding: "2px 8px",
          marginBottom: "8px",
        }}
      >
        {milestone.tag}
      </span>
      <h3
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(12px, 3.5vw, 20px)", // Ukuran judul menyesuaikan layar
          fontWeight: 700,
          marginBottom: "6px",
          color: "var(--white)",
          lineHeight: 1.2,
        }}
      >
        {milestone.title}
      </h3>
      <p
        style={{
          fontSize: "clamp(10px, 2.8vw, 14px)", // Ukuran deskripsi menyesuaikan layar
          color: "var(--white-dim)",
          lineHeight: 1.5,
        }}
      >
        {milestone.desc}
      </p>
    </div>
  );
}