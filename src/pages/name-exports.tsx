import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() =>
  import("./about").then((mod) => mod.About),
);

export default DynamicComponent;
