"use client";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--black)",
        borderTop: "1px solid rgba(201,168,76,0.15)",
        padding: "60px 0 32px",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "60px",
            marginBottom: "60px",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ marginBottom: "20px" }}>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "var(--white)",
                  marginBottom: "4px",
                }}
              >
                Bagus Utomo
              </p>
              <p
                style={{
                  fontSize: "10px",
                  color: "var(--gold)",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                }}
              >
                Business Mentor & Entrepreneur
              </p>
            </div>
            <p
              style={{
                color: "var(--white-dim)",
                fontSize: "14px",
                lineHeight: 1.8,
                maxWidth: "320px",
              }}
            >
              Dari desa tanpa listrik ke kebebasan finansial. Perjalanan ini
              nyata — dan sekarang Bagus hadir untuk menemani perjalananmu.
            </p>

            {/* Social */}
            <div
              style={{
                display: "flex",
                gap: "16px",
                marginTop: "28px",
              }}
            >
              {[
                { icon: "📸", url: "https://instagram.com/muhamad.bagus.utomo", label: "Instagram" },
                { icon: "🎵", url: "https://tiktok.com/@muhamadbagusutomo", label: "TikTok" },
                { icon: "💬", url: "https://wa.me/62XXXXXXXXXX", label: "WhatsApp" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "var(--white-faint)",
                    border: "1px solid rgba(201,168,76,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "var(--gold)";
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "var(--gold-dim)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "rgba(201,168,76,0.15)";
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "var(--white-faint)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p
              style={{
                fontSize: "10px",
                letterSpacing: "0.25em",
                color: "var(--gold)",
                textTransform: "uppercase",
                marginBottom: "20px",
                fontWeight: 500,
              }}
            >
              Navigasi
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                ["Tentang", "#about"],
                ["Perjalanan", "#journey"],
                ["Mentoring", "#mentoring"],
                ["Kerjasama", "#kerjasama"],
                ["Kontak", "#kontak"],
              ].map(([label, href]) => (
                <button
                  key={label}
                  onClick={() =>
                    document
                      .querySelector(href)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  style={{
                    background: "none",
                    border: "none",
                    color: "var(--white-dim)",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "14px",
                    cursor: "pointer",
                    textAlign: "left",
                    padding: 0,
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLButtonElement).style.color = "var(--gold)")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLButtonElement).style.color =
                      "var(--white-dim)")
                  }
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <p
              style={{
                fontSize: "10px",
                letterSpacing: "0.25em",
                color: "var(--gold)",
                textTransform: "uppercase",
                marginBottom: "20px",
                fontWeight: 500,
              }}
            >
              Mulai Sekarang
            </p>
            <p
              style={{
                color: "var(--white-dim)",
                fontSize: "14px",
                lineHeight: 1.8,
                marginBottom: "20px",
              }}
            >
              Jangan tunggu sampai "siap". Langkah pertama selalu dimulai
              sebelum kamu merasa siap.
            </p>
            <a
              href="https://wa.me/62XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "var(--gold)",
                color: "var(--black)",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: "12px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "12px 24px",
                textDecoration: "none",
                transition: "background 0.3s ease",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.background =
                  "var(--gold-light)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.background =
                  "var(--gold)")
              }
            >
              Chat WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(201,168,76,0.1)",
            paddingTop: "28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              color: "rgba(245,240,232,0.25)",
            }}
          >
            © {new Date().getFullYear()} Muhamad Bagus Utomo. All rights reserved.
          </p>
          <p
            style={{
              fontSize: "12px",
              color: "rgba(245,240,232,0.25)",
              fontStyle: "italic",
            }}
          >
            "Dari nol — beneran."
          </p>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </footer>
  );
}
