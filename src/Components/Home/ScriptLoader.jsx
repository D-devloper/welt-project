// import { useEffect } from "react";

// const ScriptLoader = ({ src }) => {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = src;
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, [src]);

//   return null;
// };

// export default ScriptLoader;

import { useEffect } from "react";

const ScriptLoader = ({ src }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // script has finished loading, execute code here
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [src]);

  return null;
};

export default ScriptLoader;

// import { useLayoutEffect } from "react";

// const ScriptLoader = ({ src }) => {
//   useLayoutEffect(() => {
//     const script = document.createElement("script");
//     script.src = src;
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, [src]);

//   return null;
// };

// export default ScriptLoader;
