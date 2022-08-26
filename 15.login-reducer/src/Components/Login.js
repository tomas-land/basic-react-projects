import React, { useState, useReducer } from "react";
import { login } from "../utils";

const loginReducer = (state, action) => {
  switch (action.type) {
    case "field": {
      return {
        ...state,
        [action.field]: action.value,
      };
    }
    case "login": {
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    }
    case "success": {
      return {
        ...state,
        isLoggedIn: true,
      };
    }
    case "error": {
      return {
        ...state,
        error: "Incorrect username or password!",
        isLoading: false,
        username: "",
        password: "",
      };
    }
    case "logout": {
      return {
        ...state,
        isLoggedIn: false,
      };
    }
    default:
      break;
  }
};
const initialState = {
  username: "",
  password: "",
  isLoading: false,
  error: "",
  isLoggedIn: false,
};
const Login = () => {
  const [state, dispatch] = useReducer(loginReducer, initialState);

  const { username, password, isLoading, error, isLoggedIn } = state;

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "login" });
    try {
      await login({ username, password });
      dispatch({ type: "success" });
    } catch (error) {
      dispatch({ type: "error" });
    }
  };
  return (
    <div className="App">
      <div className="login-container">
        {isLoggedIn ? (
          <>
            <h1>You Logged in!</h1>
            <button onClick={() => dispatch({ type: "logout" })}>
              Log out
            </button>
          </>
        ) : (
          <form className="form" onSubmit={onSubmit}>
            {error && <p className="error">{error}</p>}
            <p>Please Login!</p>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) =>
                dispatch({
                  type: "field",
                  field: "username",
                  value: e.currentTarget.value,
                })
              }
            />
            <input
              type="password"
              placeholder="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) =>
                dispatch({
                  type: "field",
                  field: "password",
                  value: e.currentTarget.value,
                })
              }
            />
            <button className="submit" type="submit" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Log in"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;

//NO REDUCER example ----------------------------------

// import React, { useState } from "react";
// import { login } from "../utils";

// export default function LoginPlain() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoading, setisLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [isLoggedIn, setisLoggedIn] = useState(false);

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     setisLoading(true);
//     setError("");
//     try {
//       await login({ username, password });
//       setisLoggedIn(true);
//       setUsername("");
//       setPassword("");
//       setError("");
//     } catch (error) {
//       setError("Incorrect username or password");
//     }
//     setisLoading(false);
//   };
//   return (
//     <div className="App">
//       <div className="login-container">
//         {isLoggedIn ? (
//           <>
//             <h1>You Logged in!</h1>
//             <button onClick={() => setisLoggedIn(false)}>Log out</button>
//           </>
//         ) : (
//           <form className="form" onSubmit={onSubmit}>
//             {error && <p className="error">{error}</p>}
//             <p>Please Login!</p>
//             <input
//               type="text"
//               placeholder="username"
//               value={username}
//               onChange={(e) => setUsername(e.currentTarget.value)}
//             />
//             <input
//               type="password"
//               placeholder="password"
//               autoComplete="new-password"
//               value={password}
//               onChange={(e) => setPassword(e.currentTarget.value)}
//             />
//             <button className="submit" type="submit" disabled={isLoading}>
//               {isLoading ? "Logging in..." : "Log in"}
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }
