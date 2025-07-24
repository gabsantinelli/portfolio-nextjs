import Image from 'next/image'


interface AboutProps {
  imageUrl: string
}

export function About(props: AboutProps) {
  return (
    <section className="py-28 px-8">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/3">
          <Image
            src={props.imageUrl} 
            width={300}
            height={300}
            alt="Foto de perfil de Gabriel Santinelli"
            className="rounded-full shadow-lg"
          />
        </div>

        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-bold mb-4">Sobre Mim</h2>
          <div className="space-y-4 text-zinc-400">
            <p>
              Saindo do mundo do Direito para mergulhar de cabeça no universo da tecnologia. Minha paixão é construir interfaces intuitivas e resolver problemas complexos com código.
            </p>
            <p>
              Atualmente focado em dominar o ecossistema JavaScript com React, Next.js e TypeScript, buscando criar aplicações robustas e de alta performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}