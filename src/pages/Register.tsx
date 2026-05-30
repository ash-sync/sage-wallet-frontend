import Logo from "@/components/logo";
import { RegisterForm } from "@/components/modules/Authentication/RegisterForm";
import AuthCoinRain from "@/components/modules/Three/CoinRain";

export default function Register() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden p-6 md:p-10">
      <AuthCoinRain />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
                linear-gradient(to right, rgba(148, 163, 184, 0.04) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(148, 163, 184, 0.04) 1px, transparent 1px)
              `,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 w-full max-w-lg">
        {/* Logo area */}
        <div className="mb-8 flex flex-col items-center">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary shadow-sm ring-4 ring-primary/10">
            <Logo />
          </div>
          <h1 className="text-xl font-semibold text-foreground">Sage Wallet</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Secure wallet management
          </p>
        </div>

        {/* Glass card */}
        <div className="rounded-2xl  border border-border/60 bg-card/60 backdrop-blur-md shadow-sm">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
