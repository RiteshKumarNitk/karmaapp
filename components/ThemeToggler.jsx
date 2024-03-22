'use Client';

import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

import ThemeChanger from "./DarkSwitch";

const ThemeToggler = () => {
    // const { setTheme } =useTheme()

    return (
        <div>
            {/* <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                {theme === 'light' ? <SunIcon /> : <MoonIcon />}
            </Button> */}
            <ThemeChanger />
          
        </div>
    );
}

export default ThemeToggler;
