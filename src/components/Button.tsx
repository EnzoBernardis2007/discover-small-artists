interface ButtonProps {
    type: string,
    content: string,
    doThis?: () => void
}

export function Button({ type, content, doThis }: ButtonProps) {
    switch (type) {
        case 'common':
            return(
                <button 
                    className="bg-slate-50 rounded-full text-black w-24 h-10 hover:bg-slate-200 transition"
                    onClick={doThis}
                >{content}</button>
            )
        case 'special':
            return (
                <button 
                    className="bg-green-600 rounded-full text-slate-50 w-28 h-12 active:bg-green-700 hover:ring-2 hover:ring-green-500 hover:bg-green-500 transition font-medium"
                    onClick={doThis}
                >{content}</button>
            )
    }
}
