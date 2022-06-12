import { AiOutlineHome } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { TiMessages } from 'react-icons/ti';
import { MdOutlinePhotoSizeSelectActual } from 'react-icons/md';

export const links = [
  {
    id: 1,
    to: "/",
    name: "Home",
    icon: <AiOutlineHome />,
    className: "list"
  },
  {
    id: 2,
    to: "/about",
    name: "About",
    icon: <CgProfile />,
    className: "list"
  },
  {
    id: 3,
    to: "/portfolio",
    name: "Portfolio",
    icon: <MdOutlinePhotoSizeSelectActual />,
    className: "list"
  },
  {
    id: 4,
    to: "/contact",
    name: "Contact",
    icon: <TiMessages />,
    className: "list"
  }
];
