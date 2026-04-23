"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Tentang", href: "#about" },
  { label: "Perjalanan", href: "#journey" },
  { label: "Mentoring", href: "#mentoring" },
  { label: "Kerjasama", href: "#kerjasama" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: "20px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled
            ? "rgba(10,10,10,0.95)"
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(201,168,76,0.15)"
            : "none",
          transition: "all 0.4s ease",
        }}
      >
        {/* Logo */}
        <div
          onClick={() => handleNav("#home")}
          style={{ cursor: "pointer", display: "flex", flexDirection: "column" }}
        >
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "18px",
              color: "var(--white)",
              letterSpacing: "0.02em",
            }}
          >
            Bagus Utomo
          </span>
          <span
            style={{
              fontSize: "9px",
              color: "var(--gold)",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              fontWeight: 400,
            }}
          >
            Business Mentor
          </span>
        </div>

        {/* Desktop Nav */}
        <ul
          style={{
            display: "flex",
            gap: "36px",
            listStyle: "none",
            alignItems: "center",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleNav(link.href)}
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--white-dim)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  fontWeight: 400,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  padding: "4px 0",
                  position: "relative",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLButtonElement).style.color = "var(--gold)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLButtonElement).style.color =
                    "var(--white-dim)")
                }
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleNav("#kontak")}
              style={{
                background: "var(--gold)",
                border: "none",
                color: "var(--black)",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                cursor: "pointer",
                padding: "10px 24px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.background =
                  "var(--gold-light)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.background = "var(--gold)";
              }}
            >
              Mulai Sekarang
            </button>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="hamburger"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            padding: "4px",
          }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: i === 1 ? "20px" : "28px",
                height: "2px",
                background: "var(--gold)",
                transition: "all 0.3s ease",
                marginLeft: i === 1 ? "auto" : "0",
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile Overlay */}
      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
            background: "rgba(10,10,10,0.98)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "32px",
          }}
        >
          <button
            onClick={() => setOpen(false)}
            style={{
              position: "absolute",
              top: "24px",
              right: "24px",
              background: "none",
              border: "none",
              color: "var(--gold)",
              fontSize: "28px",
              cursor: "pointer",
            }}
          >
            ✕
          </button>

          {navLinks.map((link, i) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              style={{
                background: "none",
                border: "none",
                color: "var(--white)",
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(28px, 8vw, 48px)",
                fontWeight: 700,
                cursor: "pointer",
                animation: `fadeUp 0.4s ease ${i * 0.08}s both`,
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLButtonElement).style.color = "var(--gold)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLButtonElement).style.color = "var(--white)")
              }
            >
              {link.label}
            </button>
          ))}

          <button
            onClick={() => handleNav("#kontak")}
            style={{
              marginTop: "16px",
              background: "var(--gold)",
              border: "none",
              color: "var(--black)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              cursor: "pointer",
              padding: "16px 48px",
            }}
          >
            Mulai Sekarang
          </button>
        </div>
      )}

      <style jsx>{`
        .desktop-nav {
          display: flex;
        }
        .hamburger {
          display: none;
        }
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .hamburger {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
