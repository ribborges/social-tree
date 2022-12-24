import { ReactNode } from 'react';
import './_style.scss';

interface UsertagProps {
    href?: string,
    children?: ReactNode,
}

export default function Link(props: UsertagProps) {
  return (
    <a className='link' href={props.href}>{props.children}</a>
  )
}