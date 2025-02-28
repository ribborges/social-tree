import { ReactNode } from 'react';

interface UsertagProps {
  children?: ReactNode,
}

export default function Usertag(props: UsertagProps) {
  return (
    <span className="font-bold">
      {props.children}
    </span>
  )
}