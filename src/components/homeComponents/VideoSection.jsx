import React from "react";
import "./VideoSection.css";

// contain embedded videos from youtube
const VideoSection = () => {
  const videoStlye = {
    width: "100%",
    height: "auto",
    margin: "30px",
    border: "none",
  };
  return (
    <>
      <div className="tips">
        <h1>STYLE AND BEAUTY TIPS FOR ALL FASHION LOVERS </h1>
      </div>
      <div className="embedded">
        <div>
          <iframe
            width="400"
            height="200"
            src={"https://www.youtube.com/embed/1IrJdm7A08s"}
            title="fashion tips"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <div>
          <iframe
            width="400"
            height="200"
            src="https://www.youtube.com/embed/Jht1Q-txROM"
            title="It’s Giving DETAILS🔥 Nigeria is unbeatable with Fashion😎 #africa  #africanfashion"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            width="400"
            height="200"
            src="https://www.youtube.com/embed/CUv2Df3Zcf8"
            title="HOW TO MAKE YOUR OUTFITS BETTER | elevate your daily style ✨"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <iframe
          width="400"
          height="200"
          src="https://www.youtube.com/embed/Aw2ZBEo2Bbo"
          title="amazing benefits of Vaseline beauty tips and tricks 🎀"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="400"
          height="200"
          src="https://www.youtube.com/embed/wRiADxooVx0"
          title="DIAMOND PLEAT GELE TUTORIAL ( DIY SERIES ) #diy #makeup #howto #geletutorial #turban #howtotiegele"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="400"
          height="200"
          src="https://www.youtube.com/embed/4zpHwUWixmA"
          title="100+ Ankara bags and shoes designs."
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
};

export default VideoSection;
