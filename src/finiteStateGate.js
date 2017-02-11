export default class RemoteClicker{
  constructor(){
    this.gateState = 'CLOSED'
    this.timeOutID = undefined
  }

  remoteClicked(){
    console.log('Remote clicked')
    this.setGateState()
    if(this.timeoutID != undefined){
      clearTimeout(this.timeoutID)
      this.timeoutID = setTimeout(this.canCompleteCycle.bind(this), 3000)
    } else {
      this.timeoutID = setTimeout(this.canCompleteCycle.bind(this), 3000)
    }
  }

  canCompleteCycle(){
    if(this.gateState == 'OPENING' || this.gateState == 'CLOSING'){
      this.completeCycle()
    } else {
      console.log('Gate is left:', this.gateState)
    }
  }

  completeCycle(){
    console.log('Cycle Complete')
    if(this.gateState == 'OPENING'){
      this.gateState = 'OPEN'
    } else {
      this.gateState == 'CLOSING'
    }
  }

  getGateState(){
    return this.gateState
  }

  setGateState(){
    switch (this.gateState){
      case 'CLOSED':
        this.gateState = 'OPENING'
        console.log('Gate: ', this.gateState)
        break
      case 'OPENING':
        this.gateState = 'STOPPED_WHILE_OPENING'
        console.log('Gate: ', this.gateState)
        break
      case 'STOPPED_WHILE_OPENING':
        this.gateState = 'CLOSING'
        console.log('Gate: ', this.gateState)
        break
      case 'CLOSING':
        this.gateState = 'STOPPED_WHILE_CLOSING'
        console.log('Gate: ', this.gateState)
        break
      case 'STOPPED_WHILE_CLOSING':
        this.gateState = 'OPENING'
        console.log('Gate: ', this.gateState)
        break
      case 'OPENED':
      this.gateState = 'CLOSING'
      console.log('Gate: ', this.gateState)
      break
      default:
      console.log('---------->ERRRRORRR<---------')
      console.log('YOU DONE GOOFED!')
    }
  }
}

const myClicker = new RemoteClicker()

console.log('myClicker.gateState:', myClicker.gateState)
myClicker.remoteClicked()
myClicker.remoteClicked()
myClicker.remoteClicked()
myClicker.remoteClicked()
myClicker.remoteClicked()
