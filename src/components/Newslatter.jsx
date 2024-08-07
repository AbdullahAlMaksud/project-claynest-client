const Newslatter = () => {
    const handleSubcribe = e => {
        e.preventDefault();
        const email = e.target.email.value;
        console.log(email);
    }

    return (
        <div className='w-11/12 container mx-auto mb-10'>
            <section className="flex flex-col mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 md:flex-row md:h-48">
                <div className="md:flex md:items-center md:justify-center md:w-1/2 md:bg-gray-700 md:dark:bg-gray-800">
                    <div className="px-6 py-6 md:px-8 md:py-0">
                        <h2 className="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100">Subcribe For <span className="text-blue-600 dark:text-blue-400 md:text-blue-300">Product Updates</span> & Newsletter!</h2>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 md:text-gray-400">Subscribe to ClayNest Inc. for the latest updates on our exquisite pottery collections and exclusive offers!</p>
                    </div>
                </div>
                <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
                    <form onSubmit={handleSubcribe}>
                        <div className="flex flex-col p-1.5 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                            <input className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent" type="text" name="email" placeholder="Enter your email" aria-label="Enter your email" />
                            <button className="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none" type="submit">subscribe</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Newslatter;