import React from 'react';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import CottageRoundedIcon from '@mui/icons-material/CottageRounded';
import clsx from 'clsx';
type FooterProps = {
  classes?:{
    [key: string]: string
  }
  active: string;
  setActive: (value: string) => void;
};
export const Footer: React.FC< FooterProps > = ({active , setActive , classes}) => {

  return (
    
    <div className={clsx(classes?.body, "flex justify-between w-full p-4")}>
      <button
        onClick={() => setActive('home')}
        className={`flex flex-col items-center ${active === 'home' ? classes?.icon_choice : ''}`}
      >
        <CottageRoundedIcon className="h-6 w-6" />
        <span className={`${classes?.text}`}>Home</span>
      </button>
      <button
        onClick={() => setActive('network')}
        className={`flex flex-col items-center ${active === 'network' ? classes?.icon_choice : ''}`}
      >
        <PeopleRoundedIcon className="h-6 w-6" />
        <span className={clsx(classes?.text)}>My Network</span>
      </button>
      <button
        onClick={() => setActive('post')}
        className={`flex flex-col items-center ${active === 'post' ? classes?.icon_choice : ''}`}
      >
        <AddBoxRoundedIcon className="h-6 w-6" />
        <span className={clsx(classes?.text)}>Post</span>
      </button>
      <button
        onClick={() => setActive('notifications')}
        className={`flex flex-col items-center ${active === 'notifications' ? classes?.icon_choice : ''}`}
      >
        <NotificationsRoundedIcon className="h-6 w-6" />
        <span className={clsx(classes?.text)}>Notifications</span>
      </button>
      <button
        onClick={() => setActive('jobs')}
        className={`flex flex-col items-center ${active === 'jobs' ? classes?.icon_choice : ''}`}
      >
        <BusinessCenterRoundedIcon className="h-6 w-6" />
        <span className={clsx(classes?.text)}>Jobs</span>
      </button>
    </div>
    
  );
};

