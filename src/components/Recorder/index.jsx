import react from "react";
import './style.sass'

export default function Recorder(){

  async function gravar() {
		let stream = await navigator.mediaDevices.getDisplayMedia({
			video: true,
			audio: true
		});

		const mime = MediaRecorder.isTypeSupported('video/webm; codecs=vp9')
			? 'video/webm; codecs=vp9'
			: 'video/mpeg';
		let mediaRecorder = new MediaRecorder(stream, {
			mimeType: mime,
		});

		let chunks = [];
		mediaRecorder.addEventListener('dataavailable', function (e) {
			chunks.push(e.data);
		});

		mediaRecorder.addEventListener('stop', function () {
			let blob = new Blob(chunks, {
				type: chunks[0].type,
			});

			let video = document.querySelector('.video');
			video.src = URL.createObjectURL(blob);
			
		});

		mediaRecorder.start();
	}

  return (
		<div className="container-rec">
			<h1>Screen Recorder</h1>
			<video controls className='video' width="600"></video>
			<button onClick={() => gravar()}>Record</button>
		</div>
	);
}