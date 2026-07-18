import React from "react";

const sponsors: React.ComponentType<React.SVGProps<SVGSVGElement>>[] = [
  // 1. ChainPocket
  (props) => (
    <svg
      width="140"
      height="40"
      viewBox="0 0 140 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 14H28V26H12Z" stroke="currentColor" strokeWidth="2" />
      <path d="M16 10V14M24 10V14" stroke="currentColor" strokeWidth="2" />
      <text x="40" y="25" fill="currentColor" fontSize="16" fontFamily="Arial">
        ChainPocket
      </text>
    </svg>
  ),

  // 2. CoinNest
  (props) => (
    <svg
      width="140"
      height="40"
      viewBox="0 0 140 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 20C10 14 14 10 20 10C26 10 30 14 30 20C30 26 26 30 20 30C14 30 10 26 10 20Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M16 20H24" stroke="currentColor" strokeWidth="2" />
      <text x="40" y="25" fill="currentColor" fontSize="16" fontFamily="Arial">
        CoinNest
      </text>
    </svg>
  ),
  // 3. VaultPay
  (props) => (
    <svg
      width="140"
      height="40"
      viewBox="0 0 140 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="10"
        y="10"
        width="20"
        height="20"
        rx="4"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="25" cy="20" r="2" fill="currentColor" />
      <text x="40" y="25" fill="currentColor" fontSize="16" fontFamily="Arial">
        VaultPay
      </text>
    </svg>
  ),
  // 4. NovaWallet
  (props) => (
    <svg
      width="140"
      height="40"
      viewBox="0 0 140 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="2" />
      <path d="M15 20H25" stroke="currentColor" strokeWidth="2" />
      <text x="40" y="25" fill="currentColor" fontSize="16" fontFamily="Arial">
        NovaWallet
      </text>
    </svg>
  ),
];

export function SponsorSection() {
  return (
    <section className="w-full">
      <div className="mx-auto border border-white/10 bg-gradient-to-r from-[#19051b7e] via-[#500f5860] to-[#22072d71] px-8 py-6">
        <div className="flex flex-col mt-2 gap-6 lg:items-center md:flex-row md:justify-between lg:justify-center">
          <span className="text-lg font-medium text-white">Trusted by</span>

          <div className="flex flex-wrap items-center justify-center gap-10">
            {sponsors.map((SponsorLogo, index) => (
              <div
                key={index}
                className="text-white/60 transition-all duration-300 hover:text-purple-400 hover:scale-105"
              >
                <SponsorLogo className="h-8 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
