import React, { useState } from "react";
import Webcam from "react-webcam";
import { Button } from "react-bootstrap";
const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "environment",
};

const videoConstraints_twi = {
  width: 1280,
  height: 720,
  facingMode: {
    exact: "environment",
  },
};

const WebComeT = () => {
  const [imgSr, setImgSrc] = useState([{ src: "" }]);
  return (
    <div className="p-3 container">
      <p>WEBCOME SECTION</p>

      <section
        className="mt-3"
        style={{
          height: "200px",
        }}
      >
        <Webcam
          // audio={true}
          height={200}
          width={200}
          mirrored={true}
          videoConstraints={videoConstraints}
          screenshotFormat="image/jpeg"
        >
          {({ getScreenshot }) => {
            return (
              <Button
                variant="primary"
                onClick={() => {
                  const imgSrc = getScreenshot();
                  setImgSrc([
                    ...imgSr,
                    {
                      src: imgSrc,
                    },
                  ]);
                }}
              >
                capture photo
              </Button>
            );
          }}
        </Webcam>

        <section className="mt-3">
          {imgSr.length > 0 && (
            <section className="border p-3 justify-content-center row gap-2 bg">
              {imgSr.map((im, index) => (
                 <section key={index} className="col-lg-3 ">
                   <img  src={im.src} alt="Image of student" />
                  </section>
              ))}
            </section>
          )}
        </section>
      </section>
    </div>
  );
};

export default WebComeT;
