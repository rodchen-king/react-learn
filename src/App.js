/*
 * @Description:
 * @Author: rodchen
 * @Date: 2021-10-22 10:01:27
 * @LastEditTime: 2022-03-12 15:25:25
 * @LastEditors: rodchen
 */
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useReducer,
  memo,
  useMemo,
} from "react";

function useDebounce(fn, delay) {
  const { current } = useRef({ fn, timer: null });
  useEffect(() => {
    current.fn = fn;
  }, []);

  return useCallback((...args) => {
    if (current.timer) {
      clearTimeout(current.timer);
    }

    current.timer = setTimeout(() => {
      current.fn.apply(this, args);
      current.timer = null;
    }, delay);
  }, []);
}

const Child = memo(({ userInfo }) => {
  console.log("child render");

  return <div>this is child</div>;
});

function App() {
  const [element, setElement] = useState(0);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    setCounter(counter + 1);
  }, [element]);

  return (
    <div>
      <div
        ref={(input) => {
          setElement(input);
        }}
      >
        {counter}
      </div>
    </div>
  );
}

export default App;
