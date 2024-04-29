import useStore from "@/store/store.js";
import { Link } from "react-router-dom";
import {Separator} from "@/components/ui/separator.jsx";
import drapeauFR from '@/assets/img/drapeau_fr.png'
import drapeauEN from '@/assets/img/drapeau_en.png'

const NavBar = () => {
    let {language, setLanguage} = useStore();
    const newLanguage = language === "en" ? "fr" : "en";

    return (
        <div className={`flex w-full h-full text-white font-bold gap-3 pt-10 py-3 px-6 bg-transparent backdrop-blur justify-end align-baseline  z-50`}>

            <a
                target={'_blank'}
                rel="noopener noreferrer"
                href={'https://github.com/Rayanworkout/Predicting-Drug-Consumption'}
                className=" my-auto rounded bg-[#333] px-6 py-3 shadow-md transition duration-150 ease-in-out
                 hover:shadow-2xl hover:bg-[#444] focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg cursor-pointer">
                <span className="[&>svg]:h-4 [&>svg]:w-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 496 512">
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                </svg>
            </span>
            </a>

            <span className={` flex gap-3 items-center font-bold`}>
                <p className={`flex items-center gap-x-1 cursor-pointer py-1 px-3 rounded hover:bg-neutral-50 hover:text-black ease-in-out duration-300`}
                   onClick={() => setLanguage(newLanguage)}>
                    {newLanguage == 'fr' ? <img src={drapeauFR} className={`h-[20px] rounded-md`}/> :
                        <img src={drapeauEN} className={`h-[20px] rounded-md`}/>}
                    {newLanguage.toUpperCase()}
                </p>
                <Separator orientation="vertical" className={``}/>
                <Link to="/"
                      className={`hover:bg-neutral-50 hover:text-black ease-in-out duration-300 h-fit py-1 px-3 rounded`}>
                    HOME
                </Link>
                <Separator orientation="vertical" className={``}/>
                <Link to="/statistics"
                      className={`hover:bg-neutral-50 hover:text-black ease-in-out duration-300 h-fit py-1 px-3 rounded`}>
                    DASHBOARD
                </Link>
            </span>
        </div>
    );
};

export default NavBar;