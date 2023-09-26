import { Link } from 'react-router-dom';
import './Error.css'
const ErrrorPage = () => {
    return (
        <div className="error-container">
            <div className='pt-96 pl-[1100px] h-screen'>
                <Link to={'/'}>
                    <button className='bg-[#79C23F] px-6 py-4 text-white rounded-md'>Go Back Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrrorPage;