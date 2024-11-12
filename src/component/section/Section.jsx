import Left from "./Left/Left"
import Right from "./Right/Right";
import './section.css';

export default function Section(){
    return (
        <div id="sectionTag">
           <h1> this is section tag</h1>

            <Left/>

            <Right/>
        </div>


    )
}