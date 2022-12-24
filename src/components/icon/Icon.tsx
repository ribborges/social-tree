import { ReactNode } from 'react';
import './_style.scss';

interface UsertagProps {
  href?: string,
  children?: ReactNode,
}

export default function Icon(props: UsertagProps) {
  return (
    <a className='icon' href={props.href}>{props.children}</a>
  )
}