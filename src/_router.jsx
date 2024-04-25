import {Router, Route} from 'preact-iso'
import { Home } from './pages/Home/index.jsx';
import { NotFound } from './pages/_404.jsx';
import {Blog} from './pages/Blog/index.jsx';

export function RootRouter() {
	return (
    <div>
				<Router>
					<Route path="/" component={Home} />
					<Route path="/blog" component={Blog} />
					<Route default component={NotFound} />
				</Router>
			</div>
	);
}