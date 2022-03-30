interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <div className="itens-repository">
      {/* <strong>{props.repository?.name ?? 'Default'}</strong> */}
      <strong>📂{props.repository?.name}</strong>
      <p>📝{props.repository?.description ?? props.repository.name}</p>
      <a href={props.repository?.html_url} target="_blank">
        💾 Acessar repositório
      </a>
    </div>
  )
}
