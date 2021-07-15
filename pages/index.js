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
      <BarTab>
        <img className="button" src={"https://imagetourlconverter.com/files/HTGeOgxEW4397324.jpg"} alt="buttons"/>
      </BarTab>
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


export default function Home() {

  const githubUser = "avamelillo";
  const pessoasFavoritas = ['deblah','imKethy','hagsilva', 'bruperez', 'fbison', 'juliarezende34'];

  return (
    <>
      <AlurakutMenu/>
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea"}}>

          <ProfileSidebar githubUser={githubUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: "welcomeArea", marginTop: "50px"}}>
          <OpenTab>
            <BarTab>
              <img className="button" src={"https://imagetourlconverter.com/files/HTGeOgxEW4397324.jpg"} alt="buttons"/>
            </BarTab>
            <div className="contentBox">
              <h1 className="title">
                Buenos días
              </h1>
              <OrkutNostalgicIconSet/>
            </div>
          </OpenTab>  
          <OpenTab>

            <BarTab>
              <img
                className="button"
                src={"https://imagetourlconverter.com/files/HTGeOgxEW4397324.jpg"}
                alt="buttons"
              />  
            </BarTab>

            <div className="contentBox">

              <h2 className="subTitle"> O que você deseja fazer? </h2>

              <form>
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

                <button>
                  Criar comunidade
                </button>
              </form>
            </div>
          </OpenTab>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: "profileRelationsArea",  marginTop: "25px"}}>
          <OpenTab>
            <BarTab>
              <img className="button" src={"https://imagetourlconverter.com/files/HTGeOgxEW4397324.jpg"} alt="buttons"/>
            </BarTab>
            <div className="contentBox">
              <ProfileRelationsBoxWrapper>
                <h2 className="smallTitle">
                  Pessoas da comunidade ({pessoasFavoritas.length})
                </h2>
                <ul>
                    {pessoasFavoritas.map((itemAtual) => {
                      return (
                        <li>
                          <a href={`/users/${itemAtual}`} key={itemAtual}>
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
