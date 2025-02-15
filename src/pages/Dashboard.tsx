export function Dashboard() {
    return (
        <section className='min-h-screen'>
            <div className='bg-[url("src/assets/home-bg.jpg")] bg-cover bg-center h-[80vh] pt-4'>
                <main className="glass-effect container mx-auto px-4 py-30">
                    <div className="text-center space-y-8">
                        <h1 className="text-4xl md:text-6xl font-bold text-white">Welcome to Our Platform</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-white">
                            Discover amazing content and connect with others in our community.
                        </p>
                        <div className="max-w-md mx-auto">
                            <div className="flex space-x-2">
                                <input type='search' placeholder='Search...'
                                       className='flex-grow bg-white border border-gray-300 rounded px-4 py-2'/>
                                <button type="submit"
                                        className="bg-black border-2 border-black text-white rounded px-4 py-2 hover:bg-gray-300 hover:text-black hover:cursor-pointer">
                                    Search
                                </button>
                            </div>
                        </div>
                        <div className="space-x-4">
                            <button
                                className='bg-black border-2 border-black text-white rounded px-10 py-2 hover:bg-gray-300 hover:text-black hover:cursor-pointer'>Get
                                Started
                            </button>
                            <button
                                className='bg-gray-300 border-2 border-black text-black rounded px-8 py-2 hover:bg-black hover:text-white hover:cursor-pointer'>
                                Register
                            </button>
                        </div>
                    </div>
                </main>
            </div>
            <div>

            </div>
        </section>
    );
}