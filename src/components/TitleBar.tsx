export function TitleBar(props : {children : string}) {
    return (
        <div className="w-full bg-gray-300 text-black py-1 px-10 mt-2 border-t-2 border-b-2 border-gray-400">
            <h1 className='text-2xl font-bold'>{props.children}</h1>
        </div>
    );
}