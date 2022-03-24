import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';
import { useState, useEffect } from "react/cjs/react.production.min";

// https://api.github.com/users/jonathas-bonfim

const repository = {
  name: "repository",
  description: "Forms in React",
  link: "https://github.com/"
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);
  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        <RepositoryItem
          repository={repository}
        />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>


    </section>
  )
}