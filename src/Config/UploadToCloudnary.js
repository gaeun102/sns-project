export const uploadToCloudnary = async (image) => {
    if (!image) {
        console.error("No image provided for upload");
        return null;
    }

    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "instagram");
    data.append("cloud_name", "dgabh38g3");
    data.append("api_key", "428115992347932");

    const res = await fetch("https://api.cloudinary.com/v1_1/dgabh38g3/image/upload", {
        method: "post",
        headers: {}, // 빈 객체로 설정하여 자동으로 Content-Type 헤더가 설정되도록 합니다.
        body: data,
    });
    
    if (!res.ok) {
        console.error("Failed to upload image to Cloudinary");
        return null;
    }

    const fileData = await res.json();

    if (!fileData || !fileData.url) {
        console.error("Invalid response from Cloudinary server");
        return null;
    }

    console.log("fileData", fileData);
    return fileData.url.toString();
}
