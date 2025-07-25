// Interface para definir as props que o componente espera
interface TechBadgeProps {
  name: string;
}

export function TechBadge(props: TechBadgeProps) {
  return (
    <span className="bg-zinc-800 text-emerald-400 text-sm py-1 px-3 rounded-lg">
      {props.name}
    </span>
  )
}