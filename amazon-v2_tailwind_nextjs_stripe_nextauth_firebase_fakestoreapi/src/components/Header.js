import Image from 'next/image';
import { MenuIcon, SearchIcon, ShoppingCartIcon, MagnifyingGlass, LocationMarkerIcon } from '@heroicons/react/outline';

function Header() {
	return (
		<header>
			{/* Top Nav */}
			<div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
				{/* Logo */}
				<div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
					<Image src="https://links.papareact.com/f90" width={50} height={4} objectFit="contain" className="cursor-pointer" />
				</div>

				{/* TODO: Locate */}
				<div className="text-white flex ">
					<LocationMarkerIcon width={20} height={20} objectFit="contain" />
					<div className="flex-col items-start text-xs space-x-6 mx-6 whitespace-nowrap">
						<p>Bonjour</p>
						<p>Entrez votre adresse</p>
					</div>
				</div>

				{/* Search */}
				<div className="bg-yellow-400 hover:bg-yellow-400 hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer">
					<input type="text" className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" />
					<SearchIcon className="h-12 p-4" />
				</div>

				{/* Right */}
				<div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
					<div className="link relative flex flex-col items-center">
						<p>Hello TOI</p>
						<p className="font-extrabold md:text-sm hidden md:inline mt-2">Compte et listes</p>
					</div>
					<div className="link relative flex flex-col items-center">
						<p>Retours</p>
						<p className="font-extrabold md:text-sm hidden md:inline mt-2">et commandes</p>
					</div>
					<div className="link relative flex  items-center">
						{/*TODO:  Shopping cart */}
						<ShoppingCartIcon className="h-10" />
						<p className="font-extrabold md:text-sm hidden md:inline mt-2">Basket</p>
					</div>
				</div>
			</div>

			{/* Bottom Nav */}
			<div></div>
		</header>
	);
}

export default Header;
