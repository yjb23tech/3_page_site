import { createRoot } from "react-dom/client"
import NavHeader from "./components/NavHeader"

const App = () => {
    return (
        <div>
            <NavHeader nav_header_text="Earth and Mars" />
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)

