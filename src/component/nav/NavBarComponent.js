
const NavBarComponent = () => {
    return (
        <nav className='bg-white border relative'>
            <div className="mx-auto fixed top-0 left-0 right-0 bg-white">
                <div className="relative flex h-16 items-center justify-evenly px-4 md:px-24">

                    <div className="flex flex-1  sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 ">
                            <p className='text-success-100 font-bold text-2xl md:text-4xl'>JobsPortal</p>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <p className='text-success-100 md:text-xl font-poppins'>Login</p>
                        <p className='ml-3 bg-success-100 py-2 px-3 rounded text-white font-bold  md:text-2xl' >Post a job</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBarComponent;