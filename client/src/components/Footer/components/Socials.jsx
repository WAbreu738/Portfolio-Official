import {
    FaGithub,
    FaLinkedin,
} from 'react-icons/fa';

const socialLinks = [
    {
        id: 1,
        icon: <FaGithub />,
        url: 'https://github.com/WAbreu738',
    },
    {
        id: 2,
        icon: <FaLinkedin />,
        url: 'https://www.linkedin.com/in/wes-abreu/',
    },
];



const Socials = () => {
    return (
        <div className="font-general-regular text-white flex flex-col justify-center items-center mb-8 sm:mb-20">
            <p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5">
                Follow me
            </p>
            <ul className="flex gap-4 sm:gap-8">
                {socialLinks.map((link) => (
                    <a
                        href={link.url}
                        target="__blank"
                        key={link.id}
                        className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
                    >
                        <i className="text-xl sm:text-2xl md:text-3xl">
                            {link.icon}
                        </i>
                    </a>
                ))}
            </ul>
        </div>
    );
};

export default Socials;