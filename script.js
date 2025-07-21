const output = document.getElementById('output');

document.getElementById('read').addEventListener('click', async () => {
  try {
    const ndef = new NDEFReader();
    await ndef.scan();
    output.textContent += 'NFC Scan started\n';

    ndef.onreading = event => {
      const { serialNumber, message } = event;
      output.textContent += `> Serial: ${serialNumber}\n`;

      for (const record of message.records) {
        output.textContent += `> Record type: ${record.recordType}\n`;
        output.textContent += `> Media type: ${record.mediaType}\n`;
        output.textContent += `> Data: ${new TextDecoder().decode(record.data)}\n`;
      }
    };
  } catch (error) {
    output.textContent += `Error: ${error}\n`;
  }
});

document.getElementById('write').addEventListener('click', async () => {
  try {
    const ndef = new NDEFReader();
    await ndef.write("Hello from Web NFC!");
    output.textContent += "Message written to NFC tag.\n";
  } catch (error) {
    output.textContent += `Write failed: ${error}\n`;
  }
});

