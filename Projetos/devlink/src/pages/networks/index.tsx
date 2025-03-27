import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { FormEvent, useEffect, useState } from "react"
import { db } from "../../services/firebaseConnection"
import { doc, setDoc, getDoc } from "firebase/firestore"

export function Networks() {
    const [insta, setInsta] = useState('')
    const [linkedin, setLinkedin] = useState('')
    const [github, setGithub] = useState('')

    useEffect(() => {

        function loadingLinks() {
            const docRef = doc(db, 'social', 'link')

            getDoc(docRef)
                .then((snapshot) => {
                    if (snapshot.data() !== undefined) {
                        setInsta(snapshot.data()?.insta)
                        setLinkedin(snapshot.data()?.linkedin)
                        setGithub(snapshot.data()?.github)
                    }

                })
        }

        loadingLinks()

    }, [])

    function handleRegiter(e: FormEvent) {
        e.preventDefault();

        setDoc(doc(db, 'social', 'link'), {
            insta: insta,
            linkedin: linkedin,
            github: github
        })
            .then(() => {
                alert('Redes sociais cadastradas com sucesso!')
            })
            .catch((error) => {
                console.log('Erro ao cadastrar redes sociais: ' + error)
            })
    }

    return (
        <div className="flex items-center flex-col min-h-screen pb-7 px-2">
            <Header />
            <h1 className="text-white text-2xl font-medium mt-8 mb-4">Minhas redes sociais</h1>

            <form className="flex flex-col max-w-xl w-full" onSubmit={handleRegiter}>
                <label className="text-white font-medium mt-2 mb-3">Link do Instagram</label>
                <Input
                    placeholder="Digite a url do Instagram..."
                    type="url"
                    value={insta}
                    onChange={(e) => setInsta(e.target.value)}
                />
                <label className="text-white font-medium mt-2 mb-3">Link do Linkedin</label>
                <Input
                    placeholder="Digite a url do Linkedin..."
                    type="url"
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                />
                <label className="text-white font-medium mt-2 mb-3">Link do Github</label>
                <Input
                    placeholder="Digite a url do Github..."
                    type="url"
                    value={github}
                    onChange={(e) => setGithub(e.target.value)}
                />

                <button
                    type="submit"
                    className="text-white bg-blue-600 h-10 rounded-md flex items-center justify-center mt-3 mb-8 font-medium text-lg cursor-pointer transition-transform hover:scale-105"
                >
                    Salvar links
                </button>
            </form>
        </div>
    )
}