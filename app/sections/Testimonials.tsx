"use client";

const testimonials = [
  {
    name: "Rizal F.",
    role: "Mentee Batch 1",
    text: "Sebelum mentoring sama Kak Bagus, saya sudah 2 tahun muter-muter nggak ke mana. 3 bulan intensif, saya akhirnya punya sistem yang beneran jalan. Bukan cuma motivasi  tapi action plan yang konkret.",
    result: "Omzet +3x dalam 4 bulan",
  },
  {
    name: "Sari W.",
    role: "Karyawan → Entrepreneur",
    text: "Yang bikin beda, Kak Bagus nggak ngajarin teori doang. Beliau share kesalahan-kesalahan yang pernah dia lakuin, jadi kita bisa bypass jebakan yang sama. Hemat waktu dan uang banget.",
    result: "Resign kantoran, full bisnis sendiri",
  },
  {
    name: "Denny K.",
    role: "Mentee Batch 2",
    text: "Honest banget  ini bukan program ajaib. Tapi Kak Bagus selalu ada tiap kali saya stuck. Bisa WA kapan aja, dijawab serius. Itu yang paling saya appreciate.",
    result: "Bisnis F&B pertama sudah break even",
  },
  {
    name: "Putri A.",
    role: "Fresh Graduate",
    text: "Lulus kuliah nggak mau langsung jadi karyawan. Gabung mentoring ini dan itu keputusan terbaik. Kak Bagus guide saya dari validasi ide sampai closing customer pertama.",
    result: "Revenue pertama dalam 45 hari",
  },
];

export default function Testimonials() {
  return (
    <section
      style={{
        background: "var(--black-3)",
        padding: "80px 0",
        overflow: "hidden",
      }}
    >
      <div className="container" style={{ marginBottom: "60px" }}>
        <div style={{ textAlign: "center" }}>
          <div className="gold-line" style={{ margin: "0 auto 20px" }} />
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "0.3em",
              color: "var(--gold)",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Kata Mereka
          </p>
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 900,
              lineHeight: 1.1,
            }}
          >
            Hasil Bicara
            <br />
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
              Lebih Keras.
            </em>
          </h2>
        </div>
      </div>

      {/* Scrolling testimonials */}
      <div
        style={{
          display: "flex",
          gap: "24px",
          animation: "marquee 30s linear infinite",
          width: "max-content",
        }}
      >
        {[...testimonials, ...testimonials].map((t, i) => (
          <div
            key={i}
            style={{
              width: "380px",
              flexShrink: 0,
              background: "var(--black-2)",
              border: "1px solid rgba(201,168,76,0.15)",
              padding: "32px",
            }}
          >
            {/* Quote mark */}
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "60px",
                color: "var(--gold)",
                lineHeight: 0.8,
                marginBottom: "20px",
                opacity: 0.4,
              }}
            >
              "
            </div>
            <p
              style={{
                fontSize: "15px",
                color: "var(--white-dim)",
                lineHeight: 1.8,
                marginBottom: "24px",
                fontStyle: "italic",
              }}
            >
              {t.text}
            </p>

            {/* Result badge */}
            <div
              style={{
                background: "var(--gold-dim)",
                border: "1px solid rgba(201,168,76,0.3)",
                padding: "8px 16px",
                display: "inline-block",
                marginBottom: "20px",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  color: "var(--gold)",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                }}
              >
                ✦ {t.result}
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                borderTop: "1px solid rgba(201,168,76,0.1)",
                paddingTop: "20px",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "var(--gold-dim)",
                  border: "1px solid var(--gold)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "16px",
                  flexShrink: 0,
                }}
              >
                👤
              </div>
              <div>
                <p
                  style={{
                    fontWeight: 600,
                    color: "var(--white)",
                    fontSize: "15px",
                  }}
                >
                  {t.name}
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    color: "var(--gold)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {t.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
