// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function Testpage() {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchCategories() {
//       try {
//         const response = await axios.get(
//           "https://api-mypal-com-5ifz.onrender.com/v1/categories/all",
//           {
//             headers: {
//               Authorization:
//                 "Bearer mypal_dev_ddf00b24fb1b875a5750f9613eddcb15b50137171dd5b422f3e3b12fb096a353",
//             },
//           }
//         );
//         setCategories(response.data); // store categories in state
//         setLoading(false);
//         console.log("Full response:", response);
//         console.log("resp.data:", response.data);
//       } catch (err) {
//         setError(err.response ? err.response.data : err.message);
//         setLoading(false);
//       }
//     }

//     fetchCategories();
//   }, []); 

//   if (loading) return <div>Loading categories...</div>;
//   if (error) return <div>Error: {JSON.stringify(error)}</div>;

//   return (
//     <div>
//       <h1>Categories</h1>
//       <ul>
//         {categories.map((cat) => (
//           <li key={cat.id}>{cat.name}</li> // adjust keys & fields based on actual API response
//         ))}
//       </ul>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Testpage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await axios.get(
          "https://api-mypal-com-5ifz.onrender.com/v1/categories/all",
          {
            headers: {
              Authorization:
                "mypal_dev_ddf00b24fb1b875a5750f9613eddcb15b50137171dd5b422f3e3b12fb096a353",
            },
          }
        );
        const respData = response.data;
        // If it’s nested:
        const catArray = respData.data ?? respData;
        setCategories(catArray);
      } catch (err) {
        setError(err.response ? err.response.data : err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  if (loading) return <div>Loading categories…</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map((cat) => {
          // adjust these keys based on what you saw in console or docs
          return (
            <li key={cat.id || cat.slug}>
              {cat.name} {cat.slug && `(${cat.slug})`}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

