import { ReactNode } from 'react';
import './_style.scss';

interface UsertagProps {
  children?: ReactNode,
}

export default function Usertag(props: UsertagProps) {
  return (
    <span className='usertag'>{props.children}</span>
  )
}