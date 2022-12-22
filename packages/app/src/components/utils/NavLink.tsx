import Link from 'next/link';
import { ReactNode } from 'react';
import { useCustomDomain } from '../../context/DomainContext';
function NavLink({
  href,
  style,
  children,
  className,
}: {
  href: string;
  style?: { [key: string]: any };
  children: ReactNode;
  className?: string;
}) {
  const domain = useCustomDomain();
  const baseUrl = domain ? domain : '';
  return (
    <Link
      href={`${baseUrl}${href}`}
      style={{
        marginLeft: '1rem',
        textAlign: 'left',
        color: '#ccc',
        textDecoration: 'none',
        ...style,
      }}
      className={className}
    >
      {children}
    </Link>
  );
}

export default NavLink;
