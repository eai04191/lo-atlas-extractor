![](https://user-images.githubusercontent.com/3516343/147811556-a58cbd1c-d2a4-4991-a2dc-5c9b4fcaad20.png)

<h1 align="center">lo-atlas-extractor</h1>

<p align="center">
A simple script to extract an icon from an atlas extracted from Last Origin data using <a href="https://github.com/Perfare/AssetStudio">AssetStudio</a>.
</p>

## Usage

How to save Last Origin data to PC is not explained here. You can find out using the Internet.

1. Determine the atlas from which you want to extract the icon. You can see what is in which file by loading the `UnityCache/Shared/atlas` folder into AssetStudio and looking at Texture2D.  
    This time, we will extract it from the atlas of this item icons.
   ![image](https://user-images.githubusercontent.com/3516343/147832163-7b14c818-8088-47e1-852d-e893508eb523.png)
2. Then filter by filename + `.prefab` to see Texture2D and MonoBehaviour. All you need is these two.  
    Make sure Sprite is not included. If Sprite is included, a file with the same name will be output, so you will not know which is Texture2D and which is Sprite.
   ![image](https://user-images.githubusercontent.com/3516343/147832309-db47253e-73b1-4fe7-b54a-7997b2416586.png)
3. Before exporting, open **Options -> Export options** and set **Group exported assets by** to **do not group**.  
   ![image](https://user-images.githubusercontent.com/3516343/147813468-7451c505-87a3-4c00-a524-e88c337f6d87.png)
4. Now, make sure that only Texture2D and MonoBehaviour are filtered, then run **Export -> Filtered assets**.
   ![image](https://user-images.githubusercontent.com/3516343/147832131-d5d2d957-1d50-4711-a7ca-0307e3b2a83e.png)
5. Since json and png are output, make the file name of json the same as png.  
   ![image](https://user-images.githubusercontent.com/3516343/147832369-a9bc36f3-fb79-4ac5-afeb-a49abb502fc5.png)  
   ![image](https://user-images.githubusercontent.com/3516343/147832370-7dd97863-6111-49d9-bfa3-d7e6330faf69.png)
6. Finally, the script comes into play!  
   Put json and png in `data/`. You can have multiple atlases.  
   ![image](https://user-images.githubusercontent.com/3516343/147832472-2b71d48a-adae-4e00-8fab-4ec76084ae8e.png)
7. I will omit the explanation of the setup of node.js and yarn.  
   If you are using the script for the first time, install the dependency with `yarn`.
8. Run it with `yarn start` when you are ready.  
   It may take some time, so please wait until **Done** is displayed.
   ![image](https://user-images.githubusercontent.com/3516343/147832447-5f9ce5b3-d58b-4436-81fd-1f7b0579ca00.png)
9. If there is no problem, it should be output to the out folder. This is the end of the long Usage journey.  
   ![image](https://user-images.githubusercontent.com/3516343/147832505-63697c70-e4f5-43bf-8a2d-6f9bb1da06f1.png)

![UI_Icon_PROP_MMSticker](https://user-images.githubusercontent.com/3516343/147815260-7fa962bf-1dac-4f5a-9068-cd6a8eaeefc3.png)

## License

MIT License
