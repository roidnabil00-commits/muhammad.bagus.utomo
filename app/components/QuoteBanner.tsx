"use client";

const quotes = [
  "Kesempatan kamu menjadi saya itu sangat kecil, namun tidak mungkin apabila kamu percaya",
  "Tidak ada warisan yang lebih berharga dari kemampuan untuk bangkit",
  "Bukan siapa yang mulai lebih dulu  tapi siapa yang tidak berhenti",
  "Dari nol. Beneran.",
];

export default function QuoteBanner() {
  return (
    <div
      style={{
        background: "var(--gold)",
        padding: "20px 0",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          animation: "marquee 20s linear infinite",
          width: "max-content",
          gap: "60px",
        }}
      >
        {[...quotes, ...quotes].map((q, i) => (
          <span
            key={i}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "15px",
              fontStyle: "italic",
              color: "var(--black)",
              fontWeight: 700,
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              gap: "60px",
            }}
          >
            {q}
            <span style={{ fontStyle: "normal", opacity: 0.4 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
