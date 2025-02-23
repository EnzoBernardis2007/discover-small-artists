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
                    className="cursor-pointer p-6 bg-green-500 min-w-32 max-w-full h-12 rounded-full text-white font-medium flex justify-center items-center hover:bg-green-600 hover:ring-2 hover:ring-green-700 hover:scale-105 active:bg-green-700 active:scale-95 transition-all duration-300"
                    onClick={doThis}
                >{content}</button>
            )
    }
}
