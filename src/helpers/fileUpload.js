//Helper para subir imagen a cloudinary
export const fileUpload = async (file) => {

   const cloudUrl = 'https://api.cloudinary.com/v1_1/dwvifj1ka/upload';

   const formData = new FormData();
   formData.append('upload_preset', 'react-journal-app');
   formData.append('file', file);

   try {
      const resp = await fetch(cloudUrl, {
         method: 'POST',
         body: formData
      });

      if(resp.ok) {
         const cloudResp = await resp.json();
         return cloudResp.secure_url;
      } else {
         throw await resp.json();
      }

   } catch (error) {
      // console.log(error)
      throw error;
   }

   // return url de la imagen o todoa la resp de cloudinary
}