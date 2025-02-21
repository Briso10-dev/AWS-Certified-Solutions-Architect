const sharp = require("sharp"); 
const path = require("path"); 
const AWS = require("aws-sdk"); 

// Set the REGION 
AWS.config.update({ 
 region: "eu-west-3", 
}); 
const s3 = new AWS.S3(); 
const processedImageBucket = "fichiers-traites-briso"; 

// This Lambda function is attached to an S3 bucket. When any object is added in the S3 
// bucket this handler will be called. When an image file is added in the S3 bucket, this function 
// creates a square thumbnail of 300px x 300px size and it also creates a cover photo of 
// 800px x 800px size. It then stores the thumbnail and coverphotos back to another S3 bucket 
// at the same location as the original image file. 
exports.handler = async (event, context, callback) => { 
 console.log("An object was added to S3 bucket", JSON.stringify(event)); 
 let records = event.Records; 
 // Each record represents one object in S3. There can be multiple 
 // objects added to our bucket at a time. So multiple records can be there 
 // How many records do we have? Each record represent one object in S3 
 let size = records.length; 

 for (let index = 0; index < size; index++) { 
  let record = records[index]; 
  console.log("Record: ", record); 
  // Extract the file name, path and extension 
  let fileName = path.parse(record.s3.object.key).name; 
  let filePath = path.parse(record.s3.object.key).dir; 
  let fileExt = path.parse(record.s3.object.key).ext; 

  console.log("filePath:" + filePath + ", fileName:" + fileName + ", fileExt:" + fileExt); 

  // Read the image object that was added to the S3 bucket 
  let imageObjectParam = { 
   Bucket: record.s3.bucket.name, 
   Key: record.s3.object.key, 
  }; 

  let imageObject = await s3.getObject(imageObjectParam).promise(); 
  // Use sharp to create a 300px x 300px thumbnail 
  // withMetadata() keeps the header info so rendering engine can read 
  // orientation properly. 
  let resized_thumbnail = await sharp(imageObject.Body) 
   .resize({ 
    width: 300, 
    height: 300, 
    fit: sharp.fit.cover, 
   }) 
   .withMetadata() 
   .toBuffer(); 
  console.log("thumbnail image created"); 

  // Use sharp to create a 800px x 800px coverphoto 
  let resized_coverphoto = await sharp(imageObject.Body) 
   .resize({ 
    width: 800, 
    height: 800, 
    fit: sharp.fit.cover, 
   }) 
   .withMetadata() 
   .toBuffer(); 
  console.log("coverphoto image created"); 

  // The processed images are written to serverless-image-processing-bucket. 
  let thumbnailImageParam = { 
   Body: resized_thumbnail, 
   Bucket: processedImageBucket, 
   Key: fileName + "_thumbnail" + fileExt, 
   CacheControl: "max-age=3600", 
   ContentType: "image/" + fileExt.substring(1), 
  }; 
  let result1 = await s3.putObject(thumbnailImageParam).promise(); 
  console.log("thumbnail image uploaded:" + JSON.stringify(result1)); 

  let coverphotoImageParam = { 
   Body: resized_coverphoto, 
   Bucket: processedImageBucket, 
   Key: fileName + "_coverphoto" + fileExt, 
   CacheControl: "max-age=3600", 
   ContentType: "image/" + fileExt.substring(1), 
  }; 
  let result2 = await s3.putObject(coverphotoImageParam).promise(); 
  console.log("coverphoto image uploaded:" + JSON.stringify(result2)); 
 } 
};
