import '../styles/components/content.scss'

export function Content({ children }) {
  return (
    <div className="content">
      <div class="container">
        <div class="options">
          <h2>Options</h2>
          <div>
            <input type="radio" id="1" name="generator" value="1"></input>
            <label for="1">Text Input</label>
            <input type="radio" id="2" name="generator" value="2"></input>
            <label for="2">Button</label>  
          </div>
          <div class="size">
            <h4>Size</h4>
            <label>Widht:</label>
            <br></br>
            <input type="number" min="0" defaultValue="100" class="widhtlb"></input> px
            <br></br>
            <span>
              Left: <input type="number" min="0" class="labelfr"></input> px
            </span>
            <br></br>
            <span>
              Right: <input type="number" min="0" class="labelfr"></input> px
            </span>
            <br></br>
            <label>Height:</label>
            <br></br>
            <input type="number" min="0" defaultValue="100" class="heightlb"></input> px
            <br></br>
            <span>
              Left: <input type="number" min="0" class="labelfr"></input> px
            </span>
            <br></br>
            <span>
              Right: <input type="number" min="0" class="labelfr"></input> px
            </span>
          </div>
        </div>
        <div class="view">
        <h4>View</h4>
        </div>
      </div>
      <div class="code">
        <h4>Code</h4>
        <div class="children">
          {children}
        </div>
      </div>
    </div>
  )
}