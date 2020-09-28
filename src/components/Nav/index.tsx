import React from 'react'
import { Link } from 'gatsby'
import { Container } from '../Container' 

export const Navbar = () => (
  <Container>
    <Link to="/">Self-learning</Link>
    <Link to="/">Articles</Link>
  </Container>
)