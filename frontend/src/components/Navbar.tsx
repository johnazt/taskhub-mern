const Navbar = () => {
	return (
		<div className='container'>
			<nav className='navbar'>
				<span>TaskHub</span>

				<ul className='navbar__menu'>
					<li className='navbar__item'>
						<button className='nav__btn dark__mode'>
							<span className='icon material-symbols-outlined'>dark_mode</span>
						</button>
					</li>
				</ul>

				<button className='nav__btn menu__bar'>
					<span className='icon menu_icon material-symbols-outlined'>menu</span>
				</button>
			</nav>
		</div>
	);
};
export default Navbar;
