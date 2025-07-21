export function Hero() {
  return (
    <section className="py-28 px-8 flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight">
        Transformando Ideias em Realidade Digital
      </h1>
      <p className="text-lg md:text-xl mt-6 text-zinc-400 max-w-2xl">
        Olá! Sou Gabriel Santinelli, um desenvolvedor apaixonado por criar interfaces e soluções que resolvem problemas reais.
      </p>
      <a 
        href="https://www.linkedin.com/in/gsantinelli/" 
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 bg-emerald-500 hover:bg-emerald-600 text-zinc-900 font-bold py-3 px-6 rounded-lg transition-colors"
      >
        ME CONHEÇA MELHOR
      </a>
    </section>
  )
}