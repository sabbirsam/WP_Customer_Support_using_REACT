import React, { useState}from 'react'
import Spinner from '../components/Spinner/Spinner';

const UseFullPageLoader = () => {
const [loader, setLoader] = useState(false)
  return [
    loader ? <Spinner/> : null,
    () => setLoader(true),
    () => setLoader(false),
  ]
}

export default UseFullPageLoader