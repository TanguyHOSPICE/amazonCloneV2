import Image from 'next/image';
import { MenuIcon, SearchIcon, ShoppingCartIcon, MagnifyingGlass } from '@heroicons/react/outline';

function Header() {
	return (
		<header>
			{/* Top Nav */}
			<div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
				{/* Logo */}
				<div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
					<Image src="https://links.papareact.com/f90" width={50} height={4} objectFit="contain" className="cursor-pointer" />
				</div>

				{/* Search */}
				<div className="bg-yellow-400 hover:bg-yellow-400 hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer">
					<input type="text" className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" />
					<SearchIcon className="h-12 p-4" />
				</div>

				{/* Right */}
			</div>

			{/* Bottom Nav */}
			<div></div>
		</header>
	);
}

export default Header;
