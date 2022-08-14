
import './App.css';
import React, { useRef, useState, useEffect } from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import Starter from './Components/Starter';


function App() {
  const vidRef = useRef(null);
  const [play, setPlay] = useState(false)
  const [mute, setMute] = useState(true);
  const [displayer, setDisplayer] = useState("block")
  const [timer, setTimer] = useState(null)
  const [width, setWidth] = useState(0)
  const [display, setDisplay] = useState("none")
  const [loading, setLoading] = useState(true)
  // useEffect(() => {
  //   // setTimer(vidRef.current.currentTime)

  //   getTimer();
  // }, [width])
  const getTimer = async () => {
    var tim = await vidRef.current.currentTime / vidRef.current.duration;
    // console.log(timer)
    setWidth(tim * 100)
    console.log(tim * 100)

  }
  const handlePlayVideo = () => {
    if (play === true) {
      vidRef.current.pause();
      setDisplayer("block")
      setPlay(false);
      getTimer();
    }
    else {
      vidRef.current.play();
      setDisplayer("none")
      setPlay(true)
      setMute(false);
      getTimer();
    }

  }

  const handleFullScrin = () => {
    vidRef.current.requestFullscreen();
  }
  useEffect(() => {
    // setTimeout(setLoading(false), 5000)
    vidRef.current.play();
    // console.log(vidRef.current.duration,vidRef.current.readyState)
    // console.log(vidRef.currentTime)
    getTimer();
    // setTimer(vidRef.current.currentTime)

  }, [])


  // getTimer();

  // console.log(vidRef.current)

  return (
    <div className="App">

      <div style={{ height: "100vh", width: "50%" }}>
        <div className="playBtn" style={{ display: displayer }}
        //  onClick={handlePlayVideo}
        >
          <PlayArrowIcon style={{ fontSize: '50px', marginTop: '15px' }} />
        </div>
        <div className="ProgressBar">
          <div style={{ width: `${width}%` }}></div>
        </div>
        <div className="controler">
          <div className="cc fullScrinBtn">CC</div>
          <div className="speed fullScrinBtn">
            1X
          </div>
          <div className="fullScrinBtn"
            onClick={handleFullScrin}
          >
            <FullscreenIcon style={{ fontSize: "30px" }} />
          </div>


        </div>
        <video onClick={handlePlayVideo} ref={vidRef} className="videotag" autoplay={true} muted={mute}>
          <source src="https://media.videoask.com/transcoded/dabd0292-cf99-40ba-a12a-245a279b31dc/video.mp4?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJtZWRpYV9pZCI6ImRhYmQwMjkyLWNmOTktNDBiYS1hMTJhLTI0NWEyNzliMzFkYyIsImV4cCI6MTY2MDc5NjY3NH0.S_Bm6Vq9hZh77Pc6w1H3Un34ssKyg0eAdv-WY7WQ0xjuFknDrJKsU_5bc2Aq3DXuTquLlbc1FJHpSQXCN3NrKiLJK5LHwh3K4b4yzEQo_gLW9KjgNzrJ-iQaLScJ-s5vQ9Qa1291QVIWHw9zHvLN1KXIPgXLCuvE5EVimgt7AnGbXFf6kHuSPB1Y5U220_L2xxleCp1PuxaK46ny7jOkwrM5TtXoEmbT-oXbZofDf87brEu3fBeBnVXQAoMF3aUJ6HDialXidFEepwEcqo-0ZwyGDM9UWHBfWgxEzOsL69r9Uk4H9dB89D1hBHyLjWgGmXLf3ho3H_flySg9zTDNd42d50jwumZiu17CvjE-txXto9pGaUweTr5IbogfvYyITHqiO5bZqPCeGLfCI0UBJNR8d4dgYPCEo2QpwxBmr_kragiQPzixTqHVmOMPxZiZEgNXG3UviyujN_dy4AWvMC2AlljnUVT1sm09Q-yp_L6Vljyjoc5WWTivSM-bOxoH9jJINauCaxyRlw2RbBRUy6pKtnt2iQu_cXiDKrNQcFGxaerYbPko5zGjQ5hMYVtzKVGSuotTnsEjLSYBzf7tGuVYHDXipclwq2EmkYCVQnjCSpGrXCaCkyFMjWiGUVXPjXVZzgguD0pRCZQ03N0KS0HY5GrJigR5Rsec2TQ_mRc" type="video/mp4" />

        </video>

      </div>
      {/* <button onClick={handlePlayVideo}>Play</button> */}

      <div className="Container">

        <div className="Btn-container">
          <div><p>A</p></div>
          <h3>Campaign structure</h3>
        </div>
        <div className="Btn-container">
          <div><p>B</p></div>
          <h3>Learn Facebook basics</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
