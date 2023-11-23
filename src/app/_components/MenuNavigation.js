import Link from 'next/link';

export default function MenuNavigation({ href, title }) {
  return (
    <Link
      href={href}
      className='w-full text-center p-3 hover:bg-[#2f2747] hover:cursor-pointer'
    >
      {title}
    </Link>
  );
}
