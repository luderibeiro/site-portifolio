import React from 'react'
import { Container, Content } from '../../../components/Contact/style'
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope, FaGithub } from 'react-icons/fa'
import ItemContact from '../../../components/ItemContact'

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
          LinkContact="https://www.instagram.com/lude_ribeiro7/" 
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