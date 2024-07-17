// import { useEffect, useState } from "react";
// import Product from "../components/Product.jsx"
// import Spinner from "../components/Spinner";
// const Home = () => {
//   const API_URL = "https://fakestoreapi.com/products";
//   const [loading, setLoading] = useState(false)
// const [posts, setPosts] = useState([])
 
//    async function fetchProductData()
//    {
//      setLoading(true);
//      try {
//       const res = await fetch(API_URL)
//       const data = await res.json()
//       setPosts(data)
//      } catch (error) {
//       console.error("error in post retrvl.", error);
//       setPosts([])
//      }
//      setLoading(false)
//    }

//   useEffect( () => {
//     fetchProductData()
//   }, [])

//   return (
//     <div>
//      {
//       loading ? <Spinner /> :
//       posts.length > 0 ? 
//           (<div>
//             {
//               posts.map((post) =>
//               {
//                 <Product key={post.id} post={post}/>
//               })
//             }
//           </div>) :
//           <div>
//             <p>No data Found!</p>
//           </div>
//      }
//     </div>
//   );
// };

// export default Home;





// import { useEffect, useState } from "react";
// import Product from "../components/Product";
// import Spinner from "../components/Spinner";

// const Home = () => {
//   const API_URL = "https://fakestoreapi.com/products";
//   const [loading, setLoading] = useState(false);
//   const [posts, setPosts] = useState([]); // Corrected this line

//   async function fetchProductData() {
//     setLoading(true);
//     try {
//       const res = await fetch(API_URL);
//       const data = await res.json();
//       setPosts(data);
//     } catch (error) {
//       console.error("error in post retrieval.", error);
//       setPosts([]);
//     }
//     setLoading(false);
//   }

//   useEffect(() => {
//     fetchProductData();
//   }, []);

//   return (
//     <div>
//       {loading ? (
//         <Spinner />
//       ) : posts.length > 0 ? (
//         <div>
//           {posts.map((post) => (
//             <Product key={post.id} post={post} /> // Corrected this line
//           ))}
//         </div>
//       ) : (
//         <div>
//           <p>No data Found!</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;




import { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]); // Corrected this line

  async function fetchProductData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.error("Error in post retrieval.", error);
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div>
          {posts.map((post) => (
            <Product key={post.id} post={post} /> // Corrected this line
          ))}
        </div>
      ) : (
        <div>
          <p>No data Found!</p>
        </div>
      )}
    </div>
  );
};

export default Home;
