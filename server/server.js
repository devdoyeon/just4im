const express = require('express');
const AWS = require('aws-sdk');

require('dotenv').config();

const app = express();
const port = 5000;

// aws region 및 자격증명 설정
AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: 'ap-northeast-2',
});

const s3 = new AWS.S3();
const bucketName = 'just4im';

//= 이미지 가져오기
const getImages = (res, folderPath) => {
  const listObjectsParams = {
    Bucket: bucketName,
    Prefix: folderPath,
  };

  s3.listObjectsV2(listObjectsParams, (err, data) => {
    if (err) {
      console.log('Error:', err);
      res.status(500).json({ error: 'Failed to fetch image URLs' });
    } else {
      const imageUrls = data.Contents.map(object => {
        return s3.getSignedUrl('getObject', {
          Bucket: bucketName,
          Key: object.Key,
          Expires: 86400,
        });
      });
      res.json({ imageUrls });
    }
  });
};

// 셀카
app.get('/selfie', (req, res) => {
  getImages(res, 'selfie/');
});

// 앨범 커버
app.get('/albumCover', (req, res) => {
  getImages(res, 'albumCover/');
});

// 공식 이미지
app.get('/official_data', (req, res) => {
  getImages(res, 'official_data/');
});

//~ 화보 < 순서 확인해서 endPoint 다시 정렬하기
// 아레나/비하인드
app.get('/arena_behind', (req, res) => {
  getImages(res, 'photoShoot/arena_behind/');
});

// 아레나
app.get('/arena', (req, res) => {
  getImages(res, 'photoShoot/arena/');
});

// 버버리/비하인드
app.get('/burberry_behind', (req, res) => {
  getImages(res, 'photoShoot/burberry_behind/');
});

// 코스모폴리탄/비하인드
app.get('/cosmopolitan_behind', (req, res) => {
  getImages(res, 'photoShoot/cosmopolitan_behind/');
});

// 코스모폴리탄
app.get('/cosmopolitan', (req, res) => {
  getImages(res, 'photoShoot/cosmopolitan/');
});

// 2020.04.19 맵스
app.get('/maps_200419', (req, res) => {
  getImages(res, 'photoShoot/maps_200419/');
});

// 2020.05.27 보그
app.get('/vogue_200527', (req, res) => {
  getImages(res, 'photoShoot/vogue_200527/');
});

// 2020.05.27 보그/비하인드
app.get('/vogue_behind_200527', (req, res) => {
  getImages(res, 'photoShoot/vogue_behind_200527/');
});

// 2020.08.18 데이즈드
app.get('/dazed_200818', (req, res) => {
  getImages(res, 'photoShoot/dazed_200818/');
});

// 2020.08.18 데이즈드/비하인드
app.get('/dazed_behind_200818', (req, res) => {
  getImages(res, 'photoShoot/dazed_behind_200818/');
});

// 2021.01.25 보그
app.get('/vogue_210125', (req, res) => {
  getImages(res, 'photoShoot/vogue_210125/');
});

// 2021.01.25 보그/비하인드
app.get('/vogue_behind_210125', (req, res) => {
  getImages(res, 'photoShoot/vogue_behind_210125/');
});

// 2021.08.27 데이즈드
app.get('/dazed_210827', (req, res) => {
  getImages(res, 'photoShoot/dazed_210827/');
});

// 2021.08.27 데이즈드/비하인드
app.get('/dazed_behind_210827', (req, res) => {
  getImages(res, 'photoShoot/dazed_behind_210827/');
});

// 2022.11.22 맵스
app.get('/maps_221122', (req, res) => {
  getImages(res, 'photoShoot/maps_221122/');
});

// 싱글즈/비하인드
app.get('/singles_behind', (req, res) => {
  getImages(res, 'photoShoot/singles_behind/');
});

// 싱글즈
app.get('/singles', (req, res) => {
  getImages(res, 'photoShoot/singles/');
});

// 어반디케이
app.get('/urbandecay', (req, res) => {
  getImages(res, 'photoShoot/urbandecay/');
});

// 어반디케이/비하인드
app.get('/urbandecay_behind', (req, res) => {
  getImages(res, 'photoShoot/urbandecay_behind/');
});

// 퍼스트룩
app.get('/firstlook', (req, res) => {
  getImages(res, 'photoShoot/firstlook/');
});

// 퍼스트룩/비하인드
app.get('/firstlook_behind', (req, res) => {
  getImages(res, 'photoShoot/firstlook_behind/');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
