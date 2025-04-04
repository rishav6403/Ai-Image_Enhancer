import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;



const MAXIMUM_RETRIES = 20;

export const enhancedImageAPI = async (file) => {
  try {
    const taskId = await uploadImage(file);

    const enhnacedImageData = await pollForEnhancedData(taskId);
    return enhnacedImageData;
  } catch (error) {
    console.log("Error Enhancing image", error.message);
  }
};

const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image_file", file);
  const { data } = await axios.post(
    `${BASE_URL}/api/tasks/visual/scale`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-API-KEY":API_KEY,
      },
    }
  );
  if (!data?.data?.task_id) {
    throw new Error("Failed to upload image. please try again later");
  }
  return data.data.task_id;
};

const fetchEnhancedImage = async (taskId) => {
  const { data } = await axios.get(
    `${BASE_URL}/api/tasks/visual/scale/${taskId}`,
    {
      headers: {
        "X-API-KEY": API_KEY,
      },
    }
  );
  if (!data?.data) {
    throw new Error("Failed to upload image. please try again later");
  }
  return data.data;
};

const pollForEnhancedData = async (taskId, retries = 1) => {
  const result = await fetchEnhancedImage(taskId);

  if (result.state === 4) {
    console.log(`Processing...${retries}/${MAXIMUM_RETRIES}`);

    if (retries >= 20) {
      throw new Error("Max retries reached, please try later.");
    }
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return pollForEnhancedData(taskId, retries + 1);
  }
  return result;
};
