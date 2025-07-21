export function Header() {
  return (
    <header className="py-4 px-8 flex items-center justify-between">
      <h1 className="text-2xl font-bold">Gabriel Santinelli</h1>
      <nav className="flex items-center gap-6">
        <a href="#sobre" className="hover:text-emerald-400 transition-colors">Sobre</a>
        <a href="#projetos" className="hover:text-emerald-400 transition-colors">Projetos</a>
        <a href="#contato" className="hover:text-emerald-400 transition-colors">Contato</a>
      </nav>
    </header>
  )
}