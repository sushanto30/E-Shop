 
import Slider from '../components/Slider';
import Category from '../components/Category';
import { Helmet } from 'react-helmet';
 
const Home = () => {
     
    return (
        <div className='container mx-auto mt-8 '>
            <Helmet>
                <title>Home pages</title>
            </Helmet>
            <Slider></Slider>
            <Category  ></Category>
        </div>
    );
};

export default Home;