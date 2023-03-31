import axios from "axios";
import { requestWrapper, baseUrl } from "@/utils/requestUtils";

const handleGetIntervals = async (req, res) => {
  await requestWrapper(req, res, async (req, res, user_id) => {
    const result = await axios.get(`${baseUrl}/intervals`);
    return {
      status: 200,
      body: JSON.stringify(result.data),
    };
  });
};

const handleAddInterval = async (req, res) => {
  await requestWrapper(req, res, async (req, res, user_id) => {
    const result = await axios.post(`${baseUrl}/intervals`, req.body);
    return {
      status: 200,
      body: JSON.stringify(result.data),
    };
  });
};

const handleUpdateInterval = async (req, res) => {
  await requestWrapper(req, res, async (req, res, user_id) => {
    const result = await axios.put(`${baseUrl}/intervals/${req.body.uuid}`, req.body);
    return {
      status: 200,
      body: JSON.stringify(result.data),
    };
  });
};

const handleDeleteInterval = async (req, res) => {
  await requestWrapper(req, res, async (req, res, user_id) => {
    const result = await axios.delete(`${baseUrl}/intervals/${req.body.uuid}`);
    return {
      status: 200,
      body: JSON.stringify(result.data),
    };
  });
};

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      await handleGetIntervals(req, res);
      break;
    case "POST":
      await handleAddInterval(req, res);
      break;
    case "PUT":
      await handleUpdateInterval(req, res);
      break;
    case "DELETE":
      await handleDeleteInterval(req, res);
      break;
  }
};
