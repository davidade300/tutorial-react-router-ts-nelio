import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import App from "./App.tsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Invoices from "./routes/Invoices/invoices.tsx";
import Expenses from "./routes/Expenses";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} >
                    <Route path="expenses" element={<Expenses/>}/>
                    <Route path="invoices" element={<Invoices/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
