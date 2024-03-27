// import React from 'react'


const Header = () => {
  return (
    <header class="main-header header-style-two alternate">
		
		{/* <!-- Header Lower --> */}
		<div class="header-lower">
			<div class="auto-container">
				<div class="inner-container">
					<div class="d-flex align-items-center justify-content-between flex-wrap">
						
						<div class="nav-outer d-flex align-items-center flex-wrap">
							<div class="logo-box">
								<div class="logo"><a href="#"><img src="images/logo.svg" alt="" title="" /></a></div>
							</div>
							{/* <!-- Main Menu --> */}
							<nav class="main-menu navbar-expand-md">
								<div class="navbar-header">
									{/* <!-- Toggle Button -->    	 */}
									<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
										<span class="icon-bar"></span>
										<span class="icon-bar"></span>
										<span class="icon-bar"></span>
									</button>
								</div>
								
								<div class="navbar-collapse collapse clearfix" id="navbarSupportedContent">
									<ul class="navigation clearfix">
										<li class="dropdown"><a href="#">Home</a>
											<ul>
												<li><a href="index.html">HomePage 01</a></li>
												<li><a href="index-2.html">HomePage 02</a></li>
												<li><a href="index-3.html">HomePage 03</a></li>
												<li class="dropdown"><a href="#">Header Style</a>
													<ul>
														<li><a href="index.html">Header 01</a></li>
														<li><a href="index-2.html">Header 02</a></li>
														<li><a href="index-3.html">Header 03</a></li>
													</ul>
												</li>
											</ul>
										</li>
										<li><a href="about.html">About</a></li>
										<li class="dropdown"><a href="#">Pages</a>
											<ul>
												<li><a href="faq.html">Faq</a></li>
												<li><a href="pricing.html">Price</a></li>
												<li><a href="testimonial.html">Testimonial</a></li>
												<li><a href="login.html">Login</a></li>
												<li><a href="register.html">Register</a></li>
												<li><a href="reset.html">Forgot password</a></li>
												<li class="dropdown"><a href="#">Team</a>
													<ul>
														<li><a href="team.html">Team</a></li>
														<li><a href="team-detail.html">Team detail</a></li>
													</ul>
												</li>
											</ul>
										</li>
										<li class="dropdown"><a href="#">Services</a>
											<ul>
												<li><a href="services.html">Services</a></li>
												<li><a href="service-detail.html">Services detail</a></li>
											</ul>
										</li>
										<li class="dropdown"><a href="#">Blog</a>
											<ul>
												<li><a href="blog.html">Blog grid</a></li>
												<li><a href="blog-classic.html">Blog classic</a></li>
												<li><a href="news-detail.html">Blog detail</a></li>
												<li><a href="not-found.html">Not found</a></li>
											</ul>
										</li>
										<li><a href="contact.html">Contact</a></li>
									</ul>
								</div>
							</nav>
						</div>

						{/* <!-- Main Menu End--> */}
						<div class="outer-box d-flex align-items-center flex-wrap">


							{/* <!-- Button Box --> */}
							<div class="main-header_buttons">
								<a href="#" class="template-btn btn-style-two">
									<span class="btn-wrap">
										<span class="text-one">Add stocks now</span>
										<span class="text-two">Add stocks now</span>
									</span>
								</a>
							</div>

							{/* <!-- Mobile Navigation Toggler --> */}
							<div class="mobile-nav-toggler">
								<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
							</div>

						</div>

					</div>
				</div>
			</div>
		</div>
		{/* <!--End Header Lower--> */}
		
		{/* <!-- Mobile Menu  --> */}
		<div class="mobile-menu">
			<div class="menu-backdrop"></div>
			<div class="close-btn"><span class="icon fa-solid fa-xmark fa-fw"></span></div>
			
			<nav class="menu-box">
				<div class="nav-logo"><a href="#"><img src="images/mobile-logo.svg" alt="" title="" /></a></div>
				<div class="menu-outer"></div>
			</nav>
		</div>
		{/* <!-- End Mobile Menu --> */}
	
	</header>
  )
}

export default Header