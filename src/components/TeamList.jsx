import TeamCard from "./TeamCard"
import "../App.css"
function TeamList({members}){
    return(
        <section className="team-list">
            {/* loop members array and showcase within the team card */}
            {/* .map method to iterate the list implementing jsx functions to each member in the list */}
            {/* {} enable us to write js operations inside html */}
            {/* when dealing with list in react always indicate a key value for the returned value : unique identifier of each item in the list  */}
            {members.map((member) => (
                <TeamCard member = {member} key = {member.id}/>
            ))}
        </section>
        
    )
}

export default TeamList