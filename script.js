// Auto-load news every 4 hours
async function loadNews() {
    const response = await fetch('news.json');
    const data = await response.json();
    
    let html = '';
    data.forEach(item => {
        html += `
        <div class="card news-card">
            <img src="${item.image}" class="card-img-top">
            <div class="card-body">
                <h5>${item.title}</h5>
                <p>${item.description}</p>
                <a href="${item.link}" target="_blank" class="btn btn-danger">पूरा पढ़ें</a>
                <small>${item.pubDate}</small>
            </div>
        </div>
        `;
    });
    
    document.getElementById('news-container').innerHTML = html;
}

// First load
loadNews();
// Auto-update every 4 hours
setInterval(loadNews, 4 * 60 * 60 * 1000);
