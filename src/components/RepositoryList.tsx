import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';
import { useState, useEffect } from "react";

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
      <section className="profile">
        <div>
          <img src={profile?.avatar_url} alt="Foto de Perfil" />
        </div>

        <div className="descriptions">
          <p>{profile?.name}</p>
          <p>{profile?.bio}</p>
          <p>{profile?.location}</p>
          <p>{profile?.company}</p>

        </div>
      </section>


      <section className="repository-list">
        <h1>Lista de Repositórios</h1>

        <ul>
          {
            repositories.map(repository => {
              return (
                <RepositoryItem repository={repository} key={repository.name} />
              )
            })
          }
        </ul>
      </section>
    </>

  )
}