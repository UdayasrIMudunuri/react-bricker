import React from 'react'

/** This is my first class based compoenent implementation.
 * Here we override the render() method to render our JSX.
 * 
 */
class SliderSection extends React.Component {

	render() {

		return (
			<section className="slider_section position-relative">
				<div className="slider_bg_box">
					<img alt="" src="images/slider-bg.jpg" />
				</div>
				<div className="slider_bg" />
				<div className="container">
					<div className="col-md-9 col-lg-8">
						<div className="detail-box">
							<h1>
								{this.props.keywords.mainKeyword}
								<br /> {this.props.keywords.subKeyword}
							</h1>
							<p>
								{ this.props.keywords.description }
							</p>
							<div>
								<a href="/" className="slider-link">
									Shop Now
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default SliderSection