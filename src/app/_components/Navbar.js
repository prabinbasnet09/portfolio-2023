export default function Navbar() {
  return (
    <>
      <div className='flex justify-between bg-transparent m-3'>
        <div>Prabin Basnet</div>
        <div>
          <ul className='hidden sm:flex list-none p-0 '>
            <li className='mr-4'>Home</li>
            <li className='mr-4'>About</li>
            <li className='mr-4'>Projects</li>
            <li className='mr-4'>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
}
