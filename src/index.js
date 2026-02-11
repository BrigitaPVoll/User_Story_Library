import { onRequestPost } from '../api/createStory.js';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Route POST requests to /api/createStory
    if (url.pathname === '/api/createStory' && request.method === 'POST') {
      return await onRequestPost({ request, env });
    }
    
    // Return 404 for other routes
    return new Response(JSON.stringify({ error: 'Not Found' }), { 
      status: 404,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

