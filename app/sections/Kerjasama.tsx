"use client";

const kerjasamaOptions = [
  {
    icon: "",
    title: "Public Speaking & Seminar",
    desc: "Undang Bagus untuk berbicara di acara wirausaha, seminar bisnis, atau event komunitas. Kisahnya menggerakkan  bukan sekadar motivasi, tapi rencana aksi nyata.",
    cta: "Hubungi untuk Booking",
  },
  {
    icon: "",
    title: "Brand & Endorse",
    desc: "Partnership dengan brand yang sejalan dengan misi: membantu orang biasa bangun bisnis luar biasa. Audiens Bagus adalah wirausahawan muda yang aktif dan terdidik.",
    cta: "Diskusi Kolaborasi",
  },
  {
    icon: "",
    title: "Joint Venture & Bisnis",
    desc: "Punya ide bisnis atau produk yang butuh partner strategis? Bagus terbuka untuk kolaborasi bisnis yang saling menguntungkan dengan visi jangka panjang.",
    cta: "Ajukan Proposal",
  },
  {
    icon: "",
    title: "Konten & Media",
    desc: "Feature, podcast, interview, atau project konten bersama. Bagus aktif di TikTok dan Instagram dengan audiens yang engaged dan relevan.",
    cta: "Ajak Kolaborasi",
  },
];

export default function Kerjasama() {
  const handleWA = (type: string) => {
    const msg = encodeURIComponent(
      `Halo Kak Bagus, saya ingin mengajukan kerjasama untuk: ${type}. Boleh diskusi lebih lanjut?`
    );
    window.open(`https://wa.me/62XXXXXXXXXX?text=${msg}`, "_blank");
  };

  return (
    <section
      id="kerjasama"
      className="section-pad"
      style={{ background: "var(--black)" }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <div className="gold-line" style={{ margin: "0 auto 20px" }} />
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "0.3em",
              color: "var(--gold)",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            Kerjasama
          </p>
          <h2
            style={{
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: "24px",
            }}
          >
            Mari Bangun Sesuatu
            <br />
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
              Bersama.
            </em>
          </h2>
          <p
            style={{
              maxWidth: "520px",
              margin: "0 auto",
              color: "var(--white-dim)",
              fontSize: "16px",
              lineHeight: 1.8,
            }}
          >
            Bagus percaya bahwa kolaborasi yang tepat menciptakan dampak
            yang lebih besar daripada kerja sendirian. Kalau kamu punya
            visi yang sejalan  ada ruang untuk kita bicara.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "24px",
            marginBottom: "60px",
          }}
          className="kerjasama-grid"
        >
          {kerjasamaOptions.map((item, i) => (
            <div
              key={i}
              style={{
                background: "var(--black-3)",
                border: "1px solid rgba(201,168,76,0.12)",
                padding: "40px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                transition: "all 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "rgba(201,168,76,0.4)";
                el.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "rgba(201,168,76,0.12)";
                el.style.transform = "translateY(0)";
              }}
            >
              <div style={{ fontSize: "36px" }}>{item.icon}</div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "var(--white)",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  color: "var(--white-dim)",
                  lineHeight: 1.8,
                  flex: 1,
                }}
              >
                {item.desc}
              </p>
              <button
                onClick={() => handleWA(item.title)}
                style={{
                  alignSelf: "flex-start",
                  background: "transparent",
                  border: "1px solid rgba(201,168,76,0.4)",
                  color: "var(--gold)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "10px 20px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.target as HTMLButtonElement;
                  el.style.background = "var(--gold)";
                  el.style.color = "var(--black)";
                }}
                onMouseLeave={(e) => {
                  const el = e.target as HTMLButtonElement;
                  el.style.background = "transparent";
                  el.style.color = "var(--gold)";
                }}
              >
                {item.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div
          style={{
            background: "var(--gold)",
            padding: "40px 48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(20px, 3vw, 32px)",
                color: "var(--black)",
                letterSpacing: "0.05em",
                lineHeight: 1.2,
              }}
            >
              TIDAK YAKIN KERJASAMA APA YANG COCOK?
            </p>
            <p style={{ fontSize: "15px", color: "rgba(10,10,10,0.7)", marginTop: "4px" }}>
              Ceritakan dulu  nanti kita cari format yang paling pas bersama.
            </p>
          </div>
          <button
            onClick={() => handleWA("Kerjasama Umum")}
            style={{
              background: "var(--black)",
              border: "none",
              color: "var(--gold)",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: "13px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              padding: "16px 32px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLButtonElement).style.background = "#1a1a1a";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.background = "var(--black)";
            }}
          >
            Hubungi Sekarang
          </button>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .kerjasama-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
