import mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import React from 'react';
mobiscroll.settings = {
    theme: 'ios',
    themeVariant: 'light'
}

class AppItem extends React.Component {
    render = () => {
        const app = this.props.app;
        return <mobiscroll.Card>
            <img src={app.img} draggable="false" />
            <mobiscroll.CardContent>{app.name}</mobiscroll.CardContent>
        </mobiscroll.Card>;
    }
}

class CardItem extends React.Component {
    render = () => {
        const app = this.props.app;
        return <div className="mbsc-col-12 mbsc-col-sm-6 mbsc-col-lg-4 mbsc-col-xl-3">
            <mobiscroll.Card>
                <img src={app.img} draggable="false" />
                <mobiscroll.CardContent>
                    <div className="mbsc-card-title">{app.name}</div>
                    <p className="mbsc-txt-muted">{app.about}</p>
                </mobiscroll.CardContent>
            </mobiscroll.Card>
        </div>;
    }
}

class App extends React.Component {
    render = () => {
        return <div className="mbsc-padding">
            <h3>Scrollable list</h3>
            <mobiscroll.ScrollView layout="fixed" itemWidth={134} snap={false}>
                {this.props.birds.map(function(app) {
                    return <AppItem app={app} key={app.id} />;
                })}v
            </mobiscroll.ScrollView>
            <h3>Grid view</h3>
            <div className="mbsc-grid">
                <div className="mbsc-row mbsc-justify-content-center mbsc-no-padding">
                    {this.props.animals.map(function(app) {
                        return <CardItem app={app} key={app.id} />;
                    })}
                </div>
            </div>
        </div>;
    }

    static defaultProps = {
        birds: [{
            id: 1,
            img: 'https://img.mobiscroll.com/demos/gridlayout/toucan.jpg',
            name: 'Toucan'
        }, {
            id: 2,
            img: 'https://img.mobiscroll.com/demos/gridlayout/kingfisher.jpg',
            name: 'Kingfisher'
        }, {
            id: 3,
            img: 'https://img.mobiscroll.com/demos/gridlayout/swift.jpg',
            name: 'Swift'
        }, {
            id: 4,
            img: 'https://img.mobiscroll.com/demos/gridlayout/humming.jpg',
            name: 'Humming bird'
        }, {
            id: 5,
            img: 'https://img.mobiscroll.com/demos/gridlayout/columbidae.jpg',
            name: 'Columbidae'
        }, {
            id: 6,
            img: 'https://img.mobiscroll.com/demos/gridlayout/hornbill.jpg',
            name: 'Hornbill'
        }, {
            id: 7,
            img: 'https://img.mobiscroll.com/demos/gridlayout/spoonbill.jpg',
            name: 'Spoonbill'
        }, {
            id: 8,
            img: 'https://img.mobiscroll.com/demos/gridlayout/bee-eater.jpg',
            name: 'Bee-eater'
        }, {
            id: 9,
            img: 'https://img.mobiscroll.com/demos/gridlayout/parrot.jpg',
            name: 'Parrot'
        }, {
            id: 10,
            img: 'https://img.mobiscroll.com/demos/gridlayout/goose.jpg',
            name: 'Goose bird'
        }, {
            id: 11,
            img: 'https://img.mobiscroll.com/demos/gridlayout/woodpecker.jpg',
            name: 'Woodpecker'
        }, {
            id: 12,
            img: 'https://img.mobiscroll.com/demos/gridlayout/penguin.jpg',
            name: 'Penguin'
        }],
        animals: [{
            id: 1,
            img: 'https://img.mobiscroll.com/demos/gridlayout/okapi.jpg',
            name: 'Okapi',
            about: 'The okapi is an animal native to the Democratic Republic of Congo in Africa.'
        }, {
            id: 2,
            img: 'https://img.mobiscroll.com/demos/gridlayout/dragon.jpg',
            name: 'The Blue Dragon',
            about: 'These little dragon-like creatures can be found in the Indian Pacific Oceans.'
        }, {
            id: 3,
            img: 'https://img.mobiscroll.com/demos/gridlayout/wolf.jpg',
            name: 'The Maned Wolf',
            about: 'The maned wolf is often found in south, CW, and SE parts of Brazil.'
        }, {
            id: 4,
            img: 'https://img.mobiscroll.com/demos/gridlayout/fossa.jpg',
            name: 'Fossa',
            about: 'A carnivorous animal located in Madagascar related to the Mongoose.'
        }, {
            id: 5,
            img: 'https://img.mobiscroll.com/demos/gridlayout/shark.jpg',
            name: 'Goblin Shark',
            about: 'Last representative of sharks that lived about 125 million years ago.'
        }, {
            id: 6,
            img: 'https://img.mobiscroll.com/demos/gridlayout/deer.jpg',
            name: 'Leaf Deer',
            about: 'The leaf deer is usually found in dense forests in the NW of Putao.'
        }, {
            id: 7,
            img: 'https://img.mobiscroll.com/demos/gridlayout/spidercrab.jpg',
            name: 'Japanese Spider Crab',
            about: 'As the name suggestions, it inhabits the waters surrounding Japan.'
        }, {
            id: 8,
            img: 'https://img.mobiscroll.com/demos/gridlayout/rabbit.jpg',
            name: 'Angora Rabbit',
            about: 'These rabbits originated in Turkey but managed to spread throughout Europe.'
        }, {
            id: 9,
            img: 'https://img.mobiscroll.com/demos/gridlayout/axolotl.jpg',
            name: 'Axolotl',
            about: 'The "Mexican salamander" is often spotted in lakes around Mexico.'
        }, {
            id: 10,
            img: 'https://img.mobiscroll.com/demos/gridlayout/liger.jpg',
            name: 'Liger',
            about: 'The liger is a real animal created by a lion and a tiger mating.'
        }, {
            id: 11,
            img: 'https://img.mobiscroll.com/demos/gridlayout/panda.jpg',
            name: 'Red Panda',
            about: 'This cute, small panda lives in the eastern Himalayas and SW China.'
        }, {
            id: 12,
            img: 'https://img.mobiscroll.com/demos/gridlayout/superbird.jpg',
            name: 'Superbird',
            about: 'Found in New Guinea, it is unsure how many of these birds there are.'
        }]
    };
}
