import './home.css';
import {Item, Box} from '../../components/base/_BaseExporter';
function Home() {
	return (
		<div class="home">
			<Box 
			 id={1}
			 height={100}
			 width={100}
			 color={"red"}
			 props={undefined}>
			</Box>
		</div>
	);
}

export {Home};