interface ButtonProps {
    content: string
}

export function Button({ content }: ButtonProps) {
    return(
        <button className="bg-green-600 rounded-lg text-yellow-50 w-24 h-10 hover:bg-green-700 hover:ring-2 hover:ring-green-500 transition">{content}</button>
    )
}