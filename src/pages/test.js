import { useEffect,useState, React } from "react";
import axios from "axios";

export default function Test() {
  const [res, setRes] = useState('')
 useEffect(() => {
   setRes("loading")
    axios.get('http://climax.com/api/view')
    .then((r) => {
      setRes(
      
      )
    })
 }, [])
  return (
    <ul>
      {res}
    </ul>
  )
}
