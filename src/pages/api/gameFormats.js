import axios from "axios";
import { requestWrapper, baseUrl } from "@/utils/requestUtils";

const handleGetGameFormats = async (req, res) => {
  await requestWrapper(req, res, async (req, res, user_id) => {
    const result = await axios.get(`${baseUrl}/gameFormats`);
    return {
      status: 200,
      body: JSON.stringify(result.data),
    };
  });
};

const handleAddGameFormat = async (req, res) => {
  await requestWrapper(req, res, async (req, res, user_id) => {
    const result = await axios.post(`${baseUrl}/gameFormats`, req.body);
    return {
      status: 200,
      body: JSON.stringify(result.data),
    };
  });
};

const handleUpdateGameFormat = async (req, res) => {
  await requestWrapper(req, res, async (req, res, user_id) => {
    const result = await axios.put(
      `${baseUrl}/gameFormats/${req.body.id}`,
      req.body
    );
    return {
      status: 200,
      body: JSON.stringify(result.data),
    };
  });
};

const handleDeleteGameFormat = async (req, res) => {
  await requestWrapper(req, res, async (req, res, user_id) => {
    const result = await axios.delete(`${baseUrl}/gameFormats/${req.body.id}`);
    return {
      status: 200,
      body: JSON.stringify(result.data),
    };
  });
};

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      await handleGetGameFormats(req, res);
      break;
    case "POST":
      await handleAddGameFormat(req, res);
      break;
    case "PUT":
      await handleUpdateGameFormat(req, res);
      break;
    case "DELETE":
      await handleDeleteGameFormat(req, res);
      break;
  }
};
