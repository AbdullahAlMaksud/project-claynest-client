import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner';
import DisplayProducts from '../components/DisplayProducts';
import Category from '../components/Category';
import Newslatter from '../components/Newslatter';
import ContactInfo from '../components/ContactInfo';

const Home = () => {
    const categories = useLoaderData()

    return (
        <div>
            <Banner />
            <DisplayProducts  />
            <Category categories={categories}/>
            <ContactInfo/>
            <Newslatter/>
        </div>
    )
};

export default Home;