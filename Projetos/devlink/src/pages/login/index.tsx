import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { FormEvent, useState } from "react";
import { auth } from "../../services/firebaseConnection";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        setLoading(true)

        if (email === '' || password === '') {
            alert('Preencha todos os campos')
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                console.log('Usuário logado!')
                navigate('/admin', { replace: true })
                setLoading(false)
            })
            .catch((error) => {
                console.log('Erro ao fazer login: ' + error)
            })

    }

    if (loading) {
        return (
            <div className="flex w-full h-screen items-center justify-center flex-col">
                <h1 className="text-5xl text-white font-bold">Carregando...</h1>
            </div>
        )
    }

    return (
        <div className="flex w-full h-screen items-center justify-center flex-col">
            <Link to='/'>
                <h1 className="mt-11 text-white mb-7 font-bold text-7xl">Dev
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent">Link</span>
                </h1>
            </Link>

            <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col px-2">
                <Input
                    placeholder="Digite seu email..."
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Digite sua senha..."
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    type="submit"
                    className="h-9 bg-blue-600 rounded border-0 text-lg font-medium text-white cursor-pointer transition-transform hover:scale-105">
                    Acessar
                </button>
            </form>
        </div>
    )
}