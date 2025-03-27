import { Social } from "../../components/Social";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { getDocs, collection, orderBy, query, doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../../services/firebaseConnection";

interface LinkProps {
    id: string,
    name: string,
    url: string,
    bg: string,
    color: string
}

interface SocialLinksProps {
    insta: string,
    linkedin: string,
    github: string
}

export function Home() {
    const [links, setLinks] = useState<LinkProps[]>([])
    const [socialLinks, setSocialLinks] = useState<SocialLinksProps>()

    useEffect(() => {
        function loadingLinks() {
            const linksRef = collection(db, 'links')
            const queryRef = query(linksRef, orderBy('created', 'asc'))

            getDocs(queryRef)
                .then((snapshot) => {
                    let list = [] as LinkProps[]

                    snapshot.forEach((doc) => {
                        list.push({
                            id: doc.id,
                            name: doc.data().name,
                            url: doc.data().url,
                            bg: doc.data().bg,
                            color: doc.data().color
                        })
                    })
                    setLinks(list)

                })
        }
        loadingLinks()
    }, [])

    useEffect(() => {
        function loadingSocialLinks() {
            const docRef = doc(db, 'social', 'link')
            getDoc(docRef)
                .then((snapshot) => {
                    if (snapshot.data() !== undefined) {
                        setSocialLinks({
                            insta: snapshot.data()?.insta,
                            linkedin: snapshot.data()?.linkedin,
                            github: snapshot.data()?.github
                        })
                    }
                })
                .catch((error) => {
                    console.log('Erro ao pegar social links na home: ' + error)
                })
        }
        loadingSocialLinks()
    }, [])

    return (
        <div className="flex flex-col w-full py-4 items-center justify-center">
            <h1 className="md:text-4xl  text-3xl font-bold text-white mt-20">Maria Júlia | Dev Frontend</h1>
            <span className="text-gray-50 mb-5 mt-3">Veja meus links 👇</span>

            <main className="flex flex-col w-11/12 max-w-xl text-center">

                {links.map((item) => (
                    <section
                        key={item.id}
                        className="bg-white mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer"
                        style={{ backgroundColor: item.bg }}
                    >
                        <a href={item.url} target="_blank">
                            <p className="md:text-lg font-medium text-lg" style={{ color: item.color }}>
                                {item.name}
                            </p>
                        </a>
                    </section>
                ))}

                {socialLinks && Object.keys(socialLinks).length > 0 && (
                    <footer className="flex justify-center gap-3 my-4">
                        <Social url={socialLinks.insta}>
                            <FaInstagram size={35} color="#fff" className="transition-transform hover:scale-110" />
                        </Social>

                        <Social url={socialLinks.linkedin}>
                            <FaLinkedin size={35} color="#fff" className="transition-transform hover:scale-110" />
                        </Social>

                        <Social url={socialLinks.github}>
                            <FaGithub size={35} color="#fff" className="transition-transform hover:scale-110" />
                        </Social>
                    </footer>
                )}

            </main>

        </div>
    )
}