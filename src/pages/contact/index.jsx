import React from 'react'
import { Container, Content } from '../../../components/Contact/style'
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope, FaGithub } from 'react-icons/fa'
import ItemContact from '../../../components/ItemContact'
import { Ancora } from '../../../components/Header/style'
import Link from 'next/link'

export default function Contact() {
  return (
    <Container>
      <Content>
        <ItemContact 
          IconFa={FaLinkedin} 
          LinkContact={<Link href="https://www.linkedin.com/in/luderibeiro"><a target="_blank">https://www.linkedin.com/in/luderibeiro</a></Link>} 
        />
        <ItemContact 
          IconFa={FaInstagram} 
          LinkContact={<Link href="https://www.instagram.com/lude_ribeiro7"><a target="_blank" >https://www.instagram.com/lude_ribeiro7</a></Link>}
        />
        <ItemContact 
          IconFa={FaEnvelope} 
          LinkContact={<Link href="mailto:ludeyuridrums@gmail.com"><a target={"blank"}>ludeyuridrums@gmail.com</a></Link>}
        />
        <ItemContact 
          IconFa={FaGithub}
          LinkContact={<Link href="https://www.github.com/luderibeiro"><a target="_blank">https://www.github.com/luderibeiro</a></Link>}
        />
      </Content>
    </Container>
  )
}