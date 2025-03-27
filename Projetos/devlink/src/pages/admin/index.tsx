import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { FormEvent, useState, useEffect } from "react";
import { IoLinkSharp } from "react-icons/io5";
import { FiTrash } from "react-icons/fi";
import { db } from "../../services/firebaseConnection";
import {
    addDoc,
    collection,
    onSnapshot,
    query,
    orderBy,
    doc,
    deleteDoc
} from "firebase/firestore";

interface LinkProps {
    id: string,
    name: string,
    url: string,
    bg: string,
    color: string
}

export function Admin() {
    const [nameInput, setNameInput] = useState('');
    const [urlInput, setUrlInput] = useState('');
    const [bgColorInput, setBgColorInput] = useState('#121212');
    const [textColorInput, setTextColorInput] = useState('#f1f1f1');

    const [links, setLinks] = useState<LinkProps[]>([])

    useEffect(() => {
        const linksRef = collection(db, 'links')
        const queryRef = query(linksRef, orderBy('created', 'asc'))

        const unsub = onSnapshot(queryRef, (snapshot) => {
            let list = [] as LinkProps[];

            snapshot.forEach((doc) => {
                const data = doc.data()

                list.push({
                    id: doc.id,
                    name: data.name,
                    url: data.url,
                    bg: data.bg,
                    color: data.color
                })
            })

            setLinks(list)

        })

        return () => {
            unsub();
        }

    }, [])

    function handleRegister(e: FormEvent) {
        e.preventDefault();

        if (nameInput === '' || urlInput === '') {
            alert('Preencha todos os campos!')
            return;
        }

        addDoc(collection(db, 'links'), {
            name: nameInput,
            url: urlInput,
            bg: bgColorInput,
            color: textColorInput,
            created: new Date()
        })
            .then(() => {
                alert('Novo link cadastrado com sucesso!')
                setNameInput('')
                setUrlInput('')
            })
            .catch((error) => {
                console.log('Erro ao cadastrar no banco de dados: ' + error)
            })
    }

    async function handleDeletLink(id: string) {
        const deletRef = doc(db, 'links', id)

        await deleteDoc(deletRef)
            .then(() => {
                alert('Link deletado com sucesso!')
            })
            .catch((error) => {
                console.log('Erro ao deletar link: ' + error)
            })
    }

    return (
        <div className="flex items-center flex-col min-h-screen pb-7 px-2">
            <Header />

            <form className="flex flex-col w-full mt-12 mb-3 max-w-xl" onSubmit={handleRegister}>
                <label className="text-white font-medium mt-2 mb-2">Nome do Link</label>
                <Input
                    placeholder="Digite o nome do link..."
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                />

                <label className="text-white font-medium mt-2 mb-2">URL do Link</label>
                <Input
                    placeholder="URL do link..."
                    type="url"
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                />

                <section className="flex my-4 gap-5">
                    <div className="flex gap-2 items-center">
                        <label className="text-white font-medium mt-2 mb-2">Fundo do Link</label>
                        <input
                            type="color"
                            value={bgColorInput}
                            onChange={(e) => setBgColorInput(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-2 items-center">
                        <label className="text-white font-medium mt-2 mb-2">Cor do Link</label>
                        <input
                            type="color"
                            value={textColorInput}
                            onChange={(e) => setTextColorInput(e.target.value)}
                        />
                    </div>
                </section>

                {nameInput !== '' && (
                    <div className="flex items-center justify-center flex-col mb-7 p-1 border-gray-100/25 border rounded-md">
                        <label className="text-white font-medium mt-2 mb-3">Veja como está ficando:</label>
                        <article
                            className="w-11/12 m-w-lg flex flex-col items-center justify-between rounded px-1 py-3"
                            style={{ marginBottom: 8, marginTop: 8, backgroundColor: bgColorInput }}
                        >
                            <p
                                className="font-medium text-lg"
                                style={{ color: textColorInput }}
                            >
                                {nameInput}
                            </p>
                        </article>
                    </div>
                )}

                <button type="submit"
                    className="mb-7 bg-blue-600 rounded-md h-10 text-white text-lg font-medium gap-4 flex justify-center items-center cursor-pointer transition-transform hover:scale-105">
                    Cadastrar <IoLinkSharp size={25} color="#fff" />
                </button>

            </form>



            <h2 className="font-bold text-white mb-4 text-3xl">Meus Links</h2>

            {links.length !== 0 ?
                (links.map((link) => (
                    <article
                        className="flex flex-row items-center justify-between w-11/12 max-w-xl text-lg font-medium rounded py-3 px-2 mb-2 select-none transition-transform hover:scale-105"
                        style={{ backgroundColor: link.bg, color: link.color }}
                        key={link.id}
                    >
                        <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
                        <div>
                            <button
                                onClick={() => handleDeletLink(link.id)}
                                className="border border-dashed p-1 rounded border-white cursor-pointer">
                                <FiTrash size={18} color="#fff" />
                            </button>
                        </div>
                    </article>))) :
                (
                    <h4 className="text-white mb-4 text-2xl">
                        Nenhum link cadastrado!
                    </h4>
                )
            }


        </div>
    )
}