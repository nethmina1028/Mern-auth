import { Link } from 'react-router-dom';


export default function Header() {
 
  return (
    <div className='bg-slate-200'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        
          <h1 className='font-bold'>Auth App</h1>
        

        <ul className='flex gap-4'>
            <li>Home</li>
            <li>About</li>
            <li>Sign In</li>
        </ul>
      </div>
    </div>
  );
}