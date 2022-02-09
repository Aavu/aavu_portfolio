export const projects = [
    {
        title: "Design of Hathaani",
        year: 2021,
        image: null,
        category: "research",
        youtubeID: "n9kNsb_Rg1M",
        description: <>
            <p>A novel robotic violinist that is designed to play Carnatic music - a music system popular in the southern part of India. The robot plays the D string and uses a single finger mechanism inspired by the Chitravina - a fretless Indian lute. A fingerboard traversal system with a dynamic finger tip apparatus enables the robot to play gamakas - pitch based embellishments in-between notes, which are at the core of Carnatic music. A double roller design is used for bowing which reduces space, produces a tone that resembles the tone of a conventional violin bow, and facilitates super human playing techniques such as infinite bowing. The design also enables the user to change the bow hair tightness to help capture a variety of performing techniques in different musical styles. Objective assessments and subjective listening tests were conducted to evaluate our design, indicating that the robot can play gamakas in a realistic manner and thus, can perform Carnatic music.</p>
            <p>Here is the <a href="https://nime.pubpub.org/pub/225tmviw">Published Paper</a>.</p>
        </>
    },
    {
        title: "Google Arm",
        year: 2021,
        image: null,
        category: "research",
        youtubeID: "o623TB-mY6A",
        description: <>
            <p>
                Jason Barnes (@cybrnetx), a drummer and composer from Atlanta, lost his lower right arm after an electrical accident in 2012. Determined to continue pursuing music, Jason teamed up with a group of Georgia Tech researchers to create a custom, TensorFlow-powered drumming arm that enables him to drum almost as naturally as if he was playing with his own arm.
            </p>

            <p>Learn more about how Jason and others are leading the way in accessible technology at <a target="_blank" href="https://goo.gle/forwardrhythm">https://goo.gle/forwardrhythm</a> </p>
        </>
    },
    {
        title: "Skywalker",
        year: 2018,
        image: "/images/projects/skywalker.png",
        category: "research",
        youtubeID: "R_7UnBbh6EI",
        description: <>
            <p>This is my graduate research assistant project for the Fall 2018. I am working under Prof.Gil Weinberg at the Georgia Tech Center for Music Technology.</p>
            <p>I am currently working on the extension of a previous work.</p>
            <p>This demonstration uses support vector machines to classify finger movements.</p>
            <p>I am working on a Convolutional Neural Network based regression model to respond to finger by finger movements. The goal is to minimize latency and maximize correlation.</p>
        </>
    },
    {
        title: "MIDI Player",
        year: 2020,
        image: null,
        category: "project",
        youtubeID: "iFSt7ScsCPo",
        description: <><p>A Simple Midi player demonstration - Made for Audio Software Engineering Class Project</p></>
    },
    {
        title: "Cydio - Interactive music through biking!",
        year: 2019,
        image: null,
        category: "project",
        youtubeID: "MIjduD4keOA",
        description: <><p>Cydio is a bicycle based system that enables cyclists of alllevels to make music just by riding, the way they alwaysdo. Usually, cyclists listen to music that has already beengenerated and recorded and we wanted to change that. Wewanted the user to make the music based on the way theyride, allowing every cyclist to make their own unique music.The system we created includes several external sensors andthe phone’s sensors to map the different actions that are donewhile on a ride to all kinds of beautiful sounds. The systemtakes the speed, handlebar tilt, the lean angle on the bikewhen cornering, the terrain and the position on the saddleand assigns different effects and audio files to them. It is alsoextremely portable as the sensors talk to a simple iOS appfrom where the sounds are generated and manipulated from.The user can easily listen to it on their earphones, iPhonespeaker or an external speaker. The user will have to mounttheir iPhone onto their bike’s handlebar and open the appto start. We know that listening to music while riding isdangerous, so we created a function that feeds in externalsounds at all times and if a loud sound such as honking or asiren is heard, the music automatically turns off.</p></>
    },
    {
        title: "Chutti - The Robot Arm",
        year: 2018,
        image: "/images/projects/chutti.jpeg",
        category: "project",
        youtubeID: "fzmLcXv06QY",
        description: <><p>The robot is made using the Lego EV3. It runs Linux and is programmed using python 3.</p>

            <p>The iPad interface is designed and programmed using the TouchOSC. It communicates to NodeMCU wirelessly which in turn is programmed to translate OSC to the respective chords in MIDI format. This then can be hooked up to any MIDI sound module (VST is used in this case) to trigger samples.</p>

            <p>
                <div>"Kadhal Oviyam"</div>
                <div>Composed by maestro Ilayaraja</div>
            </p>

            <p>
                <div>Performed by</div>
                <div>Sa Rangappriya - violin</div>
                <div>Sa Rangappriya - violin</div>
                <div>Raghavasimhan Sa - bass</div>
                <div>"Chutti" - The Robot - iPad</div>
            </p></>
    },
    {
        title: "Digital Theremin",
        year: 2017,
        image: "/images/projects/theremin.jpeg",
        category: "project",
        youtubeID: "7AyxNu-CI7s",
        description: <><p>This one has a couple of new stuffs!
            It’s the world’s first theremin with which, an editable recording can be done! That is, like any other MIDI instrument, the performance can be edited and tweaked!</p>

            <p>It uses 2 Ultrasonic sensors. One for the pitch and the other for the expression.</p>

            <p>The VST and the interface is made using Max MSP. It includes a Synthesizer engine which emulates a tone of a conventional theremin.</p>

            <p>The expression in my theremin is reversed. In a conventional theremin, the loudness increases as you move away from the volume-antenna. But here, it reduces. Thus you don’t have to keep holding the instrument when not playing.</p></>
    },
    // {
    //     title: "Home Automation with Raspberry Pi",
    //     year: 2017,
    //     image: "/images/projects/homekit.webp",
    //     category: "project",
    //     youtubeID: "7KWv5gIq-8o",
    //     description: <><p>Description goes here</p></>
    // },
    {
        title: "Xpression Controller for GR55",
        year: 2017,
        image: "/images/projects/gr55.jpeg",
        category: "project",
        youtubeID: "p0Jsh0odscA",
        description: <><p>This is the prototype demo of the Xpression Controller hardware that I made for the Roland GR55. It captures the envelope of the tone (energy of the signal which is proportional to bowing) and controls the attack, amplitude of the sustain and release accordingly.</p>

            <p>It also minimises the false triggering of PCM tones due to the impulse nature of the response produced by it's source.</p>

            <p>The next step would be acquiring data from each string separately and controlling the parameters independently!</p>

            <p>I am also building the filter buffer (linked below) and planning to put it all together as one ultimate "must have" accessory for GR55 especially for Violinists!</p></>
    },
    // {
    //     title: "Light Bow",
    //     year: 2017
    // },
    // {
    //     title: "Harpiolin",
    //     year: 2016
    // },
    // {
    //     title: "Fire Shooter Game Controller",
    //     year: 2015
    // },
    {
        title: "Blocks World Redox",
        year: 2014,
        image: "/images/projects/redox.jpeg",
        category: "research",
        youtubeID: "3uWGQqhEWCU",
        description: <><p>
            During my undergrad study in the year 2014 at MIT, I was working on this project with Professor Larry Sass and Dr. Daniel Smithwick. <br />
            Our goal was to make the robot compliment human creativity. The robot will not just do what it is programmed for, but analyze the scenario and respond to it accordingly. This is in basic sense called as “creativity”. In the initial stages, we were aiming towards it solving simple scenarios such as mirroring, replicating, and arranging the blocks, detecting the right ones for that place, etc. The robot accomplishes tasks such as copying, mirroring, rotating the set of 2D shapes with respect to its shape and position in the 2D axis. It will pick up the right shape distinguished by its distinct colors and shapes from the pile and place it in the right place in the 2D axis with respect to the original (reference) arrangement provided.<br />
            My part of the project was to design a rule based system that analyses the scene and detect boundaries, reference line, position and shapes of objects in 2d space, which would be input to the robot to move it to that point with the help of reverse kinematics.</p></>
    },
]