import './Footer.scss'

const Footer = () => {
	return (
		<div className="footer">
			<div className="top">
				<div className="item">
					<h1>Categories</h1>
					<span>Brakes</span>
					<span>Motor Oil</span>
					<span>Batteries</span>
					<span>Wiper Blades</span>
				</div>
				<div className="item">
					<h1>Links</h1>
					<span>FAQ</span>
					<span>Pages</span>
					<span>Locations</span>
					<span>Compare</span>
					<span>Cookies</span>
				</div>
				<div className="item">
					<h1>About</h1>
					<span>
						Et incidunt deserunt ut doloribus molestiae sed perspiciatis quia et Quis nesciunt. Cum commodi nulla qui voluptas doloremque rem velit voluptas hic totam sequi in voluptas
						molestias. In illum natus et minus cupiditate eos veniam numquam.
					</span>
				</div>
				<div className="item">
					<h1>Contact</h1>
					<span>
						Est eveniet accusantium aut nihil quia id iusto Quis aut accusamus dolorem et saepe perspiciatis. Et voluptatem rerum et ducimus tenetur est eaque aliquam. Ut dicta quis ab
						molestias eius At quia dolorum ut aliquam ipsa. Aut sunt sequi et magni aliquam ea iusto expedita sed omnis consequatur qui dolores nulla id tempora perspiciatis.
					</span>
				</div>
			</div>
			<div className="bottom">
				<div className="left">
					<span className="logo">MikesAutoParts</span>
					<span className="copyright">&copy; Copyright 2023. All Rights Reserved</span>
				</div>
				<div className="right">
					<img src="/assets/images/payment.png" alt="Payment options" />
				</div>
			</div>
		</div>
	)
}

export default Footer
