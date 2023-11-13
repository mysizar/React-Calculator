export const ACTIONS = {
  CALC: "calc",
  RESET: "reset",
  DIGIT: "digit",
  ADD: "add",
  SUB: "sub",
  MULTIPLY: "multiply",
  DIV: "div",
  PERCENT: "percent",
  DECIMAL: "decimal",
  NEGATE: "negate",
};

export const countReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.CALC:
      return state.numOne && state.numTwo
        ? {
            // ...state,
            result: state.operator(),
            numOne: state.operator(),
            numTwo: "",
            operator: undefined,
          }
        : { ...state, result: "Error!" };
    case ACTIONS.RESET:
      console.log(state);
      return { numOne: "", numTwo: "", operator: undefined, result: "" };
    case ACTIONS.DIGIT:
      if (
        (action.value === "." && !state.numTwo && state.numOne.includes(".")) ||
        (action.value === "." && state.numTwo && state.numTwo.includes("."))
      ) {
        return state;
      }
      return state.numOne && state.operator
        ? {
            ...state,
            numTwo: state.numTwo + action.value,
            result: state.result + action.value,
          }
        : {
            ...state,
            numOne: state.numOne + action.value,
            result: state.numOne + action.value,
          };
    case ACTIONS.NEGATE:
      if (state.numOne && state.operator) {
        return state.numTwo.includes("-")
          ? {
              ...state,
              numTwo: state.numTwo.slice(1),
              result:
                state.result.slice(0, state.result.lastIndexOf(" ") + 1) +
                state.numTwo.slice(1),
            }
          : {
              ...state,
              numTwo: "-" + state.numTwo,
              result:
                state.result.slice(0, state.result.lastIndexOf(" ")) +
                " -" +
                state.numTwo,
            };
      } else {
        return state.numOne.includes("-")
          ? {
              ...state,
              numOne: state.numOne.slice(1),
              result: state.numOne.slice(1),
            }
          : {
              ...state,
              numOne: "-" + state.numOne,
              result: "-" + state.numOne,
            };
      }

    case ACTIONS.ADD:
      if (!state.numOne) return state;
      return (state.operator && !state.numTwo) || !state.operator
        ? {
            ...state,
            result: state.numOne + " + ",
            operator: function () {
              return parseFloat(this.numOne) + parseFloat(this.numTwo);
            },
          }
        : {
            // ...state,
            numOne: state.operator(),
            result: state.operator() + " + ",
            numTwo: "",
            operator: function () {
              return parseFloat(this.numOne) + parseFloat(this.numTwo);
            },
          };
    case ACTIONS.SUB:
      if (!state.numOne) return state;
      return (state.operator && !state.numTwo) || !state.operator
        ? {
            ...state,
            result: state.numOne + " - ",
            operator: function () {
              return parseFloat(this.numOne) - parseFloat(this.numTwo);
            },
          }
        : {
            // ...state,
            numOne: state.operator(),
            result: state.operator() + " - ",
            numTwo: "",
            operator: function () {
              return parseFloat(this.numOne) - parseFloat(this.numTwo);
            },
          };
    case ACTIONS.MULTIPLY:
      if (!state.numOne) return state;
      return (state.operator && !state.numTwo) || !state.operator
        ? {
            ...state,
            result: state.numOne + " × ",
            operator: function () {
              return parseFloat(this.numOne) * parseFloat(this.numTwo);
            },
          }
        : {
            // ...state,
            numOne: state.operator(),
            result: state.operator() + " × ",
            numTwo: "",
            operator: function () {
              return parseFloat(this.numOne) * parseFloat(this.numTwo);
            },
          };
    case ACTIONS.DIV:
      if (!state.numOne) return state;
      return (state.operator && !state.numTwo) || !state.operator
        ? {
            ...state,
            result: state.numOne + " / ",
            operator: function () {
              return parseFloat(this.numOne) / parseFloat(this.numTwo);
            },
          }
        : {
            // ...state,
            numOne: state.operator(),
            result: state.operator() + " / ",
            numTwo: "",
            operator: function () {
              return parseFloat(this.numOne) / parseFloat(this.numTwo);
            },
          };
    case ACTIONS.PERCENT:
      if (!state.numOne) return state;
      return (state.operator && !state.numTwo) || !state.operator
        ? {
            ...state,
            numOne: state.numOne / 100,
            result: state.numOne / 100,
          }
        : {
            ...state,
            numTwo: (state.numTwo / 100) * state.numOne,
            result:
              state.result.slice(0, state.result.lastIndexOf(" ") + 1) +
              (state.numTwo / 100) * state.numOne,
          };
    default:
      throw new Error(`Wrong Action.Type ${action.type}`);
  }
};
