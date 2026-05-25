import { LoginForm } from "@/components/modules/login/LoginForm";

export default function Login() {
  return (
    <div className="relative flex min-h-svh w-full items-center justify-center overflow-hidden p-6 md:p-10">
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

      <div className="relative z-10 w-full lg:max-w-lg max-w-sm ">
        {/* Logo area */}
        <div className="mb-8 flex flex-col  items-center">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary shadow-sm ring-4 ring-primary/10">
            <svg
              className="h-6 w-6 text-primary-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
          </div>
          <h1 className="text-xl font-semibold text-foreground">Sage Wallet</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Secure wallet management
          </p>
        </div>

        {/* Glass card */}
        <div className="rounded-2xl border border-border/60 bg-card/60 backdrop-blur-md shadow-sm">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
