import { Link } from 'react-router-dom';
import '.././App.css';

const Header = () => {
    return <div>
        <ul className="flex justify-end bg-pink-400 text-white m-5">
            <li className="p-10"><Link to='/home'>Home</Link></li>
            <li className="p-10"><Link to='/category'>Category</Link></li>
            <li className="p-10"><Link to='/product'>Product</Link></li>
            <li className="p-10"><Link to={'/menu/' + 123}>Menu</Link></li>
        </ul>
    </div>
}

export default Header;