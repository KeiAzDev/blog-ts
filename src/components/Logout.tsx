import { signInWithPopup, signOut } from "firebase/auth"
import { auth, provider } from "../firebase"
import { useNavigate } from "react-router-dom";

interface LoginProps {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const Logout: React.FC<LoginProps> = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate('/login');
    });
  }

  return (
    <div>
      <p>ログアウトする</p>
      <button onClick={logout}>ログアウト</button>
    </div>
  )
}

export default Logout