import axios from "axios";
import { requestWrapper, baseUrl } from "@/utils/requestUtils";

const handleGetEvents = async (req, res) => {
  await requestWrapper(req, res, async (req, res, user_id) => {
    const result = await axios.get(`${baseUrl}/events`);
    return {
      status: 200,
      body: JSON.stringify(result.data),
    };
  });
};

const handleAddEvent = async (req, res) => {
  await requestWrapper(req, res, async (req, res, user_id) => {
    const result = await axios.post(`${baseUrl}/events`, req.body);
    return {
      status: 200,
      body: JSON.stringify(result.data),
    };
  });
};

const handleUpdateEvent = async (req, res) => {
  await requestWrapper(req, res, async (req, res, user_id) => {
    const result = await axios.put(
      `${baseUrl}/events/${req.body.id}`,
      req.body
    );
    return {
      status: 200,
      body: JSON.stringify(result.data),
    };
  });
};

const handleDeleteEvent = async (req, res) => {
  await requestWrapper(req, res, async (req, res, user_id) => {
    const result = await axios.delete(`${baseUrl}/events/${req.body.id}`);
    return {
      status: 200,
      body: JSON.stringify(result.data),
    };
  });
};

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      await handleGetEvents(req, res);
      break;
    case "POST":
      await handleAddEvent(req, res);
      break;
    case "PUT":
      await handleUpdateEvent(req, res);
      break;
    case "DELETE":
      await handleDeleteEvent(req, res);
      break;
    default:
      res.status(405).end();
  }
};