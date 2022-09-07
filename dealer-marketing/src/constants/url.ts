const BASE_URL = process.env.NEXT_PUBLIC_ENDPOINTS;
const BLOGS_URL = `${BASE_URL}/api/blogs`;
const EXPERTS_URL = `${BASE_URL}/api/experts`;

const API_URL = process.env.NEXT_PUBLIC_BASE_URL;
const API_BLOGS = `${API_URL}/api/blogs`;
const API_EXPERTS = `${API_URL}/api/experts`;

export { BLOGS_URL, EXPERTS_URL, API_BLOGS, API_EXPERTS };
