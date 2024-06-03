//pinata and we have to use the pinata api key and secret key
const sendFileToIpfs = async (data) => {
   console.log("HI")
   const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
    const formData = new FormData();
    formData.append('file', data);
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'pinata_api_key': process.env.REACT_APP_PINATA_API_KEY,
            'pinata_secret_api_key': process.env.REACT_APP_PINATA_SECRET_API_KEY
        },
        body: formData
    });
    // console fetch hash of the file
    const response = await res.json();
    console.log(response.IpfsHash)
    return response.IpfsHash
}

const getFileFromIpfs = async (hash) => {
    const url = `https://gateway.pinata.cloud/ipfs/${hash}`;
    const res = await fetch(url);
    return res.json();
}

export { sendFileToIpfs, getFileFromIpfs };