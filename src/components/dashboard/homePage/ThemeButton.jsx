import { useTheme } from 'next-themes';
import { BsMoonFill, BsSun } from 'react-icons/bs';


const ThemeButton = () => {

    const {resolvedTheme, setTheme} = useTheme()

    return (
        <button
         aria-label='Toggle Dark Mode'
         type='button'
         className='flex items-center justify-center rounded-lg p-2 transition-colors hover:text-orange-400'
         onClick={()=> setTheme(resolvedTheme === 'dark' ? 'light': 'dark' )}
        >
        {
            resolvedTheme === 'dark' ? (
                <BsSun className='h-4 w-4 text-orange-200'/>
                
            ) : (
                <BsMoonFill  className='h-4 w-4 text-slate-800'/>
            )
        }
        </button>
    );
};

export default ThemeButton;