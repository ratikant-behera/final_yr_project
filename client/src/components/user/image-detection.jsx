
// import React, { useEffect, useRef, useState } from 'react';
// import * as cocoSsd from '@tensorflow-models/coco-ssd';
// import '@tensorflow/tfjs';

// const ImageDetection = () => {
//   const [model, setModel] = useState(null);
//   const [predictions, setPredictions] = useState([]);
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const loadModel = async () => {
//       const loadedModel = await cocoSsd.load();
//       setModel(loadedModel);
//       console.log('Model loaded');
//     };
//     loadModel();
//   }, []);

//   const handleFileUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     const img = new Image();
//     img.src = URL.createObjectURL(file);
//     img.onload = async () => {
//       const canvas = canvasRef.current;
//       const ctx = canvas.getContext('2d');

     
//       const maxWidth = 800;
//       const maxHeight = 800;
//       let width = img.width;
//       let height = img.height;
//       if (width > maxWidth) {
//         height *= maxWidth / width;
//         width = maxWidth;
//       }
//       if (height > maxHeight) {
//         width *= maxHeight / height;
//         height = maxHeight;
//       }
//       canvas.width = width;
//       canvas.height = height;
//       ctx.drawImage(img, 0, 0, width, height);

//       if (model) {
//         const preds = await model.detect(img);
//         setPredictions(preds);
//         preds.forEach(pred => {
//           const [x, y, w, h] = pred.bbox;
//           ctx.beginPath();
//           ctx.rect(x, y, w, h);
//           ctx.lineWidth = 2;
//           ctx.strokeStyle = '#10B981';
//           ctx.stroke();
//           ctx.fillStyle = '#10B981';
//           ctx.fillText(`${pred.class} (${Math.round(pred.score * 100)}%)`, x, y > 10 ? y - 5 : 10);
//         });
//       }
//     };
//   };

//   return (
//     <div className="p-4 bg-white shadow rounded">
//       <h2 className="text-xl font-semibold mb-4">Scrap Image Detection</h2>
//       <input
//         type="file"
//         accept="image/*"
//         onChange={handleFileUpload}
//         className="w-full p-2 border rounded"
//       />
//       <canvas ref={canvasRef} className="mt-4 border border-gray-300" />
//       {predictions.length > 0 && (
//         <div className="mt-4">
//           {predictions.map((pred, index) => (
//             <p key={index} className="text-gray-700">
//               {pred.class} - Confidence: {Math.round(pred.score * 100)}%
//             </p>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageDetection;






import React, { useEffect, useRef, useState } from 'react';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import '@tensorflow/tfjs';

const ImageDetection = ({ onEvaluationComplete }) => {
  const [model, setModel] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [showQuestions, setShowQuestions] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState('');
  const [answers, setAnswers] = useState(Array(5).fill("")); // storing answers locally
  const canvasRef = useRef(null);

  // Questions for each device
  const deviceQuestions = {
    refrigerator: [
      "1. What is the brand of the refrigerator?",
      "2. What is the approximate size (in liters)?",
      "3. Is it single door or double door?",
      "4. How old is the refrigerator?",
      "5. Is it in working condition?",
    ],
    car: [
      "1. What is the make (brand) of the car?",
      "2. What is the model and variant?",
      "3. What is the year of manufacture?",
      "4. What is the registration number and state?",
      "5. What is the odometer reading (km/miles driven)?",
      "6. What type of fuel does it use? (Petrol, Diesel, CNG, Electric, Hybrid)",
     
    ],
    
    
    tv: [
      "1. What is the brand of the TV?",
      "2. What is the screen size?",
      "3. Is it a smart TV?",
      "4. Does the TV have any issues with the screen?",
      "5. Is the remote control included?",
    ],
    laptop: [
      "1. What is the brand of the laptop?",
      "2. What is the processor type?",
      "3. What is the RAM size?",
      "4. Is the laptop in working condition?",
      "5. Does the laptop include accessories (e.g., charger)?",
    ],
    keyboard: [
      "1. What is the brand of the keyboard?",
      "2. What type of keyboard is it (e.g., mechanical, membrane)?",
      "3. Is it wireless or wired?",
      "4. What is the condition of the keys?",
      "5. Does it include any special keys (e.g., multimedia keys)?",
    ]
  };

  useEffect(() => {
    const loadModel = async () => {
      const loadedModel = await cocoSsd.load();
      setModel(loadedModel);
      console.log('Model loaded');
    };
    loadModel();
  }, []);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = async () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      const maxWidth = 800;
      const maxHeight = 800;
      let width = img.width;
      let height = img.height;
      if (width > maxWidth) {
        height *= maxWidth / width;
        width = maxWidth;
      }
      if (height > maxHeight) {
        width *= maxHeight / height;
        height = maxHeight;
      }
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);

      if (model) {
        const preds = await model.detect(img);
        setPredictions(preds);
        
        // Check for device type and show questions accordingly
        const deviceDetected = preds.find(pred =>
          Object.keys(deviceQuestions).includes(pred.class.toLowerCase())
        );
        
        if (deviceDetected) {
          setSelectedDevice(deviceDetected.class.toLowerCase());
          setShowQuestions(true);
        } else {
          setShowQuestions(false);
        }

        preds.forEach(pred => {
          const [x, y, w, h] = pred.bbox;
          ctx.beginPath();
          ctx.rect(x, y, w, h);
          ctx.lineWidth = 2;
          ctx.strokeStyle = '#10B981';
          ctx.stroke();
          ctx.fillStyle = '#10B981';
          ctx.fillText(
            `${pred.class} (${Math.round(pred.score * 100)}%)`,
            x,
            y > 10 ? y - 5 : 10
          );
        });
      }
    };
  };

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleEvaluationSubmit = () => {
    if (selectedDevice && deviceQuestions[selectedDevice]) {
      // Create an array of question-answer pairs
      const qna = deviceQuestions[selectedDevice].map((question, index) => ({
        question,
        answer: answers[index]
      }));
      const evaluation = {
        device: selectedDevice,
        qna
      };
      // Pass evaluation data to parent component
      onEvaluationComplete(evaluation);
      alert("Evaluation submitted!");
    }
  };

  return (
    <div className="p-4 bg-white shadow rounded max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Scrap Image Detection</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileUpload}
        className="w-full p-2 border rounded"
      />
      <canvas ref={canvasRef} className="mt-4 border border-gray-300" />

      {predictions.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-medium mb-2">Detected Objects:</h3>
          {predictions.map((pred, index) => (
            <p key={index} className="text-gray-700">
              {pred.class} - Confidence: {Math.round(pred.score * 100)}%
            </p>
          ))}
        </div>
      )}

      {showQuestions && selectedDevice && (
        <div className="mt-6 bg-gray-50 p-4 rounded shadow-inner">
          <h3 className="text-lg font-semibold mb-4 text-green-700">
            {selectedDevice.charAt(0).toUpperCase() + selectedDevice.slice(1)} Evaluation Questions
          </h3>
          {deviceQuestions[selectedDevice].map((question, index) => (
            <div key={index} className="mb-4">
              <label className="block text-gray-700 mb-1">{question}</label>
              <input
                type="text"
                value={answers[index]}
                onChange={(e) => handleAnswerChange(index, e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter your answer here"
              />
            </div>
          ))}
          <button 
            onClick={handleEvaluationSubmit}
            className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit Evaluation
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageDetection;

