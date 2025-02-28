import { ReactNode } from 'react';

interface IconProps {
  href?: string,
  children?: ReactNode,
}

function Icon(props: IconProps) {
  return (
    <a
      className="
        p-2
        text-center font-bold
        border-2 border-solid rounded-lg
        border-indigo-500
        text-indigo-500 hover:text-zinc-200 hover:dark:text-zinc-900
        transition duration-300 ease-in-out
        hover:bg-indigo-500 
      "
      href={props.href}
    >
      {props.children}
    </a>
  )
}

function IconList({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-4">
      {children}
    </div>
  )
}

export { Icon, IconList };