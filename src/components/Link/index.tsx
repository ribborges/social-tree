import { ReactNode } from 'react';

interface LinkProps {
  href?: string,
  children?: ReactNode,
}

function Link(props: LinkProps) {
  return (
    <a
      className="
        p-2
        flex justify-center items-center gap-2
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

function LinkList({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-4 w-11/12 md:w-8/12 lg:w-3/12">
      {children}
    </div>
  )
}

export { Link, LinkList };