import axios from 'axios';

export const getSelfie = async () => {
  try {
    return await axios.get(`/api/selfie`);
  } catch (error) {
    return 'error';
  }
};

export const getAlbumCover = async () => {
  try {
    return await axios.get(`/api/albumCover`);
  } catch (error) {
    return 'error';
  }
};

export const getOfficialData = async () => {
  try {
    return await axios.get(`/api/official_data`)
  } catch (error) {
    return 'error'
  }
}

export const getArena = async () => {
  try {
    return await axios.get(`/api/arena`);
  } catch (error) {
    return 'error';
  }
};

export const getArenaBehind = async () => {
  try {
    return await axios.get(`/api/arena_behind`);
  } catch (error) {
    return 'error';
  }
};

export const getBurberryBehind = async () => {
  try {
    return await axios.get(`/api/burberry_behind`);
  } catch (error) {
    return 'error';
  }
};

export const getCosmopolitan = async () => {
  try {
    return await axios.get(`/api/cosmopolitan`);
  } catch (error) {
    return 'error';
  }
};

export const getCosmopolitanBehind = async () => {
  try {
    return await axios.get(`/api/cosmopolitan_behind`);
  } catch (error) {
    return 'error';
  }
};

export const getMaps = async order => {
  try {
    return await axios.get(
      `/api/${order === 'first' ? 'maps_200419' : 'maps_221122'}`
    );
  } catch (error) {
    return 'error';
  }
};

export const getVogue = async order => {
  try {
    return await axios.get(
      `/api/${order === 'first' ? 'vogue_200527' : 'vogue_210125'}`
    );
  } catch (error) {
    return 'error';
  }
};

export const getVogueBehind = async order => {
  try {
    return await axios.get(
      `/api/${
        order === 'first' ? 'vogue_behind_200527' : 'vogue_behind_210125'
      }`
    );
  } catch (error) {
    return 'error';
  }
};

export const getDazed = async order => {
  try {
    return await axios.get(
      `/api/${order === 'first' ? 'dazed_200818' : 'dazed_210827'}`
    );
  } catch (error) {
    return 'error';
  }
};

export const getDazedBehind = async order => {
  try {
    return await axios.get(
      `/api/${
        order === 'first' ? 'dazed_behind_200818' : 'dazed_behind_210827'
      }`
    );
  } catch (error) {
    return 'error';
  }
};

export const getSingles = async () => {
  try {
    return await axios.get(`/api/singles`);
  } catch (error) {
    return 'error';
  }
};

export const getSinglesBehind = async () => {
  try {
    return await axios.get(`/api/singles_behind`);
  } catch (error) {
    return 'error';
  }
};

export const getUrbandecay = async () => {
  try {
    return await axios.get(`/api/urbandecay`);
  } catch (error) {
    return 'error';
  }
};

export const getUrbandecayBehind = async () => {
  try {
    return await axios.get(`/api/urbandecay_behind`);
  } catch (error) {
    return 'error';
  }
};

export const getFirstlook = async () => {
  try {
    return await axios.get(`/api/firstlook`);
  } catch (error) {
    return 'error';
  }
};

export const getFirstlookBehind = async () => {
  try {
    return await axios.get(`/api/firstlook-behind`);
  } catch (error) {
    return 'error';
  }
};
