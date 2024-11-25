import { bottomLinks } from '@/constants';
import { Link, useLocation } from 'react-router-dom';

const BottomBar = () => {
  const { pathname } = useLocation();
  return (
    <section className="bottom-bar">
      {bottomLinks.map((el, i) => {
        const { route, label, imageUrl } = el;
        const isActive = pathname === route;
        return (
          <Link key={i} to={route} className={`flex-center flex-col gap-1 p-2 transition ${isActive && "bg-primary-500 rounded-[10px]"}`}>
            <img src={imageUrl} alt={label} width={16} height={16} className={`${isActive && 'invert-white'}`} />
            <h3 className='tiny-medium text-light-2'>{label}</h3>
          </Link>
        )
      })}
    </section>
  )
}

export default BottomBar
