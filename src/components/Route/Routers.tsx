import { Route, Routes} from "react-router";
import Login from 'components/LoginPage/Login';
import MainPage from "components/MainPage/MainPage";
import QnA from "components/QnApage/QnA";

export default function Routers () {
    return(
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/QnA" element={<QnA/>}/>
        </Routes>
    );
}