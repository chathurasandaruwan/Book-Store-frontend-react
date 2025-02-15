export function TitleBar(props : {children : string}) {
    return (
        <div className="w-full bg-gray-300 text-black py-2 px-10 mt-2 border-t-2 border-b-2 border-black">
            <h1 className='text-2xl font-bold'>{props.children}</h1>
        </div>
    );
}