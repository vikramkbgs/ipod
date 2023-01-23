import React from "react";
// import Screen from "./Screen";
// import ZingTouch from "zingtouch";
// import sound from "./assets/music/Senorita.mp3";

class ipod extends React.Component {
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
    console.log(this.state);
  }

  render() {
    return (
      <div style={styles.ipodContainer}>
        
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
  }
};

export default ipod;
