import '../styles/components/side.scss'
import { FiArrowRight } from 'react-icons/fi'

export function Side({ children }) {
  return (
    <div className="side">
      <div className="side__content">
        <h1>Filtro</h1>
        <input type="text" />
        <table className="table">
          <thead>
            <tr>
              <th className="table__title">Linguagem</th>
              <th className="table__title">Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="table__content">CSS</td>
              <td className="table__content">Components</td>
              <button>
                <FiArrowRight size={18} color='#232a3d' />
              </button>
            </tr>
            <tr>
              <td className="table__content">CSS</td>
              <td className="table__content">Components</td>
              <button>
                <FiArrowRight size={18} color='#232a3d' />
              </button>
            </tr>
            <tr>
              <td className="table__content">CSS</td>
              <td className="table__content">Components</td>
              <button>
                <FiArrowRight size={18} color='#232a3d' />
              </button>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}