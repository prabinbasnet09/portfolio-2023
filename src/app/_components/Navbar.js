export default function Navbar() {
  return (
    <>
      <div className='flex justify-between shadow-lg  p-3'>
        <div className="font-bold text-lg">Prabin Basnet</div>
        <div>
          <ul className='hidden sm:flex list-none p-0 font-thin'>
            <li className='mr-4'>Home</li>
            <li className='mr-4'>About</li>
            <li className='mr-4'>Projects</li>
            <li className='mr-4'>Contact</li>
          </ul>
        </div>
        <div className="sm:hidden">
          =
        </div>
      </div>
    </>
  );
}
