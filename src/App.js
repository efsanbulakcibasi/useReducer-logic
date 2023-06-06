import { useReducer } from "react";
import "./App.css";

const initialValue = 0;

//state güncellemeler yapacağımız bize yeni değerler dönecek olan yer.
//action ise dispatch içindeki keywordlere göre aksiyonları aciton da tutup işlmleri buna göre yapıyoruz
const reducer = (state, action) => {
  switch (action) {
    case "inceremeny":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialValue;
    default:
  }
};

function App() {
  //var olan stateimiz yeni bir state olarak döndükten sonra count içinde tutulur
  //dispatch içindeki keyWordlere göre işlemleri yapıyoruz.
  const [count, dispathc] = useReducer(reducer, initialValue);
  return (
    <div className="App">
      <div className="count">{count}</div>
      <div className="buttons">
        <button
          onClick={() => {
            dispathc("inceremeny");
          }}
        >
          Arttır
        </button>
        <button
          onClick={() => {
            dispathc("decrement");
          }}
        >
          Azalt
        </button>
        <button
          onClick={() => {
            dispathc("reset");
          }}
        >
          Sıfırla
        </button>
      </div>
    </div>
  );
}

export default App;
