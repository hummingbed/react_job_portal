import bannerImg from '../../../Assets/img/ImageBanner.svg'

const HomeHeroComponent = () => {
    return (
        <div className="px-3 md:px-24 h-screen " style={{ backgroundImage: `url(${bannerImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
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
                <div className="grid gap-6 mt-28 md:grid-cols-2">
                    <div className='flex border rounded-lg'>
                        <input className="border h-16 border-success-100 text-sm rounded-l-lg w-full placeholder:text-lg text-success-100 font-bold " placeholder=" &nbsp; Search by job title......................" />
                        <button type="submit" className="text-white text-sm md:text-2xl bg-success-100 px-7 rounded-r-lg ">Search</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default HomeHeroComponent;