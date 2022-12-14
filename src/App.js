import { useState } from "react";
import "./styles.css";
import explorer from "./data/folderData";
import Folder from "./components/Folder";
import useTraverseTree from "./hooks/use-traverse-tree";

export default function App() {
  const [exploreData, setExploreData] = useState(explorer);
  console.log(exploreData);
  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(exploreData, folderId, item, isFolder);
    setExploreData(finalTree);
  };
  return (
    <div className="App">
      <Folder explorer={exploreData} handleInsertNode={handleInsertNode} />
    </div>
  );
}
