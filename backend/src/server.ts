import ServerConfig from "./configuration/ServerConfig";
import PackRoutes from "./routes/PackRoutes";
import CardRoutes from "./routes/CardRoutes";

// Configure Server
const server = new ServerConfig();

server.app.listen(server.port, () => {
    console.log(`Vocabularium server (v1.0) is listening on port ${server.port}.`);
})

// Configure Routes
const packRoutes: PackRoutes = new PackRoutes(server.app);
const cardRoutes: CardRoutes = new CardRoutes(server.app);