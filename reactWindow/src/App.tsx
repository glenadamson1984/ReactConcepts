import { generateRandomList } from "./utils/randomList";
import { List } from "react-window";
import { WordRow } from "./components/WordRow";

function App() {
  const randomWords = generateRandomList(1000);

  return (
    <>
      <List
        rowComponent={WordRow}
        rowCount={randomWords.length}
        rowHeight={40}
        rowProps={{ names: randomWords }}
      />
      <div>glen</div>
    </>
  );
}

export default App;
