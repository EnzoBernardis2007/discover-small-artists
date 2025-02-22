interface ButtonProps {
    content: string,
    doThis?: () => void
}

export function Button({ content, doThis }: ButtonProps) {
    return(
        <button 
            className="bg-green-600 rounded-lg text-yellow-50 w-24 h-10 hover:bg-green-700 hover:ring-2 hover:ring-green-500 transition"
            onClick={doThis}
        >{content}</button>
    )
}
