import {  tasks } from "../api/data"
import TaskCart from "../components/TaskCart/TaskCart"
import { Task } from "../model/Task"

export const Home: React.FC = () => {
  return (
    <div className=" container flex flex-col items-center  main">
      <div className="illustration h-80 flex gap-3 justify-center">
        {/* <img src="/contract-3002431_640.jpg" alt=""/> */}
        <div className="desc">
          <p>
                    Générez des documents administratifs en quelques secondes seulement. Simplifiez votre vie professionnelle avec notre plateforme intuitive et efficace. Découvrez nos modèles prêts à l'emploi dès maintenant !

          </p>
        <div className="submit">
          abonnez-vous 
        </div>
        </div>
      </div>
      <div className="content pt-10 flex gap-2 ">
        {tasks.map((task:Task)=>{
          return <TaskCart key={task._id} task={task}/>
        })}

      </div>

    </div>
  )
}
