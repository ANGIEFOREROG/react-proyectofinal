import { useEffect, useState } from "react";
import {
    collection,
    getDocs,
    getFirestore,
    query,
    where,
} from "firebase/firestore";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./CuadrosS.css";

    const Wait = () =>{
    
        return(
        <>
        <h2>Cargando</h2>
        </>
        )
    }
    

    function CuadrosS({ grettingS }) {
    const [products, setProducts] = useState([]);
    const [wait, setWaiting] = useState(true);

    const { cid } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const queryCollection = collection(db, "products");
        const queryFilter = cid
        ? query(queryCollection, where("category", "==", cid))
        : queryCollection;

        getDocs(queryFilter)
        .then((resp) =>
            setProducts(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
        )
        .catch((err) => console.log(err))
        .finally(() => setWaiting(false));
    }, [cid]);

    return (
        <div className="inicio">
        <div className="divcuadros"> <h1> Cuadros </h1></div>
        <h1 className="grettingS">{grettingS}</h1>
        <div className="row">
            <ItemList products={products} />
        </div>
        </div>
    )
}

export default CuadrosS;
