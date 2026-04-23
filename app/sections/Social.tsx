"use client";

const socialContent = [
  {
    type: "TikTok",
    title: "Dengarkan Ini",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-QraTNS4jiXlmzO6SWzijhsVC0YH0xmjbHg&s",
    link: "https://www.tiktok.com/@muhamadbagusutomo",
    layout: "portrait"
  },
  {
    type: "Instagram Reels",
    title: "Jauhi Kalimat Ini",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB1F5Zbsj6iLW_4LUnQquTcoyKBgP8Bd77OQ&s",
    link: "https://www.instagram.com/reel/DXRfa98AQ6_/",
    layout: "portrait"
  },
  {
    type: "Stacked",
    items: [
      {
        type: "Instagram Feed",
        title: "Perjuangan yang terlihat singkat",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiIw4in43j8YPuwyyyJwezycwmJfIZiw5tMw&s",
        link: "https://www.instagram.com/p/DNVa45EhOty/",
        layout: "square"
      },
      {
        type: "Instagram Feed",
        title: "Cerita pengalaman",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV14cg6t58KTddvk1AYXJysFfz1-Po4iNfqA&s",
        link: "https://www.instagram.com/p/DXa6HsXgdPn/",
        layout: "square"
      }
    ]
  },
  {
    type: "Instagram Reels",
    title: "Jangan Pernah Nolong Orang Begini!",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROGMFdVtZII5roa30XX1NHLX7cTMffXfC2dQ&s",
    link: "https://www.instagram.com/reel/DXG1CUgAdRG/",
    layout: "portrait"
  }
];

export default function SocialPresence() {
  // Duplikasi konten untuk loop tak terbatas
  const doubledContent = [...socialContent, ...socialContent];

  return (
    <section id="social" className="section-pad" style={{ background: "var(--black)", paddingTop: "0", overflow: "hidden" }}>
      <div className="container">
        <div style={{ marginBottom: "50px", textAlign: "center" }}>
          <p style={{ fontSize: "10px", letterSpacing: "0.3em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "10px" }}>
            Digital Footprint
          </p>
          <h2 style={{ fontSize: "clamp(24px, 5vw, 42px)", fontWeight: 800, color: "var(--white)" }}>
            Insights on <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Social Media.</em>
          </h2>
        </div>

        {/* Marquee Wrapper */}
        <div className="marquee-container" style={{ overflow: "hidden", display: "flex", width: "100vw", marginLeft: "calc(-50vw + 50%)" }}>
          <div className="marquee-content" style={{
            display: "flex",
            gap: "20px",
            animation: "scroll 35s linear infinite", // Sedikit diperlambat agar tetap nyaman dibaca saat bergerak
          }}>
            {doubledContent.map((column, index) => {
              const columnWidth = "clamp(220px, 20vw, 280px)";
              
              if (column.type === "Stacked") {
                return (
                  <div key={index} style={{ display: "flex", flexDirection: "column", gap: "20px", flex: `0 0 ${columnWidth}` }}>
                    {column.items?.map((item, subIndex) => (
                      <MediaCard key={subIndex} item={item} />
                    ))}
                  </div>
                );
              }

              return (
                <div key={index} style={{ flex: `0 0 ${columnWidth}` }}>
                  <MediaCard item={column} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 10px)); } 
        }
      `}</style>
    </section>
  );
}

function MediaCard({ item }: { item: any }) {
  return (
    <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "block" }}>
      <div style={{
        position: "relative",
        aspectRatio: item.layout === "square" ? "1/1" : "9/16",
        background: "var(--black-3)",
        border: "1px solid rgba(201,168,76,0.15)",
        overflow: "hidden",
      }}>
        <img src={item.thumbnail} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.6 }} />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end"
        }}>
          <span style={{ fontSize: "8px", color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{item.type}</span>
          <h4 style={{ color: "var(--white)", fontSize: "13px", marginTop: "5px", fontWeight: 600, lineHeight: 1.4 }}>{item.title}</h4>
        </div>
      </div>
    </a>
  );
}