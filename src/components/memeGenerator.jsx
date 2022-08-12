import React, { Component } from 'react';


class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state  ={
      topText: '',
      bottomText: '',
      randomImage: 'http://i.imgflip.com/1bij.jpg',
      images: [],
    }
    // this.getImage = this.getImage.bind(this)
    this.changeImage = this.changeImage.bind(this)
    this.handleChange = this.handleChange.bind(this)
    // this.fetching = this.fetching.bind(this)
  }

  // async getImage() {
  //   let response = await fetch('http://i.imgflip.com/1bij.jpg');
  //   let data = response.json();
  //   console.log(data)
  // }

  handleChange(e) {
    const {name, value} = e.target;
    this.setState ({ [name] : value}) 
  }

  changeImage(e) {
    e.preventDefault()
    let index = Math.floor( Math.random() * 100 ) + 1
    console.log(index)
    let newImage = this.state.images[index].url;
    this.setState( {randomImage: newImage})
  }

  componentDidMount() {
    // this.getImage()
    fetch('https://api.imgflip.com/get_memes', {
      method: 'GET',
      // mode: 'no-cors',
      // headers: {
      //   'Content-type': 'application/json',
      //   'Access-Control-Allow-Origin': '*',
      //   'Access-Control-Allow-Headers': 'Content-Type',
      //   'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      //   'Authorization': 'Bearer key',
      // }
    }).then(async response => { if (response.ok) {
        console.log('Ok')
        try {
         const data = await response.json()
         const {memes} = data.data
         this.setState( {images: memes})
         console.log('response data?', data)
        } catch(error) {
         console.log('Error happened here!')
         console.error(error)
        }
      } else {
        console.log(response.status)
      }
    })

    // this.fetching();
  }


  // fetching() {
  //   let res = new XMLHttpRequest();
  //   res.onload = function() {
  //     if (res.status == 200) {
  //       console.log(res)
  //     } else {
  //       console.log(res.status, "Error Occured")
  //     }
  //   }

  //   res.open("GET", 'https://api.imgflip.com/get_memes'),
  //   res.send();
  // }

  render() { 
    return(
      <div className = 'meme-container'>
        <h2 id = 'topText'>{this.state.topText}</h2>
        <img src= {this.state.randomImage} alt="meme-image"/>
        <h2 id = 'bottomText'>{this.state.bottomText}</h2>
        <form action="" onSubmit = {this.changeImage}>

          <input 
            type="text" 
            name = 'topText' 
            value = {this.state.topText} 
            onChange = {this.handleChange} 
            placeholder = 'top text here'
          />

          <input 
            type="text" 
            name = 'bottomText' 
            value = {this.state.bottomText} 
            onChange = {this.handleChange} 
            placeholder = 'button text here'/
          >

          <button>Generate</button>
        </form>
      </div>
    );
  }
}
 
export default MemeGenerator;