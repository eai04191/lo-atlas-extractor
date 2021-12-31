![](https://user-images.githubusercontent.com/3516343/147811556-a58cbd1c-d2a4-4991-a2dc-5c9b4fcaad20.png)

<h1 align="center">lo-atlas-extractor</h1>

<p align="center">
A simple script to extract an icon from an atlas extracted from Last Origin data using <a href="https://github.com/Perfare/AssetStudio">AssetStudio</a>.
</p>

## Usage

How to save Last Origin data to PC is not explained here. You can find out using the Internet.

1. Decide from which atlas you want to extract the icon. After loading all the files in AssetStudio and filtering with `atlas/`, you can see what is contained in which file by looking at Sprite.  
   This time I will extract it from the atlas of this sticker.
   ![image](https://user-images.githubusercontent.com/3516343/147812893-a9c10293-21d0-4f10-aca1-52dde974de29.png)
2. Open the context menu and select **Show original file** to identify the file that contains the atlas.  
   ![image](https://user-images.githubusercontent.com/3516343/147813008-9e0f8857-cdcd-451f-8c73-9f38a04835e0.png)
3. This.  
   ![image](https://user-images.githubusercontent.com/3516343/147813083-57111ef3-dbb8-4739-999e-91778c07a241.png)
4. Reopen it in AssetStudio and load only this file.  
   Then, if you filter by file name, you can see Texture2D and MonoBehaviour. All you need is these two.  
   ![image](https://user-images.githubusercontent.com/3516343/147813216-511eaa11-9a74-4792-9a06-baf9682d26bc.png)
5. Select only Texture2D and MonoBehaviour from Filter Type. This is because a file with the same name will be created if you leave Sprite selected.  
   ![image](https://user-images.githubusercontent.com/3516343/147812015-c6383b75-6a52-461d-b4e6-1991e61d1432.png)
6. Before exporting, open **Options -> Export options** and set **Group exported assets by** to **do not group**.  
   ![image](https://user-images.githubusercontent.com/3516343/147813468-7451c505-87a3-4c00-a524-e88c337f6d87.png)
7. Now, make sure that only Texture2D and MonoBehaviour are filtered, then run **Export -> Filtered assets**.
   ![image](https://user-images.githubusercontent.com/3516343/147813528-998eb2bc-61b9-486d-9cab-3774187f263a.png)
8. Since json and png are output, make the file name of json the same as png.  
   ![image](https://user-images.githubusercontent.com/3516343/147813612-58b51948-ecf5-4918-8434-5010f62515be.png)  
   ![image](https://user-images.githubusercontent.com/3516343/147813665-3f0292dd-80dc-467a-b7e8-6a3d84044fd7.png)
9. Finally, the script comes into play!  
   Put json and png in `data/`. You can have multiple atlases.  
   ![image](https://user-images.githubusercontent.com/3516343/147815020-8baf4637-4cf1-43e0-a533-7c09813d564f.png)
10. I will omit the explanation of the setup of node.js and yarn.  
    If you are using the script for the first time, install the dependency with `yarn`.  
11. Run it with `yarn start` when you are ready.  
    ![image](https://user-images.githubusercontent.com/3516343/147815058-08434590-bcc3-4b8a-9519-fc1b79f0f18d.png)
12. If there is no problem, it should be output to the out folder. This is the end of the long Usage journey.  
    ![image](https://user-images.githubusercontent.com/3516343/147815205-32686ab3-5dcf-45fe-b5d7-97451d48af37.png)

![UI_Icon_PROP_MMSticker](https://user-images.githubusercontent.com/3516343/147815260-7fa962bf-1dac-4f5a-9068-cd6a8eaeefc3.png)


## License

MIT License
