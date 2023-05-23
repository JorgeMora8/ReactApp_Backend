import { PORT } from "./src/Config/envVariables.js";
import InitializeServer from "./src/Server/Server.js";


await InitializeServer(PORT)