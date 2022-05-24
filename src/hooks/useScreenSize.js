import { useState, useEffect } from "react";


const useScreenSize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  // Pone un Eventlistener que lo que hará es que cada que se cambia el tamaño se la pantalla, llamará a la función handleResize.
  
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    // Esta función se deshace del addEvenListener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // La lista vacía hace que solo se ejecute una vez.
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  return width
};

export default useScreenSize;
