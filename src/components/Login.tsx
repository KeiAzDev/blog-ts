import { signInWithPopup } from "firebase/auth"
import { auth, provider } from "../firebase"
import { useNavigate } from "react-router-dom";

interface LoginProps {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<LoginProps> = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const loginInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem('isAuth', 'true');
      setIsAuth(true);
      navigate('/');
    });
  }

  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginInWithGoogle}>Googleでログイン</button>
    </div>
  )
}

export default Login