import { ReactNode } from 'react';
import './_style.scss';

interface UsertagProps {
  children?: ReactNode,
}

export default function Icons(props: UsertagProps) {
  return (
    <div className='icons'>{props.children}</div>
  )
}