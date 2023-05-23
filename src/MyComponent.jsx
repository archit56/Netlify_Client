
import { useState } from 'react'
function MyComponent() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [image, setImage] = useState("");
	const handleOnSubmit = async (e) => {
		e.preventDefault();
		let result = await fetch(
			'https://render-server-ep07.onrender.com/register', {
			method: "post",
			body: JSON.stringify({ name, email, image}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		result = await result.json();
		console.warn(result);
		if (result) {
			alert("Data saved succesfully");
			setEmail("");
			setName("");
		}
	}
	return (
		<>
			<h1>This is React WebApp </h1>
			<form action="">
				<input type="text" placeholder="name"
					value={name} onChange={(e) => setName(e.target.value)} />
				<input type="email" placeholder="email"
					value={email} onChange={(e) => setEmail(e.target.value)} />
				<input type="text" placeholder="image url"
					value={image} onChange={(e) => setImage(e.target.value)} />
				<button type="submit"
					onClick={handleOnSubmit}>submit</button>
			</form>

		</>
	);
}

export default MyComponent;








//! ---------------------------------------------------------------------------------------------------------------------------------

// import React, { useState, useEffect } from 'react';

// function MyComponent() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('/api/data')
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data);
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   }, []);

//   return (
//     <div>
//       {data.map((item) => (
//         <div key={item.id}>{item.name}</div>
//       ))}
//     </div>
//   );
// }

// export default MyComponent;

