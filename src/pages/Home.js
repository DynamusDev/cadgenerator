import '../styles/pages/home.scss';
import { Header, Side, Content, Button } from '../components'
import icon from '../assets/swiss-army-knife.png'

export function Home() {
  return (
    <div className="App">
      <Header
        title="CadGenerator"
        icon={icon}
      />
      <div className="App__content">
        <Side >
          <Button>
            CSS
          </Button>
        </Side>
        <Content>
          <code className="code">
            width: 0; <br />
            height: 0;<br />
            border-style: solid;<br />
            border-width: 380px 190px 0 190px;<br />
            border-color: #007bff transparent transparent transparent;<br />
          </code>
        </Content>
      </div>
    </div>
  );
}
