import bannerImg from '../../../Assets/img/ImageBanner.svg'

const HomeHeroComponent = () => {
    return (
        <div className="px-3 md:px-24 h-screen " style={{ backgroundImage: `url(${bannerImg})` }}>
            <div className='pt-44 xxm:text-4xl xm:text-5xl md:text-7xl font-poppins font-bold leading-[5rem]' >
                <p>
                    Find A <span className='text-success-100'>Job</span>  That
                </p>
                <p>
                    <span className='text-success-100'>Matches</span>Your
                </p>
                <p>Passion</p>
            </div>

            <div className='mt-5 text-lg md:text-xl text-gray-400 leading-8 font-poppins font-normal'>
                <p>Hand-picked opportunities to work from home, remotely, freelance, </p>
                <p>full-time, part-time, contract and internships.</p>
            </div>


            <form>
                <div class="grid gap-6 mt-28 md:grid-cols-2">
                    <div className='flex border rounded-lg'>
                        <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by job title......................" />
                        <button type="submit" class="text-white text-2xl bg-success-100 hover:bg-success-100 focus:ring-4 focus:outline-none focus:bg-success-100 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-success-100 ">Search</button>
                    </div>
                </div>

            </form>

        </div>
    )
}

export default HomeHeroComponent;