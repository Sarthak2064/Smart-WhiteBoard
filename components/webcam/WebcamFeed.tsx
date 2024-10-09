import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { FaVideo, FaVideoSlash } from 'react-icons/fa';

const WebcamFeed = () => {
  const webcamRef = useRef<Webcam>(null);
  const [isWebcamOn, setIsWebcamOn] = useState(true);
  const [lastFrame, setLastFrame] = useState<string | null>(null);

  const toggleWebcam = () => {
    if (isWebcamOn && webcamRef.current?.getScreenshot) {
      // Capture the last frame before turning the webcam off
      const imageSrc = webcamRef.current.getScreenshot();
      setLastFrame(imageSrc);
    }
    setIsWebcamOn((prevState) => !prevState);
  };

  return (
    <div className="fixed bottom-4 right-4 w-64 h-48 border border-gray-300 rounded-lg overflow-hidden">
      {isWebcamOn ? (
        <Webcam
          ref={webcamRef}
          className="w-full h-full object-cover"
          screenshotFormat="image/jpeg"
        />
      ) : (
        lastFrame && (
          <img
            src={lastFrame}
            alt="Last frame"
            className="w-full h-full object-cover filter blur-lg"
          />
        )
      )}

      <button
        onClick={toggleWebcam}
        className="absolute top-2 left-2 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600"
      >
        {isWebcamOn ? <FaVideo size={20} /> : <FaVideoSlash size={20} />}
      </button>
    </div>
  );
};

export default WebcamFeed;
