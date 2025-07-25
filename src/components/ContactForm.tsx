// Meu componente para o formulário de contato
export function ContactForm() {
  return (
    <section className="py-28 px-8">
      {/* Título da seção */}
      <h2 className="text-3xl font-bold text-center mb-12">Entre em Contato</h2>

      {/* O formulário em si, centralizado e com espaçamento entre os campos */}
      <form className="max-w-xl mx-auto flex flex-col gap-6">
        
        {/* Agrupamento do campo Nome */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-zinc-400">Nome</label>
          <input 
            type="text" 
            id="name" 
            name="name"
            className="bg-zinc-800 border border-zinc-700 rounded-md p-3 text-zinc-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder="Meu nome completo"
          />
        </div>

        {/* Agrupamento do campo E-mail */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-zinc-400">E-mail</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            className="bg-zinc-800 border border-zinc-700 rounded-md p-3 text-zinc-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder="meu.email@exemplo.com"
          />
        </div>

        {/* Agrupamento do campo Mensagem */}
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-zinc-400">Mensagem</label>
          <textarea 
            id="message" 
            name="message"
            rows={5}
            className="bg-zinc-800 border border-zinc-700 rounded-md p-3 text-zinc-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
            placeholder="Minha mensagem..."
          />
        </div>

        {/* Botão de envio do formulário */}
        <button 
          type="submit"
          className="mt-4 bg-emerald-500 hover:bg-emerald-600 text-zinc-900 font-bold py-3 px-6 rounded-lg transition-colors w-full md:w-auto self-end"
        >
          ENVIAR MENSAGEM
        </button>
      </form>
    </section>
  )
}