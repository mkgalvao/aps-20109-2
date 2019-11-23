import * as React from 'react';
import ImageUploader from 'react-images-upload';
import './input.css';
import axios from 'axios'

export class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pictures: [], userType: 'visitante' };
        this.onDrop = this.onDrop.bind(this);
        this.make_request = this.make_request.bind(this);
        this.onSaveImage = this.onSaveImage.bind(this);

    }

    make_request(base64Image) {
        const url = 'http://192.168.15.13:5000/api/login' //local service 
        const body = {

            "image": base64Image
        }
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        return axios.post(url, body);
    }

    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    onSaveImage(e) {
        e.preventDefault();
        const picture = this.state.pictures;
        let file = picture[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);


        reader.onloadend = () => {
            let base64result = reader.result.split(',')[1];
            console.log(base64result);

            this.make_request(base64result).then((response) => {
                
                console.log(response);
                const user = response.data;

                if (user.role === 'superuser') {
                    console.log('super')
                    return (window.location.href = "/n3")
                } else if (user.role === 'user') {
                    console.log('user')
                    return (window.location.href = "/n2")
                } else if (user.role === 'guest') {
                    console.log('visitante')
                    return (window.location.href = "/n1")
                } else {
                    return alert('Usuário não encontrado')
                }
            }, (error) => {
                console.log(error);
            });
        }
    }

    render() {
        return (
            <form className="Uploader-container" ref="form" onSubmit={this.onSaveImage}>
                <h3 className="Login-title">Para fazer o login entre com a imagem do seu polegar direito</h3>
                <ImageUploader
                    withIcon={true}
                    withPreview={true}
                    buttonText={'Choose yor finger print image'}
                    onChange={this.onDrop}
                    imgExtension={['.jpg', '.gif', '.png', '.tif']}
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