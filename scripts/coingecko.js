// Fetch Top 50 Coinbase Listed Assets from CoinGecko and populate table
fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=50&page=1&exchange_ids=coinbase')
    .then(res => res.json())
    .then(data => {
        const tbody = document.querySelector('#assetTable tbody');
        data.forEach((coin, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
          <td class="text-end">${index + 1}</td>
          <td><img src="${coin.image}" alt="${coin.symbol}" class="crypto-icon" />${coin.symbol.toUpperCase()}</td>
          <td>${coin.name}</td>
          <td class="text-end">$${coin.current_price.toLocaleString()}</td>
          <td class="text-end">$${coin.market_cap.toLocaleString()}</td>
          <td class="text-end">$${coin.total_volume.toLocaleString()}</td>
          <td class="text-end ${coin.price_change_percentage_24h >= 0 ? 'text-success' : 'text-danger'}">
            ${coin.price_change_percentage_24h.toFixed(2)}%
          </td>
        `;
            tbody.appendChild(row);
        });
    })
    .catch(err => {
        console.error('Error fetching CoinGecko data:', err);
    });