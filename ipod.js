import React from "react";
// import Screen from "./Screen";
// import ZingTouch from "zingtouch";
// import sound from "./assets/music/Senorita.mp3";

class Ipod extends React.Component {
  constructor() {
    super();
    this.state = {
      activeItem: "NowPlaying",
      activePage: "Home",
      enter: 0,
      play: true,
    };
  }


  componentDidMount() {
    let audio = document.getElementsByClassName("audio-element")[0];
    console.log(audio);
    this.setState({
      audio: audio,
    });
    console.log(this.state);
  }

  render() {
    return (
      <div style={styles.ipodContainer}>
        <div
          id="inner-container"
          style={styles.wheel}
          onMouseOver={this.rotateWheel}
        >
        </div>
      </div>
    );
  }
}

const styles = {
  ipodContainer: {
    height: "33rem",
    width: "20rem",
    backgroundImage: "radial-gradient(#adb1b5, #4d4f50)",
    margin: "4rem auto",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    borderRadius: "24px",
  },
  wheel: {
    width: "75%",
    height: "40%",
    margin: "1rem auto",
    backgroundColor: "#4b4e52",
    borderRadius: "50%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  buttonContainer: {
    width: "85%",
    height: "30%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  menuButton: {
    alignSelf: "center",
  },
  playButton: {
    alignSelf: "center",
  },
  middleButtons: {
    alignSelf: "center",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    alignSelf: "center",
    fontSize: "1.5rem",
    color: "white",
  },
};

export default Ipod;
