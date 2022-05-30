import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io5';
import * as HiIcons from 'react-icons/hi';
import * as BiIcons from 'react-icons/bi';

export const NavData = [
  {
    title: 'Home',
    path: '/#home',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'Sobre nós',
    path: '/#about-us',
    icon: <HiIcons.HiUsers />,
  },
  {
    title: 'Save The Date',
    path: '/#save-the-date',
    icon: <IoIcons.IoCalendar />,
  },
  {
    title: 'Localização',
    path: '/#location',
    icon: <IoIcons.IoLocationSharp />,
  },
  {
    title: 'Presentes',
    path: '/#gifts',
    icon: <FaIcons.FaGift />,
  },
  {
    title: 'Presença',
    path: '/confirmacao-presenca',
    icon: <BiIcons.BiCalendarCheck />,
  },
];
