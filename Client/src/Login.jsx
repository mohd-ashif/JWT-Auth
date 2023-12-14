// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

  

//   return (
//     <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
//       <div className="bg-white p-3 rounded w-25">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               className="form-control rounded-0"
//               id="email"
//               placeholder="Enter Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               className="form-control rounded-0"
//               id="password"
//               placeholder="Enter Password"
//               autoComplete="current-password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <button
//             type="submit"
//             className="btn btn-success w-100 rounded-0"
//           >
//             Login
//           </button>
//           <p>Don't have an account?</p>
//           <Link to="/register">
//             <button className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Register</button>
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
