import axios from "axios";

export const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const requestWrapper = async (req, res, request) => {
  try {
    console.log("Starting requestWrapper");
    const user_id = req?.headers?.userid || req?.cookies?.userid;
    const token = req?.headers?.Authorization || req?.cookies?.token;
    axios.defaults.headers.common["Authorization"] = token;
    axios.defaults.headers.common["userid"] = user_id;

    const result = await request(req, res, user_id); // Pass req and res to the request function
    res.status(result.status || 500).json(result?.body);
  } catch (error) {
    console.log("error", request);
    res.status(error.status || 500).json({ error: error.message });
  }
};
