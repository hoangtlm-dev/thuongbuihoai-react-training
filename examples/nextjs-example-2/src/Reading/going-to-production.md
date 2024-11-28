## Going to Production

### Caching

- Caching improves response times and reduces the number of requests to external services

### Reducing JavaScript Size

- To reduce the amount of JavaScript sent to the browser

### Logging

- Since Next.js runs on both the client and server, there are multiple forms of logging supported:

  - console.log in the browser
  - stdout on the server

### Error Handling

- You can control the experience for your users with the `500 page`

### Loading Performance

- To improve loading performance, you first need to determine what to measure and how to measure it
- [Core Web Vitals](https://vercel.com/blog/core-web-vitals) is a good industry standard that is measured using your own web browser
