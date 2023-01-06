/* YAPILMASI GEREKEN ANA UNSURLAR 
   1) Input'a girilen değeri state'le yaka
   2) Yakaladığın değeri ekleyebileceğin bir dizi oluştur(yine state'le)
   3) Button'a tıkladığında dizinin ilk öğesi ul'ye li olarak eklensin
   4) Her bir öğe için yeni bir li oluştur (.map())  */
import React, { useState } from "react"
function App() {
  const [inputValue, setInputValue] = useState("")
  const [items, setItems] = useState([])

  //Input'a girilen değeri onChange'le yakalıyorum ve inputValue state'ine eşitliyorum
  function handleChange(e) {
    setInputValue(e.target.value)
  }

  // Input'a değer girilip submit edildiğinde, input'u "items" adında oluşturduğum diziye ekliyorum (spread operator sayesinde her yeni item(to do) eklediğinde eskilerin dizide durmasını sağlıyorum)
  function addItem(e) {
    e.preventDefault()
    setItems((prevValue) => {
      return [...prevValue, inputValue]
    })
    // form gönderildikten sonra input'u sıfırlıyorum
    setInputValue("")
  }

  // clear button'ına tıklandığında items dizisinin tamamını temizliyorum
  function clearItem() {
    setItems([])
  }

  // fontawesome'dan eklediğim "x" mark'ına tıklandığında mevcut "x"'in parent elementini yani <li> elementinin display'ınına none'a ayarlıyorum
  /*.remove() kullanmamamın sebebi , kullandığım zaman ve ul boşken (önce <li> yani to do ekleyip sonra "x" mark'tan tıklayıp sildiğim zaman eğer clear button'ına basarsam)
   console'da hatayla karşılaşıyorum */
  function deleteItem(e) {
    e.target.parentElement.style.display = "none"
    /* e.target.parentElement.remove() */
  }

  return (
    <div className="container-fluid all-to-do">
      <div className="todophone">
        <p>9 : 41</p>
        <span>
          <i className="fa-solid fa-signal"></i>
          <i className="fa-solid fa-wifi"></i>
          <i className="fa-solid fa-battery-full"></i>
        </span>
        <div className="container todo">
          <h1 id="to-do-h1">TO DO LIST</h1>
          <form onSubmit={addItem}>
            <input
              id="to-do-input"
              type="text"
              maxLength="24"
              onChange={handleChange}
              value={inputValue}
            />
            <button id="sendButton" type="submit">
              Send
            </button>
            <button id="clearButton" type="button" onClick={clearItem}>
              Clear
            </button>
            <ul>
              {/* her seferinde farklı bir key oluşturabilmek için index kullanıyorum */}
              {items.map((item, index) => (
                <li key={index}>
                  {item}
                  <i
                    className="fa-solid fa-xmark delete-symbol"
                    onClick={deleteItem}
                  ></i>
                </li>
              ))}
            </ul>
          </form>
        </div>

        <div id="to-do-swipe"></div>
      </div>
    </div>
  )
}

export default App
