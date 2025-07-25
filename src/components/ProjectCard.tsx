import Image from 'next/image'

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  description: string;
  projectUrl: string;
  codeUrl: string;
}

export function ProjectCard(props: ProjectCardProps) {
  return (
    <div className="border border-zinc-800 rounded-lg p-4 flex flex-col gap-4 hover:border-emerald-500 transition-colors">
      <Image 
        src={props.imageUrl} 
        width={384}
        height={216}
        alt={`Thumbnail do projeto ${props.title}`} 
        className="rounded-md w-full"
      />

      <h3 className="text-xl font-bold text-zinc-100">{props.title}</h3>
      <p className="text-zinc-400 text-sm">{props.description}</p>

      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-zinc-800">
        <a href={props.projectUrl} target="_blank" rel="noopener noreferrer" className="text-sm bg-zinc-800 hover:bg-zinc-700 text-zinc-100 py-1 px-3 rounded-md transition-colors">
          Ver Projeto
        </a>
        <a href={props.codeUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-emerald-500 transition-colors">
          Ver Código
        </a>
      </div>
    </div>
  )
}