import React from 'react'
import './header.styles.css'


const Header = () => (
	<div>
		<nav class="navbar navbar-expand-sm bg-light justify-content-center">
			<ul class="navbar-nav">
				<li class="nav-item">
					<a class="nav-link customLink" href="/">
						<i class="fa fa-home customIcon" />
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link customLink" href="/nowplaying">
						NOW PLAYING
					</a>
				</li>
				<li class="nav-item">
					<a class='nav-link customLink' href="/upcoming">
						UPCOMING
					</a>
				</li>
				<li class="nav-item">
					<a class='nav-link customLink' href="/latest">
						LATEST
					</a>
				</li>
			</ul>
		</nav>
	</div>
);

export default Header