import {Router, Route} from 'preact-iso'

import { NotFound, BlogPage, HomePage, TodoPage } from './pages/_exporter.jsx';

export function RootRouter() {
	return (
    <div>
				<Router>
					<Route path="/" component={HomePage} />
					<Route path="/blog" component={BlogPage} />
					<Route path="/todo" component={TodoPage} />
					<Route default component={NotFound} />
				</Router>
			</div>
	);
}