import DatauriParser from "datauri/parser";

import path from "path";

const getDataUri = (file) => {
  const dataUri = new DatauriParser();
  const extName = path.extname(file.originalname).toString();
  return dataUri.format(extName, file.buffer);
};

export default getDataUri;
