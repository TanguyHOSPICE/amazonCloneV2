import Product from './Product';

function ProductFeed({ products }) {
	return (
		<div>
			<div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
				{products.slice(0, 4).map(({ id, title, price, description, category, image }) => (
					<Product key={id} id={id} price={price} title={title} description={description} category={category} image={image} />
				))}
			</div>
			<img src="https://links.papareact.com/dyz" alt="amazon product" className="md:col-span-full" />

			<div className="md:col-span-2">
				{products.slice(4, 5).map(({ id, title, price, description, category, image }) => (
					<Product key={id} id={id} price={price} title={title} description={description} category={category} image={image} />
				))}
			</div>

			<div className="md:col-span-4">
				{products.slice(5, products.length).map(({ id, title, price, description, category, image }) => (
					<Product key={id} id={id} price={price} title={title} description={description} category={category} image={image} />
				))}
			</div>
		</div>
	);
}
export default ProductFeed;
