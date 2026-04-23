"use client";
import { useState } from "react";

export default function Kontak() {
  const [form, setForm] = useState({
    name: "",
    topic: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmitWA = () => {
    if (!form.name || !form.message) {
      alert("Isi nama dan pesan dulu ya!");
      return;
    }
    const text = encodeURIComponent(
      `Halo Kak Bagus! 👋\n\nNama: ${form.name}\nTopik: ${form.topic || "Umum"}\nPesan: ${form.message}`
    );
    window.open(`https://wa.me/62XXXXXXXXXX?text=${text}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "var(--black-3)",
    border: "1px solid rgba(201,168,76,0.2)",
    borderRadius: "0",
    color: "var(--white)",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "15px",
    padding: "16px 20px",
    outline: "none",
    transition: "border-color 0.3s ease",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "10px",
    letterSpacing: "0.25em",
    textTransform: "uppercase",
    color: "var(--gold)",
    marginBottom: "8px",
    fontWeight: 500,
  };

  return (
    <section
      id="kontak"
      className="section-pad"
      style={{ background: "var(--black-2)" }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="kontak-grid"
        >
          {/* Left */}
          <div>
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
              Hubungi Bagus
            </p>
            <h2
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 900,
                lineHeight: 1.1,
                marginBottom: "32px",
              }}
            >
              Ada yang Mau
              <br />
              <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
                Kamu Tanyakan?
              </em>
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: "var(--white-dim)",
                lineHeight: 1.9,
                marginBottom: "48px",
              }}
            >
              Tidak ada pertanyaan yang terlalu kecil. Kalau kamu masih
              bingung soal mentoring, kerjasama, atau sekadar mau cerita
              situasimu — tuliskan. Bagus baca semuanya.
            </p>

            {/* Contact channels */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {[
                {
                  platform: "Instagram",
                  handle: "@muhamad.bagus.utomo",
                  url: "https://instagram.com/muhamad.bagus.utomo",
                  icon: "📸",
                },
                {
                  platform: "TikTok",
                  handle: "@muhamadbagusutomo",
                  url: "https://tiktok.com/@muhamadbagusutomo",
                  icon: "🎵",
                },
                {
                  platform: "WhatsApp",
                  handle: "Konsultasi Langsung",
                  url: "https://wa.me/62XXXXXXXXXX",
                  icon: "💬",
                },
              ].map((ch) => (
                <a
                  key={ch.platform}
                  href={ch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    textDecoration: "none",
                    padding: "20px",
                    border: "1px solid rgba(201,168,76,0.15)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "rgba(201,168,76,0.5)";
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "var(--black-3)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "rgba(201,168,76,0.15)";
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "transparent";
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      background: "var(--gold-dim)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "22px",
                      flexShrink: 0,
                    }}
                  >
                    {ch.icon}
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: "10px",
                        color: "var(--gold)",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        marginBottom: "4px",
                      }}
                    >
                      {ch.platform}
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        color: "var(--white)",
                        fontWeight: 500,
                      }}
                    >
                      {ch.handle}
                    </p>
                  </div>
                  <div
                    style={{
                      marginLeft: "auto",
                      color: "var(--gold)",
                      fontSize: "18px",
                    }}
                  >
                    →
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div
            style={{
              background: "var(--black-3)",
              border: "1px solid rgba(201,168,76,0.15)",
              padding: "48px 40px",
            }}
          >
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "26px",
                fontWeight: 700,
                marginBottom: "32px",
                color: "var(--white)",
              }}
            >
              Kirim Pesan via WhatsApp
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* Name */}
              <div>
                <label style={labelStyle}>Nama Kamu *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Nama lengkap kamu"
                  value={form.name}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={(e) =>
                    ((e.target as HTMLInputElement).style.borderColor =
                      "var(--gold)")
                  }
                  onBlur={(e) =>
                    ((e.target as HTMLInputElement).style.borderColor =
                      "rgba(201,168,76,0.2)")
                  }
                />
              </div>

              {/* Topic */}
              <div>
                <label style={labelStyle}>Topik</label>
                <select
                  name="topic"
                  value={form.topic}
                  onChange={handleChange}
                  style={{ ...inputStyle, cursor: "pointer" }}
                  onFocus={(e) =>
                    ((e.target as HTMLSelectElement).style.borderColor =
                      "var(--gold)")
                  }
                  onBlur={(e) =>
                    ((e.target as HTMLSelectElement).style.borderColor =
                      "rgba(201,168,76,0.2)")
                  }
                >
                  <option value="" style={{ background: "#1a1a1a" }}>
                    Pilih topik...
                  </option>
                  <option value="Program Mentoring" style={{ background: "#1a1a1a" }}>
                    Program Mentoring
                  </option>
                  <option value="Kerjasama / Kolaborasi" style={{ background: "#1a1a1a" }}>
                    Kerjasama / Kolaborasi
                  </option>
                  <option value="Public Speaking" style={{ background: "#1a1a1a" }}>
                    Undangan Public Speaking
                  </option>
                  <option value="Umum" style={{ background: "#1a1a1a" }}>
                    Pertanyaan Umum
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label style={labelStyle}>Pesan *</label>
                <textarea
                  name="message"
                  placeholder="Ceritakan situasimu — sedetail yang kamu bisa..."
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={(e) =>
                    ((e.target as HTMLTextAreaElement).style.borderColor =
                      "var(--gold)")
                  }
                  onBlur={(e) =>
                    ((e.target as HTMLTextAreaElement).style.borderColor =
                      "rgba(201,168,76,0.2)")
                  }
                />
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmitWA}
                style={{
                  width: "100%",
                  background: sent ? "var(--black-3)" : "var(--gold)",
                  border: sent ? "1px solid var(--gold)" : "none",
                  color: sent ? "var(--gold)" : "var(--black)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "14px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "18px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                <span></span>
                {sent ? "Membuka WhatsApp..." : "Kirim via WhatsApp"}
              </button>

              <p
                style={{
                  fontSize: "12px",
                  color: "rgba(245,240,232,0.3)",
                  textAlign: "center",
                  lineHeight: 1.6,
                }}
              >
                Pesan akan langsung terbuka di WhatsApp. Biasanya dibalas
                dalam 1×24 jam.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .kontak-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
