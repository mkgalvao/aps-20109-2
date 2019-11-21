import * as React from 'react';
import ImageUploader from 'react-images-upload';
import '../inputComponent/input.css'
import { Base64 } from 'js-base64';
import { Redirect } from 'react-router-dom'

 
export class Input extends React.Component {
    constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
         this.OnSaveImage= this.OnSaveImage.bind(this);
    }
    
 
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    OnSaveImage(e) {
        e.preventDefault();
        if(this.state.pictures !== [] && this.state.pictures.length === 1) {
            console.log(this.state.pictures)
            const a = this.state.pictures
            console.log(a[0].name);
            const base64Image = Base64.encode(a[0]);
            console.log(base64Image);
            console.log(' faz a request');          
            console.log('redireciona pra pagina de acordo com o perfil');
            
            this.setState({
                pictures : [],
            })

             
        }

        else {
            console.log('we need a error messsage here')
            this.setState({
                pictures : [],
            })
        }
    }


    render() {
        return (
          <form className="Uploader-container" ref="form" onSubmit={this.OnSaveImage}>
            <h3 className="Login-title">Para fazer o login entre com a imagem do seu polegar direito</h3>
            <ImageUploader
                withIcon={true}
                withPreview={true}
                buttonText= {'Choose yor finger print image'}
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                fileSizeError={'Maybe file size is to big'}
                fileTypeError={'This type of file is not accepted'}
                singleImage={true}
            />
            <button type="submit" className="Submit-button"> Fazer Login </button>
            </form>
        );
    }
}