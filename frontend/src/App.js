import './App.css';
import { fetchAllProducts } from './lib/sanity/productServices';
import { useEffect, useState } from 'react'

import FrontPage from './pages/FrontPage';
import { Routes, Route } from 'react-router-dom';
function App() {

  /*let PROJECTID = '2kxd9hp8'
  //Hvordan finne ID: https://lms.webtricks.blog/kurs/uin/sanity-og-groq/sette-opp-sanity-for-et-react-prosjekt
  let DATASET = 'production'
  let QUERY = encodeURIComponent('*[_type == "products"]')
  let URL = `https://${PROJECTID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`

  fetch(URL)
    .then((results) => results.json())
    .then(({ result }) => { console.log(result) })*/

  const [prods, setProds] = useState(null)
  const getProducts = async () => {
    const data = await fetchAllProducts()
    setProds(data)
  }

  useEffect(() => {
    getProducts()
  }, [])
  console.log(prods)

  return (
    <>
      <Routes>
        <Route index element={<FrontPage products={prods} />} />
      </Routes>

    </>
  );
}

export default App;
