import * as React from 'react';
import { Link } from 'gatsby'
import Emoji from 'a11y-react-emoji'

import SEO from '../components/seo'

const FourOhFour = () => {
  return (
    <>
      <SEO title='404 Error' />
      <h2>404 Error <Emoji symbol='🔌' /></h2>
      <h3>Go <Link to='/' className='dotted'>home</Link>. 'Tis dangerous out here <Emoji symbol='💀' />.</h3>
    </>
  )
}

export default FourOhFour