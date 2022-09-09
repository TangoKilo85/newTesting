import React from "react";
import kingsIsland from "../assets/kingsIsland.jpg"
import coneyIslandPic from "../assets/coneyIslandPic.jpg"
import '../styles/entertainment.css';

export const Entertainment = () => {
    return (
        <div>
            <div className="home">
                <div className="entertainment-banner">
                    <div className="aboutContainer">
                        <h1>Entertainment</h1>
                    </div>
                </div>
            <div className="entertainmentHeader">
                <h1>Looking for Fun? Check out these Entertaining Hotspots!</h1>
            </div>

            <div className="entertainmentCards">
                <div className="container-card">
                    <h5 className="card-title">King's Island</h5>
                    <img src={kingsIsland} className="card-img-top" alt="King's Island" />
                </div>
                <div className="card-body">
                    <p className="card-text">Home to more than 100 incredible rides and attractions, Kings Island boasts the perfect combination of world-class thrills and family-friendly fun! Experience some of the wildest roller coasters in the world, including a brand new record breaker in Orion and longstanding legends like The Beast, then explore an award-winning kids' area, enormous accompanying waterpark, and so much more!</p>
                </div>
                    <div class="card-body">
                    <a href="https://www.visitkingsisland.com/" target="_blank" rel="noreferrer" class="card-link">Website</a>
                    </div>
            </div>

            <div className="entertainmentCards">
                <div className="container-card">
                    <h5 className="card-title">Coney Island Park</h5>
                    <img src={coneyIslandPic} className="card-img-top" alt="Coney Island Park" />
                </div>
                <div className="card-body">
                    <p className="card-text">Escape the summer heat with Cincinnati's Coney Island. You can swim in North America’s largest recirculating pool, race down more than ¼ of a mile of water slides, and create mammoth splashes in Cannonball Cove. Looking to really get drenched? You can play with Typhoon Tower’s 70 interactive spray-stations or get soaked by the world’s largest erupting hydro storm as it releases 1,300 gallons of cascading water from a 33-foot tower! On the weekends, if you’re looking for a change of pace, you can play a round of mini golf or enjoy tranquil Lake Como on a Storybook Paddleboat on Lake Como.</p>
                </div>
                    <div class="card-body">
                    <a href="https://coneyislandpark.com/" target="_blank" rel="noreferrer" class="card-link">Website</a>
                    </div>
            </div>

            <div className="entertainmentCards">
                <div className="container-card">
                    <h5 className="card-title">Linder Tennis Center</h5>
                    <img src={coneyIslandPic} className="card-img-top" alt="Coney Island Park" />
                </div>
                <div className="card-body">
                    <p className="card-text">The Lindner Family Tennis Center at Lunken Playfield (LTC), a Cincinnati Recreation Commission facility, provides many tennis activities to match your needs, interest and skill level. Recognized by Cincinnati Magazine in their “Best Of The City” December 2015 publication and by the USTA as the 2003 National Public Facility of the Year. LTC, a 16 court facility with 8 hard courts and 8 Har-Tru clay courts, is home to a city wide web based adult ladder league with four skill levels, 12 USTA Adult and Junior Tournaments including The Cincinnati Adult Championship (The Met), weekly social events, Junior Fun Camps and instruction led by USPTA Professionals and many other enriching tennis activities for the entire family. The LTC is the only public facility in the greater Cincinnati metro-plex that offers Har-Tru clay court play.</p>
                </div>
                    <div class="card-body">
                    <a href="https://lindner.tenniscores.com/" target="_blank" rel="noreferrer" class="card-link">Website</a>
                    </div>
            </div>
        </div>
        </div>
    )
}

export default Entertainment