import { Outlet } from "react-router-dom"
import { Header } from "../header"

export function Layout() {
    return (
        //Frangment: tag vazia, sem nenhum estilo, nenhuma interferência
        <>
            <Header />
            <Outlet /> {/* Onde vai renderizar a página de fato, a home, sobre, contato */}
        </>
    )
}