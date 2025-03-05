import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/home'
import { About } from './pages/about'
import { Contato } from './pages/contact'
import { Produto } from './pages/product'
import { NotFound } from './pages/notfound'

import { Layout } from './components/layout'

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contato />
            },
            {
                // indicando que é algo dinamico
                path: '/product/:id',
                element: <Produto />
            },
            {
                //Rota de erro (sempre tem que ser a última)
                path: '*',
                element: <NotFound />
            }
        ]
    }
])

export { router };