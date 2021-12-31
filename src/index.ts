import fs from "node:fs";
import sharp from "sharp";
import { UIAtlas } from "./type";

const dataPath = "data";
const atlases = fs
    .readdirSync(dataPath)
    .filter((filename) => filename.endsWith(".png"));
const outBasePath = "out";

atlases.forEach((atlas) => {
    const atlasName = atlas.replace(/\.png$/, "");
    console.log(`Processing ${atlasName}...`);

    const outPath = `${outBasePath}/${atlasName}`;
    if (!fs.existsSync(outPath)) {
        fs.mkdirSync(outPath, { recursive: true });
        console.log("Output directory created", outPath);
    }

    const imgPath = `${dataPath}/${atlasName}.png`;
    const jsonPath = `${dataPath}/${atlasName}.json`;

    if (!fs.existsSync(jsonPath)) throw new Error("json not found");

    const json = JSON.parse(fs.readFileSync(jsonPath, "utf-8")) as UIAtlas;

    json.mSprites.forEach((sprite) => {
        // console.log("sprite", sprite);
        sharp(imgPath)
            .extract({
                top: sprite.y,
                left: sprite.x,
                width: sprite.width,
                height: sprite.height,
            })
            .toFile(`${outPath}/${sprite.name}.png`);
    });
});
