// import React, { useRef, useEffect, useState } from 'react';
// import Webcam from 'react-webcam';
// import * as handpose from '@tensorflow-models/handpose';
// import * as tf from '@tensorflow/tfjs';
//
// const WebcamFeed = () => {A
//   const webcamRef = useRef(null);
//   const [model, setModel] = useState(null);
//
//   useEffect(() => {
//     // Load the TensorFlow handpose model
//     const loadModel = async () => {
//       const loadedModel = await handpose.load();
//       setModel(loadedModel);
//     };
//     loadModel();
//   }, []);
//
//   const detectHand = async () => {
//     if (webcamRef.current && model) {
//       const video = webcamRef.current.video;
//       const predictions = await model.estimateHands(video);
//
//       if (predictions.length > 0) {
//         console.log(predictions); // Here you can add gesture recognition logic
//       }
//     }
//   };
//
//   useEffect(() => {
//     // Start detecting hands every 100ms
//     const interval = setInterval(detectHand, 100);
//     return () => clearInterval(interval);
//   }, [model]);
//
//   return (
//     <div className="fixed bottom-4 right-4 w-64 h-48 border border-gray-300 rounded-lg">
//       <Webcam ref={webcamRef} className="w-full h-full" />
//     </div>
//   );
// };
//
// export default WebcamFeed;
