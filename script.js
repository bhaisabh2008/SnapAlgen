function generateImage() {
    let prompt = document.getElementById("image-prompt").value;
    fetch(`https://api.openai.com/v1/images/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: prompt })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("generated-image").src = data.url;
    })
    .catch(error => console.error(error));
}

function generateVideo() {
    let prompt = document.getElementById("video-prompt").value;
    fetch(`https://api.videoai.com/v1/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: prompt })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("generated-video").src = data.video_url;
    })
    .catch(error => console.error(error));
}