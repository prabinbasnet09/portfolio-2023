import Link from 'next/link';

export default function NavLink({ href, title }) {
  return <Link href={href}>{title} </Link>;
}
