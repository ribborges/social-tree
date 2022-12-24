import { ReactNode } from 'react';
import './_style.scss';

interface UsertagProps {
  children?: ReactNode,
}

export default function Links(props: UsertagProps) {
  return (
    <div className='links'>{props.children}</div>
  )
}