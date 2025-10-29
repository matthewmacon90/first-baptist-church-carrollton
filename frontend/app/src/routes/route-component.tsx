import {Routes, Route} from 'react-router';
import HomePage from '../pages/home-page/home-page';


const RoutesComponent = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
        </Routes>
    );
};

export default RoutesComponent;