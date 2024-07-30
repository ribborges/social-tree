import Avatar from "./components/avatar/Avatar";
import Icon from "./components/icon/Icon";
import Icons from "./components/icons/Icons";
import Link from "./components/link/Link";
import Links from "./components/links/Links";
import Usertag from "./components/usertag/Usertag";

import './styles/_app.scss';

export default function App() {
  return (
    <div className="container">
      <Avatar src="https://avatars.githubusercontent.com/u/46366493?v=4" />
      <Usertag>@ribborges</Usertag>
      <Links>
        <Link href="https://www.instagram.com/ribborges/">Instagram</Link>
        {
          /*
            <Link href="https://example.com">Facebook</Link>
            <Link href="https://example.com">Twitter</Link>
          */
        }
        <Link href="https://www.linkedin.com/in/ribborges/">LinkedIn</Link>
      </Links>
      <Icons>
        {
          /*
            <Icon href="https://example.com"><i className="bi bi-twitter"></i></Icon>
            <Icon href="https://example.com"><i className="bi bi-twitch"></i></Icon>
          */
        }
        <Icon href="https://www.instagram.com/ribborges/"><i className="bi bi-instagram"></i></Icon>
        <Icon href="https://www.linkedin.com/in/ribborges/"><i className="bi bi-linkedin"></i></Icon>
        <Icon href="https://github.com/ribborges"><i className="bi bi-github"></i></Icon>
      </Icons>
    </div>
  )
}