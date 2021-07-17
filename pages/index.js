import React from 'react';
import styled from 'styled-components'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCoommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'
import { OpenTab, BarTab } from '../src/components/Box'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

function ProfileSidebar(propriedades){

  return (

    <OpenTab>
      <BarTab/>

      <div className="contentBox">
        <img src={`https://github.com/${propriedades.githubUser}.png`}/>

        <hr />
        <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`}>
          @{propriedades.githubUser}
        </a>
        <hr />

        <AlurakutProfileSidebarMenuDefault/>
      </div>

    </OpenTab>
  )
}

function ProfileRelationsBox(propriedades) {

  return (
    <OpenTab>
      <BarTab/>

      <div className="contentBox">

      <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">
          {propriedades.title} ({propriedades.items.length})
        </h2>

        <ul>
          {propriedades.items.slice(0,6).map((itemAtual) => {
            return (
              <li key={itemAtual}>
                <a href={itemAtual.html_url} key={itemAtual} target="_blank" rel="noopener noreferrer">
                  <img src={itemAtual.avatar_url} />
                  <span>{itemAtual.login}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </ProfileRelationsBoxWrapper>
      </div>
    </OpenTab>

  );
}


export default function Home() {

  
  const githubUser = "avamelillo";
  const pessoasFavoritas = ['deblah','imKethy','hagsilva', 'bruperez', 'fbison', 'juliarezende34'];
  const [comunidades, setComunidades] = React.useState([
    {
      id: '0000',
      title: 'ENA',
      link: 'https://joelgc.com/',
      image: 'https://64.media.tumblr.com/8dc8a5d4f612117d0df15ac487da3193/9e87251af39a760a-60/s540x810/68e9b9efbc29e9c2b2d49912b75319d4c3a77180.gif'},
    {
      id: '234835',
      title: 'The owl house',
      link: 'https://www.theowlclub.net/',
      image: 'https://media2.giphy.com/media/EozzlYcw9C29zCOMq0/giphy.gif?cid=ecf05e47qt6eioze376ikp55zz40ad4o5vgxo5i49vbfnv3t&rid=giphy.gif&ct=g'},
    {
      id: '52368664',
      title: 'Info coltec',
      link: 'https://static01.nyt.com/images/2016/08/05/us/05onfire1_xp/05onfire1_xp-videoSixteenByNineJumbo1600-v2.jpg',
      image: 'https://media1.giphy.com/media/bPCwGUF2sKjyE/giphy.gif?cid=ecf05e479dhrnm9svhcwfh2d3akxe90f2ifaqzyjxdgfxpz2&rid=giphy.gif&ct=g'
    }  
  ]);

  const [seguidores, setSeguidores] = React.useState([]);

  React.useEffect(function(){

    fetch('https://api.github.com/users/peas/followers')
    .then(function (respostaDoServidor){
      return respostaDoServidor.json();
    })
    .then(function(respostaCompleta){
      setSeguidores(respostaCompleta);
    })
  }, [])
  


  return (

    <>
      <AlurakutMenu/>

      <MainGrid>

        <div className="profileArea" style={{ gridArea: "profileArea"}}>
          <ProfileSidebar githubUser={githubUser} />
        </div>


        <div className="welcomeArea" style={{ gridArea: "welcomeArea", marginTop: "50px"}}>

          <OpenTab>
            <BarTab/>

            <div className="contentBox">
              <h1 className="title">
                Buenos días
              </h1>
              <OrkutNostalgicIconSet/>
            </div>

          </OpenTab>  

          <OpenTab>
            <BarTab/>

            <div className="contentBox">

              <h2 className="subTitle"> O que você deseja fazer? </h2>
              <form onSubmit={function handleCriaComunidade(e){

                e.preventDefault();
                const dadosForm = new FormData(e.target);

                const comunidadeNova = {
                  id: new Date().toISOString(),
                  title: dadosForm.get('title'),
                  link: dadosForm.get('link'),
                  image: dadosForm.get('image')
                }
                const comunidadesAtualizadas = [...comunidades, comunidadeNova];
                setComunidades(comunidadesAtualizadas);

              }}>
                <input 
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                />

                <input
                  placeholder="Insira um URL para usar de capa"
                  name="image" 
                  aria-label="Insira um URL para usar de capa"
                />

                <input
                  placeholder="Insira um link para sua comunidade (opcional)"
                  name="link" 
                  aria-label="Insira um link para sua comunidade (opcional)"
                />

                <button>
                  Criar comunidade
                </button>
              </form>

            </div>
          </OpenTab>
        </div>

        <div className="profileRelationsArea" style={{ gridArea: "profileRelationsArea"}}>

          <ProfileRelationsBox title={"Seguidores"} items={seguidores}/> 

          <OpenTab>
            <BarTab/>

            <div className="contentBox">


              <ProfileRelationsBoxWrapper>
                <h2 className="smallTitle">
                    Suas comunidades ({comunidades.length})
                  </h2>

                  <ul>
                    {comunidades.slice(0,6).map((itemAtual) => {
                      return (
                        <li key={itemAtual.id}>
                          <a href={itemAtual.link} key={itemAtual.title} target="_blank" rel="noopener noreferrer">
                            <img src={itemAtual.image} />
                            <span>{itemAtual.title}</span>
                          </a>
                        </li>
                      )
                    })}
                  </ul>
              </ProfileRelationsBoxWrapper>
            </div>
          </OpenTab>


          <OpenTab>
            <BarTab/>

            <div className="contentBox">

              <ProfileRelationsBoxWrapper>

                <h2 className="smallTitle">
                  Pessoas da comunidade ({pessoasFavoritas.length})
                </h2>

                <ul>
                  {pessoasFavoritas.slice(0,6).map((itemAtual) => {
                    return (
                      <li key={itemAtual}>
                        <a href={`https://github.com/${itemAtual}`} key={itemAtual} target="_blank" rel="noopener noreferrer">
                          <img src={`https://github.com/${itemAtual}.png`} />
                          <span>{itemAtual}</span>
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </ProfileRelationsBoxWrapper>
            </div>
          </OpenTab>
        </div>
      </MainGrid>
    </>
  )
}
