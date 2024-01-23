import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImage from './Images/alexa.jpeg';
import CortanaImage from './Images/cortana.jpeg';
import SiriImage from './Images/siri.jpeg';



function App(){
    return(
       <div>
        <section className='hero is-primary'>
            <div className='hero-body'>
                <p className='title'>Personal Digital Assistants</p>
            </div>
        </section>
       
     
        <div className='container'>
            <section className='section'>
                <div className='columns'>
                    <div className='column is-4'>
                    <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage} description="Alexa was created by Amazon and helps you to buy thibgs"/>
                    </div>
                    <div className='column is-4'>
                    <ProfileCard title="Cortana" handle="@cortana32" image={CortanaImage} description="Cortana was made by Microsoft, Who knows what is does??" />  
                    </div>
                    <div className='column is-4'>
                    <ProfileCard title="Siri" handle="@siri45" image={SiriImage} description="Siri was made by Apple and is being phased out"/>

                    </div>
                </div>

            </section>

        </div>
        
        

       </div>
    );
}

export default App;