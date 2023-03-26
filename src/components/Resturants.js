import { useEffect, useState } from 'react';
import Card from './Card';
import { ResturantApi, CloudImg } from './constants';

const Resturants = () => {

    const [resturantList, setResturantList] = useState([]);

    const fetchResturants = async() => {
        const resturant = await fetch(ResturantApi);
        const response = await resturant.json();
        setResturantList(response?.data?.cards[2]);
    }

    useEffect(() => {
        fetchResturants()
    }, []);



    return (
        <div className='flex m-5 flex-wrap'>
            {
                resturantList?.data?.data?.cards?.map((card, index) => {
                    return <Card {...{card, index}} />
                })
            }
          
        </div>
    )
}

export default Resturants;