import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { FilterByAll, FiltrebyDone, FiltrebyUnDone } from "../Redux/TodoSlice";

const Filtred = () => {
  const dispatch = useDispatch();
  return (
    <div className="aff">
      <Button
        className="btn"
        onClick={() => dispatch(FiltrebyDone())}
        variant="primary"
      >
        DONE
      </Button>
      <Button
        className="btn"
        onClick={() => dispatch(FilterByAll())}
        variant="danger"
      >
        ALL
      </Button>
      <Button
        className="btn"
        onClick={() => dispatch(FiltrebyUnDone())}
        variant="secondary"
      >
        UNDONE
      </Button>
    </div>
  );
};

export default Filtred;
