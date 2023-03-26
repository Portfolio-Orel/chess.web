import axios from "axios";

const base_url = process.env.NEXT_PUBLIC_API_BASE_URL;

const requestWrapper = async (req, res, request) => {
  try {
    console.log('Starting requestWrapper');
    const user_id = req?.headers?.userid || req?.cookies?.userid;
    const token = req?.headers?.Authorization || req?.cookies?.token;
    axios.defaults.headers.common["Authorization"] = token;
    axios.defaults.headers.common["userid"] = user_id;
    
    const result = await request(req, res, user_id); // Pass req and res to the request function
    console.log('result', result);
    res.status(result.status || 500).json(result.data);
  } catch (error) {
    console.log('error', error);
    res.status(error.status || 500).json({ error: error.message });
  }
};

export default async function handler(req, res) {
  requestWrapper(req, res, async (req, res, user_id) => { // Pass req and res to request function
    try {
      console.log("url", `${base_url}/users/${user_id}`);
      const result = await axios.get(`${base_url}/users/${user_id}`);
      return {
        status: 200,
        body: JSON.stringify(result.data),
      };
    } catch (error) {
        console.log('failed to get user')
      return {
        status: 500,
        body: JSON.stringify({ error: error.message }),
      };
    }
  });
}
