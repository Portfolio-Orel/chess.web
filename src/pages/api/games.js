import axios from "axios";
import { requestWrapper, baseUrl } from "@/utils/requestUtils";

const handleGetGames = async (req, res) => {
  await requestWrapper(req, res, async (req, res, user_id) => {
    const result = await axios.get(`${baseUrl}/games`);
    return {
      status: 200,
      body: JSON.stringify(result.data),
    };
  });
};

const handleAddGame = async (req, res) => {
  await requestWrapper(req, res, async (req, res, user_id) => {
    const result = await axios.post(`${baseUrl}/games`, req.body);
    return {
      status: 200,
      body: JSON.stringify(result.data),
    };
  });
};

const handleUpdateGame = async (req, res) => {
  await requestWrapper(req, res, async (req, res, user_id) => {
    const result = await axios.put(`${baseUrl}/games/${req.body.id}`, req.body);
    return {
      status: 200,
      body: JSON.stringify(result.data),
    };
  });
};

const handleDeleteGame = async (req, res) => {
  await requestWrapper(req, res, async (req, res, user_id) => {
    const result = await axios.delete(`${baseUrl}/games/${req.body.id}`);
    return {
      status: 200,
      body: JSON.stringify(result.data),
    };
  });
};

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      await handleGetGames(req, res);
      break;
    case "POST":
      await handleAddGame(req, res);
      break;
    case "PUT":
      await handleUpdateGame(req, res);
      break;
    case "DELETE":
      await handleDeleteGame(req, res);
      break;
  }
};
