## Hashnode Cloudflare Integration

This project integrates with the Hashnode API to fetch recent posts and display them on a Cloudflare Worker subpath.

**Requirements:**

* Cloudflare account
* Basic knowledge of Cloudflare Workers
* Node.js (v14 or later) with npm or yarn

**Getting Started:**

1. Clone this repository.
2. Install dependencies: `npm install` or `yarn install`.
3. Update `package.json` with your desired subpath name (e.g., `/hashnode`).
4. Deploy to Cloudflare Workers using the Wrangler CLI: `wrangler dev` or `wrangler publish`.

**How it Works:**

1. When a visitor accesses your configured subpath, the Cloudflare Worker triggers.
2. The `handleRequest` function fetches recent posts from the Hashnode API using GraphQL.
3. The fetched data is passed to the `generateHtml` function to create HTML content.
4. The generated HTML is returned as the response, displaying the blog posts on the subpath.

**Customization:**

* Modify the `api.js` and `templating.js` files to adjust data fetching and templating logic.
* Add or modify helper functions as needed.

