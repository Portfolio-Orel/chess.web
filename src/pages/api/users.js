import axios from "axios";
import { requestWrapper, baseUrl } from "@/utils/requestUtils";

export default async function handler(req, res) {
  await requestWrapper(req, res, async (req, res, user_id) => {
    const result = await axios.get(`${baseUrl}/users/${user_id}`);
    return {
      status: 200,
      body: JSON.stringify(result.data),
    };
  });
}
