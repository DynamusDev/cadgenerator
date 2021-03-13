import '../styles/components/side.scss'

export function Side({ children }) {
  return (
    <div className="side">
      <div className="side__content">
        <table className="table">
          <thead className="table__head">
            <tr>
              <th>Linguagem</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody className="table__body">
            <tr>
              <td>CSS</td>
              <td>Components</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}