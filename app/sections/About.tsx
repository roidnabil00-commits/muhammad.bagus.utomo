"use client";

export default function About() {
  return (
    <section id="about" className="section-pad" style={{ background: "var(--black-2)" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Left: Image + accent */}
          <div style={{ position: "relative" }}>
            {/* Decorative frame */}
            <div
              style={{
                position: "absolute",
                top: "-20px",
                left: "-20px",
                right: "20px",
                bottom: "20px",
                border: "1px solid rgba(201,168,76,0.2)",
                zIndex: 0,
              }}
            />

            {/* Photo */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                aspectRatio: "4/5",
                overflow: "hidden",
              }}
            >
              <img
                src="/bagus-keluarga.png"
                alt="Muhamad Bagus Utomo"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>

            {/* Gold quote overlay */}
            <div
              style={{
                position: "absolute",
                bottom: "-1px",
                right: "-1px",
                background: "var(--gold)",
                padding: "20px 24px",
                maxWidth: "220px",
                zIndex: 2,
              }}
            >
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "14px",
                  fontStyle: "italic",
                  color: "var(--black)",
                  fontWeight: 700,
                  lineHeight: 1.4,
                }}
              >
                "Saya tidak punya ijazah. Tapi saya punya sesuatu yang lebih berharga."
              </p>
            </div>
          </div>

          {/* Right: Text */}
          <div>
            <div className="gold-line" />
            <p
              style={{
                fontSize: "11px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "20px",
                fontWeight: 500,
              }}
            >
              Tentang Saya
            </p>

            <h2
              style={{
                fontSize: "clamp(32px, 5vw, 52px)",
                fontWeight: 900,
                lineHeight: 1.1,
                marginBottom: "32px",
              }}
            >
              Ini Bukan
              <br />
              <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
                Kisah Sukses
              </em>
              <br />
              Biasa.
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                color: "var(--white-dim)",
                fontSize: "16px",
                lineHeight: 1.9,
              }}
            >
              <p>
                Nama saya <strong style={{ color: "var(--white)" }}>Muhamad Bagus Utomo</strong>.
                Lahir 11 Desember 1999 di Pati, dari sebuah desa yang bahkan
                belum kenal listrik, jalan aspal, apalagi internet.
              </p>
              <p>
                Saya cuma lulusan SD  bukan karena malas sekolah. Tapi karena{" "}
                <strong style={{ color: "var(--white)" }}>
                  biaya tidak mengizinkan
                </strong>
                . Jadi saya bekerja. Bersihkan kebun orang. Masuk ke hutan.
                Jaga toko siang, jalankan warung sendiri semalam suntuk.
              </p>
              <p>
                Tidak ada mentor. Tidak ada investor. Tidak ada warisan.
                Yang saya punya hanya{" "}
                <strong style={{ color: "var(--gold)" }}>
                  tekad dan kesediaan untuk salah
                </strong>{" "}
                 berkali-kali, sampai benar.
              </p>
              <p>
                Hari ini, saya berhasil mempensiunkan ibu saya. Membawanya
                keliling Thailand dan Singapura. Dan kini saya di sini 
                bukan untuk pamer, tapi untuk{" "}
                <strong style={{ color: "var(--white)" }}>
                  menemanimu melakukan hal yang sama
                </strong>
                .
              </p>
            </div>

            {/* Bio highlights */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
                marginTop: "40px",
              }}
            >
              {[
                { label: "Lahir", value: "Pati, 11 Des 1999" },
                { label: "Pendidikan", value: "SDN Bermi 03, Pati" },
                { label: "Platform", value: "@muhamad.bagus.utomo" },
                { label: "Spesialisme", value: "Bisnis dari Nol" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    borderLeft: "2px solid var(--gold)",
                    paddingLeft: "16px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "10px",
                      color: "var(--gold)",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      marginBottom: "4px",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "var(--white)",
                      fontWeight: 500,
                    }}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
        }
      `}</style>
    </section>
  );
}