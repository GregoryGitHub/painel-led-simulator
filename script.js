class Painel {
  constructor(){
    this.state = {
      panel:{
        cols:70,
        rows:8,
        matrix:[]
      }
    }

    this.mountMatrix();
    console.log(this.state)
  }

  mountMatrix(){
    let {panel} = this.state;
    for(let row = 0; row < panel.rows; row++){
      for(let col=0; col < panel.cols; col++){
        if(!panel.matrix[row]){
          panel.matrix[row]=[];
          panel.matrix[row].push({on:false,id:`LED-${row}-${col}`});
        }else{
          panel.matrix[row].push({on:false,id:`LED-${row}-${col}`});
        }
      }
    }
    this.setState({panel})
    this.render();
  }

  setState(newState){
      let actualState = this.state;
      this.state = {...actualState,...newState};
      this.render();
  }
  
  render(){
    const { matrix } = this.state.panel;
    let root = document.getElementById('root');
    while (root.firstChild) {
      root.removeChild(root.lastChild);
    }

    matrix.map(row=>{
      row.map(led=>{
        let newLed = document.createElement('div');
        newLed.classList.add('led')
        if(led.on){
          newLed.classList.add('on')
        } 
        newLed.id = led.id;
        root.appendChild(newLed);
      })
    })
  }

  makeA(){
    let {panel} = this.state;

              // R  C  
    panel.matrix[0][1].on = true;
    panel.matrix[0][2].on = true;
    panel.matrix[0][3].on = true;
    panel.matrix[0][4].on = true;
    panel.matrix[0][5].on = true;
    panel.matrix[0][6].on = true;

    panel.matrix[1][1].on = true;
    panel.matrix[1][2].on = true;
    // panel.matrix[1][3].on = true;
    // panel.matrix[1][4].on = true;
    panel.matrix[1][5].on = true;
    panel.matrix[1][6].on = true;

    panel.matrix[2][1].on = true;
    panel.matrix[2][2].on = true;
    // panel.matrix[2][3].on = true;
    // panel.matrix[2][4].on = true;
    panel.matrix[2][5].on = true;
    panel.matrix[2][6].on = true;

    panel.matrix[3][1].on = true;
    panel.matrix[3][2].on = true;
    panel.matrix[3][3].on = true;
    panel.matrix[3][4].on = true;
    panel.matrix[3][5].on = true;
    panel.matrix[3][6].on = true;

    panel.matrix[4][1].on = true;
    panel.matrix[4][2].on = true;
    panel.matrix[4][3].on = true;
    panel.matrix[4][4].on = true;
    panel.matrix[4][5].on = true;
    panel.matrix[4][6].on = true;

    panel.matrix[5][1].on = true;
    panel.matrix[5][2].on = true;
    // panel.matrix[5][3].on = true;
    // panel.matrix[5][4].on = true;
    panel.matrix[5][5].on = true;
    panel.matrix[5][6].on = true;

    panel.matrix[6][1].on = true;
    panel.matrix[6][2].on = true;
    // panel.matrix[6][3].on = true;
    // panel.matrix[6][4].on = true;
    panel.matrix[6][5].on = true;
    panel.matrix[6][6].on = true;

    panel.matrix[7][1].on = true;
    panel.matrix[7][2].on = true;
    // panel.matrix[7][3].on = true;
    // panel.matrix[7][4].on = true;
    panel.matrix[7][5].on = true;
    panel.matrix[7][6].on = true;

    console.log(panel)
    this.setState({panel})
    
  }
}

window.onload = ()=>{
  let p = new Painel();
  p.makeA();
}
