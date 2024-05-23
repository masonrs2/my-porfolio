import { links } from '../constants/constants'

const Socials = () => {

  return (
    <div className="hidden md:flex flex-col top-[35%] left-0 fixed ">
        <ul>
            {links.map(({id, child, href, style, download}) => (
                <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px]` + " " + style}>
                <a href={href} 
                className="flex justify-between items-center w-full text-white"
                download={download}
                target="_blank"
                rel="noreferrer"
                >
                    {child}
                </a> 
            </li>
            ))}
            
        </ul>
    </div>
  )
}

export default Socials