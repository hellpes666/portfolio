type THeaderTitle = 'Home' | 'Projects' | 'About' | 'Contact';

interface IHederItems {
  link: string;
  title: THeaderTitle;
  active: boolean;
}
export const Header = () => {
  const HEADER_ITEMS: IHederItems[] = [
    {
      link: '#',
      title: 'Home',
      active: false,
    },
    {
      link: '#',
      title: 'Projects',
      active: false,
    },
    {
      link: '#',
      title: 'About',
      active: false,
    },
    {
      link: '#',
      title: 'Contact',
      active: true,
    },
  ];

  const activeNavItemStyle: string =
    'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900';

  return (
    <header className="flex justify-center items-center  top-3 fixed w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {HEADER_ITEMS.map((item, index) => (
          <a
            href={item.link}
            className={`nav-item ${item.active ? activeNavItemStyle : ''}`}
            key={index}
          >
            {item.title}
          </a>
        ))}
      </nav>
    </header>
  );
};
