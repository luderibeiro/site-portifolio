import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img } from '../../styles/indexStyle'
import Link from 'next/link'

export default function Home() {
  return (
   <Container>
     <Content>
      <Infos>
        <Name>Olá, sou Lude Ribeiro</Name>
        <Function>FullStack Developer Jr</Function>
        <Intro>Estudante de Engenharia de Software pela Universidade de Brasília,
        tenho experiência em desenvolvimento Web com React Js e desenvolvimento Backend em Python com Django e Flask.
        </Intro>
        <Link href="projects">
          <LinkProjects>PROJETOS <FaArrowRight /></LinkProjects>
        </Link>
      </Infos>
      <Logo>
        <Img src="images/avatar.jpg" alt="logo" />
      </Logo>
     </Content>
   </Container>
  )
}