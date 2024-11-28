// getBase64: Get Base64 encode file-data from Input Form to string
const getBase64 = (file: Blob) => {
  return new Promise<string>((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file)
    fileReader.onload = () => {
      resolve(fileReader.result as string);
    }
    fileReader.onerror = (error) => {
      reject(error);
    }
  })
}

export default getBase64;