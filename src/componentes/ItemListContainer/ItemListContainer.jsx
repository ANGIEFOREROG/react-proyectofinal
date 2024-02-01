
import { useEffect, useState } from 'react'
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'

const Wait = () =>{
  
  return(
    <>
    <h2>Cargando</h2>
    </>
  )
}

function ItemListContainer({gretting}){

const [products, setProducts]= useState([])
const [wait, setWaiting]= useState(true)


const {cid}= useParams()


useEffect(() => {
  const db = getFirestore();
  const queryCollection = collection(db, 'products');
const queryFilter = cid ? query(queryCollection, where("category", "==", cid)): queryCollection
    
getDocs(queryFilter)
      .then(resp => setProducts(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
      .catch(err => console.log(err))
      .finally(() => setWaiting(false));
}, [cid]);

return ( <div className='inicio' >
            <h1 className="gretting">
                {gretting}
            </h1>
            <div className="row">
              { wait ?
              <Wait/>:
            
              <ItemList products= {products}/>
            
            }
            </div>
        </div>
  )
          }


export default ItemListContainer

