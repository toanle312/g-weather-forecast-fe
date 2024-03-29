import { NavLink, Outlet } from 'react-router-dom';

const DetailPage = () => {
  const navLinks = [
    {
      name: 'Weather',
      href: '/weather',
    },
    {
      name: 'Subcribe',
      href: '/subcribe',
    },
    {
      name: 'Unsubcribe',
      href: '/unsubcribe',
    },
  ];
  return (
    <div className='flex flex-col p-10 gap-2'>
      <div className='flex items-center justify-center gap-5'>
        {navLinks.map((link) => (
          <NavLink
            to={link.href}
            key={link.name}
            className={({ isActive }) =>
              isActive
                ? 'flex flex-col items-center after:block after:w-[40px] after:h-[3px] after:bg-[#379DF1] after:rounded-full'
                : 'after:block after:h-[3px]'
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DetailPage;
