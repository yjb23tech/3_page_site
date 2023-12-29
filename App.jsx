import { createRoot } from "react-dom/client"
import NavHeader from "./components/NavHeader"

const App = () => {
    return (
        <div>
            <NavHeader nav_header_text="Earth and Mars" />
            <p>Earth and Mars are two planets within our solar system</p>
            <p>Which planet would you like to know better?</p>

            <p>I would like to <a href="./earth.html">know more about <p style="color: green">Earth</p></a></p>
            <p>I would like to <a href="./mars.html">know more about <p style="color: red">Mars</p></a></p>
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)

