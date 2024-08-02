import { useState } from 'react'
import { Link,useNavigate} from 'react-router-dom'
import { signInStart,signInSuccess,signInFailure } from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import OAuth from '../components/OAuth';


function Signin() {
          const [formData, setFormData] = useState({});
          /*const [error, setError] = useState(false);
          const [loading, setLoading] = useState(false);
          */
         const {loading,error} = useSelector((state) => state.user); //from redux
          const navigate = useNavigate();
          const dispatch = useDispatch();

          
          const handleChange = (e) => {
            setFormData({...formData, [e.target.id]: e.target.value});
            
          };

          const handleSubmit = async (e) => {
             e.preventDefault();
          
            try{
              
              /* move this to redux
              setLoading(true);
              setError(false);
              */
              dispatch(signInStart());
              const res = await fetch('api/auth/signin', {  //when using axios we dont want this below code part
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
                
             } );
             
              const data = await res.json();
             /* setLoading(false); */
            
             
              if(data.success === false){
                /*setError(true); */
                dispatch(signInFailure(data));
                return;
              }
              dispatch(signInSuccess(data));
              navigate('/');
              
             // console.log(data);
            } catch (error) {
              
              /*
              setLoading(false);
              setError(true);
              */
              dispatch(signInFailure(error));
              
            }
            
             
          };

  
  return (
    <div className='max-w-lg p-3 mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Sign In</h1>
      
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        
        <input
          type='email'
          placeholder='Email'
          id='email'
          className='p-3 rounded-lg bg-slate-100'
          onChange={handleChange}
         
        />
        <input
          type='password'
          placeholder='Password'
          id='password'
          className='p-3 rounded-lg bg-slate-100'
          onChange={handleChange}
         
        />
        
        <button disabled={loading} className ='p-3 text-white uppercase rounded-lg bg-slate-700 hover:opacity-95 disabled:opacity-80' >
          
              {loading ? 'Loading...' : 'Sign In'}
        </button>
        
        <OAuth />
        
      </form>
      <div className='flex gap-2 mt-5'>
        <p> Dont Have an account?</p>
        
        <Link to='/sign-up'>
          <span className='text-blue-500'>Sign in</span>
        </Link>
      </div>
      <p className='mt-5 text-red-700'>{ error ? error.message || 'Somethig went Wrong!' :''}</p>
    </div>
  )
}

export default Signin