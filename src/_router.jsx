import {Router, Route} from 'preact-iso'
import { Home } from './pages/index.jsx';
import { NotFound } from './pages/_404.jsx';
import {Blog} from './pages/blog.jsx';
import {TodoList} from './pages/todo.jsx'
export function RootRouter() {
	return (
    <div>
				<Router>
					<Route path="/" component={Home} />
					<Route path="/blog" component={Blog} />
					<Route path="/todo" component={TodoList} />
					<Route default component={NotFound} />
				</Router>
			</div>
	);
}