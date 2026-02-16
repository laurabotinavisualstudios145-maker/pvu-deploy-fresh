"use client"

import Link from "next/link"

export default function HomePage() {
  return (
    <div
      className="relative overflow-hidden min-h-[100vh] bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: "url('/images/web} copia.jpg.jpeg')",
      }}
    >
      <div className="relative z-10 flex items-center justify-center min-h-[100vh]">
        <div
          className={`
            absolute
            right-[9%] bottom-[15%]
          `}
        >
          <Link href="/agenda">
            <button
              className={`
                border-glow
                relative
                px-8 py-5 md:px-12 md:py-6
                text-xl md:text-2xl
                font-bold
                text-white
                rounded-lg
                border-2 border-transparent
                transition-all duration-300
                active:scale-95
              `}
              style={{
                background:
                  "linear-gradient(135deg, #f6f7f7 0%, #eff5f6 50%, #f6f9fb 100%)",
              }}
            >
              <span className="relative z-10 tracking-wide text-black">
                Agéndate aquí
              </span>
            </button>
          </Link>
        </div>
      </div>

      {/* BORDE LUMINOSO */}
      <style jsx>{`
        .border-glow {
          position: relative;
          z-index: 0;
        }

        .border-glow::before {
          content: "";
          position: absolute;
          inset: -4px;
          border-radius: inherit;
          background: linear-gradient(
            45deg,
            #ffffff,
            #7a7b7c,
            #2c2e2d
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        .border-glow::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: inherit;
          z-index: -1;
        }

        .border-glow:hover::before {
          opacity: 1;
        }

        .border-glow:active {
          border-color: white;
        }
      `}</style>
    </div>
  )
}
