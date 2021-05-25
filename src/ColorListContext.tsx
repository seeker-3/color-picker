import { createContext, useState, useContext, useMemo, FC } from "react";

type Color = string;
type Handler = (color: Color) => void;
type State = [Color[], { addColor: Handler; removeColor: Handler }];

const notImplemented: Handler = () => {
  throw new Error("not implemented");
};

const colorStorageKey = "colors";

const storedColors = localStorage.getItem(colorStorageKey);

const storeColors = (list: Color[]) => {
  localStorage.setItem(colorStorageKey, JSON.stringify(list));
};

const initialState: State = [
  storedColors ? JSON.parse(storedColors) : [],
  { addColor: notImplemented, removeColor: notImplemented },
];

const ColorListContext = createContext(initialState);

export const ColorListContextProvider: FC<{}> = ({ children }) => {
  const [list, setList] = useState<Color[]>(
    storedColors ? JSON.parse(storedColors) : []
  );

  const handlers = useMemo(() => {
    const addColor: Handler = (color) =>
      setList((list) => {
        if (list.includes(color)) return list;
        const newList = [...list, color];
        storeColors(newList);
        return newList;
      });

    const removeColor: Handler = (color) =>
      setList((list) => {
        if (!list.includes(color)) return list;

        const filteredList = list.filter((item) => item != color);
        storeColors(filteredList);
        return filteredList;
      });

    return {
      addColor,
      removeColor,
    };
  }, []);

  return (
    <ColorListContext.Provider value={[list, handlers]}>
      {children}
    </ColorListContext.Provider>
  );
};

export default function useColorList() {
  return useContext(ColorListContext);
}
