import "./form.css";
import Input from "./input";
import { useReducer } from "react";
import { ACTIONS, countReducer } from "./reducer";

export function Form() {
  const [state, dispatch] = useReducer(countReducer, {
    numOne: "",
    numTwo: "",
    operator: undefined,
    result: "",
  });

  return (
    <>
      <div className="display">{state.result}</div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch({ type: ACTIONS.CALC });
        }}
        className="form-container"
      >
        <Input
          clickHandler={() => dispatch({ type: ACTIONS.RESET })}
          className="ac"
          value="AC"
        />
        <Input
          clickHandler={() => dispatch({ type: ACTIONS.NEGATE })}
          className="aux"
          value="+/-"
        />
        <Input
          clickHandler={() => dispatch({ type: ACTIONS.PERCENT })}
          className="aux"
          value="%"
        />
        <Input
          clickHandler={() => dispatch({ type: ACTIONS.DIV })}
          className="operator"
          value="/"
        />
        <Input
          clickHandler={(e) =>
            dispatch({ type: ACTIONS.DIGIT, value: e.target.value })
          }
          className="digit"
          value="7"
        />
        <Input
          clickHandler={(e) =>
            dispatch({ type: ACTIONS.DIGIT, value: e.target.value })
          }
          className="digit"
          value="8"
        />
        <Input
          clickHandler={(e) =>
            dispatch({ type: ACTIONS.DIGIT, value: e.target.value })
          }
          className="digit"
          value="9"
        />
        <Input
          clickHandler={() => dispatch({ type: ACTIONS.MULTIPLY })}
          className="operator"
          value="×"
        />
        <Input
          clickHandler={(e) =>
            dispatch({ type: ACTIONS.DIGIT, value: e.target.value })
          }
          className="digit"
          value="4"
        />
        <Input
          clickHandler={(e) =>
            dispatch({ type: ACTIONS.DIGIT, value: e.target.value })
          }
          className="digit"
          value="5"
        />
        <Input
          clickHandler={(e) =>
            dispatch({ type: ACTIONS.DIGIT, value: e.target.value })
          }
          className="digit"
          value="6"
        />
        <Input
          clickHandler={() => dispatch({ type: ACTIONS.SUB })}
          className="operator"
          value="-"
        />
        <Input
          clickHandler={(e) =>
            dispatch({ type: ACTIONS.DIGIT, value: e.target.value })
          }
          className="digit"
          value="1"
        />
        <Input
          clickHandler={(e) =>
            dispatch({ type: ACTIONS.DIGIT, value: e.target.value })
          }
          className="digit"
          value="2"
        />
        <Input
          clickHandler={(e) =>
            dispatch({ type: ACTIONS.DIGIT, value: e.target.value })
          }
          className="digit"
          value="3"
        />
        <Input
          clickHandler={() => dispatch({ type: ACTIONS.ADD })}
          className="operator"
          value="+"
        />
        <Input
          clickHandler={(e) =>
            dispatch({ type: ACTIONS.DIGIT, value: e.target.value })
          }
          className="digit span"
          value="0"
        />
        <Input
          clickHandler={(e) =>
            dispatch({ type: ACTIONS.DIGIT, value: e.target.value })
          }
          className="digit"
          value="."
        />
        <Input className="operator" value="=" type="submit" />
      </form>
    </>
  );
}
