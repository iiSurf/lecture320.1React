// import { useState } from 'react';
// import { useRef } from 'react';
// import './App.css'

// function App() {
//   const ref = useRef(0)
//   const [state, setState] = useState(0);

//   function handleClick() {
//     ref.current = ref.current + 1;
//   }
//   function setNewState() {
//     setState(ref.current);
//     // setState(state => state.ref)
//   }

//   console.log(ref);

//   return (
//     <>
//   <button onClick={handleClick}>Click Me</button>
//   <button onClick={setNewState}>Set New State</button>
//   <h1>Your state is: {state}</h1>
//   <h1>Your Ref is: {ref.current}</h1>
//     </>
//   )
// }

// export default App

// import { useRef } from "react";

// const Form = (props) => {
//   // useRef to get input values.
//   const nameInput = useRef(null);
//   const ageInput = useRef(null);

//   const handleSubmit = (event) => {
//     // Prevent page refresh on submission.
//     event.preventDefault();

//     // Do what you want with the form data.
//     console.log({
//       name: nameInput.current.value,
//       age: ageInput.current.value,
//     });
//   };

//   // The JSX for the form, binding the functions and ref to our inputs.
//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" ref={nameInput} placeholder="write name here" />
//       <input type="number" ref={ageInput} placeholder="write age here" />
//       <input type="submit" value="Submit Form" />
//     </form>
//   );
// };

// export default App;

import { useState, useRef } from "react";

// Add a ref to the video element, and call its play() and pause() methods within the button's handleClick() function.

const videoRef = useRef(null);

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);
    if (nextIsPlaying) { videoRef.current.play();
    } else { videoRef.current.pause();

    }
  }

  function handleToggle() {
    setIsPlaying(!isPlaying)
  }
  return (
    <>
      <button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button>
      <video ref = {videoRef} onPlay={()=> setIsPlaying(true)} onPause={() => setIsPlaying(false)} width="75%">
        <source src="stock.mov" type="video/mp4" />
      </video>
    </>
  );
}
