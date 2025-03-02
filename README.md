# NieR:Automata PS4 to PC Save File Converter

## Use the converter [here](https://luisschuster.dev/nier-automata-ps4-to-pc-save-converter/)

## How to convert your NieR:Automata PS4 save game to a PC compatible save game:

1. Export a decrypted save file with [Apollo Save Tool](https://github.com/bucanero/apollo-ps4) from your PS4. There's plenty of tutorials on how to do this online. Make sure you export the one called GameData and not the one called SystemData.

2. Click on "Upload Save File" and pick your GameData file. The converter will automatically convert your save file to be compatible with the PC version of the game.

3. Download [F-SERVO](https://github.com/ArthurHeitmann/F-SERVO) and import one of your old save files (located at \Documents \My Games\NieR_Automata\). Copy your Steam ID from that file, then import the converted file, paste in the Steam ID and save it.

4. Now you can simply put the converted file in your save directory and launch the game.

## How the converter works:

All this really does is insert a few null bytes at specific offsets, specifically 12 bytes at the start of the file, 32 bytes @ 0x38950, 8 bytes @ 0x397e0 and 8 bytes @ 0x3984c. You can do this yourself in a hex editor, if you know how.

## Credits:

- [Arthur Heitmann](https://github.com/ArthurHeitmann/) for helping figure out the offsets needed for the file to work on PC.
- [RUGMJ](https://github.com/rugmj) for helping with the JavaScript code.
