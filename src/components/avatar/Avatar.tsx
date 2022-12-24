import './_style.scss';

interface AvatarProps {
    src?: string,
}

export default function Avatar(props: AvatarProps) {
    return (
        <div className='avatar-back'>
            <div className="avatar">
			    <img src={props.src}/>
		    </div>
        </div>
    )
}