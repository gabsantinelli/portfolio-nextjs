import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About' // 1. IMPORTE o novo componente aqui

export default function HomePage() {
  return (
    <main className="bg-zinc-900 text-zinc-50 min-h-screen">
      <Header />
      <Hero />
      <About imageUrl="/GabrielSantinelli.jpg" />
    </main>
  )
}