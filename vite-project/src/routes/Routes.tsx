import {Routes, Route} from 'react-router-dom';
import { ComponentHeader } from '../shared/UIComponents/Header';



const RoutesProps = () =>{
    return (
        <>
        <Routes>
            <Route path='/' element={<ComponentHeader/>} />
        </Routes>
        </>
    )
}

export default RoutesProps;