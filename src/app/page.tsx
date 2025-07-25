import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { ProjectCard } from '@/components/ProjectCard'
import { TechBadge } from '@/components/TechBadge'
import { ContactForm } from '@/components/ContactForm'

// Meus projetos para exibir no portfólio
const projectsData = [
  {
    imageUrl: '/projeto-cartao-visitas.png',
    title: 'Cartão de Visitas Digital',
    description: 'Um agregador de links inspirado no Linktree, construído com HTML e CSS puros.',
    projectUrl: 'https://cartao-de-visitas-gabsantinelli.vercel.app/',
    codeUrl: 'https://github.com/gabsantinelli/cartao-de-visitas-digital'
  },
];

// Minha lista de tecnologias para exibir
const technologiesData = [
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JavaScript' },
  { name: 'TypeScript' },
  { name: 'React' },
  { name: 'Next.js' },
  { name: 'TailwindCSS' },
  { name: 'Git' },
]

export default function HomePage() {
  return (
    <main className="bg-zinc-900 text-zinc-50 min-h-screen">
      <Header />
      <Hero />
      <About imageUrl="/GabrielSantinelli.jpg" />

      {/* Minha seção de Projetos */}
      <section className="py-28 px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Projetos</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map(project => (
            <ProjectCard
              key={project.title}
              imageUrl={project.imageUrl}
              title={project.title}
              description={project.description}
              projectUrl={project.projectUrl}
              codeUrl={project.codeUrl}
            />
          ))}
        </div>
      </section>

      {/* Minha seção de tecnologias */}
      <section className="px-8 pb-28">
        <h2 className="text-3xl font-bold text-center mb-12">Habilidades & Tecnologias</h2>
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-4">
          {technologiesData.map(tech => (
            <TechBadge key={tech.name} name={tech.name} />
          ))}
        </div>
      </section>

      {/* Adicionando o formulário de contato no final da página */}
      <ContactForm />
      
    </main>
  )
}