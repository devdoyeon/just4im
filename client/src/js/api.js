import axios from 'axios';

export const getSelfiesAPI = async () => {
  try {
    return await axios.get(`/api/selfie`);
  } catch (error) {
    return 'error';
  }
};

export const getAlbumCoversAPI = async () => {
  try {
    return await axios.get(`/api/albumCover`);
  } catch (error) {
    return 'error';
  }
};
