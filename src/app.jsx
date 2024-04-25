import { LocationProvider} from 'preact-iso';
import {RootRouter} from './_router.jsx';
import { Layout } from './_layout.jsx';

const App = () => {
	return (
  	<LocationProvider>
			<Layout>
				<RootRouter />
			</Layout>
		</LocationProvider>
  )
}

export {App}