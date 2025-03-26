import { db, auth } from './firebaseConnection';
import {
  doc,
  setDoc,
  collection,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  onSnapshot
} from 'firebase/firestore';
import './app.css';
import { useState, useEffect } from 'react';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged //fica verificando se tem usuario logado ou nao
} from 'firebase/auth';

function App() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [idPost, setIdPost] = useState('');

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [user, setUser] = useState(false);
  const [detailUser, setDetailUser] = useState({});

  const [posts, setPosts] = useState([]);

  useEffect(() => {

    async function loadPosts() {
      const unsub = onSnapshot(collection(db, 'posts'), (snapshot) => { //o onSnapshot verifica em tempo real o que é passado no banco
        let listaPost = [];

        snapshot.forEach((doc) => { //usa o forEach pq não é uma array, são varios documentos com campos dentro
          listaPost.push({
            id: doc.id,
            titulo: doc.data().titulo,
            autor: doc.data().autor
          })
        })
        setPosts(listaPost)
      })
    }

    loadPosts();

  }, [])

  useEffect(() => {

    async function checkLogin(){
      onAuthStateChanged(auth, (user) => { //fica verificando se tem usuario logado ou nao
        if(user){
          //se tem user logado entra aqui
          console.log(user)
          setUser(true)
          setDetailUser({
            uid: user.uid,
            email: user.email
          })
        }else{
          //se nao tem user logado entra aqui
          setUser(false)
          setDetailUser({})
        }
      })
    }

    checkLogin();

  }, [])

  async function handleAdd() { //forma manual 
    /*await setDoc(doc(db, 'posts', '12345'), { //setDoc: especifico o documento que quero cirar no banco de dados //set um documento dentro do post dentro do documento tal
      titulo: titulo, //no doc vou passar o meu banco de dados, em qual collection quero criar o novo doc, qual o nome(id) e o que eu quero cadastrar
      autor: autor
    }) 
    .then(() => {
      console.log('DADOS REGISTRADOS NO BANCO!')
    })
    .catch((error) => {
      console.log('GEROU ERRO' + error)
    })*/

    await addDoc(collection(db, 'posts'), { //addDoc: o firebase que gera o id/cria um documento por si so //adicione um documento dentro da collection post
      autor: autor,
      titulo: titulo
    })
      .then(() => {
        console.log('DADOS REGISTRADOS NO BANCO!')
        setAutor('')
        setTitulo('')
      })
      .catch((error) => {
        console.log('GEROU ERRO' + error)
      })

  }

  /*async function buscarPost(){ //busca apenas um item que tem dentro de um documento que esta dentro do posts
    const postRef = doc(db, 'posts', 'J35DnVifrTcyd0PjxZY0') 

    await getDoc(postRef)
    .then((snapshot) => {
      setAutor(snapshot.data().autor) //pega os dados da propriedade autor
      setTitulo(snapshot.data().titulo) //pega os dados da propriedade titulo
    })
    .catch(() => {
      console.log('erro ao buscar')
    })
  }*/

  async function buscarPost() { //buscando varios documentos e o que tem dentro deles
    const postsRef = collection(db, 'posts')

    await getDocs(postsRef)
      .then((snapshot) => {
        let lista = [];

        snapshot.forEach((doc) => { //usa o forEach pq não é uma array, são varios documentos com campos dentro
          lista.push({
            id: doc.id,
            titulo: doc.data().titulo,
            autor: doc.data().autor
          })
        })

        setPosts(lista);

      })
      .catch(() => {
        console.log('deu algum erro ao buscar')
      })
  }

  async function editarPost() {
    const docRef = doc(db, 'posts', idPost);
    await updateDoc(docRef, {
      titulo: titulo,
      autor: autor
    })
      .then(() => {
        console.log('post atualizado');
        setIdPost('');
        setTitulo('');
        setAutor('');
      })
      .catch((error) => {
        console.log('erro ao atualizar' + error)
      })
  }

  async function excluirPost(id) {
    const deletRef = doc(db, 'posts', id);
    await deleteDoc(deletRef)
      .then(() => {
        alert('post deletado com sucesso')
      })
      .catch(() => {
        alert('erro ao deletar')
      })
  }

  async function novoUsuario() {
    await createUserWithEmailAndPassword(auth, email, senha)
      .then(() => {
        console.log('cadastrado com sucesso ');
        setEmail('');
        setSenha('');
      })
      .catch((error) => {
        if (error.code === 'auth/weak-password') {
          alert('senha fraca')
        } else if (error.code === 'auth/email-already-in-use') {
          alert('email ja existe')
        }
      })
  }

  async function logarUsuario() {
    await signInWithEmailAndPassword(auth, email, senha)
      .then((value) => {
        console.log('logado com sucesso ');
        console.log(value.user)

        setDetailUser({
          uid: value.user.uid,
          email: value.user.email
        })

        setUser(true)

        setEmail('');
        setSenha('');
      })
      .catch(() => {
        console.log('erro ao fazer o login')
      })
  }

async function fazerLogout(){
  await signOut(auth)
  setUser(false)
  setDetailUser(false)
}

  return (
    <div>
      <h1>ReactJS + FiraBase</h1>

      {user && (
        <div>
          <strong>Seja bem-vindo(a) (Você está logado)</strong> <br/>
          <span>ID: {detailUser.uid} - Email {detailUser.email}</span><br/>
          <button onClick={fazerLogout}>Sair da conta</button>
          <br/> <br/>
        </div>
      )}

      <div className='container'>
        <h2>Usuários</h2>
        <label>Email:</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Digite seu email'
        /> <br />

        <label>Senha:</label>
        <input
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder='Digite sua senha'
        /> <br />

        <button onClick={novoUsuario}>Cadastrar</button>
        <button onClick={logarUsuario}>Fazer login</button>
      </div>

      <br /><br />
      <hr />

      <div className='container'>
        <h2>Posts</h2>
        <label>ID do post:</label>
        <input
          placeholder='Digite o ID do post'
          value={idPost}
          onChange={(e) => setIdPost(e.target.value)}
        /> <br />

        <label>Titulo:</label>
        <textarea
          placeholder='Digite um titulo'
          type='text'
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <label>Autor:</label>
        <input
          type='text'
          placeholder='Autor do post'
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        />

        <button onClick={handleAdd}>Cadastrar</button>
        <button onClick={buscarPost}>Buscar post</button> <br />
        <button onClick={editarPost}>Atualizar post</button>

        <ul>
          {posts.map((post) => { //o map percorre arrays apenas
            return (
              <li key={post.id}>
                <strong>ID: {post.id}</strong> <br />
                <span>Titulo: {post.titulo}</span> <br />
                <span>Autor: :{post.autor}</span> <br />
                <button onClick={() => excluirPost(post.id)}>Excluir post</button> <br /> <br />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
