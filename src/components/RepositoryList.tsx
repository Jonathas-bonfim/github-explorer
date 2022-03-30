import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

// import map from "../assets/images/map-pin.svg"

import '../styles/repositories.scss';

interface ProfileProps {
  avatar_url: string,
  name: string;
  bio: string;
  location: string;
  company: string;
}
interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [profile, setProfile] = useState<ProfileProps>();
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/Jonathas-bonfim')
      .then(response => response.json())
      .then(data => {
        setProfile(data)
      })
  }, [])

  useEffect(() => {
    fetch('https://api.github.com/users/Jonathas-bonfim/repos')
      .then(response => response.json())
      .then(data => {
        setRepositories(data)
      })
  }, [])

  console.log("Perfil: ", profile?.avatar_url);

  return (

    <>
      <div className="page">
        <aside className="profile">
          <div className="main-information">
            <img className="photo-profile" src={profile?.avatar_url} alt="Foto de Perfil" />
            <h1>{profile?.name}</h1>
            <p>{profile?.bio}</p>
          </div>

          <div className="descriptions">
            <a href="https://portalconsultor.netlify.app/" target="_blank">
              <p>📍 {profile?.location}</p>
            </a>
            <p>🏢 {profile?.company}</p>
            <p>🐱 Jonathas-Bonfim</p>
            <p>🕊 jonathas.bonfim</p>
            <p>📩 jonathas@atualsistemas.net</p>
          </div>
        </aside>


        <section className="repository-list">
          <h1>Meus Repositórios</h1>

          <div className="repository-list">
            {
              repositories.map(repository => {
                return (
                  <RepositoryItem repository={repository} key={repository.name} />
                )
              })
            }
          </div>
        </section>
      </div>
    </>

  )
}