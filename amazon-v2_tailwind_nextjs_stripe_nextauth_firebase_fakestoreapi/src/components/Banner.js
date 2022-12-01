import { Carousel } from 'react-responsive-carousel';

function Banner() {
	return (
		<div className="relative">
			<Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={5000}>
				<div>
					<img src="https://links.papareact.com/gi" alt="Banner image" loading="lazy" />
				</div>
				<div>
					<img src="https://links.papareact.com/gi" alt="Banner image" loading="lazy" />
				</div>
				<div>
					<img src="https://links.papareact.com/gi" alt="Banner image" loading="lazy" />
				</div>
			</Carousel>
		</div>
	);
}
export default Banner;
