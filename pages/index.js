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
              <li key={itemAtual.id}>
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
  const [comunidades, setComunidades] = React.useState([]);

  const [seguidores, setSeguidores] = React.useState([]);

  React.useEffect(function(){

    fetch('https://api.github.com/users/peas/followers')
    .then(function (respostaDoServidor){
      return respostaDoServidor.json();
    })
    .then(function(respostaCompleta){
      setSeguidores(respostaCompleta);
    })


    //API GraphQL

    fetch('https://graphql.datocms.com/', {

      method: 'POST',
      headers: {
        'Authorization': 'e88c6f4bcc9741fa124fdccc32a306',
        'Content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ "query": `query {
        allComunidades {
          id
          title
          link
          imageUrl
        }
      }` })
    })
    .then((response) => response.json())
    .then((respostaCompleta) => {
      const comunidadesDato = respostaCompleta.data.allComunidades;
      setComunidades(comunidadesDato);
      console.log(comunidades);
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
                  title: dadosForm.get('title'),
                  link: dadosForm.get('link'),
                  imageUrl: dadosForm.get('image')
                }

                fetch('/api/comunidades', {
                  method: "POST",
                  headers: {
                    'Content-type': 'application/json',
                  },
                  body: JSON.stringify(comunidadeNova)
                })
                .then(async (response) => {

                  const dados = await response.json();
                  console.log(dados.registroCriado);
                  const comunidadeNova = dados.registroCriado;

                  const comunidadesAtualizadas = [...comunidades, comunidadeNova];
                  setComunidades(comunidadesAtualizadas);
                })
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
                            <img src={itemAtual.imageUrl} />
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
