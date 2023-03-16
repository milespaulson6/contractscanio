import http from "../http-common";

export const uploadFile = (file, onUploadProgress) => {
  let formData = new FormData();

  formData.append("file", file);

  return http.post("/api/contracts", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

export const getFiles = () => {
  return http.get("/files");
};