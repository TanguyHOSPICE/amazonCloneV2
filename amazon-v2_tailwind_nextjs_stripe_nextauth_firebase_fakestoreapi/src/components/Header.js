import Image from 'next/image';
import { MenuIcon, SearchIcon, ShoppingCartIcon, LocationMarkerIcon } from '@heroicons/react/outline';

function Header() {
	return (
		<header>
			{/* Top Nav */}
			<div className="flex items-center bg-amazon_blue p-1 flex-grow py-2 h-16">
				{/* Logo */}
				<div className="mt-1 flex items-center sm:flex-grow-1 arround">
					<Image src="https://links.papareact.com/f90" width={128} height={50} objectFit="contain" className="cursor-pointer" />
					<span className="text-xs text-white mb-2">.fr</span>
				</div>

				{/* Locate */}
				<div className="text-white flex text-xs sm:flex-grow-0 mx-3 arround">
					<div className="flex items-end">
						<LocationMarkerIcon width={20} height={20} objectFit="contain" />
					</div>

					<div className="flex-col whitespace-nowrap text-xs ">
						<p>Bonjour</p>
						<p className="font-bold">Entrez votre adresse</p>
					</div>
				</div>

				{/* Search */}
				{/* TODO: Toutes nos catégories dropdown */}
				<div className="bg-yellow-400 hover:bg-yellow-400 hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer mx-2">
					<input type="text" className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" />
					<SearchIcon className="h-12 p-4" />
				</div>

				{/* Right */}
				<div className="text-white flex items-center text-xs space-x-6 whitespace-nowrap">
					<div className="link relative flex flex-col arround">
						<p>Bonjour, Identifiez vous</p>
						<p className="font-bold md:text-sm  md:inline">Compte et listes</p>
					</div>

					<div className="link relative flex flex-col arround">
						<p>Retours</p>
						<p className="font-bold md:text-sm  md:inline">et commandes</p>
					</div>

					<div className="link relative flex  items-end arround">
						{/*TODO:  Shopping cart */}
						<ShoppingCartIcon className="h-8" />
						<p className="font-bold mr-1 md:text-sm  md:inline">Panier</p>
					</div>
				</div>
			</div>

			{/* Bottom Nav */}
			<div></div>
		</header>
	);
}

export default Header;
