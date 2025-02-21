async function button() {
    let [fileHandle] = await window.showOpenFilePicker();
    let fileData = await fileHandle.getFile();

    if (fileData.size !== 235920) {
        window.alert("Please insert a decrypted PS4 GameData file, it should be exactly 235920 bytes.");
        button();
        return;
    }

    else {
        let aB = await fileData.arrayBuffer();
        let originalData = new Uint8Array(aB);
        
        const offset1 = 0x38950;
        const offset2 = 0x397e0;
        const offset3 = 0x3984c;

        let newSaveSize = aB.byteLength + 32 + 12 + 8 + 8;
        let newData = new Uint8Array(newSaveSize);

        let pos = 0;
        newData.set(new Uint8Array(12).fill(0x00), pos);
        pos += 12;

        newData.set(originalData.subarray(0, offset1), pos);
        pos += offset1;

        newData.set(new Uint8Array(32).fill(0x00), pos);
        pos += 32;

        newData.set(originalData.subarray(offset1, offset2), pos);
        pos += (offset2 - offset1);

        newData.set(new Uint8Array(8).fill(0x00), pos);
        pos += 8;

        newData.set(originalData.subarray(offset2, offset3), pos);
        pos += (offset3 - offset2);

        newData.set(new Uint8Array(8).fill(0x00), pos);
        pos += 8;

        newData.set(originalData.subarray(offset3), pos);

        let blob = new Blob([newData], { type: "application/octet-stream" });

        let link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "SlotData_0.dat";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

}