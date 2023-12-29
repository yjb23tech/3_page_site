import { createRoot } from "react-dom/client"
import NavHeader from "./components/NavHeader"

const App = () => {
    return (
        <div>
            <NavHeader nav_header_text="Earth and Mars" />
            <p>Earth and Mars are two planets within our solar system</p>
            <p>Which planet would you like to know better?</p>
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)

