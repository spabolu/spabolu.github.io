import React from "react"
import {Link} from 'gatsby'

import Layout from "../components/layout"

export default function Home() {
	return (
		<Layout>
            <h2>404 Error ⚡</h2>
            <h3>Go <Link to='/' className='dotted'>home</Link>. It is dangerous out here 💀</h3>
        </Layout>
	)
}
