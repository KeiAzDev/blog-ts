import { Link } from "react-router-dom";
import "./styles/Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faFilePen, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'

interface NavbarProps {
  isAuth: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isAuth }) => {
  return (
    <nav>
      <Link to={'/'}><FontAwesomeIcon icon={faHouse} />ホーム</Link>
      <Link to={'/createpost'}><FontAwesomeIcon icon={faFilePen} />記事投稿</Link>
      {!isAuth ? 
      (<Link to={'/login'}><FontAwesomeIcon icon={faArrowRightToBracket} />ログイン</Link>) : 
      (<Link to={'/logout'}><FontAwesomeIcon icon={faArrowRightToBracket} />ログアウト</Link>) }
      
    </nav>
  )
}

export default Navbar