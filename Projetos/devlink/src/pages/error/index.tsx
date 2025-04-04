import { Link } from "react-router-dom";

export function ErrorPage() {
    return (
        <div className="flex w-full justify-center items-center flex-col text-white min-h-screen">
            <h1 className="font-bold text-6xl mb-2">404</h1>
            <h1 className="font-bold text-4xl mb-4">Página não encontrada</h1>
            <p className="italic text-2xl mb-4">Essa página que não existe!</p>
            <Link className="bg-gray-50/20 py-2 px-4 rounded-md transition-transform hover:scale-105" to='/'>Voltar para home</Link>
        </div>
    )
}