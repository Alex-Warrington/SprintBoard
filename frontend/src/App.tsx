import './App.css'
import { useState, useEffect } from 'react';

interface ApiResponse {
  message : string;
}

async function fetchData() : Promise<ApiResponse> {
  const response = await fetch('http://localhost:5264/');
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const data : ApiResponse = await response.json();
  
  return data;
}

function App() {
  const [data, setData] = useState<ApiResponse | undefined> (undefined);

  useEffect(() => {
      async function getData() {
        const response = await fetchData();
        setData(response)
      }
      getData();
    }, []);

  return (
  <>
  <div>
    <h1>Sprint Board</h1>
    <p>The backend says: </p>
    <p>{data?.message}</p>
  </div>
  </>
  );

}

export default App

