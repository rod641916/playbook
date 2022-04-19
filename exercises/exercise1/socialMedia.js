const Twitter = {
  twitter: {
    user: "Rodrigo",
    username: "rod641916",
    age: 23,
    bio: "Hola a todos feos uwu",
  },

  trending_topic: {
    name: "Toy Story",
    category: "animation",
    number: 1,
  },
  hashtag: {
    name: "Rammstein",
    category: "Music",
    date: new Date()
  },
  getInformacion: function () {
      return `This twitter is from ${this.twitter.username}, this frist tending topic was ${this.trending_topic.name} wuth the hashtag ${this,this.hashtag.name}`
  },
};


const Facebook ={
    face:{
        user: "Rodrigo",
        username: "rod641916",
        age: 23,
        bio: "Hola a todos feos uwu",
    },
    post:{
        date: new Date(),
        post:'Hola a todos, los odio pero con cariño uwu'
    },
    biography:{
        age:23,
        city:"Mexico City",
        job: "CFE",
        relation_ship:"Soltero"
    },

    getInfoFacebook: function(){
        return `This Facebook is from ${this.face.user}, the last post it was "${this.post.post}"`
    },
};

const Uber={
    profile:{
        username:"royer_tr",
        number:547896325,
        no_card: 5478962158545
    },
    travel:{
        first_location:"House",
        last_location:"Zocalo"
    },

    getInfoUber(){
        return `This is the user ${this.profile.username}, the payment is from the card with number ${this.profile.no_card}, to ${this.travel.first_location} to ${this.travel.last_location}`
    }
}


console.log("----------------------------------------")
console.log(Twitter.getInformacion());
console.log("----------------------------------------")
console.log(Facebook.getInfoFacebook());
console.log("----------------------------------------")
console.log(Uber.getInfoUber())
console.log("----------------------------------------")