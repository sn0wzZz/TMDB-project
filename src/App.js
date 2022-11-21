import MainContainer from "./components/main-container/main-container.component";
import { AppProvider } from "./contexts/app.context";

export default function App() {
  return(
    <AppProvider>
      <MainContainer />
    </AppProvider>
  )
}
