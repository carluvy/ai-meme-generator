export async function uploadFile(file: File) {
    const formData = new FormData();
    formData.append("file", file)


    const response = await fetch("https://esteele-funny-meme-generator.hf.space/api/v1/upload", {
        method: "POST",
        body: formData,
    });

    if (response.ok) {
        console.log(response);
        print();
    }

    if (!response.ok) {
        console.log(response);
        print();
        throw new Error("Upload failed");
    }

    return await response.json();
}