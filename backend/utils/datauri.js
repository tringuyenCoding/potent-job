import DataUriParser from "datauri/parser.js";

import path from "path";

const getDataUri = (file) => {
  const dataUri = new DataUriParser();
  const extName = path.extname(file.originalname).toString();
  return dataUri.format(extName, file.buffer);
};

export default getDataUri;
