import './App.sass'
import Recorder from './components/Recorder'

function App() {
  return (
		<div className='App'>
			<Recorder />
			<div className='footer'>
				<p>
					created by goth
					<span>
						<a href='https://reactportifolio-gothmate.vercel.app/' target="_blank">Mate</a>
					</span>
				</p>
			</div>
		</div>
	);
}

export default App
