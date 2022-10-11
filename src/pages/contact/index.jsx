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
          LinkContact="https://www.linkedin.com/in/luderibeiro" 
        />
        <ItemContact 
          IconFa={FaInstagram} 
          LinkContact={<Link href="https://www.instagram.com/lude_ribeiro7"><a target="_blank">https://www.instagram.com/lude_ribeiro7</a></Link>}
        />
        <ItemContact 
          IconFa={FaEnvelope} 
          LinkContact="ludeyuridrums@gmail.com"
        />
        <ItemContact 
          IconFa={FaGithub}
          LinkContact="https://github.com/luderibeiro"
        />
      </Content>
    </Container>
  )
}