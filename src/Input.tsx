import { InsertDriveFileOutlined } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import styles from './Input.module.css';
import { ResultContext, ResultContextType } from "./ResultProvider";

function App() {
  const resultContext = useContext(ResultContext) as ResultContextType;
  const { loading, results } = resultContext.state;
  useEffect(() => {
     resultContext.setResults(null);
  }, []);
  const handleFileUpload = async (file: File) => {
    resultContext.setResults(null);
    resultContext.setLoading(true);
    // Fetch and set a multipart/form-data request
    const formData = new FormData();
    formData.append("files", file);
    const result  = await fetch("http://localhost:8000/report", {
      method: "POST",
      body: formData,
    });
    // get response
    const response = await result.json();
    console.log(response);
    resultContext.setResults(response);
    resultContext.setLoading(false);
  };


  return (
    <div className={styles.appContainer}>
      {results && <Navigate to="/results" />}
      <div className={loading? styles.loading : styles.hidden}>
        <CircularProgress />
      </div>
      <div className={`${loading ? styles.wytaContainerLoading : styles.wytaContainer}`}>
        <h1>WYTA - What'ya talkin' about</h1>
        <p> Arraste aqui seu arquivo .txt</p>
        <div className={styles.icondiv}>
          <InsertDriveFileOutlined sx={{
            fontSize: 100,
          }}/>
        </div>
        <input
          type={"file"}
          className={styles.input}
          onChange={(e) => {
            if(e.target.files && e.target.files[0]) {
              const file = e.target.files[0];
              handleFileUpload(file);
            }
          }}
        />
      </div>
    </div>
  )
}

export default App
