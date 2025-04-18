export default {
  async fetch(request, env) {
    const country = request.cf.country;
    const url = request.url;

    // Redirect China (CN) to A2, others to Webflow
    if (country === 'CN') {
      return Response.redirect('http://47.243.166.194', 302);
    } else {
      return Response.redirect('https://seemake.webflow.io', 302);
    }
  }
};
