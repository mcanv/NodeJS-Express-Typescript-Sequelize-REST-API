import Application from './core/Application';
import Routes from "./routes";

const app = new Application(Routes);

app.listen(3000);