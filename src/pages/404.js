import React from "react"
import {Link} from 'gatsby'
import { Helmet } from "react-helmet"

import Layout from "../components/layout"

export default function Home() {
	return (
		<Layout>
            <Helmet>
				<title>404 😵 | Saketh Pabolu</title>
			</Helmet>
            <h2>404 Error ⚡</h2>
            <h3>Go <Link to='/' className='dotted'>home</Link>. It is dangerous out here 💀</h3>
        </Layout>
	)
}
