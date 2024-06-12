import React from 'react';
import Socials from './components/Socials'

const AppFooter = () => {
	return (
		<div className="container mx-auto">
			<div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
				{/* Footer social links */}
				<Socials />

				<div className="font-general-regular flex justify-center items-center text-center">
					<div className="text-lg text-ternary-dark dark:text-ternary-light">
						&copy; 2024
						<a
							href="https://github.com/WAbreu738"
							target="__blank"
							className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
						>
							Portfolio
						</a>
						.
						<a
							href="https://www.linkedin.com/in/wes-abreu/"
							target="__blank"
							className="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
						>
							WESLEY ABREU
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AppFooter;
