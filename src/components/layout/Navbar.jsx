import { useLocation } from 'preact-iso';

export function Header() {
	const { url } = useLocation();
 
	return (
		<header>
			<nav>
				<a href="/" class={url == '/' && 'active'}>
				  <h3>Home</h3>
				</a>
				<a href="/blog" class={url == "/" && 'active'}>
					<h3>Blog</h3>
				</a>
			</nav>
		</header>
	);
}
