import { onRequestPost } from '../api/createStory.js';

const ASSET_NAMESPACE = undefined; // Cloudflare KV namespace for static assets

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // Handle API routes
    if (pathname === '/api/createStory' && request.method === 'POST') {
      try {
        const context = { request, env };
        return await onRequestPost(context);
      } catch (error) {
        console.error('API error:', error);
        return new Response(JSON.stringify({ 
          error: 'Server error',
          message: error.message 
        }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }

    // For non-API routes, return 404 (assuming static files are served by Cloudflare Pages)
    if (pathname === '/api/createStory' && request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Default 404
    return new Response(JSON.stringify({ error: 'Not Found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

