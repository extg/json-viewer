import render from "./render";
import ReactJson from "react-json-view";
import JsonViewer from "../components/JsonViewer";

const content = document.body.textContent || "";
try {
  const jsonData = JSON.parse(content.trim());
  console.log(window.document);

  console.log(jsonData);

  const getComponent = name =>
    ({
      devtools: JsonViewer,
      reactjson: ReactJson
    }[name]);

  chrome.storage.sync.get(({ variant, componentProps }) =>
    render(jsonData, { component: getComponent(variant), componentProps })
  );
} catch (e) {
  console.error("JSON parsing failed", e);
}
