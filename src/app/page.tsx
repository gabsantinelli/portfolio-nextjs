import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'

export default function HomePage() {
  return (
    <main className="bg-zinc-900 text-zinc-50 min-h-screen">
      <Header />
      <Hero /> {/* 2. Use o componente aqui */}
    </main>
  )
}