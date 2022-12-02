import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Banner() {
	return (
		<div className="relative">
			<Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={5000}>
				<div>
					<img src="https://m.media-amazon.com/images/I/712ofmU4TFL._SX3000_.jpg" alt="Banner image" loading="lazy" />
				</div>
				<div>
					<img src="https://m.media-amazon.com/images/I/71sXVx3fDHL._SX3000_.jpg" alt="Banner image" loading="lazy" />
				</div>
				<div>
					<img src="https://m.media-amazon.com/images/I/618Cbpt94LL._SX3000_.jpg" alt="Banner image" loading="lazy" />
				</div>
				<div>
					<img src="https://m.media-amazon.com/images/I/71DcBT0CLIL._SX3000_.jpg" alt="Banner image" loading="lazy" />
				</div>
				<div>
					<img src="https://m.media-amazon.com/images/I/71R+gWGp7vL._SX3000_.jpg" alt="Banner image" loading="lazy" />
				</div>
			</Carousel>
		</div>
	);
}
export default Banner;
