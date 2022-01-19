import { Route, Routes} from "react-router";
import Login from 'components/LoginPage/Login';
import MainPage from "components/MainPage/MainPage";
import QnA from "components/QnApage/QnA";
import Signup from "components/LoginPage/Signup";

export default function Routers () : JSX.Element{
    return(
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/QnA" element={<QnA />} />
            <Route path="/signup" element={<Signup/>}/>
        </Routes>
    );
}