import { RetrieveDataController } from "./RetrieveDataController";
import { GenerateDataController } from "./GenerateDataController";

const retrieveDataController = new RetrieveDataController();
const generateDataController = new GenerateDataController();

export {
    generateDataController,
    retrieveDataController
}