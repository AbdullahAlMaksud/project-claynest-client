import PropTypes from 'prop-types';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const Category = ({ categories }) => {
    return (
        <div>
            <div className='w-11/12 mx-auto container my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                <h2 className='text-center text-3xl lg:text-4xl font-semibold md:col-span-2 lg:col-span-3 lg:text-left text-sage-green-900 dark:text-white'>Category</h2>
                <p className='text-center text-sm  md:col-span-2 lg:col-span-3 pb-10 lg:pr-96 lg:text-left text-gray-600 dark:text-gray-300'>Discover the beauty of our diverse pottery categories. From the rustic charm of terra cotta to the refined elegance of porcelain, explore our unique collections that cater to all your ceramic needs.</p>
                <div className='col-span-1 md:col-span-3'>
                    <Marquee className=''>
                        {
                            categories.map((category, idx) =>
                                <Link to={`/productsCategory/${category.subcaregory_Name}`} key={idx} className='w-52 md:w-60'>
                                    <div className='bg-sage-green-100 dark:bg-white/20 mr-10 rounded-xl pt-10'>
                                        <div className='rounded flex items-end justify-center mb-3 mx-5 md:h-40'>
                                            <img src={category.image} className='h-20 md:h-32 dark:invert' alt="" />
                                        </div>
                                        <div className='w-52 md:w-96'>
                                            <p className='text-lg font-semibold dark:text-white md:text-2xl text-center font-titillium'>{category.subcaregory_Name}</p>
                                            <p className='px-6 text-center dark:text-gray-100 dark:font-light truncate pb-8'>{category.key_elements}</p>
                                        </div>
                                    </div>
                                </Link>
                            )
                        }
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

Category.propTypes = {
    categories: PropTypes.array
};

export default Category;