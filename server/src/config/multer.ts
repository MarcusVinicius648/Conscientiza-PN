/* https://blog.rocketseat.com.br/upload-de-imagens-no-s3-da-aws-com-node-js/ */

import multer from 'multer';
import path from 'path';
import crypto from 'crypto';
import aws from 'aws-sdk';
import multerS3 from 'multer-s3';

const MAX_SIZE_TWO_MEGABYTES = 2 * 1024 * 1024;

const storageTypes = {
    local: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, "..", "..", "tmp", "uploads"));
        },
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err, '');

                const fileName = `${hash.toString("hex")}-${file.originalname}`;

                cb(null, fileName);
            });
        },
    }),             
    s3: multerS3({
        s3: new aws.S3(),
        bucket: process.env.BUCKET_NAME || '',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: "public-read",
        key: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                console.log("Teste");
                if (err) cb(err);

                const fileName = `${hash.toString("hex")}-${file.originalname}`;

                cb(null, fileName);
            });
        },
    }),
};

const multerConfig = {
    dest: path.resolve(__dirname, "..", "..", "tmp", "uploads"),
    storage: storageTypes[process.env.STORAGE_TYPE === "local" ? "local" : "s3"],
    limits: {
        fileSize: MAX_SIZE_TWO_MEGABYTES,
    },
    fileFilter: (req: any, file: any, cb: any) => {
        const allowedMimes = [
            "image/jpeg",
            "image/jpg",
            "image/pjpeg",
            "image/png",
            "image/gif",
        ];

        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error("Invalid file type."));
        }
    },
};

export default multerConfig;