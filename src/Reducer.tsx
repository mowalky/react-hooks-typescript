import { useReducer } from "react";

const initialValue = {
  username: "",
  email: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "username":
      return { ...state, username: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "reset":
      return initialValue;
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <input
        type="text"
        value={state.username}
        onChange={(event) =>
          dispatch({ type: "username", payload: event.target.value })
        }
      />
      <input
        type="email"
        value={state.email}
        onChange={(event) =>
          dispatch({ type: "email", payload: event.target.value })
        }
      />
    </div>
  );
};

export default Form;
