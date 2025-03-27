import { ReactNode, useState, useEffect } from "react";
import { auth } from "../services/firebaseConnection";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";

interface PrivateProps {
    children: ReactNode
}

export function Private({ children }: PrivateProps) {
    const [loading, setLoading] = useState(true)
    const [signed, setSigned] = useState(false)

    useEffect(() => {

        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                const userData = {
                    uid: user?.uid,
                    email: user?.email
                }

                localStorage.setItem('@reactlinks', JSON.stringify(userData))
                setLoading(false)
                setSigned(true)

            } else {
                setLoading(false)
                setSigned(false)
            }
        })

        // Quando sair do componente/página que ta usando essa private ele desmonta o unsub (não é mais necessario ficar monitorando o user)
        return () => {
            unsub()
        };

    }, [])

    if (loading) {
        return (
            <div className="flex w-full h-screen items-center justify-center flex-col">
                <h1 className="text-5xl text-white font-bold">Carregando...</h1>
            </div>
        )
    }

    if (!signed) {
        return <Navigate to='/login' />
    }

    return children
}