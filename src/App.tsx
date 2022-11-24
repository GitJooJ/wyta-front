import styles from './App.module.css'
import {InsertDriveFileOutlined} from "@mui/icons-material";

function App() {
  return (
    <div className={styles.appContainer}>
      <div className={styles.wytaContainer}>
        <h1>WYTA - What'ya talkin' about</h1>
        <p> Arraste aqui seu arquivo .txt</p>
        <div className={styles.icondiv}>
          <InsertDriveFileOutlined sx={{
            fontSize: 100,
          }}/>
        </div>
        <input type={"file"} className={styles.input} />
      </div>
    </div>
  )
}

export default App
