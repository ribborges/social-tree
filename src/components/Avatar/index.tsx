interface AvatarProps {
    src?: string,
}

export default function Avatar(props: AvatarProps) {
    return (
        <div
            className="
                relative overflow-hidden w-47 h-48 md:w-52 md:h-52 lg:w-72 lg:h-72 p-1
                flex
                rounded-full border-2 border-solid border-indigo-500
            "
        >
            <img className="w-full h-full object-cover rounded-full" src={props.src} />
        </div>
    )
}