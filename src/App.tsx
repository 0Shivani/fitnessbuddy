import './App.css'
import Heading from './Heading'
import MainContent from './MainContent';

export interface TopPage{
  firstLine:string;
  phoneNumber:number;
}

export interface Trainer{
  trainerName:string;
  tagName:string;
  fees?:number;
}

export interface TrainerType{
  trainer:Trainer;
}

function App() {
  const trainer:Trainer = {trainerName:"Someone", tagName:"Mr."}
  const personalTrainer:TrainerType = {trainer:trainer}
  return (
    <>
      <Heading firstLine={'24x7 Fitness Studio'} phoneNumber={1010101010}/>
      <MainContent trainer={trainer}/>
    </>
  )
}

export default App
