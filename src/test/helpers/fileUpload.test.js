import cloudinary from 'cloudinary';
import { fileUpload } from './../../helpers/fileUpload';

cloudinary.config({ 
  cloud_name: 'dwvifj1ka', 
  api_key: '113117132931265', 
  api_secret: 'oaQHVFjmsgKaLZjEelNuxDOT-S0'
});

describe('Pruebas en fileUpload', () => {

  test('debe de cargar un archivo y retornar el URL', async () => {
    
    const response = await fetch('https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png');
    const blob = await response.blob();

    const file = new File([blob], 'foto.png');
    const url = await fileUpload(file);

    expect(typeof url).toBe('string');
    //Borrar la imagen por ID
    
    const segments = url.split('/');
    const imageId = segments[segments.length -1].replace('.png', '');

    cloudinary.v2.api.delete_resources(imageId, {}, () => {
      // done();
    });

  });

  test('debe de retornar un error', async() => {

    const file = new File([], 'foto.png');
    const url = await fileUpload(file);
    expect(url).toBe(null);

  });


});