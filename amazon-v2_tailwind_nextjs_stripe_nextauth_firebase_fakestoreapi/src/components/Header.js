import Image from 'next/image';
import { MenuIcon, SearchIcon, ShoppingCartIcon, LocationMarkerIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { signIn, signOut, useSession } from 'next-auth/react';

function Header() {
	const { data: session } = useSession();
	return (
		<header>
			{/* Top Nav */}
			<div className="flex items-center bg-amazon_blue p-1 flex-grow py-2 h-14">
				{/* Logo */}
				{/* TODO: Corriger le zoom du logo */}
				<div className="mt-1 flex items-center sm:flex-grow-1 arround">
					<Image src="https://links.papareact.com/f90" width={80} height={50} className="cursor-pointer object-contain" />
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
				{/* TODO: Toutes nos catégories dropdown & rounded & hover*/}
				<div className="bg-yellow-400 hover:bg-yellow-400 hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer mx-2">
					<div className="bg-gray-200 h-10 text-xs flex items-center ">
						<p className="flex items-center  ml-2 hover:bg-gray-500 text-black h-10">
							Toutes nos catégories
							<ChevronDownIcon className="h-12 w-5" />
						</p>
					</div>
					<input type="text" className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4 max-w-4xl min-w-fit" />
					<SearchIcon className="h-12 p-4" />
				</div>

				{/* Right */}
				<div className="text-white flex items-center text-xs space-x-6 whitespace-nowrap max-w-sm">
					<div onClick={!signIn ? signIn : signOut} className="link relative flex flex-col arround">
						<p className="hover:underline">{session ? `Bonjour, ${session.user.name}` : 'Identifiez vous'}</p>
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
						<span className="absolute top-0 md:right-11 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">0</span>
					</div>
				</div>
			</div>

			{/* Bottom Nav */}
			<div className="flex items-center bg-amazon_blue-light text-white text-xs text-center space-x-3 p-2 pl-6">
				<p className="link flex items-center arround">
					<MenuIcon height={20} />
					Toutes
				</p>
				<p className="h-6 mr-1 link hidden lg:inline-flex pt-1 arround">Meilleures ventes</p>
				<p className="h-6 mr-1 link hidden lg:inline-flex pt-1 arround">Ventes Flash</p>
				<p className="h-6 mr-1 link hidden lg:inline-flex pt-1 arround">Amazon Basics</p>
				<p className="h-6 mr-1 link hidden lg:inline-flex pt-1 arround">Dernières Nouveautés</p>
				{/* TODO: Dropdown Prime */}
				<p className="h-6 mr-1 link hidden lg:inline-flex pt-1 arround">
					Prime
					<ChevronDownIcon />
				</p>
				<p className="h-6 mr-1 link hidden lg:inline-flex pt-1 arround">Musique</p>
				<p className="h-6 mr-1 link hidden lg:inline-flex pt-1 arround">Service Client</p>
				<p className="h-6 mr-1 link hidden lg:inline-flex pt-1 arround">Livres</p>
				<p className="h-6 mr-1 link hidden lg:inline-flex pt-1 arround">Ebooks Kindle</p>
				<p className="h-6 mr-1 link hidden lg:inline-flex pt-1 arround">Idées cadeaux</p>
				<p className="h-6 mr-1 link hidden lg:inline-flex pt-1 arround">High-Tech</p>
				<p className="h-6 mr-1 link hidden lg:inline-flex pt-1 arround">Audible</p>
				<p className="h-6 mr-1 link hidden lg:inline-flex pt-1 arround">Cuisine et Maison</p>
				<p className="h-6 mr-1 link hidden lg:inline-flex pt-1 arround">Informatique</p>
			</div>
		</header>
	);
}

export default Header;
