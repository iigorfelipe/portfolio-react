import { AiOutlineHome } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { TiMessages } from 'react-icons/ti';
import { MdOutlinePhotoSizeSelectActual } from 'react-icons/md';

export const links = [
  {
    id: 1,
    to: "/",
    name: "Inicio",
    icon: <AiOutlineHome />,
    className: "list"
  },
  {
    id: 2,
    to: "/about",
    name: "Sobre",
    icon: <CgProfile />,
    className: "list"
  },
  {
    id: 3,
    to: "/portfolio",
    name: "Portfólio",
    icon: <MdOutlinePhotoSizeSelectActual />,
    className: "list"
  },
  {
    id: 4,
    to: "/contact",
    name: "Contato",
    icon: <TiMessages />,
    className: "list"
  }
];
