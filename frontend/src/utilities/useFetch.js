import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export default function useFetch(url, params) {
  const [state, setState] = useState({ data: null, isLoading: true });
  const isRendered = useRef(true); // just like a regular variable
  
  useEffect(() => {
    return () => {
      // set isRendered to false when going to unmount
      isRendered.current = false;
    }
  }, []);

  useEffect(() => {
    axios
      .get(url, { params })
      .then((res) => {
        // only updates the state when the component is rendered
        // if it got unmounted/not rendered anymore, then nothing happens
        if (isRendered.current)
          setState({ data: res.data, isLoading: false });
      })
      .catch((err) => err);
  }, [url, params]);
  
  return state;
}
