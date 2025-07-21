const output = document.getElementById('output');
const writeInput = document.getElementById('writeInput');

// Utility to append logs
function log(msg) {
  output.textContent += `${msg}\n`;
}

document.getElementById('read').addEventListener('click', async () => {
  if (!('NDEFReader' in window)) {
    log('❌ Web NFC is not supported in this browser.');
    return;
  }

  try {
    const ndef = new NDEFReader();
    await ndef.scan();
    log('✅ NFC scan started. Tap a tag to read...');

    ndef.onreading = event => {
      const { serialNumber, message } = event;
      log(`\n📶 Tag read (Serial: ${serialNumber})`);

      for (const record of message.records) {
        log(`📄 Record type: ${record.recordType}`);
        log(`🔤 Media type: ${record.mediaType || 'N/A'}`);

        const textDecoder = new TextDecoder(record.encoding || 'utf-8');
        const decoded = textDecoder.decode(record.data);
        log(`📦 Data: ${decoded}`);
      }
    };

    ndef.onreadingerror = () => {
      log('⚠️ Error reading NFC tag.');
    };
  } catch (err) {
    log(`❌ Read failed: ${err}`);
  }
});

document.getElementById('write').addEventListener('click', async () => {
  const messageToWrite = writeInput.value;

  if (!('NDEFReader' in window)) {
    log('❌ Web NFC is not supported in this browser.');
    return;
  }

  try {
    const ndef = new NDEFReader();
    await ndef.write({
      records: [{ recordType: "text", data: messageToWrite }]
    });
    log(`✅ Message written to NFC tag: "${messageToWrite}"`);
  } catch (err) {
    log(`❌ Write failed: ${err}`);
  }
});
