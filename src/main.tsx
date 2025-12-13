import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import App from "./App.tsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Invoices from "./routes/Invoices";
import Expenses from "./routes/Expenses";
import NotFound from "./routes/NotFound/index.tsx";
import Invoice from "./routes/Invoices/Invoice";
import InvoicesIndex from "./routes/Invoices/InvoicesIndex";
import Welcome from "./routes/Welcome";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route index element={<Welcome/>}/>
                    <Route path="expenses" element={<Expenses/>}/>
                    <Route path="invoices" element={<Invoices/>}>
                        <Route index element={<InvoicesIndex/>}/>
                        <Route path=":invoiceId" element={<Invoice/>}/>
                    </Route>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
