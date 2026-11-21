import type { Metadata } from "next";

import { LoginForm } from "@/features/auth";
import { IntelectoLogo, SupersociedadesLogo } from "@/shared/components/brand-logos";

export const metadata: Metadata = { title: "Ingresar · Inteligencia Empresarial" };

export default function LoginPage() {
  return (
    <main id="contenido" className="min-h-screen lg:grid lg:grid-cols-[1.15fr_0.85fr]">
      <section className="login-stage relative overflow-hidden px-6 py-10 text-white lg:flex lg:min-h-screen lg:flex-col lg:justify-between lg:px-14 lg:py-12">
        <DataArtwork />
        <div className="relative z-10">
          <div className="w-full max-w-xs rounded-2xl bg-white px-4 py-3 lg:max-w-sm">
            <SupersociedadesLogo className="w-full" />
          </div>
          <h1 className="mt-8 max-w-xl text-4xl font-semibold tracking-tight lg:text-5xl">Inteligencia Empresarial</h1>
          <p className="mt-4 max-w-md text-base leading-7 text-white/85">
            Información estratégica para conocer, analizar y monitorear empresas.
          </p>
        </div>
        <p className="relative z-10 mt-10 hidden text-sm text-white/70 lg:block">Registro Mercantil y ESAL · datos de demostración</p>
      </section>
      <section className="flex flex-col justify-center bg-[#f8f3f4] px-4 py-10 lg:px-12">
        <div className="mx-auto w-full max-w-md rounded-3xl bg-white p-6 shadow-[0_24px_70px_-36px_rgba(80,20,35,0.45)] ring-1 ring-slate-200/80 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Ingresar</h2>
          <p className="mt-1 mb-6 text-sm text-muted-foreground">Accede con una cuenta de demostración para recorrer la plataforma.</p>
          <LoginForm />
        </div>
        <footer className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
          <span>Desarrollado por</span>
          <IntelectoLogo className="h-12 w-auto" />
        </footer>
      </section>
    </main>
  );
}

function DataArtwork() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <svg className="absolute inset-0 h-full w-full opacity-80" viewBox="0 0 800 900" preserveAspectRatio="xMidYMid slice">
        <g fill="none" stroke="white" strokeOpacity="0.22" strokeWidth="1.4">
          <path d="M80 160 C180 80, 260 220, 360 150 S560 80, 700 180" />
          <path d="M40 420 C160 340, 240 520, 390 430 S620 360, 760 470" />
          <path d="M120 700 C240 620, 360 760, 500 680 S680 600, 760 720" />
          <path d="M180 150 L300 320 L470 250 L620 390" />
          <path d="M300 320 L250 520 L430 610 L620 390" />
          <path d="M430 610 L560 760" />
        </g>
        {[
          [180, 150],
          [300, 320],
          [470, 250],
          [620, 390],
          [250, 520],
          [430, 610],
          [560, 760],
          [90, 430],
        ].map(([x, y]) => (
          <g key={`${x}-${y}`}>
            <circle cx={x} cy={y} r="18" fill="white" fillOpacity="0.08" stroke="white" strokeOpacity="0.35" />
            <circle cx={x} cy={y} r="4" fill={["#FCD116", "#003893", "#CE1126"][(x + y) % 3]} />
          </g>
        ))}
      </svg>
      <div className="absolute top-24 right-10 hidden h-28 w-40 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm lg:block" />
      <div className="absolute right-16 bottom-28 hidden w-48 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm lg:block">
        <div className="flex h-16 items-end gap-2">
          <span className="h-6 w-3 rounded-sm bg-[#FCD116]/90" />
          <span className="h-10 w-3 rounded-sm bg-white/70" />
          <span className="h-14 w-3 rounded-sm bg-[#962D46]" />
          <span className="h-8 w-3 rounded-sm bg-[#003893]/80" />
          <span className="h-12 w-3 rounded-sm bg-[#CE1126]/85" />
        </div>
      </div>
    </div>
  );
}
