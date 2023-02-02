import config from "../config.json";
import styled from "styled-components";

function HomePage() {
    const estilosDaHomePage = { backgroundColor: "red" };
    
    console.log(config.playlists);

    return (
        <div style={estilosDaHomePage}>
            <Menu />
            <Header />
            <TimeLine playlists={config.playlists} />
        </div>
    );
}

export default HomePage

function Menu() {
    return (
        <div>
            Menu
        </div>
    );
}

const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%
    }
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;

function Header() {
    return (
        <StyledHeader>
            <img scr="banner" />
            
            <section className="user-info">
                <img scr={`https://github.com/${config.gitHub}`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    );
}

function TimeLine(propriedades) {
    console.log("Dentro do componente:" + propriedades.playlists);
    const playListNames = Object.keys(propriedades.playlists);

    return (
        <div>
            { 
                playListNames.map((playListName) => {
                    const videos = propriedades.playlists[playListName];
                    console.log(playListName);
                    console.log(videos);

                    return (
                        <section>
                            <h2>{playListName}</h2>
                            <div>
                                {videos.map((video) => {
                                    return (
                                        <a href={video.url}>
                                            <img src={video.thumb} />
                                            <span>
                                                {video.title}
                                            </span>
                                        </a>
                                    )
                                })}
                            </div>                            
                        </section>
                    );
                }) 
            }
        </div>
    );
}