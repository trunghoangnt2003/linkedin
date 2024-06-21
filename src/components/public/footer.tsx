import React, { useState } from 'react';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import CottageRoundedIcon from '@mui/icons-material/CottageRounded';
type FooterProps = {
  classes?:{
    [key: string]: string
  }
};
export const Footer: React.FC< FooterProps > = ({classes}) => {
  const [active, setActive] = useState('home');

  return (
    <div className="flex justify-around p-4">
      <button
        onClick={() => setActive('home')}
        className={`flex flex-col items-center ${active === 'home' ? 'text-blue-500' : ''}`}
      >
        <CottageRoundedIcon className="h-6 w-6" />
        <span>Home</span>
      </button>
      <button
        onClick={() => setActive('network')}
        className={`flex flex-col items-center ${active === 'network' ? 'text-blue-500' : ''}`}
      >
        <PeopleRoundedIcon className="h-6 w-6" />
        <span>My Network</span>
      </button>
      <button
        onClick={() => setActive('post')}
        className={`flex flex-col items-center ${active === 'post' ? 'text-blue-500' : ''}`}
      >
        <AddBoxRoundedIcon className="h-6 w-6" />
        <span>Post</span>
      </button>
      <button
        onClick={() => setActive('notifications')}
        className={`flex flex-col items-center ${active === 'notifications' ? 'text-blue-500' : ''}`}
      >
        <NotificationsRoundedIcon className="h-6 w-6" />
        <span>Notifications</span>
      </button>
      <button
        onClick={() => setActive('jobs')}
        className={`flex flex-col items-center ${active === 'jobs' ? 'text-blue-500' : ''}`}
      >
        <BusinessCenterRoundedIcon className="h-6 w-6" />
        <span>Jobs</span>
      </button>
    </div>
  );
};

