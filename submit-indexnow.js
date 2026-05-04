const url = 'https://api.indexnow.org/indexnow';

const data = {
  host: "www.zaprill.com",
  key: "d666ce7a6df54f08b8a7ebbbaf8d5955",
  keyLocation: "https://www.zaprill.com/d666ce7a6df54f08b8a7ebbbaf8d5955.txt",
  urlList: [
    "https://www.zaprill.com/",
    "https://www.zaprill.com/blog",
    // Add more URLs here that you want to submit
  ]
};

console.log('Submitting URLs to IndexNow...');

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  },
  body: JSON.stringify(data)
})
.then(async (response) => {
  const status = response.status;
  if (status === 200 || status === 202) {
    console.log(`✅ Success: URL submitted successfully (${status} OK)`);
  } else if (status === 400) {
    console.error('❌ Error 400: Bad request - Invalid format');
  } else if (status === 403) {
    console.error('❌ Error 403: Forbidden - Key not valid (e.g., key not found on server)');
    console.log('Ensure you have deployed the website so the key file is accessible at', data.keyLocation);
  } else if (status === 422) {
    console.error('❌ Error 422: Unprocessable Entity - URLs don’t belong to the host or key mismatch');
  } else if (status === 429) {
    console.error('❌ Error 429: Too Many Requests (potential Spam)');
  } else {
    console.error(`❌ Unknown status code: ${status}`);
  }
})
.catch((error) => {
  console.error('Error submitting to IndexNow:', error);
});
